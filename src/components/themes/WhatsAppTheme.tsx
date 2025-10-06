import React, { useState, useRef, useEffect } from 'react';
import { Badge } from '../ui/badge';
import { Mail, Phone, MapPin, MessageCircle, ExternalLink, CheckCheck, ArrowLeft, Copy, Download } from 'lucide-react';
import { PortfolioData } from '../../types/portfolio';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { toast } from 'sonner';
import { downloadResumePDF } from '../../utils/resumeGenerator';

interface WhatsAppThemeProps {
  data: PortfolioData;
}

type ChatSection = 'main' | 'projects' | 'experience' | 'education' | 'achievements' | 'contact' | 'resume';

interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: string;
  type?: 'text' | 'info' | 'contact';
}

export function WhatsAppTheme({ data }: WhatsAppThemeProps) {
  const [currentSection, setCurrentSection] = useState<ChatSection>('main');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize with welcome messages
    const welcomeMessages: ChatMessage[] = [
      {
        id: '1',
        text: `Hi! 👋 I'm ${data.name}`,
        isUser: false,
        timestamp: getCurrentTime(),
        type: 'text'
      },
      {
        id: '2',
        text: `${data.title} based in ${data.location}`,
        isUser: false,
        timestamp: getCurrentTime(1),
        type: 'text'
      },
      {
        id: '3',
        text: 'What would you like to know about me? Choose from the options below! 😊',
        isUser: false,
        timestamp: getCurrentTime(2),
        type: 'text'
      }
    ];
    setMessages(welcomeMessages);
  }, [data]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const getCurrentTime = (minutesAdd: number = 0): string => {
    const now = new Date();
    now.setMinutes(now.getMinutes() + minutesAdd);
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const addMessage = (text: string, isUser: boolean, type: 'text' | 'info' | 'contact' = 'text') => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      text,
      isUser,
      timestamp: getCurrentTime(),
      type
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleOptionClick = (option: string, section: ChatSection) => {
    addMessage(option, true);
    
    setTimeout(() => {
      switch (section) {
        case 'projects':
          handleProjectsSection();
          break;
        case 'experience':
          handleExperienceSection();
          break;
        case 'education':
          handleEducationSection();
          break;
        case 'achievements':
          handleAchievementsSection();
          break;
        case 'contact':
          handleContactSection();
          break;
        case 'resume':
          handleResumeSection();
          break;
      }
      setCurrentSection(section);
    }, 500);
  };

  const handleProjectsSection = () => {
    addMessage('Here are my featured projects: 🚀', false);
    data.projects.forEach((project, index) => {
      setTimeout(() => {
        const projectText = `💻 ${project.name}\n\n${project.description}\n\nTech Stack: ${project.technologies.join(', ')}`;
        addMessage(projectText, false, 'info');
      }, (index + 1) * 800);
    });
  };

  const handleExperienceSection = () => {
    addMessage('My professional experience: 💼', false);
    data.experience.forEach((exp, index) => {
      setTimeout(() => {
        const expText = `🏢 ${exp.position}\n${exp.company} • ${exp.duration}\n\n${exp.description}`;
        addMessage(expText, false, 'info');
      }, (index + 1) * 800);
    });
  };

  const handleEducationSection = () => {
    addMessage('My educational background: 🎓', false);
    setTimeout(() => {
      data.education.forEach((edu, index) => {
        const eduText = `🎓 ${edu.degree}\n${edu.institution} • ${edu.year}`;
        addMessage(eduText, false, 'info');
      });
    }, 500);
  };

  const handleAchievementsSection = () => {
    addMessage('My key achievements: 🏆', false);
    setTimeout(() => {
      const achievementsText = data.achievements.join('\n\n');
      addMessage(achievementsText, false, 'info');
    }, 500);
  };

  const handleContactSection = () => {
    addMessage('Let\'s connect! Here\'s how you can reach me: 📞', false);
    setTimeout(() => {
      const contactText = `📧 Email: ${data.email}\n📱 Phone: ${data.phone}\n📍 Location: ${data.location}\n\nI'm always open to new opportunities and collaborations! 🤝`;
      addMessage(contactText, false, 'contact');
    }, 500);
  };

  const handleResumeSection = () => {
    addMessage('Ready to download my complete resume! 📄', false);
    setTimeout(() => {
      addMessage('Click the button below to open a printable version - you can save it as PDF from your browser! 🖨️➡️📄', false);
    }, 500);
  };

  const handleBackToMain = () => {
    addMessage('Back to main menu', true);
    setTimeout(() => {
      addMessage('What else would you like to know? 😊', false);
      setCurrentSection('main');
    }, 500);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!');
  };

  const mainOptions = [
    { label: '💻 View Projects', section: 'projects' as ChatSection },
    { label: '💼 Work Experience', section: 'experience' as ChatSection },
    { label: '🎓 Education', section: 'education' as ChatSection },
    { label: '🏆 Achievements', section: 'achievements' as ChatSection },
    { label: '📄 Download Resume', section: 'resume' as ChatSection },
    { label: '📞 Contact Me', section: 'contact' as ChatSection }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* WhatsApp-style header */}
      <header className="bg-green-600 px-6 py-4 text-white sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <ImageWithFallback
              src={data.profileImage}
              alt={data.name}
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <div>
              <h1 className="text-lg">{data.name} - Portfolio</h1>
              <p className="text-sm text-green-100">Online • Ready to chat</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-green-300"></div>
            <div className="w-2 h-2 rounded-full bg-green-300"></div>
            <div className="w-2 h-2 rounded-full bg-green-300"></div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto bg-gray-50 min-h-screen flex flex-col">
        {/* Chat Messages */}
        <div className="flex-1 p-6 space-y-4 overflow-y-auto" style={{ paddingBottom: '140px' }}>
          {/* System Message */}
          <div className="text-center">
            <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm">
              Welcome to {data.name}'s Interactive Portfolio
            </span>
          </div>

          {/* Render chat messages */}
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
              <div className={`rounded-lg p-4 max-w-md relative ${
                message.isUser 
                  ? 'bg-blue-500 text-white' 
                  : message.type === 'contact'
                  ? 'bg-green-50 text-gray-800 border border-green-200'
                  : message.type === 'info'
                  ? 'bg-blue-50 text-gray-800 border border-blue-200'
                  : 'bg-white text-gray-800 shadow-sm'
              }`}>
                <div className="whitespace-pre-wrap">{message.text}</div>
                
                {/* Copy button for contact info */}
                {message.type === 'contact' && !message.isUser && (
                  <div className="flex gap-2 mt-3">
                    <button
                      onClick={() => copyToClipboard(data.email)}
                      className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600 transition-colors flex items-center gap-1"
                    >
                      <Copy className="w-3 h-3" />
                      Copy Email
                    </button>
                    <button
                      onClick={() => copyToClipboard(data.phone)}
                      className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600 transition-colors flex items-center gap-1"
                    >
                      <Copy className="w-3 h-3" />
                      Copy Phone
                    </button>
                  </div>
                )}

                <div className={`text-xs mt-2 flex items-center ${
                  message.isUser ? 'justify-end text-blue-100' : 'justify-start text-gray-500'
                } gap-1`}>
                  <span>{message.timestamp}</span>
                  {message.isUser && <CheckCheck className="w-3 h-3" />}
                </div>
              </div>
            </div>
          ))}

          <div ref={messagesEndRef} />
        </div>

        {/* Options Area */}
        <div className="sticky bottom-0 bg-white p-4 border-t border-gray-200 shadow-lg">
          {currentSection === 'main' ? (
            <div className="space-y-3">
              <p className="text-center text-gray-600 text-sm">Choose what you'd like to know:</p>
              <div className="grid grid-cols-1 gap-2">
                {mainOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionClick(option.label, option.section)}
                    className="bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg transition-colors text-left flex items-center gap-2"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <button
                onClick={handleBackToMain}
                className="w-full bg-gray-500 hover:bg-gray-600 text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Main Menu
              </button>
              
              {currentSection === 'contact' && (
                <div className="grid grid-cols-1 gap-2">
                  <a
                    href={`mailto:${data.email}`}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg transition-colors text-center flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Send Email
                  </a>
                  <a
                    href={`tel:${data.phone}`}
                    className="bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg transition-colors text-center flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              )}

              {currentSection === 'resume' && (
                <div className="grid grid-cols-1 gap-2">
                  <button
                    onClick={() => {
                      downloadResumePDF(data);
                      toast.success('Resume opened for PDF download!');
                      addMessage('Opened resume for PDF download! 📄', true);
                    }}
                    className="bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF Resume
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}