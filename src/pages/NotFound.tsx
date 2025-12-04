import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-lg mx-auto text-center space-y-6">
            <span className="text-8xl font-bold text-gradient">404</span>
            <h1 className="text-3xl font-bold text-foreground">Page Not Found</h1>
            <p className="text-muted-foreground">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild variant="hero">
                <Link to="/">
                  <Home className="mr-2 h-4 w-4" />
                  Go Home
                </Link>
              </Button>
              <Button asChild variant="outline" onClick={() => window.history.back()}>
                <button>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Go Back
                </button>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
