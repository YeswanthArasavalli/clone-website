import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function About() {
  return (
    <>
      <Navigation />
      <section className="py-16 md:py-24 bg-gradient-subtle">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">About Me</h1>
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
