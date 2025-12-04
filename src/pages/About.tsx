import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, BarChart3, TrendingUp, Bot, Brain } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const highlights = [
    {
      icon: BarChart3,
      title: "End-to-end data analysis",
      description: "From raw data to actionable insights"
    },
    {
      icon: TrendingUp,
      title: "Dashboard development",
      description: "Beautiful, interactive visualizations"
    },
    {
      icon: Bot,
      title: "Automation using Python & APIs",
      description: "Streamline repetitive tasks"
    },
    {
      icon: Brain,
      title: "Beginner-level ML experimentation",
      description: "Exploring predictive analytics"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Data Analyst from India exploring Machine Learning & AI
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm passionate about turning complex data into stories that drive business decisions. 
                With expertise in Python, SQL, Power BI, and Tableau, I help businesses unlock the 
                value hidden in their data.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Currently expanding my skills into Machine Learning, AI, and working with LLM APIs 
                to deliver cutting-edge data solutions. I believe in continuous learning and staying 
                ahead of the curve in this rapidly evolving field.
              </p>
              <Button className="bg-primary hover:bg-primary/90" size="lg">
                <Download className="mr-2 w-4 h-4" />
                Download Resume
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 gap-4"
            >
              {highlights.map((highlight, index) => (
                <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <highlight.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{highlight.title}</h4>
                      <p className="text-sm text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </motion.div>
          </div>

          <div className="bg-gradient-primary p-8 rounded-2xl text-white text-center">
            <p className="text-lg font-medium">
              Tools & Technologies: Python, SQL, Power BI, Tableau, Excel, Pandas, NumPy, 
              Matplotlib, Scikit-Learn, APIs, GitHub, Google Colab
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
