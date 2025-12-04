import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ProjectCard from '@/components/ProjectCard';
import { projectsData } from '@/components/Projects';

const ProjectsPage: React.FC = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              My Projects
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A collection of my recent work showcasing different technologies and solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project) => (
              <Link
                key={project.slug}
                to={`/projects/${project.slug}`}
                className="transform transition-transform duration-300 hover:scale-105"
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  impact={project.impact}
                  tech={project.tech}
                  github={project.github}
                  slug={project.slug}
                />
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default ProjectsPage;
