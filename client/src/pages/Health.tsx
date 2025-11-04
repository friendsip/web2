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
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-4">
                  Because they care about patient wellness.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Medical device software demands the highest standards. Mutation testing validates development processes and detects faults that traditional testing methods miss.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-12">
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="text-xl font-bold mb-3">Key Challenges:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• FDA/CE regulatory compliance</li>
                    <li>• Patient safety assurance</li>
                    <li>• Medical device reliability</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="text-xl font-bold mb-3">How ArcMutate Helps:</h3>
                  <p className="text-sm text-muted-foreground">
                    Medical device manufacturers rely on ArcMutate to validate development processes and ensure patient safety. Our testing detects faults that traditional testing methods miss.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg border mt-12">
                <h3 className="text-xl font-bold mb-4">About Mutation Testing</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Mutation testing adds errors (mutations) to code to ensure your tests are robust enough to catch real production failures. The process is similar to how medical companies stress-test materials and processes to find defects before they reach patients. ArcMutate smooths that process making life easier for developers and making them more efficient.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border mt-12">
                <h3 className="text-lg font-bold mb-2">Case Study</h3>
                <p className="text-sm text-muted-foreground">
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
