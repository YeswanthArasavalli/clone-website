import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const Skills = () => {
  const skillGroups = [
    {
      category: "Data & BI",
      skills: ["Power BI", "Tableau", "Excel", "SQL", "Data Visualization"],
      color: "bg-blue-500/10 text-blue-600 border-blue-200",
    },
    {
      category: "Programming",
      skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Basic Java"],
      color: "bg-green-500/10 text-green-600 border-green-200",
    },
    {
      category: "Machine Learning (Developing)",
      skills: ["Scikit-Learn", "Regression", "Classification", "Data Preprocessing"],
      color: "bg-purple-500/10 text-purple-600 border-purple-200",
    },
    {
      category: "Tools & Platforms",
      skills: ["GitHub", "Google Colab", "APIs", "Jupyter Notebook", "VS Code"],
      color: "bg-orange-500/10 text-orange-600 border-orange-200",
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for modern data analysis and insights
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {skillGroups.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-xl font-bold mb-4 gradient-text">{group.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className={`${group.color} px-3 py-1 text-sm font-medium hover:scale-105 transition-transform cursor-default`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-primary p-8 rounded-2xl text-white text-center">
            <p className="text-lg font-medium mb-2">
              🚀 Currently Expanding Skills
            </p>
            <p className="text-white/90">
              Actively learning: AI, Machine Learning, Cloud Deployment (AWS/Azure), Advanced Statistical Modeling
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
