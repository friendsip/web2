import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Health() {
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
              Why do leading pharmaceutical companies use ArcMutate?
            </h1>

            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg border-2 border-purple-500/20 shadow-lg">
                <h2 className="text-3xl font-bold text-purple-600 mb-4">
                  Because they care about patient wellness.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Medical device software demands the highest standards. Mutation testing validates development processes and detects 83.5% of faults versus 57.5% with traditional methods.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-12">
                <div className="bg-white p-6 rounded-lg border-2 border-purple-500/20">
                  <h3 className="text-xl font-bold mb-3">Key Challenges:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• FDA/CE regulatory compliance</li>
                    <li>• Patient safety assurance</li>
                    <li>• Medical device reliability</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg border-2 border-purple-500/20">
                  <h3 className="text-xl font-bold mb-3">How ArcMutate Helps:</h3>
                  <p className="text-sm text-muted-foreground">
                    Medical device manufacturers rely on ArcMutate to validate development processes and ensure patient safety. Our testing detects 83.5% of faults versus 57.5% with traditional methods.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 p-8 rounded-lg border-2 border-purple-300 mt-12">
                <h3 className="text-xl font-bold text-purple-900 mb-4">The Analogy</h3>
                <p className="text-base text-purple-800 leading-relaxed">
                  Think of it as quality control in pharmaceutical manufacturing. At each production stage, companies deliberately stress-test materials and processes to find defects before they reach patients. Similarly, mutation testing deliberately breaks your code to ensure your tests are robust enough to catch real production failures.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 p-6 rounded-lg border-2 border-purple-200 mt-12">
                <h3 className="text-lg font-bold text-purple-900 mb-2">Case Study</h3>
                <p className="text-sm text-purple-800">
                  Medical software study demonstrates mutation testing significantly improves fault detection in TDD environments.
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
