import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Car() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container flex items-center justify-between h-16">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          </Link>
          <span className="text-xl font-bold">ArcMutate</span>
          <div className="w-[100px]"></div>
        </div>
      </nav>

      {/* Content */}
      <section className="flex-1 bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">
              Why do top car manufacturers use ArcMutate?
            </h1>

            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border">
                <h2 className="text-3xl font-bold mb-4">
                  Because they care about their drivers' safety.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Rigorous testing that improves Functional Safety for car software helps catch every potential fault before it reaches the road.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-12">
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="text-xl font-bold mb-3">Key Challenges:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• ASIL D safety integrity</li>
                    <li>• Functional safety requirements</li>
                    <li>• Preventing field failures and recalls</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="text-xl font-bold mb-3">How ArcMutate Helps:</h3>
                  <p className="text-sm text-muted-foreground">
                    ArcMutate helps automotive teams improve Functional Safety for car software by exposing vulnerabilities that traditional coverage metrics miss. Our mutation testing ensures every safety-critical fault is caught before production.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border mt-12">
                <h3 className="text-lg font-bold mb-2">Case Study</h3>
                <p className="text-sm text-muted-foreground">
                  One of the world's formost car manufacturers recently had to delay the release of a prestige car for 8 months because the software had issues. They moved their software production to be fully mutation tested using ArcMutate to improve test and code quality.
                </p>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              <Link to="/">
                <Button size="lg" className="gap-2">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
