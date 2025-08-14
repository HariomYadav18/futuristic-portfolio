// src/data/projects.js
export const projects = [
  {
    title: 'FoodHome',
    description:
      'A full-stack food delivery platform with Auth0 auth and Stripe payments.',
    image:
      'https://img.freepik.com/free-vector/food-delivery-app-landing-page_52683-25452.jpg?w=740',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Auth0', 'Stripe'],
    category: 'reactjs',
    links: {
      demo: '#', // put your live link
      repo: '#', // put your repo link
    },
  },
  {
    title: 'Catch The Fruits Game',
    description:
      'HTML5 Canvas game where you catch falling fruits — fun mechanics and juicy animations.',
    image:
      'https://img.freepik.com/free-vector/fruit-catch-game-concept_1284-18445.jpg?w=740',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Canvas'],
    category: 'html-css-js',
    links: { demo: '#', repo: '#' },
  },
  {
    title: 'Incident Reporting',
    description:
      'Full-stack incident management app with secure auth and reporting workflows.',
    image:
      'https://img.freepik.com/free-vector/incident-reporting-system-concept_1284-18446.jpg?w=740',
    technologies: ['React', 'Spring Boot', 'MySQL'],
    category: 'reactjs',
    links: { demo: '#', repo: '#' },
  },
  // 👉 Move the rest of your existing items from Projects.jsx into this array.
]

// Handy helpers (optional)
export const allCategories = ['all', ...new Set(projects.map(p => p.category))]
