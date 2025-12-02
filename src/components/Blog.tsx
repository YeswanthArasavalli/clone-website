import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Blog = () => {
  const posts = [
    {
      title: "Power BI vs Tableau: Which is Right for Your Business?",
      excerpt: "A comprehensive comparison of the two leading BI tools, helping you make the right choice.",
      date: "Dec 2024",
      readTime: "5 min read",
    },
    {
      title: "How I Clean Messy Data: A Step-by-Step Guide",
      excerpt: "My proven workflow for transforming chaotic datasets into analysis-ready data.",
      date: "Nov 2024",
      readTime: "7 min read",
    },
    {
      title: "A Beginner's Path to Machine Learning",
      excerpt: "My journey from data analyst to exploring ML - lessons learned and resources that helped.",
      date: "Nov 2024",
      readTime: "6 min read",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Latest Insights</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sharing knowledge about data analysis, visualization, and emerging technologies
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="p-6 h-full hover:shadow-medium transition-all duration-300 hover:-translate-y-2 flex flex-col group border-border/50 hover:border-primary/30"
                >
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{post.excerpt}</p>
                  
                  <Button variant="ghost" className="w-full justify-between group hover:text-primary">
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Building authority through knowledge sharing helps both clients and hiring managers understand my expertise
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
