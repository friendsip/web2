import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Bank() {
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
              Why do global banks use ArcMutate?
            </h1>

            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg border-2 border-green-500/20 shadow-lg">
                <h2 className="text-3xl font-bold text-green-600 mb-4">
                  Because they value their customers' security.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Traditional code coverage misses high-severity vulnerabilities. Mutation testing systematically uncovers blind spots in test suites, protecting transactions and data integrity.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-12">
                <div className="bg-white p-6 rounded-lg border-2 border-green-500/20">
                  <h3 className="text-xl font-bold mb-3">Key Challenges:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• High-severity vulnerabilities</li>
                    <li>• Transaction security</li>
                    <li>• Data integrity protection</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg border-2 border-green-500/20">
                  <h3 className="text-xl font-bold mb-3">How ArcMutate Helps:</h3>
                  <p className="text-sm text-muted-foreground">
                    Banks and financial institutions use ArcMutate to uncover security blind spots that 100% code coverage misses. Systematic fault injection reveals vulnerabilities in security-critical domains.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-8 rounded-lg border-2 border-green-300 mt-12">
                <h3 className="text-xl font-bold text-green-900 mb-4">The Analogy</h3>
                <p className="text-base text-green-800 leading-relaxed">
                  Mutation testing is your code's financial stress test. Just as regulators require banks to simulate extreme market conditions and economic crises to prove their systems won't fail customers, mutation testing simulates code failures to prove your tests are resilient enough to catch real bugs in critical financial systems.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-6 rounded-lg border-2 border-green-200 mt-12">
                <h3 className="text-lg font-bold text-green-900 mb-2">Case Study</h3>
                <p className="text-sm text-green-800">
                  Trail of Bits research shows mutation testing is essential for blockchain and financial security applications.
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
