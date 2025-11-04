import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect, useMemo } from "react";
import { Link } from "wouter";

// Utility function to shuffle array
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
import {
  Shield,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Building2,
  Landmark,
  HeartPulse,
  Code2,
  GitBranch,
  Zap,
  Award,
  Users,
  Clock,
} from "lucide-react";

export default function Home3() {
  const [currentIndustry, setCurrentIndustry] = useState(0);

  const baseIndustries = [
    {
      question: "Why do top car manufacturers use ArcMutate?",
      answer: "Because they care about their drivers' safety.",
      detail:
        "Meeting ISO 26262 compliance and achieving ASIL D safety integrity levels requires rigorous testing that catches every potential fault before it reaches the road.",
      video: "/car.mov",
      poster: "/car.jpg",
      icon: Building2,
      color: "text-blue-600",
      route: "/car",
      buttonLabel: "More info on car safety",
    },
    {
      question: "Why do global banks use ArcMutate?",
      answer: "Because they value their customers' security.",
      detail:
        "Traditional code coverage misses high-severity vulnerabilities. Mutation testing systematically uncovers blind spots in test suites, protecting transactions and data integrity.",
      video: "/bank.mov",
      poster: "/bank.jpg",
      icon: Landmark,
      color: "text-green-600",
      route: "/bank",
      buttonLabel: "More info on bank security",
    },
    {
      question: "Why do leading pharmaceutical companies use ArcMutate?",
      answer: "Because they care about patient wellness.",
      detail:
        "Medical device software demands the highest standards. Mutation testing validates development processes and detects 83.5% of faults versus 57.5% with traditional methods.",
      video: "/health.mov",
      poster: "/health.jpg",
      icon: HeartPulse,
      color: "text-purple-600",
      route: "/health",
      buttonLabel: "More info on medical",
    },
  ];

  // Shuffle industries on component mount for random order
  const industries = useMemo(() => shuffleArray(baseIndustries), []);

  const handleIndustryChange = (index: number) => {
    setCurrentIndustry(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndustry(prev => (prev + 1) % industries.length);
    }, 12000); // 12 seconds to allow users to read
    return () => clearInterval(interval);
  }, [industries.length]);

  const current = industries[currentIndustry];
  const Icon = current.icon;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">ArcMutate</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#benefits"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Benefits
            </a>
            <a
              href="#features"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Features
            </a>
            <Button variant="outline" size="sm">
              Login
            </Button>
            <Button size="sm">Start Free Trial</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Interactive Q&A */}
      <section className="relative h-screen overflow-hidden">
        <video
          src={current.video}
          poster={current.poster}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

        <div className="relative h-full flex flex-col items-center justify-center p-8">
          <div className="max-w-2xl w-full space-y-8 text-center text-white">
            <div className="space-y-6">
              <p className="text-4xl lg:text-5xl font-semibold text-white drop-shadow-lg">
                {current.question}
              </p>
              <p className="text-3xl lg:text-4xl font-bold text-white drop-shadow-lg">
                {current.answer}
              </p>
            </div>

            <div className="flex gap-4 justify-center pt-8">
              <Button size="lg" className="gap-2">
                Start a Pilot <ArrowRight className="w-4 h-4" />
              </Button>
              <Link to={current.route}>
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white">
                  {current.buttonLabel}
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center gap-8 pt-8">
              {industries.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndustry(idx)}
                  className={`h-1 rounded-full transition-all ${
                    idx === currentIndustry
                      ? "w-12 bg-white"
                      : "w-8 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What is Mutation Testing */}
      <section id="benefits" className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              ArcMutate is advanced mutation testing for Java and Kotlin
            </h2>
            <p className="text-xl text-muted-foreground mb-4">
              ArcMutate acts as a crash-test for your software. It deliberately
              introduces tiny faults (mutations) and ensures your tests catch
              them, guaranteeing the safety and reliability your customers
              expect.
            </p>
            <Link to="/mutation-testing">
              <Button variant="link" className="text-primary hover:text-primary/80">
                Learn more about mutation testing →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Save Developer Time",
                description:
                  "Automated mutation analysis identifies test gaps instantly. Incremental testing analyzes only changed code, eliminating hours of manual code review and test validation.",
              },
              {
                icon: CheckCircle2,
                title: "Release with Confidence",
                description:
                  "Modern Java compatibility with full Git integration. Get mutation results in every pull request, enabling fast feedback loops and confident deployments.",
              },
              {
                icon: Shield,
                title: "Refactor without Fear",
                description:
                  "Mutation testing reveals test blind spots that traditional coverage misses. Safely refactor code knowing your tests are comprehensive enough to catch real bugs.",
              },
            ].map((benefit, idx) => (
              <Card key={idx} className="border-2">
                <CardHeader>
                  <benefit.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Features Built In</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need for enterprise-grade mutation testing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: GitBranch,
                title: "Git Integration",
                desc: "GitHub, GitLab, Bitbucket, and Azure DevOps. See mutation results in pull requests automatically.",
              },
              {
                icon: Code2,
                title: "Kotlin Support",
                description: "Full first-class Kotlin support brings mutation testing to JVM's fastest-growing language.",
              },
              {
                icon: Zap,
                title: "Incremental Analysis",
                desc: "Only analyze changed code. Save hours with intelligent incremental testing.",
              },
              {
                icon: Shield,
                title: "Subsumption Analysis",
                desc: "Advanced analysis removes redundant mutants, reducing analysis time significantly.",
              },
              {
                icon: Award,
                title: "Extended Operators",
                desc: "More mutation operators than standard PiTest, catching edge cases others miss.",
              },
              {
                icon: CheckCircle2,
                title: "Easy Setup",
                desc: "Available on Maven Central. Simple integration with Maven or Gradle.",
              },
            ].map((feature, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <feature.icon className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Trusted by Development Teams</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2">
              <CardContent className="pt-6">
                <p className="text-lg mb-4 italic">
                  "By automating a time consuming task, ArcMutate has allowed the
                  teams at Insights to focus on the quality of our software. We feel
                  safe deploying, knowing our code is correct."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Scott Steen</p>
                    <p className="text-sm text-muted-foreground">
                      Lead Software Engineer at Insights
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <p className="text-lg mb-4 italic">
                  "ArcMutate helps me to catch bugs I didn't know were there, before
                  they're even released. The integration with GitHub pull requests
                  makes it super easy to work with, too."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Jan Ouwens</p>
                    <p className="text-sm text-muted-foreground">
                      Senior Developer, Creator of EqualsVerifier
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">
            Improve Your Feedback Loop Today
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get advanced mutation testing for Java and Kotlin. Start your free trial
            and see how ArcMutate transforms your test quality.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary" className="gap-2">
              Start Free Trial <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">ArcMutate</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Advanced mutation testing built on PiTest
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#features" className="hover:text-primary">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="https://pitest.org" className="hover:text-primary">
                    PiTest.org
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 ArcMutate. Built by the creators of PiTest.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
