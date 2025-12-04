import { useParams, Navigate, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { getBlogPostBySlug } from "@/data/blog";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const renderContent = () => {
    return post.content.map((section, index) => {
      switch (section.type) {
        case "heading":
          return (
            <h2 key={index} className="text-2xl font-bold text-foreground mt-10 mb-4">
              {section.content}
            </h2>
          );
        case "paragraph":
          return (
            <p key={index} className="text-muted-foreground leading-relaxed mb-4">
              {section.content}
            </p>
          );
        case "list":
          return (
            <ul key={index} className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
              {section.items?.map((item, i) => (
                <li key={i} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          );
        case "code":
          return (
            <pre key={index} className="bg-secondary/50 rounded-lg p-4 overflow-x-auto mb-4 text-sm">
              <code className="text-foreground">{section.content}</code>
            </pre>
          );
        case "quote":
          return (
            <blockquote key={index} className="border-l-4 border-primary pl-4 italic text-muted-foreground my-6">
              {section.content}
            </blockquote>
          );
        default:
          return null;
      }
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-subtle">
        <div className="container">
          <Link
            to="/blog"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
          
          <div className="max-w-3xl space-y-6 animate-slide-up">
            <span className="inline-block px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container">
          <article className="max-w-3xl mx-auto prose prose-lg">
            {renderContent()}
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Need Help Implementing This?
            </h2>
            <p className="text-muted-foreground">
              I can help your business apply these concepts and achieve real results with your data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">
                  Let's Discuss
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="hero-outline" size="lg">
                <Link to="/services">View My Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
