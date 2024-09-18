'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'
 
type Section = 'about' | 'experience' | 'skills' | 'education' | 'contact'
export default function Component() {
  const [activeSection, setActiveSection] = useState<Section>('about')

  const sections: Section[] = ['about', 'experience', 'skills', 'education', 'contact']

  const colors: Record<Section, string> = {
    about: 'bg-purple-500',
    experience: 'bg-blue-500',
    skills: 'bg-green-500',
    education: 'bg-yellow-500',
    contact: 'bg-red-500',
  }

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className="bg-gray-900 text-white p-6 sticky top-0 z-10 flex items-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PXL_20240526_153521779.PORTRAIT~3%20(1)-RQS23muFlfVYbIAQXRw8okxMBoZ2JG.jpg"
          alt="Mitchell Wesley"
          width={100}
          height={100}
          className="rounded-full mr-6"
        />
        <div>
          <h1 className="text-4xl font-bold">Mitchell Wesley</h1>
          <p className="text-xl">Software Engineer</p>
        </div>
      </header>

      <nav className="bg-gray-800 p-4 sticky top-[132px] z-10">
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
                Im a passionate Software Engineer with experience in various technologies and industries. 
                I have over 5 and a half years of work experience working for companies such as Northrop Grumman, Komatsu Mining Corporation, Erie Insurance, General Electric, and Wabtec US Rail. 
                My work has included developing software automation technologies, full-stack web application development, data analysis, enterprise database/ content management, user interface development, embedded system development, artificial intelligence, integration/ validation testing and more.
                I have experience with languages such as C++, Python, Java, Junit, NI LabVIEW, Microsoft SQL, ASP.NET, C#, VB.NET, Javascript, and other web programming languages/ frameworks. 
                Im currently looking for full time, in-peron or hybrid positions in the Pittsburgh PA area or fully remote positions.
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
                  <ul className="list-disc list-inside">
                    <li>Performing Verification and Validation testing on new software features being added to a large health insurance website</li>
                    <li>Working with other developers to establish and perform code and database tests to validate new features</li>
                    <li>Developing new features for the website using Microsoft frameworks and services (.NET MVC, ASP.NET, C#, VB.NET, SQL, and Power BI)</li>
                  </ul>
                </li>
                <li>
                  <h3 className="text-xl font-semibold">Komatsu Mining Corp.</h3>
                  <p className="text-lg">Advanced Automation Engineer 2 (Drill Automation team + Architect team) | July 2020 - January 2024</p>
                  <ul className="list-disc list-inside">
                    <li>Lead developer of the 3D Navigation HMI (a soon to be released operator screen used for in-cab and remote operation of drill machines)</li>
                    <li>Developed several new operator screens for the drill HMI, front-end UX and back-end code in LabVIEW</li>
                    <li>Constructed new database architecture and scripts in SQL Server Management Studio and LabVIEWs SQL API</li>
                    <li>Designed architecture for the new remote operation control system</li>
                    <li>Supported development of underlying architecture and front-end UI code for the new Auto Pilot Project (a new-to-be released system for fully automating the drills operating sequences)</li>
                    <li>Revamped project management system in Microsoft Azure DevOps</li>
                    <li>Performed in-field validation testing, resolved issues, and worked with field engineers and operators on fully operational drill machines</li>
                  </ul>
                </li>
                <li>
                  <h3 className="text-xl font-semibold">Northrop Grumman Systems Corporation</h3>
                  <p className="text-lg">Software Engineer | July 2019 - July 2020</p>
                  <ul className="list-disc list-inside">
                    <li>MESA RAMP (Multi-Role Electronically Scanned Array) Radar program project engineer</li>
                    <li>Developed embedded C++ for RedHat Linux system, linux bash scripts, Java applications, and network configuration scripts</li>
                    <li>Held security clearance (currently inactive) and worked on classified Department of Defense project</li>
                  </ul>
                </li>
                <li>
                  <h3 className="text-xl font-semibold">General Electric Company/ Wabtec US Rail Incorporated</h3>
                  <p className="text-lg">Software Engineering Intern | January 2019 - May 2019</p>
                  <ul className="list-disc list-inside">
                    <li>Developed embedded C++ code for locomotive data logger/recording equipment</li>
                    <li>Wrote data analysis application in python for viewing recorded locomotive data logs</li>
                  </ul>
                </li>
                <li>
                  <h3 className="text-xl font-semibold">Komatsu Mining Corp.</h3>
                  <p className="text-lg">Software Engineering Intern | May 2018 - January 2019</p>
                  <ul className="list-disc list-inside">
                    <li>Produced software in C++ and QT that autonomously operates a robot through a simulation of a cut sequence performed by a continuous mining machine</li>
                    <li>Apart of the underground mining (Scrum based) development team</li>
                    <li>Worked with ROS 3D mapping and file conversion (ROS Bag API) software</li>
                    <li>Developed SLAM (Simultaneous Localization And Mapping) algorithms in C++ using SICK Lidar Sensors and OpenCV</li>
                  </ul>
                </li>
                <li>
                  <h3 className="text-xl font-semibold">Gannon University ECE Department</h3>
                  <p className="text-lg">Electrical Engineering Lab Manager and Teacher Assistant | January 2018 - December 2018</p>
                  <ul className="list-disc list-inside">
                    <li>Manage, organize, fix, and checkout lab equipment</li>
                    <li>Grade students labs, homework, and tests</li>
                  </ul>
                </li>
                <li>
                  <h3 className="text-xl font-semibold">Erie Insurance</h3>
                  <p className="text-lg">Software Engineer Intern on the Enterprise Content Management team | May 2017 - August 2017</p>
                  <ul className="list-disc list-inside">
                    <li>Worked on an Agile (Scrum) development team with engineers and analysts developing software to work with IBMs large data management software systems</li>
                    <li>Added over 2000 lines of java code to data management system using the software development lifecycle</li>
                    <li>Created automated and manual regressions tests using Java test suites</li>
                  </ul>
                </li>
                <li>
                  <h3 className="text-xl font-semibold">BotDevLLC</h3>
                  <p className="text-lg">Software Engineering Major | September 2015- May 2019</p>
                  <ul className="list-disc list-inside">
                    <li>Designed, created, and modified code to autonomously fly drones</li>
                    <li>Developed an autonomous snow blower using ROS (robot operating system) with several sensors (encoders, ultrasonic, lidar, camera vision...) running on a linux microcontroller and microprocessor</li>
                  </ul>
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
                <li className="bg-white bg-opacity-20 p-2 rounded">NI LabVIEW</li>
                <li className="bg-white bg-opacity-20 p-2 rounded">ROS - Robot Operating System</li>
                <li className="bg-white bg-opacity-20 p-2 rounded">.NET</li>
                <li className="bg-white bg-opacity-20 p-2 rounded">HMI Design</li>
                <li className="bg-white bg-opacity-20 p-2 rounded">Microsoft PowerBI</li>
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
                  <Mail className="mr-2" /> mww5623@gmail.com
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