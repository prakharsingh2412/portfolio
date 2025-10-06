import { PortfolioData } from '../types/portfolio';
import profile from '../assets/prakharsingh.jpg';

export const portfolioData: PortfolioData = {
  name: "Prakhar Singh",
  title: "Full Stack Software Engineer",
  email: "prakharsingh98765432@gmail.com",
  phone: "+91 8957752620",
  location: "Bhopal, India",
  profileImage: profile,
  about: "Passionate software engineer with 1 years of experience building scalable web applications. I love creating innovative solutions and working with cutting-edge technologies to solve complex problems.",
  achievements: [
    "🏆 Led development of microservices serving 1M+ users",
    "🚀 Improved application performance by 40%",
    "",
    "📈 Implemented CI/CD pipelines reducing deployment time by 60%",
    "💡 Built 3 award-winning web applications",
    "🔧 Contributed to 10+ open-source projects"
  ],
  skills: [
    "JavaScript", "TypeScript", "React", "Node.js", "Python", "AWS", 
    "MongoDB", "PostgreSQL", "Docker", "Kubernetes", "GraphQL", "REST APIs"
  ],
  experience: [
    {
      company: "TechCorp Inc.",
      position: "Senior Software Engineer",
      duration: "2022 - Present",
      description: "Lead deveeloper for microservices architecture serving 1M+ users. Built and optimized React applications with 40% performance improvement."
    },
    {
      company: "StartupXYZ",
      position: "Full Stack Developer",
      duration: "2020 - 2022",
      description: "Developed end-to-end web applications using React, Node.js, and MongoDB. Implemented CI/CD pipelines and automated testing."
    },
  ],
  projects: [
    {
      name: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API", "AWS"]
    },
    {
      name: "Task Management App",
      description: "Collaborative project management tool with real-time updates, file sharing, and team communication features.",
      technologies: ["TypeScript", "React", "Socket.io", "PostgreSQL", "Docker"]
    },
    {
      name: "Weather Analytics Dashboard",
      description: "Data visualization dashboard for weather patterns with interactive charts and predictive analytics.",
      technologies: ["Python", "React", "D3.js", "FastAPI", "Redis"]
    }
  ],
  education: [
    {
      institution: "University of California, Berkeley",
      degree: "Bachelor of Science in Computer Science",
      year: "2019"
    }
  ]
};