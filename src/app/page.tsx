'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'

export default function Component() {
  const [activeSection, setActiveSection] = useState('about')

  const sections = ['about', 'experience', 'skills', 'education', 'contact']

  const colors = {
    about: 'bg-purple-500',
    experience: 'bg-blue-500',
    skills: 'bg-green-500',
    education: 'bg-yellow-500',
    contact: 'bg-red-500',
  }
  
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className="bg-gray-900 text-white p-6 sticky top-0 z-10">
        <h1 className="text-4xl font-bold">Mitchell Wesley</h1>
        <p className="text-xl">Software Engineer</p>
      </header>

      <nav className="bg-gray-800 p-4 sticky top-20 z-10">
        <ul className="flex justify-center space-x-4">
          {sections.map((section) => (
            <li key={section}>
              <button
                onClick={() => setActiveSection(section)}
                className={`text-white px-4 py-2 rounded-full transition-colors ${
                  activeSection === section ? colors[section] : 'hover:bg-gray-700'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <main className="container mx-auto mt-8 p-4">
        <motion.section
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`p-8 rounded-lg shadow-lg ${colors[activeSection]}`}
        >
          {activeSection === 'about' && (
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <p className="text-lg">
                I'm a passionate Software Engineer with experience in various technologies and industries. I specialize
                in developing innovative solutions and have a strong background in automation, testing, and full-stack
                development.
              </p>
            </div>
          )}

          {activeSection === 'experience' && (
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
              <ul className="space-y-4">
                <li>
                  <h3 className="text-xl font-semibold">GeoNetix - Spatial Solutions</h3>
                  <p className="text-lg">Software Test Engineer | March 2024 - Current</p>
                  <p>Performing verification and validation testing on new software features for health insurance websites.</p>
                </li>
                <li>
                  <h3 className="text-xl font-semibold">Komatsu Mining Corp.</h3>
                  <p className="text-lg">Advanced Automation Engineer | July 2020 - January 2024</p>
                  <p>Lead developer for 3D Navigation HMI and remote operation control systems.</p>
                </li>
                <li>
                  <h3 className="text-xl font-semibold">Northrop Grumman Systems Corporation</h3>
                  <p className="text-lg">Software Engineer | July 2019 - July 2020</p>
                  <p>Worked on MESA RAMP Radar program and developed embedded C++ applications.</p>
                </li>
              </ul>
            </div>
          )}

          {activeSection === 'skills' && (
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-4">Skills</h2>
              <ul className="grid grid-cols-2 gap-4">
                <li className="bg-white bg-opacity-20 p-2 rounded">C++</li>
                <li className="bg-white bg-opacity-20 p-2 rounded">Python</li>
                <li className="bg-white bg-opacity-20 p-2 rounded">Java</li>
                <li className="bg-white bg-opacity-20 p-2 rounded">JavaScript</li>
                <li className="bg-white bg-opacity-20 p-2 rounded">SQL</li>
                <li className="bg-white bg-opacity-20 p-2 rounded">Git</li>
                <li className="bg-white bg-opacity-20 p-2 rounded">LabVIEW</li>
                <li className="bg-white bg-opacity-20 p-2 rounded">ROS</li>
              </ul>
            </div>
          )}

          {activeSection === 'education' && (
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-4">Education</h2>
              <div>
                <h3 className="text-xl font-semibold">Gannon University</h3>
                <p className="text-lg">Bachelor of Science in Software Engineering</p>
                <p>GPA: 3.77</p>
                <p>Graduated: 2019</p>
              </div>
            </div>
          )}

          {activeSection === 'contact' && (
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
              <div className="space-y-2">
                <p className="flex items-center">
                  <Mail className="mr-2" /> 5623@gmail.com
                </p>
                <p className="flex items-center">
                  <Linkedin className="mr-2" /> www.linkedin.com/in/mitch-wesley-432745296
                </p>
                <p className="flex items-center">
                  <Github className="mr-2" /> github.com/mitchellwesley
                </p>
              </div>
            </div>
          )}
        </motion.section>
      </main>

      <footer className="bg-gray-900 text-white p-4 mt-8">
        <p className="text-center">&copy; 2024 Mitchell Wesley. All rights reserved.</p>
      </footer>

      <div className="fixed bottom-4 right-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
        >
          <ChevronDown className="transform rotate-180" />
        </button>
      </div>
    </div>
  )
}