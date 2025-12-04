import { useParams, Navigate, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";
import { getProjectBySlug } from "@/data/projects";
import { ArrowLeft, ExternalLink, Github, CheckCircle, BarChart3 } from "lucide-react";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-subtle">
        <div className="container">
          <Link
            to="/#projects"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
          
          <div className="max-w-4xl space-y-6 animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground">{project.summary}</p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">Discuss Your Project</Link>
              </Button>
              {project.codeUrl && (
                <Button asChild variant="hero-outline" size="lg">
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    View Source Code
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">Project Overview</h2>
            <p className="text-muted-foreground leading-relaxed">{project.description}</p>
          </div>
        </div>
      </section>

      {/* Role & Tech Stack */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">My Role</h2>
              <p className="text-muted-foreground leading-relaxed">{project.role}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Tech Stack</h2>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-card border border-border rounded-lg text-foreground font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8">Detailed Approach</h2>
            <div className="space-y-4">
              {project.approach.map((step, index) => (
                <div key={index} className="flex gap-4 p-4 bg-card rounded-lg border border-border">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-muted-foreground pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visuals */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Project Visuals</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.images.map((_, index) => (
                <div
                  key={index}
                  className="aspect-video bg-card rounded-lg border border-border flex items-center justify-center"
                >
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-primary/30 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Visual {index + 1}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Results */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8">Impact & Results</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.impact.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-accent/50 rounded-lg"
                >
                  <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                  <p className="text-foreground font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
