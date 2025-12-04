import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";
import { Download, ArrowRight, CheckCircle, GraduationCap, Briefcase, Target, Lightbulb } from "lucide-react";

const skills = {
  "Data & BI": ["Power BI", "Tableau", "Excel", "SQL", "Data Visualization"],
  "Programming": ["Python", "Pandas", "NumPy", "Matplotlib", "Basic Java"],
  "Machine Learning": ["Scikit-Learn", "Regression", "Classification", "Data Preprocessing"],
  "Tools & Platforms": ["GitHub", "Google Colab", "APIs", "Jupyter Notebook", "VS Code"],
};

const journey = [
  {
    year: "Present",
    title: "Expanding into AI & Machine Learning",
    description: "Actively learning advanced ML techniques, cloud deployment, and LLM APIs to deliver cutting-edge solutions.",
    icon: Target,
  },
  {
    year: "2023-2024",
    title: "Data Analytics & Dashboard Development",
    description: "Built multiple Power BI and Tableau dashboards for clients, automated reporting systems, and conducted customer segmentation analyses.",
    icon: Briefcase,
  },
  {
    year: "2022-2023",
    title: "Deepening Python & SQL Skills",
    description: "Focused on mastering data manipulation, statistical analysis, and building reproducible data pipelines.",
    icon: Lightbulb,
  },
  {
    year: "2021-2022",
    title: "Started Data Analytics Journey",
    description: "Began learning SQL, Excel, and basic data visualization while pursuing formal education.",
    icon: GraduationCap,
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-subtle">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-slide-up">
            <p className="text-primary font-medium">About Me</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Data Analyst from India Exploring AI & Machine Learning
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm passionate about turning complex data into stories that drive business decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-2xl font-bold text-foreground">My Story</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                My journey into data analytics started with a simple curiosity: how can numbers tell a story? This question led me down a path of continuous learning, from Excel formulas to complex machine learning algorithms.
              </p>
              <p>
                With expertise in Python, SQL, Power BI, and Tableau, I help businesses unlock the value hidden in their data. Every dataset has a story to tell, and my job is to find it and present it in a way that drives action.
              </p>
              <p>
                What sets me apart is my commitment to understanding the business context behind every analysis. I don't just create dashboards—I create decision-making tools. I don't just clean data—I uncover opportunities for improvement.
              </p>
              <p>
                Currently, I'm expanding my skills into Machine Learning, AI, and working with LLM APIs. I believe the future of data analytics lies at the intersection of traditional analytics and artificial intelligence, and I want to be at the forefront of that evolution.
              </p>
            </div>
            <Button asChild variant="outline" size="lg">
              <a href="#">
                <Download className="mr-2 h-5 w-5" />
                Download My Resume
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-10 text-center">My Journey</h2>
            <div className="space-y-8">
              {journey.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                      <item.icon className="h-6 w-6" />
                    </div>
                    {index < journey.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <span className="text-sm text-primary font-medium">{item.year}</span>
                    <h3 className="text-lg font-bold text-foreground mt-1">{item.title}</h3>
                    <p className="text-muted-foreground mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-10 text-center">Skills & Expertise</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="bg-card rounded-lg border border-border p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-accent/50 rounded-lg text-center">
              <p className="text-foreground font-medium">
                🚀 Currently Expanding: AI, Machine Learning, Cloud Deployment (AWS/Azure), Advanced Statistical Modeling
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Work Together?"
        subtitle="Let's discuss how my skills can help solve your business challenges."
      />
    </Layout>
  );
}
