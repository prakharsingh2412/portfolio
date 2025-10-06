import { PortfolioData } from '../types/portfolio';
import { ChatResponse } from '../types/chat';

export class ChatBot {
  private data: PortfolioData;

  constructor(data: PortfolioData) {
    this.data = data;
  }

  getResponse(message: string): ChatResponse {
    const lowerMessage = message.toLowerCase();

    // Greetings
    if (this.matchesKeywords(lowerMessage, ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening'])) {
      return {
        message: `Hi there! 👋 I'm ${this.data.name}. Thanks for checking out my portfolio! What would you like to know about me?`,
        delay: 1000
      };
    }

    // About/Introduction
    if (this.matchesKeywords(lowerMessage, ['about', 'who are you', 'tell me about', 'introduction', 'intro'])) {
      return {
        message: `I'm ${this.data.name}, a ${this.data.title} based in ${this.data.location}. ${this.data.about} Feel free to ask me about my experience, skills, or projects! 😊`,
        delay: 1500
      };
    }

    // Experience
    if (this.matchesKeywords(lowerMessage, ['experience', 'work', 'job', 'career', 'employment', 'worked'])) {
      const experienceText = this.data.experience.map(exp => 
        `🏢 ${exp.position} at ${exp.company} (${exp.duration})`
      ).join('\n');
      return {
        message: `Here's my work experience:\n\n${experienceText}\n\nWould you like to know more about any specific role?`,
        delay: 1200
      };
    }

    // Skills
    if (this.matchesKeywords(lowerMessage, ['skills', 'technologies', 'tech stack', 'programming', 'languages', 'tools'])) {
      const skillsText = this.data.skills.slice(0, 8).join(', ');
      return {
        message: `My main technical skills include: ${skillsText} and more! 💻\n\nI'm always learning new technologies. Is there a specific skill you'd like to know more about?`,
        delay: 1000
      };
    }

    // Projects
    if (this.matchesKeywords(lowerMessage, ['projects', 'portfolio', 'work samples', 'built', 'created', 'developed'])) {
      const projectsText = this.data.projects.map(project => 
        `💻 ${project.name} - ${project.description.slice(0, 60)}...`
      ).join('\n\n');
      return {
        message: `Here are some of my key projects:\n\n${projectsText}\n\nWant to know more details about any of these?`,
        delay: 1500
      };
    }

    // Education
    if (this.matchesKeywords(lowerMessage, ['education', 'degree', 'university', 'college', 'studied', 'graduated'])) {
      const educationText = this.data.education.map(edu => 
        `🎓 ${edu.degree} from ${edu.institution} (${edu.year})`
      ).join('\n');
      return {
        message: `My educational background:\n\n${educationText}`,
        delay: 1000
      };
    }

    // Contact
    if (this.matchesKeywords(lowerMessage, ['contact', 'email', 'phone', 'reach', 'hire', 'available', 'collaboration'])) {
      return {
        message: `I'd love to connect! Here's how you can reach me:\n\n📧 ${this.data.email}\n📱 ${this.data.phone}\n📍 ${this.data.location}\n\nI'm always open to new opportunities and collaborations! 🤝`,
        delay: 1200
      };
    }

    // Specific technology questions
    if (this.matchesKeywords(lowerMessage, ['react', 'javascript', 'typescript', 'node', 'python', 'aws', 'mongodb', 'postgresql'])) {
      const tech = this.extractTechnology(lowerMessage);
      if (tech && this.data.skills.some(skill => skill.toLowerCase().includes(tech))) {
        return {
          message: `Yes, I have experience with ${tech}! I've used it in several projects. Would you like to know about specific projects where I've implemented ${tech}?`,
          delay: 1000
        };
      }
    }

    // Help/What can you tell me
    if (this.matchesKeywords(lowerMessage, ['help', 'what can you tell me', 'what do you know', 'options', 'menu'])) {
      return {
        message: `I can tell you about:\n\n💼 My work experience\n🛠️ Technical skills\n💻 Projects I've built\n🎓 Education\n📞 Contact information\n\nJust ask me anything you'd like to know! 😊`,
        delay: 1200
      };
    }

    // Availability
    if (this.matchesKeywords(lowerMessage, ['available', 'free', 'hiring', 'open to work', 'job opportunities'])) {
      return {
        message: `Yes, I'm currently open to new opportunities! 🎯 I'm particularly interested in full-stack development roles and exciting projects. Feel free to reach out at ${this.data.email} to discuss potential collaborations!`,
        delay: 1300
      };
    }

    // Thanks
    if (this.matchesKeywords(lowerMessage, ['thank', 'thanks', 'thx', 'appreciate'])) {
      return {
        message: `You're very welcome! 😊 Is there anything else you'd like to know about my background or experience?`,
        delay: 800
      };
    }

    // Goodbye
    if (this.matchesKeywords(lowerMessage, ['bye', 'goodbye', 'see you', 'talk later', 'thanks for your time'])) {
      return {
        message: `Thanks for chatting! It was great talking with you. Feel free to reach out anytime at ${this.data.email}. Have a wonderful day! 👋`,
        delay: 1200
      };
    }

    // Default response
    return {
      message: `That's an interesting question! 🤔 I'd be happy to tell you more about my experience, skills, projects, or how we might work together. What specific aspect would you like to know about?`,
      delay: 1000
    };
  }

  private matchesKeywords(message: string, keywords: string[]): boolean {
    return keywords.some(keyword => message.includes(keyword));
  }

  private extractTechnology(message: string): string | null {
    const techs = ['react', 'javascript', 'typescript', 'node', 'python', 'aws', 'mongodb', 'postgresql', 'docker', 'kubernetes'];
    return techs.find(tech => message.includes(tech)) || null;
  }

  getInitialMessages(): Array<{ text: string; isUser: boolean; timestamp: string }> {
    return [
      {
        text: `Hi! 👋 I'm ${this.data.name}, ${this.data.title}. Welcome to my interactive portfolio!`,
        isUser: false,
        timestamp: this.getCurrentTime()
      },
      {
        text: "Feel free to ask me anything about my experience, skills, projects, or how we can work together! 😊",
        isUser: false,
        timestamp: this.getCurrentTime(1)
      }
    ];
  }

  private getCurrentTime(minutesAdd: number = 0): string {
    const now = new Date();
    now.setMinutes(now.getMinutes() + minutesAdd);
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
}