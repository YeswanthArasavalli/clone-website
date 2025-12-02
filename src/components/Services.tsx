import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Database, LineChart, LayoutDashboard, Brain, Zap } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: Database,
      title: "Data Cleaning & Preparation",
      description: "Transform messy, inconsistent data into clean, structured datasets ready for analysis.",
      example: "Example: Converting 50k rows of customer data with missing values into a clean database.",
    },
    {
      icon: LineChart,
      title: "Exploratory Data Analysis & Insights",
      description: "Uncover patterns, trends, and actionable insights from your data through statistical analysis.",
      example: "Example: Identifying top revenue-driving products and customer segments.",
    },
    {
      icon: LayoutDashboard,
      title: "Dashboards & Business Reports",
      description: "Create interactive dashboards and comprehensive reports using Power BI, Tableau, or Excel.",
      example: "Example: Real-time sales dashboard with KPIs and trend analysis.",
    },
    {
      icon: Brain,
      title: "Predictive Analysis & Basic ML",
      description: "Apply machine learning techniques for forecasting and predictive modeling.",
      example: "Example: Sales forecasting model to predict next quarter's revenue.",
    },
    {
      icon: Zap,
      title: "Automation & AI Assistance",
      description: "Automate repetitive tasks using Python scripts, APIs, and AI tools to save time.",
      example: "Example: Automated report generation sent to stakeholders every Monday.",
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What I Offer</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive data solutions tailored to your business needs
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="p-6 h-full flex flex-col hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border-t-4 border-t-primary group"
                >
                  <div className="mb-4 flex-grow">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <p className="text-sm text-primary/80 italic">{service.example}</p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full hover:bg-primary hover:text-white transition-colors"
                    onClick={scrollToContact}
                  >
                    Request Service
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center bg-muted/50 p-8 rounded-2xl">
            <p className="text-lg font-medium mb-4">
              Not sure what you need? Let's talk about it.
            </p>
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90"
            >
              Contact Me & I'll Recommend the Best Option
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
