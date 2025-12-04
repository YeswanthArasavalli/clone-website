import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { blogPosts } from "@/data/blog";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function Blog() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-subtle">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Blog</h1>
            <p className="text-lg text-muted-foreground">
              Insights on data analysis, visualization, and emerging technologies
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all group"
              >
                <div className="aspect-video bg-accent/50 flex items-center justify-center">
                  <span className="text-primary font-medium">{post.category}</span>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm">{post.excerpt}</p>
                  <span className="text-primary text-sm font-medium inline-flex items-center">
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
