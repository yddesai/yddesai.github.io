import React, { useState } from 'react';
import { Sun, Moon, Github, Linkedin, Mail, Phone, Brain, Database, Cloud, Code } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <header className="fixed w-full top-0 z-50">
        <nav className={`px-6 py-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <Brain className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold">Yugandhar Desai</span>
            </motion.div>
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 px-6">
        <div className="max-w-7xl mx-auto py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Data & Cloud Engineer</h1>
            <p className="text-xl mb-8 opacity-80">Transforming Data into Intelligence</p>
            <div className="flex justify-center space-x-4">
              <a href="mailto:yugandhar.d.desai@gmail.com" className="flex items-center space-x-2 hover:text-blue-500">
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
              <a href="tel:+14086909335" className="flex items-center space-x-2 hover:text-blue-500">
                <Phone className="w-5 h-5" />
                <span>Call</span>
              </a>
              <a href="https://linkedin.com/in/yugandhardesai" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-blue-500">
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/yddesai" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-blue-500">
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className={`px-6 py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Work Experience</h2>
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="grid md:grid-cols-[1fr_3fr] gap-8"
            >
              <div>
                <h3 className="text-xl font-semibold">Data Engineer Intern</h3>
                <p className="text-blue-500">Ninedot Energy</p>
                <p className="opacity-70">Jun 2024 – Aug 2024</p>
                <p className="opacity-70">New York City, NY</p>
              </div>
              <div className="space-y-4">
                <p>• Automated and migrated rent payment calculations from Google Sheets to BigQuery leveraging dbt for data transformation.</p>
                <p>• Web scraped 3,000+ documents for training of private LLM Chatbot assistant.</p>
                <p>• Developed Google Cloud Functions to fetch and process API data and energy metrics from external APIs.</p>
                <p>• Automated the deployment of Google Cloud Functions using Github Actions.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="grid md:grid-cols-[1fr_3fr] gap-8"
            >
              <div>
                <h3 className="text-xl font-semibold">Cloud Engineer</h3>
                <p className="text-blue-500">NTT Data</p>
                <p className="opacity-70">Aug 2021 – April 2023</p>
                <p className="opacity-70">Pune, India</p>
              </div>
              <div className="space-y-4">
                <p>• Implemented Job Scheduling framework using Python & Matillion workflows.</p>
                <p>• Developed CDC framework in Snowflake and Matillion.</p>
                <p>• Migrated 10 TB+ Microsoft SQL Server database to Snowflake.</p>
                <p>• Optimized query performance by up to 30%.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
            >
              <Code className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Languages</h3>
              <p className="opacity-80">Python, Go, SQL, Bash, Javascript, Swift, C++, C, HTML, CSS</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
            >
              <Cloud className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Cloud & DevOps</h3>
              <p className="opacity-80">Docker, Kubernetes, QEMU, Google Cloud, Github Actions</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
            >
              <Brain className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Frameworks</h3>
              <p className="opacity-80">Flask, OpenCV, Django, Numpy, Pandas, FastAPI, PySpark</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
            >
              <Database className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Databases</h3>
              <p className="opacity-80">MySQL, Snowflake, Microsoft SQL Server, MongoDB</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`px-6 py-8 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="opacity-70">© 2024 Yugandhar Desai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;