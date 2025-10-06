import React from 'react';
import { Badge } from '../ui/badge';
import { Mail, Phone, MapPin, Play, ExternalLink } from 'lucide-react';
import { PortfolioData } from '../../types/portfolio';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface NetflixThemeProps {
  data: PortfolioData;
}

export function NetflixTheme({ data }: NetflixThemeProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Netflix-style header */}
      <header className="bg-black px-6 py-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-red-600 text-2xl">PORTFOLIO</h1>
            <nav className="hidden md:flex gap-6 text-white">
              <span className="hover:text-gray-300 cursor-pointer">About</span>
              <span className="hover:text-gray-300 cursor-pointer">Experience</span>
              <span className="hover:text-gray-300 cursor-pointer">Projects</span>
              <span className="hover:text-gray-300 cursor-pointer">Skills</span>
            </nav>
          </div>
          <div className="w-8 h-8 rounded bg-red-600"></div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-black via-red-900/20 to-black py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl mb-4">{data.name}</h1>
              <p className="text-xl text-red-400 mb-6">{data.title}</p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">{data.about}</p>
              <div className="flex items-center gap-6 text-gray-400 mb-8">
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
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded flex items-center gap-2 transition-colors">
                <Play className="w-5 h-5" />
                View My Work
              </button>
            </div>
            <div className="flex-shrink-0">
              <ImageWithFallback
                src={data.profileImage}
                alt={data.name}
                className="w-64 h-80 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="py-16 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl mb-12">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.experience.map((exp, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors group">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg text-white">{exp.position}</h3>
                  <Play className="w-4 h-4 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-red-400 text-sm mb-2">{exp.company}</p>
                <p className="text-gray-400 text-sm mb-4">{exp.duration}</p>
                <p className="text-gray-300 text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.projects.map((project, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-transform group">
                <div className="h-48 bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
                  <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg mb-2">{project.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-red-900/50 text-red-300 border-red-800">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {project.link && (
                    <a href="#" className="text-red-400 hover:text-red-300 text-sm flex items-center gap-1">
                      <ExternalLink className="w-3 h-3" />
                      Watch Preview
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="py-16 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl mb-12">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {data.skills.map((skill, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4 text-center hover:bg-red-900/50 transition-colors">
                <span className="text-white">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl mb-12">Education</h2>
          {data.education.map((edu, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-8">
              <h3 className="text-xl mb-2">{edu.degree}</h3>
              <p className="text-red-400">{edu.institution} • {edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}