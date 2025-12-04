import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";
import { 
  Database, BarChart3, PieChart, Brain, Cog, ArrowRight,
  CheckCircle, MessageCircle
} from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Data Cleaning & Preparation",
    description: "Transform messy, inconsistent data into clean, structured datasets ready for analysis.",
    example: "Converting 50k rows of customer data with missing values into a clean database.",
    features: [
      "Handle missing values and duplicates",
      "Standardize formats and data types",
      "Validate data quality and integrity",
      "Document transformation processes"
    ]
  },
  {
    icon: BarChart3,
    title: "Exploratory Data Analysis & Insights",
    description: "Uncover patterns, trends, and actionable insights from your data through statistical analysis.",
    example: "Identifying top revenue-driving products and customer segments.",
    features: [
      "Statistical summary and profiling",
      "Correlation and trend analysis",
      "Anomaly and outlier detection",
      "Actionable insight reports"
    ]
  },
  {
    icon: PieChart,
    title: "Dashboards & Business Reports",
    description: "Create interactive dashboards and comprehensive reports using Power BI, Tableau, or Excel.",
    example: "Real-time sales dashboard with KPIs and trend analysis.",
    features: [
      "Interactive Power BI/Tableau dashboards",
      "Executive-level summary reports",
      "KPI tracking and monitoring",
      "Automated data refresh setup"
    ]
  },
  {
    icon: Brain,
    title: "Predictive Analysis & Basic ML",
    description: "Apply machine learning techniques for forecasting and predictive modeling.",
    example: "Sales forecasting model to predict next quarter's revenue.",
    features: [
      "Regression and classification models",
      "Customer segmentation (clustering)",
      "Demand and sales forecasting",
      "Model evaluation and optimization"
    ]
  },
  {
    icon: Cog,
    title: "Automation & AI Assistance",
    description: "Automate repetitive tasks using Python scripts, APIs, and AI tools to save time.",
    example: "Automated report generation sent to stakeholders every Monday.",
    features: [
      "Python automation scripts",
      "Scheduled report generation",
      "API integration and data pipelines",
      "AI-assisted data processing"
    ]
  }
];

const process = [
  {
    step: 1,
    title: "Discovery Call",
    description: "We discuss your business needs, data sources, and goals to understand the scope of work."
  },
  {
    step: 2,
    title: "Proposal & Timeline",
    description: "I provide a detailed proposal with deliverables, timeline, and transparent pricing."
  },
  {
    step: 3,
    title: "Data Access & Analysis",
    description: "You share access to your data, and I begin the analysis or development work."
  },
  {
    step: 4,
    title: "Delivery & Training",
    description: "I deliver the final solution with documentation and training for your team."
  },
  {
    step: 5,
    title: "Ongoing Support",
    description: "Optional continued support for updates, maintenance, or new projects."
  }
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-subtle">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-slide-up">
            <p className="text-primary font-medium">What I Offer</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Comprehensive Data Solutions
            </h1>
            <p className="text-lg text-muted-foreground">
              Tailored services to help your business unlock the value in your data
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border p-8 hover:shadow-lg transition-shadow"
              >
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground">{service.title}</h2>
                    </div>
                    <p className="text-muted-foreground">{service.description}</p>
                    <div className="p-4 bg-accent/50 rounded-lg">
                      <p className="text-sm text-foreground">
                        <strong>Example:</strong> {service.example}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-4">What's Included:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="default" className="w-full mt-6">
                      <Link to="/contact">
                        Request Service
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">How I Work</h2>
            <div className="grid md:grid-cols-5 gap-4">
              {process.map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Not Sure */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto bg-card rounded-xl border border-border p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Not Sure What You Need?</h2>
            <p className="text-muted-foreground mb-6">
              Let's talk about your data challenges. I'll recommend the best solution for your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">
                  Contact Me
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="hero-outline" size="lg">
                <a href="https://wa.me/+918500251322" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
