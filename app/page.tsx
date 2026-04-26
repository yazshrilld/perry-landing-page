import Hero from "@/components/hero";
import Intro from "@/components/intro";
import Services from "@/components/services";
import Partners from "@/components/partners";
import Testimonials from "@/components/testimonials";
import CTA from "@/components/cta";
import Blogs from "@/components/blogs";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main id="top" className="min-h-screen landing-bg">
      <Hero />
      <Intro />
      <Services />
      <Partners />
      <CTA />
      <Testimonials />
      <Blogs />
      <Footer />
    </main>
  );
}
