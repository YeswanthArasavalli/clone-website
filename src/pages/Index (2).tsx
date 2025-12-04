import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, CheckCircle, BarChart3, Palette, Cog, Brain, ExternalLink, Github, Clock, Calendar } from "lucide-react";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blog";

const services = [
  { icon: BarChart3, title: "End-to-end data analysis", description: "From raw data to actionable insights" },
  { icon: Palette, title: "Dashboard development", description: "Beautiful, interactive visualizations" },
  { icon: Cog, title: "Automation using Python & APIs", description: "Streamline repetitive tasks" },
  { icon: Brain, title: "Beginner-level ML experimentation", description: "Exploring predictive analytics" },
];

const tools = ["Python", "SQL", "Power BI", "Tableau", "Excel", "Pandas", "NumPy", "Matplotlib", "Scikit-Learn", "APIs", "GitHub", "Google Colab"];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-subtle">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-slide-up">
            <p className="text-primary font-medium">Data Analyst & AI Explorer</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Transforming data into clear insights and smarter decisions.
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I help businesses with data analysis, dashboards, reporting, automation — and I am expanding into AI & data science.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">
                  Hire Me
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="hero-outline" size="lg">
                <a href="#projects">View My Work</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20" id="about">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Data Analyst from India exploring Machine Learning & AI</h2>
              <p className="text-muted-foreground">
                I'm passionate about turning complex data into stories that drive business decisions. With expertise in Python, SQL, Power BI, and Tableau, I help businesses unlock the value hidden in their data.
              </p>
              <p className="text-muted-foreground">
                Currently expanding my skills into Machine Learning, AI, and working with LLM APIs to deliver cutting-edge data solutions.
              </p>
              <Button asChild variant="outline">
                <Link to="/about">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-5 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <service.icon className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-1">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">Tools & Technologies:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-secondary/30" id="projects">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-muted-foreground">Real-world data solutions that delivered measurable results</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.slug}
                className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all group"
              >
                <div className="aspect-video bg-accent/50 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BarChart3 className="h-16 w-16 text-primary/30" />
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{project.summary}</p>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground">{project.result}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-accent rounded-md text-accent-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button asChild variant="default" size="sm">
                      <Link to={`/projects/${project.slug}`}>
                        View Project
                        <ExternalLink className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                    {project.codeUrl && (
                      <Button asChild variant="outline" size="sm">
                        <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-1 h-4 w-4" />
                          View Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20" id="blog">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Latest Insights</h2>
            <p className="text-muted-foreground">Sharing knowledge about data analysis, visualization, and emerging technologies</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="bg-card rounded-lg border border-border p-6 hover:shadow-lg hover:border-primary/30 transition-all group"
              >
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                <span className="text-primary text-sm font-medium inline-flex items-center">
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground">
              Tell me what you need — I'll reply with ideas and a proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
