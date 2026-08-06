// --- CENTRAL PORTFOLIO DATA CONFIGURATION ---

export const portfolioData = {
  personalInfo: {
    name: "Pratik Parmar",
    title: "Full-Stack Developer",
    subtitle: "Building high-performance, visually stunning web applications with modern tech stacks.",
    bio: "I am a passionate software developer specializing in building scalable web applications. With expertise in the MERN stack (MongoDB, Express, React, Node.js) and modern UI/UX design, I turn complex requirements into clean, user-friendly digital experiences.",
    email: "pratik@example.com", // Replace with your actual email
    github: "https://github.com", // Replace with your actual GitHub Profile
    linkedin: "https://linkedin.com", // Replace with your actual LinkedIn
    resumeUrl: "#", // Replace with your CV download link or file path
  },
  stats: [
    { value: "2+", label: "Years Experience" },
    { value: "15+", label: "Projects Completed" },
    { value: "10+", label: "Tech Stacks Mastered" },
  ],
  skills: [
    {
      category: "Frontend Development",
      items: [
        { name: "React.js", level: 90 },
        { name: "JavaScript (ES6+)", level: 88 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "Vanilla CSS & Responsive Design", level: 92 },
        { name: "Redux Toolkit", level: 75 }
      ]
    },
    {
      category: "Backend & Databases",
      items: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 87 },
        { name: "MongoDB & Mongoose", level: 80 },
        { name: "REST APIs", level: 90 },
        { name: "SQL & Relational Databases", level: 70 }
      ]
    },
    {
      category: "Tools & Methodologies",
      items: [
        { name: "Git & GitHub", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 88 },
        { name: "Agile/Scrum Basics", level: 75 }
      ]
    }
  ],
  projects: [
    {
      id: 1,
      title: "DevFlow - Developer Q&A Platform",
      description: "A full-stack web application designed for developer collaboration. Users can ask questions, upvote answers, save posts, and search topics. Features rich text editing and tag-based filtering.",
      tags: ["MongoDB", "Express", "React", "Node.js", "REST API"],
      liveLink: "#", // Link to live site or demo
      githubLink: "#", // Link to github repo
      imageText: "DF" // Placeholder representation
    },
    {
      id: 2,
      title: "CryptoTracker - Financial Dashboard",
      description: "A premium dashboard integrating third-party cryptocurrency APIs to present real-time pricing data, visual interactive charts, and portfolio tracking statistics. Employs clean glassmorphism styling.",
      tags: ["React.js", "Chart.js", "Tailored CSS", "CoinGecko API"],
      liveLink: "#",
      githubLink: "#",
      imageText: "CT"
    },
    {
      id: 3,
      title: "TaskSphere - Kanban Board",
      description: "An intuitive project management tool featuring drag-and-drop workspace boards, task prioritization, subtasks checklist, user authorization, and status filters for seamless productivity tracking.",
      tags: ["React.js", "CSS Variables", "Context API", "Local Storage"],
      liveLink: "#",
      githubLink: "#",
      imageText: "TS"
    }
  ],
  aboutMe: {
    paragraph1: "Hello! I'm Pratik Parmar, a software developer based in India. My journey in tech started with a curiosity for how things work on the web, which blossomed into a full-time passion for building responsive and efficient digital products.",
    paragraph2: "I love coding from scratch and watching lines of text transform into beautiful, functioning user interfaces. I place high importance on clean architecture, performance optimization, and accessibility. Whether it's crafting interactive interfaces on the front end or designing solid RESTful APIs on the back end, I enjoy working across the entire development stack.",
    paragraph3: "When I am not coding, you can find me exploring new technologies, contributing to open-source, or refining my development skills. I am always open to new learning opportunities and exciting projects."
  }
};
