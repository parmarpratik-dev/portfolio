// --- CENTRAL PORTFOLIO DATA CONFIGURATION ---

export const portfolioData = {
  personalInfo: {
    name: "Pratik Parmar",
    title: "Java & Backend Developer",
    subtitle: "Transitioning 2.5+ years of professional development experience into robust backend engineering.",
    bio: "I am an aspiring Java Developer with a strong foundation in e-commerce and Shopify customization. Currently expanding my core expertise to Java, Spring Boot, PostgreSQL, and React to build scale-ready backend architectures and seamless end-to-end applications.",
    email: "parmarpratik1842000@gmail.com",
    phone: "+91 8780985991",
    location: "Surat, Gujarat, India",
    github: "https://github.com", // Replace with your actual GitHub link when ready
    linkedin: "https://linkedin.com", // Replace with your actual LinkedIn link when ready
    resumeUrl: "#", // Link to your CV file (e.g., /resume.pdf in public folder)
    dob: "18/04/2000"
  },
  stats: [
    { value: "2.5+", label: "Years Professional Exp" },
    { value: "12+", label: "Live E-commerce Projects" },
    { value: "3+", label: "Core Backend Technologies" },
  ],
  skills: [
    {
      category: "Backend & Databases (Current Focus)",
      items: [
        { name: "Java SE/EE", level: 80 },
        { name: "Spring Boot & REST APIs", level: 75 },
        { name: "PostgreSQL", level: 78 },
        { name: "PHP (Live Project experience)", level: 70 }
      ]
    },
    {
      category: "Frontend & Custom Scripting",
      items: [
        { name: "JavaScript (ES6+)", level: 85 },
        { name: "React.js", level: 60 }, // Mentioning (Learning) in bio/resume
        { name: "Liquid (Shopify Engine)", level: 90 },
        { name: "HTML5 & CSS3", level: 92 }
      ]
    },
    {
      category: "E-Commerce & SEO Tools",
      items: [
        { name: "Shopify CLI & Theme Kit", level: 90 },
        { name: "Google Tag Manager & GTM", level: 85 },
        { name: "SEMrush & Ahrefs SEO", level: 80 },
        { name: "Git & Version Control", level: 85 }
      ]
    }
  ],
  projects: [
    {
      id: 1,
      title: "E-Commerce REST API Backend",
      description: "A scale-ready backend API built using Java, Spring Boot, and PostgreSQL. Integrates Spring Security, JWT authentication, and structured DB tables for managing products, shopping carts, and order processing.",
      tags: ["Java", "Spring Boot", "PostgreSQL", "Hibernate", "Spring Security"],
      liveLink: "#",
      githubLink: "#",
      imageText: "API"
    },
    {
      id: 2,
      title: "Custom Shopify CRM Integration Portal",
      description: "Developed custom middleware connecting Shopify stores with external inventory tools. Uses webhooks, background queues, and API synchronization to keep catalog listings synced in real-time.",
      tags: ["JavaScript", "Node.js", "PHP", "Shopify API", "Webhooks"],
      liveLink: "#",
      githubLink: "#",
      imageText: "CRM"
    },
    {
      id: 3,
      title: "React Dashboard for Store Analytics",
      description: "A single-page analytics application pulling site performance scores, SEO indexes, and traffic counts from search consoles. Built with modular cards and interactive chart displays.",
      tags: ["React.js", "CSS variables", "Google API", "Responsive CSS"],
      liveLink: "#",
      githubLink: "#",
      imageText: "ANL"
    }
  ],
  experience: [
    {
      role: "Shopify Developer",
      company: "10Turtle",
      location: "Surat, Gujarat, India",
      duration: "April 2025 – May 2026",
      details: [
        "Led custom store setups and full theme migrations from scratch.",
        "Built responsive liquid sections, custom Javascript interfaces, and automated workflows using Shopify CLI.",
        "Implemented Google Merchant, Search Console, GTM, and Analytics tracking codes.",
        "Awarded the 'Extra Mile Certificate' for exceptional work performance and responsiveness."
      ]
    },
    {
      role: "Freelance Shopify Developer",
      company: "Self-Employed",
      location: "Remote / Surat",
      duration: "Jan 2025 – March 2025",
      details: [
        "Delivered custom theme integrations and performance upgrades for international clients.",
        "Consulted on SEO optimization tools (SEMrush, Ahrefs, Screaming Frog) to boost catalog search visibility."
      ]
    },
    {
      role: "Shopify Developer",
      company: "Day Dream Soft",
      location: "Surat, Gujarat, India",
      duration: "Dec 2023 – Dec 2024",
      details: [
        "Developed clean-coded custom Shopify templates and integrations.",
        "Worked with PHP and back-end logic to build custom store dashboard interfaces.",
        "Collaborated with teams on version control systems and Agile setups."
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Parul University (Online)",
      location: "Vadodara, Gujarat, India",
      duration: "2026 – Present",
      grade: "Pursuing"
    },
    {
      degree: "Web Development Training Course",
      institution: "Professional Institute",
      location: "Bardoli, Surat, Gujarat",
      duration: "June 2023 – Dec 2023",
      grade: "Completed"
    },
    {
      degree: "Diploma in Engineering/IT",
      institution: "BVPIT College, Umarkh",
      location: "Bardoli, Surat, Gujarat",
      duration: "Year 2018",
      grade: "CGPA: 7.09"
    }
  ],
  aboutMe: {
    paragraph1: "Hi! I'm Pratik Parmar, a software developer transitioning my professional career into Java backend engineering. With over 2.5 years of industry experience building, maintaining, and scaling e-commerce systems, I bring a unique combination of frontend responsiveness, search optimization skills, and backend architecture curiosity.",
    paragraph2: "In my previous roles as a Shopify Developer, I spearheaded store builds, custom plugin integrations, and analytics tracking. Now, I am redirecting my drive for custom feature creation to Java, Spring Boot, and PostgreSQL. I enjoy designing RESTful microservices, query schemas, and security pipelines.",
    paragraph3: "I am a continuous learner, currently pursuing my BCA online at Parul University. Outside of writing code, you can find me playing volleyball (I was a district-level champion!) or researching new tech stacks. I am eager to join a technical team where I can apply my experience and build powerful backend systems."
  }
};
