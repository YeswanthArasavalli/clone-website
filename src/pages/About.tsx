import React from 'react';
import { Code2, Brain, Zap, Users } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ServiceCard from '@/components/ServiceCard';

const services = [
  {
    icon: Code2,
    title: 'Full Stack Development',
    description: 'Building scalable web applications with modern technologies and best practices'
  },
  {
    icon: Brain,
    title: 'Data Analysis & Visualization',
    description: 'Extracting insights from complex data through visualization and statistical analysis'
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Optimizing applications for speed, efficiency, and user experience'
  },
  {
    icon: Users,
    title: 'Technical Consultation',
    description: 'Providing expert guidance on architecture, technology selection, and best practices'
  }
];

const skills = [
  'React', 'TypeScript', 'Python', 'Node.js',
  'PostgreSQL', 'MongoDB', 'AWS', 'Docker',
  'Data Analysis', 'Machine Learning', 'FastAPI', 'Tailwind CSS',
  'Git', 'REST APIs', 'GraphQL', 'Next.js'
];

const About: React.FC = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Header Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">About Me</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I'm a passionate full-stack developer and data enthusiast dedicated to building scalable solutions
            </p>
          </div>
        </section>

        {/* Bio Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
            <p className="text-gray-700 leading-relaxed mb-4">
              With expertise in full-stack development and data analysis, I specialize in creating innovative solutions that drive business value. 
              My experience spans across multiple technologies and industries, allowing me to adapt quickly and deliver results.
            </p>
            <p className="text-gray-700 leading-relaxed">
              I'm passionate about clean code, data visualization, and solving complex problems with elegant solutions. 
              Whether it's building web applications or analyzing data, I bring a detail-oriented approach to every project.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white rounded-lg shadow-md border border-gray-200 mx-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">Technical Skills</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-cyan-50 text-cyan-700 rounded-full border border-cyan-200 text-sm font-medium hover:bg-cyan-100 transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default About;
