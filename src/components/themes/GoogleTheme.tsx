import React, { useState, useRef } from 'react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Mail, Phone, MapPin, ExternalLink, Search, X } from 'lucide-react';
import { PortfolioData } from '../../types/portfolio';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface GoogleThemeProps {
  data: PortfolioData;
}

export function GoogleTheme({ data }: GoogleThemeProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Valid sections that can be navigated to
  const validSections = ['about', 'skills', 'experience', 'projects', 'education'];
  
  const scrollToSection = (sectionName: string) => {
    const element = document.getElementById(sectionName);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.toLowerCase().trim();
    
    if (validSections.includes(query)) {
      scrollToSection(query);
      setSearchQuery('');
      setShowSuggestions(false);
      searchInputRef.current?.blur();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSuggestionClick = (section: string) => {
    setSearchQuery(section);
    scrollToSection(section);
    setSearchQuery('');
    setShowSuggestions(false);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setShowSuggestions(false);
  };

  const filteredSections = validSections.filter(section => 
    section.toLowerCase().includes(searchQuery.toLowerCase()) && searchQuery.trim() !== ''
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Google-style header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <h1 className="text-gray-700">Portfolio</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="grid grid-cols-3 gap-1 p-2">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-sm bg-gray-400"></div>
              ))}
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-500"></div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Google-style Search Section */}
        <div className="text-center mb-16">
          <ImageWithFallback
            src={data.profileImage}
            alt={data.name}
            className="w-20 h-20 rounded-full mx-auto mb-4"
          />
          <h1 className="text-4xl text-gray-900 mb-8">{data.name}</h1>
          
          {/* Google Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8 relative">
            <div className="relative">
              <div className="flex items-center bg-white border border-gray-300 rounded-full px-5 py-3 shadow-sm hover:shadow-md transition-shadow focus-within:shadow-md focus-within:border-blue-500">
                <Search className="w-5 h-5 text-gray-400 mr-3" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={handleInputChange}
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                  placeholder="Type: about, skills, projects, experience, or education"
                  className="flex-1 outline-none text-gray-700 placeholder-gray-500"
                />
                {searchQuery && (
                  <button type="button" onClick={clearSearch} className="ml-3 p-1 hover:bg-gray-100 rounded-full">
                    <X className="w-4 h-4 text-gray-400" />
                  </button>
                )}
              </div>
              
              {/* Section Navigation Dropdown */}
              {showSuggestions && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1 py-2 z-10">
                  <div className="px-4 py-2">
                    <p className="text-sm text-gray-500 mb-2">Navigate to section</p>
                    {(filteredSections.length > 0 ? filteredSections : validSections).map((section) => (
                      <button
                        key={section}
                        type="button"
                        onClick={() => handleSuggestionClick(section)}
                        className="flex items-center w-full px-2 py-1 text-left hover:bg-gray-100 rounded text-sm capitalize"
                      >
                        <Search className="w-4 h-4 text-gray-400 mr-3" />
                        {section}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </form>
          
          <p className="text-xl text-blue-600 mb-6">{data.title}</p>
          <div className="flex items-center justify-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>{data.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>{data.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{data.location}</span>
            </div>
          </div>
        </div>

        {/* About Section */}
        <Card id="about" className="mb-12 p-8 border border-gray-200 shadow-sm scroll-mt-8">
          <h2 className="text-2xl text-gray-900 mb-4">About</h2>
          <p className="text-gray-700 leading-relaxed">{data.about}</p>
        </Card>

        {/* Skills Section */}
        <Card id="skills" className="mb-12 p-8 border border-gray-200 shadow-sm scroll-mt-8">
          <h2 className="text-2xl text-gray-900 mb-6">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {data.skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 px-4 py-2">
                {skill}
              </Badge>
            ))}
          </div>
        </Card>

        {/* Experience Section */}
        <Card id="experience" className="mb-12 p-8 border border-gray-200 shadow-sm scroll-mt-8">
          <h2 className="text-2xl text-gray-900 mb-6">Experience</h2>
          <div className="space-y-6">
            {data.experience.map((exp, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-6 pb-6">
                <h3 className="text-xl text-gray-900 mb-1">{exp.position}</h3>
                <p className="text-blue-600 mb-2">{exp.company} • {exp.duration}</p>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Projects Section */}
        <Card id="projects" className="mb-12 p-8 border border-gray-200 shadow-sm scroll-mt-8">
          <h2 className="text-2xl text-gray-900 mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.projects.map((project, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg text-gray-900 mb-2">{project.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                {project.link && (
                  <a href="#" className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1">
                    <ExternalLink className="w-3 h-3" />
                    View Project
                  </a>
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* Education Section */}
        <Card id="education" className="p-8 border border-gray-200 shadow-sm scroll-mt-8">
          <h2 className="text-2xl text-gray-900 mb-6">Education</h2>
          {data.education.map((edu, index) => (
            <div key={index} className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg text-gray-900">{edu.degree}</h3>
              <p className="text-green-600">{edu.institution} • {edu.year}</p>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}