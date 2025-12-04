export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  problem: string;
  role: string;
  tools: string[];
  approach: {
    data: string;
    methods: string;
    outputs: string;
  };
  impact: string[];
  images: string[];
  codeLink: string;
}

export const projectsData: Project[] = [
  {
    id: "sales-performance-dashboard",
    title: "Sales Performance Dashboard",
    subtitle: "Real-time sales analytics with Power BI",
    tags: ["Data Analysis", "Power BI", "Dashboard"],
    description: "Built a comprehensive sales dashboard for tracking KPIs across regions.",
    problem: "Client needed to reduce reporting time for sales KPIs from 2 hours daily to automated real-time updates.",
    role: "Data Analyst",
    tools: ["Python", "SQL", "Power BI", "Excel"],
    approach: {
      data: "2 years of sales data across 5 regions (500K+ records).",
      methods: "EDA, aggregation, trend analysis, created automated ETL pipeline.",
      outputs: "Interactive Power BI dashboard with real-time updates."
    },
    impact: [
      "75% reduction in reporting time",
      "10+ hours saved per week",
      "Real-time visibility into sales metrics"
    ],
    images: ["/projects/sales-1.png"],
    codeLink: "https://github.com"
  },
  {
    id: "retail-product-image-recognition",
    title: "Retail Product Image Recognition",
    subtitle: "AI-powered product detection system",
    tags: ["Computer Vision", "Deep Learning"],
    description: "Automated product detection using CNN.",
    problem: "Manual product tagging was taking 8 hours/day.",
    role: "ML Engineer",
    tools: ["Python", "TensorFlow", "OpenCV"],
    approach: {
      data: "5000+ product images across 50 categories.",
      methods: "CNN with transfer learning (ResNet50).",
      outputs: "Web app with 95%+ accuracy."
    },
    impact: [
      "95% accuracy on detection",
      "Reduced tagging from 8 hours to 15 minutes",
      "Saved 30+ hours per week"
    ],
    images: ["/projects/retail-1.png"],
    codeLink: "https://github.com"
  },
  {
    id: "customer-segmentation-analysis",
    title: "Customer Segmentation Analysis",
    subtitle: "ML-based customer clustering",
    tags: ["Machine Learning", "Clustering"],
    description: "Segmented 50K+ customers into actionable clusters.",
    problem: "Marketing team needed data-driven customer segments.",
    role: "Data Scientist",
    tools: ["Python", "Scikit-learn", "Pandas"],
    approach: {
      data: "50K customer records with behavior and purchase history.",
      methods: "K-Means clustering, RFM analysis.",
      outputs: "5 customer segments with insights."
    },
    impact: [
      "Identified 5 distinct segments",
      "25% increase in marketing ROI",
      "15% improvement in retention"
    ],
    images: ["/projects/segment-1.png"],
    codeLink: "https://github.com"
  },
  {
    id: "automated-reporting-system",
    title: "Automated Reporting System",
    subtitle: "Scheduled reports delivered daily",
    tags: ["Automation", "ETL"],
    description: "End-to-end automation of weekly reporting.",
    problem: "Manual report creation took 3 hours weekly.",
    role: "Data Engineer",
    tools: ["Python", "Apache Airflow", "SQL"],
    approach: {
      data: "Multiple data sources (SQL DB, APIs, CSVs).",
      methods: "ETL automation with Airflow.",
      outputs: "Automated reports emailed every Monday 8 AM."
    },
    impact: [
      "Eliminated 3 hours manual work weekly",
      "100% error reduction",
      "12 hours saved annually"
    ],
    images: ["/projects/automation-1.png"],
    codeLink: "https://github.com"
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find(p => p.id === slug);
}
