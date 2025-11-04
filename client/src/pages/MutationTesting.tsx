import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle2, Code2, Zap, Shield, TrendingUp } from "lucide-react";

export default function MutationTesting() {
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
      <section className="flex-1 py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-8">
              Understanding Mutation Testing
            </h1>

            {/* What is Mutation Testing */}
            <Card className="border-2 mb-12">
              <CardHeader>
                <CardTitle className="text-2xl">What is Mutation Testing?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  Mutation testing is a form of software testing where deliberate changes (mutations) are introduced into your code to verify that your test suite can detect them. It's a technique used to evaluate the quality and effectiveness of your tests.
                </p>
                <p className="text-lg text-muted-foreground">
                  Rather than asking "Does my code work?", mutation testing asks "Are my tests good enough to catch bugs if they exist?" It's the difference between testing if a parachute opens and actually checking if it slows your fall.
                </p>
              </CardContent>
            </Card>

            {/* How It Works */}
            <Card className="border-2 mb-12">
              <CardHeader>
                <CardTitle className="text-2xl">How Mutation Testing Works</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">1. Original Code</h4>
                  <p className="text-muted-foreground">
                    You start with your application code and a comprehensive test suite.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">2. Mutation Creation</h4>
                  <p className="text-muted-foreground">
                    The mutation testing tool systematically introduces small changes (mutations) into your code. Common mutations include:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                    <li>Changing comparison operators (e.g., &gt; to &lt;)</li>
                    <li>Modifying mathematical operators (e.g., + to -)</li>
                    <li>Removing boolean conditions</li>
                    <li>Returning different values</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">3. Test Execution</h4>
                  <p className="text-muted-foreground">
                    Your test suite is run against each mutated version of the code.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">4. Evaluation</h4>
                  <p className="text-muted-foreground">
                    If a test fails on the mutated code, the mutation is "killed" (detected). If all tests pass, the mutation "survives" (goes undetected), indicating a gap in test coverage.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Key Concepts */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    Killed Mutant
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A mutation that your tests successfully caught. This is good! It means your tests are doing their job.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-600" />
                    Surviving Mutant
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A mutation that your tests failed to catch. This is a gap in your test suite that needs to be addressed.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    Mutation Score
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    The percentage of mutations killed by your tests. A higher score indicates more effective tests.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-purple-600" />
                    Equivalent Mutant
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A mutation that doesn't change program behavior (e.g., removing an unused variable). These can't be killed by tests.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Why It Matters */}
            <Card className="border-2 mb-12">
              <CardHeader>
                <CardTitle className="text-2xl">Why Mutation Testing Matters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      Beyond Code Coverage
                    </h4>
                    <p className="text-muted-foreground">
                      Code coverage tells you which lines were executed, but not whether your tests actually verify correct behavior. Mutation testing fills this gap.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      Quality Assurance
                    </h4>
                    <p className="text-muted-foreground">
                      Identifies weak tests that pass even when bugs are introduced, helping you write stronger, more effective tests.
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-primary" />
                      Reduce Defects
                    </h4>
                    <p className="text-muted-foreground">
                      Better tests catch more bugs before they reach production, reducing costly defects and maintenance issues.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      Confidence
                    </h4>
                    <p className="text-muted-foreground">
                      High mutation scores give you confidence that your tests truly protect your code from real-world failures.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Real-World Example */}
            <Card className="border-2 mb-12 bg-gradient-to-br from-blue-50 to-blue-100/50">
              <CardHeader>
                <CardTitle className="text-2xl">Real-World Example</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground font-semibold">Consider this simple banking function:</p>
                <div className="bg-white p-4 rounded border border-blue-200 font-mono text-sm">
                  <p className="text-blue-900">function processTransfer(amount, balance) {'{'}</p>
                  <p className="text-blue-900 ml-4">if (amount &gt; 0 &amp;&amp; balance &gt;= amount) {'{'}</p>
                  <p className="text-blue-900 ml-8">return balance - amount;</p>
                  <p className="text-blue-900 ml-4">{'}'}</p>
                  <p className="text-blue-900 ml-4">return balance;</p>
                  <p className="text-blue-900">{'}'}</p>
                </div>
                <p className="text-muted-foreground">
                  Your tests might have 100% code coverage, but a mutation test could change &gt; to &lt; in the first condition. If your tests don't catch this, you've found a critical gap—the function would now allow negative transfers!
                </p>
              </CardContent>
            </Card>

            {/* Common Misconceptions */}
            <Card className="border-2 mb-12">
              <CardHeader>
                <CardTitle className="text-2xl">Common Misconceptions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-bold text-lg mb-2">❌ "100% code coverage = good tests"</p>
                  <p className="text-muted-foreground">
                    Code coverage only measures which lines were executed, not whether they were properly tested. Mutation testing measures how well your tests verify behavior.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-lg mb-2">❌ "Mutation testing replaces other testing"</p>
                  <p className="text-muted-foreground">
                    Mutation testing complements unit tests, integration tests, and other testing approaches. It evaluates test quality rather than replacing them.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-lg mb-2">❌ "Mutation testing is only for mission-critical code"</p>
                  <p className="text-muted-foreground">
                    While especially valuable for safety-critical systems, mutation testing benefits any codebase by improving test quality and catching subtle bugs.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Getting Started */}
            <Card className="border-2 mb-12 bg-gradient-to-br from-green-50 to-green-100/50">
              <CardHeader>
                <CardTitle className="text-2xl">Getting Started with ArcMutate</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  ArcMutate makes mutation testing easy for Java and Kotlin projects. Built on PiTest, our enterprise platform provides:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Incremental analysis - only test changed code</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Git integration - mutation results in every pull request</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Full Kotlin support - first-class language support</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Advanced analytics - detailed mutation reports</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Link to="/">
                <Button size="lg" className="gap-2">
                  Back to Home
                </Button>
              </Link>
              <Link to="/">
                <Button size="lg" variant="outline">
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
