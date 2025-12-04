import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Sales Performance Dashboard",
      description: "Comprehensive Power BI dashboard analyzing 2 years of sales data across multiple regions and product categories. Features interactive KPI tracking, trend visualization, and automated data refresh.",
      achievement: "Reduced reporting time by 75% and improved data visibility for 50+ stakeholders.",
      tools: ["Power BI", "SQL", "Excel"],
      projectUrl: "#",
      codeUrl: "#",
    },
     {
      title: "Retail Product Image Recognition System",
      description: "Deep learning-based computer vision system using PyTorch and EfficientNet-B0 to classify retail product images into SKU-level categories, served through a Streamlit app for real-time predictions.",
      achievement: "Automated SKU identification from product photos, reducing manual tagging effort and enabling faster retail analytics workflows.",
      tools: ["PyTorch", "EfficientNet-B0", "Streamlit", "Python"],
      projectUrl: "#",
      codeUrl: "https://github.com/YeswanthArasavalli/retail-product-image-recognition",
    },
    {
      title: "Customer Segmentation Analysis",
      description: "Advanced Python-based clustering analysis using K-means and RFM methodology to identify distinct customer segments. Delivered actionable insights for targeted marketing campaigns.",
      achievement: "Enabled 40% improvement in marketing ROI through precision-targeted campaigns.",
      tools: ["Python", "Pandas", "Scikit-Learn", "Matplotlib"],
      projectUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Automated Reporting System",
      description: "End-to-end Python automation pipeline that extracts, transforms, and visualizes data, then generates and distributes weekly reports to stakeholders via email with zero manual intervention.",
      achievement: "Saved 10+ hours per week in manual reporting and eliminated human errors.",
      tools: ["Python", "Pandas", "SMTP", "Schedule"],
      projectUrl: "#",
      codeUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real-world data solutions that delivered measurable results
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="p-6 h-full flex flex-col group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/30"
                >
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4 p-3 bg-primary/5 rounded-lg border border-primary/10">
                    <p className="text-sm font-semibold text-primary flex items-start gap-2">
                      <span className="text-lg">✓</span>
                      <span>{project.achievement}</span>
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm font-semibold mb-2">Tools Used:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, i) => (
                        <Badge 
                          key={i} 
                          variant="secondary" 
                          className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-primary hover:bg-primary/90" 
                      asChild
                    >
                      <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        View Project
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 hover:bg-primary/10" 
                      asChild
                    >
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              More projects coming soon, including machine learning and AI implementations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

