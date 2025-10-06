import React from 'react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Mail, Phone, MapPin, Navigation, ExternalLink, Star } from 'lucide-react';
import { PortfolioData } from '../../types/portfolio';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface UberThemeProps {
  data: PortfolioData;
}

export function UberTheme({ data }: UberThemeProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Uber-style header */}
      <header className="bg-black px-6 py-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
              <span className="text-black">U</span>
            </div>
            <span className="text-xl">Portfolio</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-400">Developer Profile</span>
            <div className="w-8 h-8 bg-green-500 rounded-full"></div>
          </div>
        </div>
      </header>

      {/* Hero Section with Map-like Background */}
      <div className="relative bg-gray-900 py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <Navigation className="w-5 h-5 text-green-500" />
                <span className="text-green-500">Available for Hire</span>
              </div>
              <h1 className="text-5xl md:text-6xl mb-4">{data.name}</h1>
              <p className="text-xl text-gray-300 mb-6">{data.title}</p>
              <p className="text-gray-400 mb-8 leading-relaxed max-w-2xl">{data.about}</p>
              <div className="flex flex-wrap gap-6 text-gray-400 mb-8">
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
              <div className="flex gap-4">
                <button className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                  Request Project
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition-colors">
                  View Portfolio
                </button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="relative">
                <ImageWithFallback
                  src={data.profileImage}
                  alt={data.name}
                  className="w-64 h-64 object-cover rounded-lg"
                />
                <div className="absolute -top-2 -right-2 bg-green-500 text-black px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  5.0
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-3xl text-green-500 mb-2">50+</h3>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-3xl text-green-500 mb-2">5+</h3>
              <p className="text-gray-400">Years Experience</p>
            </div>
            <div>
              <h3 className="text-3xl text-green-500 mb-2">100%</h3>
              <p className="text-gray-400">Client Satisfaction</p>
            </div>
            <div>
              <h3 className="text-3xl text-green-500 mb-2">24/7</h3>
              <p className="text-gray-400">Support Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl mb-12">Recent Trips (Experience)</h2>
          <div className="space-y-6">
            {data.experience.map((exp, index) => (
              <Card key={index} className="bg-gray-900 border-gray-700 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                      <Navigation className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl text-white">{exp.position}</h3>
                      <p className="text-green-500">{exp.company}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400">{exp.duration}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm text-gray-400">5.0</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300">{exp.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl mb-12">Featured Routes (Projects)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.projects.map((project, index) => (
              <Card key={index} className="bg-black border-gray-700 p-6 hover:border-green-500 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg text-white">{project.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-400">5.0</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-green-900/30 text-green-400 border-green-700">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">Estimated: 2-4 weeks</span>
                  {project.link && (
                    <a href="#" className="text-green-500 hover:text-green-400 text-sm flex items-center gap-1">
                      <ExternalLink className="w-3 h-3" />
                      View
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl mb-12">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {data.skills.map((skill, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4 text-center hover:bg-green-900/30 hover:border-green-500 border border-gray-700 transition-colors">
                <span className="text-white">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl mb-12">Education</h2>
          {data.education.map((edu, index) => (
            <Card key={index} className="bg-black border-gray-700 p-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-black">🎓</span>
                </div>
                <div>
                  <h3 className="text-xl text-white">{edu.degree}</h3>
                  <p className="text-green-500">{edu.institution} • {edu.year}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}