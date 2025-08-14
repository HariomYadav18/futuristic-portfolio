import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Project, Skill, Education, ContactFormData } from '../types';

// Create HTTP link
const httpLink = createHttpLink({
  uri: import.meta.env.VITE_API_URL || 'http://localhost:4000/graphql',
});

// Auth link for adding token to requests
const authLink = setContext((_, { headers }) => {
  // Get token from local storage
  const token = localStorage.getItem('token');
  
  // Return headers with token if it exists
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Create Apollo Client
export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// GraphQL Queries
const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      id
      title
      description
      technologies
      imageUrl
      githubUrl
      liveUrl
      featured
      category
      date
    }
  }
`;

const GET_FEATURED_PROJECTS = gql`
  query GetFeaturedProjects {
    featuredProjects {
      id
      title
      description
      technologies
      imageUrl
      githubUrl
      liveUrl
      category
      date
    }
  }
`;

const GET_SKILLS = gql`
  query GetSkills {
    skills {
      id
      name
      icon
      level
      category
    }
  }
`;

const GET_EDUCATION = gql`
  query GetEducation {
    educations {
      id
      institution
      degree
      fieldOfStudy
      startDate
      endDate
      description
      location
    }
  }
`;

const GET_ABOUT = gql`
  query GetAbout {
    about {
      title
      content
      imageUrl
    }
  }
`;

// GraphQL Mutations
const SEND_CONTACT_MESSAGE = gql`
  mutation SendContactMessage($input: ContactMessageInput!) {
    createContactMessage(input: $input) {
      id
      name
      email
      subject
      message
      createdAt
    }
  }
`;

const LOGIN = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      token
      user {
        id
        name
        email
        role
      }
    }
  }
`;

const REGISTER = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      token
      user {
        id
        name
        email
        role
      }
    }
  }
`;

// API Service
export const apiService = {
  // Projects
  getProjects: async (): Promise<Project[]> => {
    const { data } = await client.query({ query: GET_PROJECTS });
    return data.projects;
  },
  
  getFeaturedProjects: async (): Promise<Project[]> => {
    const { data } = await client.query({ query: GET_FEATURED_PROJECTS });
    return data.featuredProjects;
  },
  
  // Skills
  getSkills: async (): Promise<Skill[]> => {
    const { data } = await client.query({ query: GET_SKILLS });
    return data.skills;
  },
  
  // Education
  getEducation: async (): Promise<Education[]> => {
    const { data } = await client.query({ query: GET_EDUCATION });
    return data.educations;
  },
  
  // About
  getAbout: async () => {
    const { data } = await client.query({ query: GET_ABOUT });
    return data.about;
  },
  
  // Contact
  sendContactMessage: async (contactData: ContactFormData) => {
    const { data } = await client.mutate({
      mutation: SEND_CONTACT_MESSAGE,
      variables: { input: contactData },
    });
    return data.createContactMessage;
  },
  
  // Auth
  login: async (email: string, password: string) => {
    const { data } = await client.mutate({
      mutation: LOGIN,
      variables: { input: { email, password } },
    });
    
    // Save token to local storage
    localStorage.setItem('token', data.login.token);
    localStorage.setItem('user', JSON.stringify(data.login.user));
    
    return data.login;
  },
  
  register: async (name: string, email: string, password: string) => {
    const { data } = await client.mutate({
      mutation: REGISTER,
      variables: { input: { name, email, password } },
    });
    
    // Save token to local storage
    localStorage.setItem('token', data.register.token);
    localStorage.setItem('user', JSON.stringify(data.register.user));
    
    return data.register;
  },
  
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    // Reset Apollo cache
    client.resetStore();
  },
  
  isAuthenticated: (): boolean => {
    return !!localStorage.getItem('token');
  },
  
  getCurrentUser: () => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },
};

export default apiService;