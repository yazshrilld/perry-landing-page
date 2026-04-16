import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FeatureCard } from "@/components/feature-card";
import { ServiceCard } from "@/components/service-card";
import { StatCard } from "@/components/stat-card";
import { Newsletter } from "@/components/newsletter";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section - Reduced Height */}
      <section className="w-full py-8 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="flex h-full">
            <div className="w-1/2 bg-white"></div>
            <div className="w-1/2 bg-green-50"></div>
          </div>
        </div>
        <div className="container mx-auto px-8 md:px-12 lg:px-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-6 z-10">
              <div className="inline-flex items-center rounded-full border border-green-200 bg-white px-3 py-1 text-sm text-green-600">
                <span className="mr-1">•</span> Financial Solutions
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-gray-900 font-montserrat">
                Chase Your Dream with us
              </h1>
              <p className="text-lg text-gray-600 max-w-md">
                We provide tailored financial solutions to help you achieve your goals, whether it's buying a home, a
                car, or growing your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <button className="px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors">
                  Apply Online
                </button>
                <button className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                  Loan Calculator
                </button>
              </div>
            </div>
            <div className="relative h-[400px] w-full">
              {/* Floating Cards - Repositioned and made straight */}
              {/* Car Loan Card - Positioned at the center between two halves */}
              <div className="absolute top-1/4 left-0 z-20 bg-white rounded-lg shadow-md p-4 flex items-center gap-3 transform -translate-x-1/2">
                <div className="p-2 rounded-full bg-green-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                  </svg>
                </div>
                <span className="font-medium">Car Loans</span>
              </div>
              <div className="absolute bottom-1/4 right-10 z-20 bg-white rounded-lg shadow-md p-4 flex items-center gap-3">
                <div className="p-2 rounded-full bg-green-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <span className="font-medium">Home Loan</span>
              </div>

              {/* Safe illustration instead of the problematic image */}
              <div className="absolute inset-0 flex items-end justify-center">
                <div className="relative w-[350px] h-[300px]">
                  <svg viewBox="0 0 400 350" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <rect x="50" y="50" width="300" height="250" rx="20" fill="#e6f7ec" />
                    <circle cx="200" cy="120" r="50" fill="#16a34a" opacity="0.2" />
                    <rect x="150" y="200" width="100" height="80" rx="10" fill="#16a34a" opacity="0.3" />
                    <path d="M150,200 L250,200 L200,150 Z" fill="#16a34a" opacity="0.4" />
                    <circle cx="200" cy="120" r="25" fill="#16a34a" opacity="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - All Green Icons */}
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Creating Extraordinary Customer Experience</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon="sparkles"
              title="Creative Solutions"
              description="Innovative approaches to solve complex business challenges"
              iconColor="text-green-700"
            />
            <FeatureCard
              icon="chart-bar"
              title="Data Analytics"
              description="Insights-driven strategies to optimize your business performance"
              iconColor="text-green-600"
            />
            <FeatureCard
              icon="users"
              title="Customer Focus"
              description="Putting your customers at the center of everything we do"
              iconColor="text-green-700"
            />
            <FeatureCard
              icon="globe"
              title="Global Reach"
              description="Connecting your business to worldwide opportunities"
              iconColor="text-green-600"
            />
            <FeatureCard
              icon="light-bulb"
              title="Innovation"
              description="Cutting-edge solutions that keep you ahead of the competition"
              iconColor="text-green-700"
            />
            <FeatureCard
              icon="shield-check"
              title="Reliable Security"
              description="Protecting your business with advanced security measures"
              iconColor="text-green-600"
            />
            <FeatureCard
              icon="clock"
              title="24/7 Support"
              description="Round-the-clock assistance whenever you need it"
              iconColor="text-green-700"
            />
            <FeatureCard
              icon="currency-dollar"
              title="Cost Effective"
              description="Maximum value with optimized resource allocation"
              iconColor="text-green-600"
            />
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="w-full py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h3 className="text-xl font-medium text-gray-500">TRUSTED PARTNERS</h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="w-24 h-12 relative grayscale hover:grayscale-0 transition-all">
              <Image src="/placeholder.svg?height=48&width=96" alt="Partner 1" fill className="object-contain" />
            </div>
            <div className="w-24 h-12 relative grayscale hover:grayscale-0 transition-all">
              <Image src="/placeholder.svg?height=48&width=96" alt="Partner 2" fill className="object-contain" />
            </div>
            <div className="w-24 h-12 relative grayscale hover:grayscale-0 transition-all">
              <Image src="/placeholder.svg?height=48&width=96" alt="Partner 3" fill className="object-contain" />
            </div>
            <div className="w-24 h-12 relative grayscale hover:grayscale-0 transition-all">
              <Image src="/placeholder.svg?height=48&width=96" alt="Partner 4" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Pick of a Glance Section */}
      <section className="w-full py-12 md:py-24 bg-black text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] w-full">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Plant sprouting from soil"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl font-bold">PICK AT A GLANCE</h2>
              <p className="text-lg text-gray-300">
                We believe in sustainable growth that nurtures both your business and the environment. Our approach
                combines innovation with responsibility, ensuring that your success contributes to a better world for
                future generations.
              </p>
              <p className="text-lg text-gray-300">
                With our expertise and dedication, we help you plant the seeds of success and watch them grow into
                thriving enterprises that make a positive impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard image="/placeholder.svg?height=200&width=300" title="Digital Marketing" category="Marketing" />
            <ServiceCard image="/placeholder.svg?height=200&width=300" title="Web Development" category="Tech" />
            <ServiceCard image="/placeholder.svg?height=200&width=300" title="Brand Strategy" category="Branding" />
            <ServiceCard image="/placeholder.svg?height=200&width=300" title="Content Creation" category="Media" />
          </div>
        </div>
      </section>

      {/* Stats Section - Changed Pink to Green */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our best results for the year</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard value="97.8" unit="%" description="Client satisfaction rate" color="text-green-600" />
            <StatCard value="0.99" unit="%" description="Error rate reduction" color="text-green-700" />
            <StatCard value="388.7" unit="%" description="ROI for our clients" color="text-green-600" />
            <StatCard value="50.4" unit="k+" description="Projects completed" color="text-green-700" />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />

      <Footer />
    </main>
  );
}
