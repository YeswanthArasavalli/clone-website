export interface Blog {
  id: string;
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  excerpt: string;
  content: string;
}

export const blogsData: Blog[] = [
  {
    id: "power-bi-vs-tableau",
    title: "Power BI vs Tableau: Which is Right for Your Business?",
    date: "2025-11-15",
    readTime: "8 min read",
    tags: ["Dashboards", "Tools", "Analytics"],
    excerpt: "Comparing two industry-leading BI tools to help you choose the right one.",
    content: "# Power BI vs Tableau\n\nBoth tools are powerful. Here's when to use each...\n\nPower BI excels at speed and integration with Microsoft ecosystem.\n\nTableau excels at complex visualizations and polish."
  },
  {
    id: "how-i-clean-messy-data",
    title: "How I Clean Messy Data: A Step-by-Step Guide",
    date: "2025-11-10",
    readTime: "10 min read",
    tags: ["Data Cleaning", "Python", "Tutorial"],
    excerpt: "My practical approach to cleaning 80% of your data pipeline.",
    content: "# Data Cleaning Guide\n\n80% of data work is cleaning and preparing data.\n\nMy cleaning checklist:\n1. Identify and remove duplicates\n2. Handle missing values\n3. Fix data types\n4. Standardize formats\n5. Remove outliers\n6. Validate results"
  },
  {
    id: "beginner-path-to-ml",
    title: "A Beginner's Path to Machine Learning",
    date: "2025-11-05",
    readTime: "12 min read",
    tags: ["Machine Learning", "Career", "Learning"],
    excerpt: "The roadmap I used to transition from analyst to ML engineer.",
    content: "# ML Roadmap\n\n1. Master Python fundamentals\n2. Learn data science basics (Pandas, NumPy)\n3. Understand statistics and probability\n4. Study supervised learning\n5. Practice with real datasets\n6. Build and share projects"
  }
];

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogsData.find(b => b.id === slug);
}
