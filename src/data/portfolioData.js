// --- CENTRAL PORTFOLIO DATA CONFIGURATION ---

export const portfolioData = {
  personalInfo: {
    name: "Pratik Parmar",
    title: "Java & Fullstack Developer",
    subtitle: "Transitioning from Shopify development to Java/spring-boot + React full-stack development with 2.5+ years of professional development experience.",
    bio: "Hi! I'm Pratik Parmar, a software developer transitioning my professional career into Java/spring-boot + React full-stack development. With over 2.5 years of industry experience as a Shopify Developer, I have worked on building and customizing e-commerce solutions, integrating third-party services, and developing custom features. I am now focused on Java, Spring Boot, PostgreSQL, Hibernate/JPA, REST APIs, OOP, JWT authentication, WebSocket, and backend application development. I have built full-stack projects including real-time chat applications, admin dashboards, authentication systems with Google OAuth and JWT, and an AI-powered email auto-reply generator inside Gmail using the Google Gemini AI model, along with integrations such as NASA and Weather APIs. I am continuously improving my backend development skills and looking for an opportunity to join a technical team where I can apply my experience, build scalable applications, and grow as a Java backend developer.",
    email: "parmarpratik1842000@gmail.com",
    phone: "+91 8780985991",
    location: "Surat, Gujarat, India",
    github: "https://github.com/parmarpratik-dev/",
    linkedin: "https://www.linkedin.com/in/parmarpratik-java/",
    resumeUrl: "/Pratik_Parmar_CV.pdf",
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
        { name: "Java", level: 80 },
        { name: "Spring Boot & REST APIs", level: 75 },
        { name: "Hibernate", level: 72 },
        { name: "PostgreSQL", level: 78 },
        { name: "PHP (Live Project experience)", level: 70 }
      ]
    },
    {
      category: "Frontend & Custom Scripting",
      items: [
        { name: "HTML5 & CSS", level: 92 },
        { name: "tailwind css", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 60 }, // Mentioning (Learning) in bio/resume
        { name: "Axios.js", level: 60 }, // Mentioning (Learning) in bio/resume
      ]
    },
    {
      category: "E-Commerce & Tools",
      items: [
        { name: "Shopify CLI & Theme Kit", level: 90 },
        { name: "Google Tag Manager & GTM", level: 85 },
        { name: "SEMrush & Ahrefs SEO", level: 80 },
        { name: "Git & Version Control", level: 85 },
        { name: "Postman", level: 85 }
      ]
    }
  ],
  projects: [
    {
      id: 1,
      title: "AI Email Auto-Reply Generator",
      description: "AI-powered email assistant built with Spring Boot, React, and PostgreSQL, using the Google Gemini AI model to analyze email content and generate relevant, context-aware replies. Users can review and edit AI-generated responses before sending them directly from the application.",
      tags: ["Java", "Spring Boot", "React", "PostgreSQL", "AI", "Gemini"],
      media: [
        { type: "video", src: "/email-generator.mp4" },
      ],
      githubLink: "#",
      imageText: "EMAIL"
    },
    {
      id: 2,
      title: "Real-Time Chat App with Spring Boot & React",
      description: "A full-stack real-time chat application built with Spring Boot, React, PostgreSQL, and WebSocket. Includes user search, friend requests, accept/reject functionality, real-time messaging, message deletion.",
      tags: ["Java", "Spring Boot", "React", "PostgreSQL", "WebSocket", "Real-time"],
      media: [
        { type: "video", src: "/chatapp.mp4" },
      ],
      githubLink: "https://github.com/parmarpratik-dev/spring-project"
    },
    {
      id: 3,
      title: "OAuth(google login) & JWT Authentication System",
      description: "Full-stack application built with React and Spring Boot featuring Google OAuth 2.0 and JWT-based authentication, forgot-password functionality, and an admin dashboard with user search, pagination, and inline field editing. Also includes a weather application with real-time weather data and NASA API integration to fetch the latest available Earth imagery.",
      tags: [
        "React.js",
        "Spring Boot · Java",
        "Google Login",
        "Spring Security · JWT",
        "NASA API",
        "Weather API"
      ],
      media: [
        { type: "video", src: "/backend-project.mp4" },
        { type: "video", src: "/admin-portal.mp4" }
      ],
      githubLink: "https://github.com/parmarpratik-dev/chatapp"
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
      institution: "Parul University",
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
    paragraph1: "Transitioning from Shopify development to Java backend engineering with 2.5+ years of professional development experience. Hi! I'm Pratik Parmar, a software developer transitioning my professional career into Java/spring-boot + React full-stack development. With over 2.5 years of industry experience as a Shopify Developer, I have worked on building and customizing e-commerce solutions, integrating third-party services, and developing custom features. I am now focused on Java, Spring Boot, PostgreSQL, REST APIs, Spring Security, JWT authentication, WebSocket, and backend application development. I have built full-stack projects including real-time chat applications, admin dashboards, authentication systems with Google OAuth and JWT, and AI-powered applications using the Google Gemini AI model, along with integrations such as NASA and Weather APIs. I am continuously improving my backend development skills and looking for an opportunity to join a technical team where I can apply my experience, build scalable applications, and grow as a Java/spring-boot + React full-stack developer.",
    paragraph2: "I am a continuous learner, currently pursuing my BCA online at Parul University. Outside of writing code, you can find me playing volleyball (I was a district-level champion!) or researching new tech stacks. I am eager to join a technical team where I can apply my experience, build powerful backend systems, and contribute to innovative solutions.",
    paragraph3: ""
  }
};
