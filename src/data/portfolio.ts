import { PortfolioData } from '../types/portfolio';
import profile from '../assets/prakharsingh.jpg';

export const portfolioData: PortfolioData = {
  name: "Prakhar Singh",
  title: "Full Stack Software Engineer | Java Backend Developer",
  email: "prakharsingh98765432@gmail.com",
  phone: "+91 8957752620",
  location: "Bhopal, India",
  profileImage: profile,
  about:
    "Passionate and detail-oriented software engineer with hands-on experience in building scalable backend systems and full-stack web applications. I specialize in Java Spring Boot, ReactJS, and modern web technologies, with a strong foundation in DSA, OOPS, and operating systems.",
  achievements: [
    "🥈 Secured 2nd position in a college-level hackathon for innovative problem-solving under time constraints.",
    "💻 Solved 200+ DSA problems across LeetCode, GeeksforGeeks, and Codeforces, enhancing algorithmic thinking.",
    "🏅 Certified in C, Java, and Python from IIT Bombay (Spoken Tutorial).",
    "📜 Completed PCAP: Programming Essentials in Python (Cisco Networking Academy & OpenEDG).",
    "🤖 Certified in Basic Machine Learning Concepts by MathWorks.",
    "🚀 Actively participated in Code Quest and various programming competitions."
  ],
  skills: [
    "Python", "C", "C++", "Java", "DSA", "OOPS", "Operating System", "Computer Networks",
    "HTML", "CSS", "JavaScript", "TypeScript", "ReactJS", "Tailwind CSS", "Bootstrap",
    "NodeJS", "Spring Boot", "Express.js", "REST APIs", "JWT", "Bcrypt",
    "MongoDB", "MySQL",
    "GitHub", "Vercel", "Agile", "Project Documentation"
  ],
  experience: [
    {
      company: "Trufe, Bhopal",
      position: "Java Backend Developer Intern (Onsite)",
      duration: "July 2025 – Present",
      description:
        "Developing and optimizing scalable backend services using Java Spring Boot and Hibernate ORM. Implementing RESTful APIs integrated with SQL and NoSQL databases, collaborating with teams in an Agile setup, and enhancing system performance through optimized queries and efficient entity mapping."
    },
    {
      company: "HP Computers, Lucknow",
      position: "Software Engineer Intern (Onsite)",
      duration: "June 2024 – August 2024",
      description:
        "Developed and optimized algorithms to improve system performance. Participated in DSA and Java training workshops. Contributed to internal tool development by writing clean, modular, and well-documented Java code to support engineering teams."
    }
  ],
  projects: [
    {
      name: "Twitter Clone",
      description:
        "Full-stack social media application replicating Twitter functionalities including tweet CRUD, authentication (JWT, bcrypt), follow system, notifications, and responsive UI.",
      technologies: ["ReactJS", "Node.js", "Express", "MongoDB", "JWT", "Bcrypt"]
    },
    {
      name: "Simon Game",
      description:
        "Interactive memory-based game built with HTML, CSS, and JavaScript, where users replicate increasingly complex sequences of colors and sounds.",
      technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
      name: "ABC Chatbot",
      description:
        "AI-powered chatbot built using ReactJS and Gemini API for NLP-based interaction. Provides dynamic responses, integrates external APIs, and supports real-time conversational features.",
      technologies: ["ReactJS", "Gemini API", "JavaScript", "HTML", "CSS"]
    }
  ],
  education: [
    {
      institution: "Roorkee Institute of Technology, Roorkee",
      degree: "Bachelor of Technology in Computer Science",
      year: "Oct 2021 - June 2025",
      description: "CGPA: 7.3"
    }
  ]
};
