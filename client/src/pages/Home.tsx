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
} from "lucide-react";

export default function Home() {
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
        "Medical device software demands the highest standards. Mutation testing validates development processes and detects faults that traditional testing methods miss.",
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
            <svg width="32" height="26" viewBox="0 0 28 22" xmlns="http://www.w3.org/2000/svg">
              <g stroke-width="2" stroke-linecap="round" transform="translate(-13,-19)">
                <line x1="20" y1="20" x2="30" y2="30" stroke="#3b82f6" />
                <line x1="30" y1="20" x2="40" y2="30" stroke="#3b82f6" />
                <line x1="20" y1="30" x2="30" y2="40" stroke="#3b82f6" />
                <line x1="40" y1="30" x2="30" y2="40" stroke="#3b82f6" />
              </g>
              <g transform="translate(-13,-19)">
                <path d="m 15,25 h 5 l 5,5 5,5 5,-5 -5,-5 -5,-5" stroke-width="2" stroke="#3b82f6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
                <circle cx="15" cy="25" r="2" fill="#3b82f6" />
              </g>
            </svg>
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
              href="#industries"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Industries
            </a>
            <a
              href="#features"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Features
            </a>
            <a
              href="#company"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Company
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Pricing
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
              What is Mutation Testing?
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: Shield,
                title: "Improved Test Quality",
                desc: "Identify weak spots in your test suite before they become production issues",
              },
              {
                icon: CheckCircle2,
                title: "Regulatory Compliance",
                desc: "Improve the quality of your tests to help you meet critical safety standards",
              },
              {
                icon: TrendingUp,
                title: "Cost Savings",
                desc: "Reduce debugging time and prevent costly recalls or security breaches",
              },
              {
                icon: Zap,
                title: "Faster Releases",
                desc: "Ship with confidence knowing your tests actually protect your code",
              },
            ].map((benefit, idx) => (
              <Card
                key={idx}
                className="border-2 hover:border-primary/50 transition-colors"
              >
                <CardHeader>
                  <benefit.icon className="w-10 h-10 text-primary mb-2" />
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {benefit.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border">
            <div className="grid md:grid-cols-2 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">
                  Weeks
                </div>
                <p className="text-sm text-muted-foreground">
                  Saved in development time per project
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">
                  17+ Years
                </div>
                <p className="text-sm text-muted-foreground">
                  Of proven mutation testing expertise with PiTest
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Enterprise-Grade Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built on PiTest, the world's most popular open-source mutation
              testing framework
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: GitBranch,
                title: "Git Integration",
                desc: "Seamlessly integrate with GitHub, GitLab, Bitbucket, and Azure DevOps. Mutation testing in every pull request.",
                benefit: "Catch defects before merge",
              },
              {
                icon: Zap,
                title: "Incremental Analysis",
                desc: "Only analyze new or changed code. Save hours of developer time with intelligent incremental testing.",
                benefit: "10x faster analysis",
              },
              {
                icon: Code2,
                title: "Kotlin Support",
                desc: "First-class Kotlin support brings mutation testing to the JVM's fastest-growing language.",
                benefit: "Full JVM coverage",
              },
              {
                icon: Shield,
                title: "Subsumption Analysis",
                desc: "Advanced analysis removes redundant mutants, reducing analysis time while maintaining quality.",
                benefit: "Faster, smarter testing",
              },
              {
                icon: Award,
                title: "Extended Mutation Operators",
                desc: "More mutation operators than standard PiTest, catching edge cases other tools miss.",
                benefit: "Comprehensive coverage",
              },
              {
                icon: CheckCircle2,
                title: "Easy Setup",
                desc: "Available on Maven Central. Just add a license file and you're ready to go with Maven or Gradle.",
                benefit: "5-minute integration",
              },
            ].map((feature, idx) => (
              <Card
                key={idx}
                className={`hover:shadow-lg transition-shadow ${[0, 1, 2, 3, 4, 5].includes(idx) ? '!bg-transparent' : ''}`}
                style={[0, 1, 2, 3, 4, 5].includes(idx) ? {
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.70), rgba(255,255,255,0.70)), url(${idx === 0 ? '/git-integration.png' : idx === 1 ? '/tiny-logo-arcmutate.svg' : idx === 2 ? '/logo-kotlin.svg' : idx === 3 ? '/tiny-logo-arcmutate.svg' : idx === 4 ? '/operators.png' : '/maven-logo.svg'})`,
                  backgroundSize: '300px 300px',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                } : {}}
              >
                <CardHeader>
                  <feature.icon className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>{feature.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit">
                    {feature.benefit}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-muted-foreground">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section
        id="company"
        className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5"
      >
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Built by the Creators of PiTest
              </h2>
              <p className="text-xl text-muted-foreground">
                17 years of mutation testing expertise, trusted by academia and
                industry worldwide
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <Users className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Henry Coles</CardTitle>
                  <CardDescription>Creator of PiTest</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Henry created PiTest over 17 years ago and continues to lead
                    mutation testing innovation. PiTest remains the world's most
                    popular mutation testing system for the JVM.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Mark Trudinger</CardTitle>
                  <CardDescription>
                    CEO, Cloud Development Group
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Mark leads ArcMutate's mission to bring advanced mutation
                    testing to professional teams, combining enterprise needs
                    with open-source values.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  ArcMutate extends the open-source PiTest framework with
                  enterprise features that professional teams need: Git
                  integration, Kotlin support, incremental analysis, and
                  advanced subsumption. We remain committed to the open-source
                  community while providing the tools that help organizations
                  ship safer, more reliable software.
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <Button variant="outline" className="gap-2">
                    Visit PiTest.org <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Trusted by Development Teams
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2">
              <CardContent className="pt-6">
                <p className="text-lg mb-4 italic">
                  "By automating a time consuming task, ArcMutate has allowed
                  the teams at Insights to focus on the quality of our software.
                  We feel safe deploying, knowing our code is correct."
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
                  "ArcMutate helps me to catch bugs I didn't know were there,
                  before they're even released. The integration with GitHub pull
                  requests makes it super easy to work with, too."
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

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              Start with a free trial or contact us for enterprise pricing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Base",
                price: "$8",
                period: "per user/month",
                features: [
                  "Extended mutation operators",
                  "Subsumption analysis",
                  "Test statistics",
                  "Maven & Gradle support",
                  "Community support",
                ],
              },
              {
                name: "Kotlin",
                price: "$9",
                period: "per user/month",
                features: [
                  "Everything in Base",
                  "Full Kotlin support",
                  "Kotlin bytecode analysis",
                  "Priority support",
                ],
                popular: true,
              },
              {
                name: "Pro",
                price: "$12",
                period: "per user/month",
                features: [
                  "Everything in Kotlin",
                  "Spring framework support",
                  "Git integration",
                  "GitHub/GitLab/Bitbucket/Azure",
                  "Incremental analysis",
                  "Priority support",
                ],
              },
            ].map((plan, idx) => (
              <Card
                key={idx}
                className={`${plan.popular ? "border-2 border-primary shadow-xl" : ""} relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary">Most Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">
                      /{plan.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Need enterprise licensing or need to pay by invoice?
            </p>
            <Button size="lg" variant="outline">
              Contact Sales
            </Button>
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-br from-secondary/10 to-primary/10 border-2">
              <CardContent className="pt-6">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Free for Open Source</h3>
                <p className="text-muted-foreground">
                  We provide free licenses for open-source projects. Contact us
                  to learn more.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Improve Your Software Quality?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join leading organizations in automotive, finance, and healthcare
            who trust ArcMutate to protect their mission-critical software.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary" className="gap-2">
              Start a Pilot <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              Request a Demo
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
                <svg width="32" height="26" viewBox="0 0 28 22" xmlns="http://www.w3.org/2000/svg">
                  <g stroke-width="2" stroke-linecap="round" transform="translate(-13,-19)">
                    <line x1="20" y1="20" x2="30" y2="30" stroke="#3b82f6" />
                    <line x1="30" y1="20" x2="40" y2="30" stroke="#3b82f6" />
                    <line x1="20" y1="30" x2="30" y2="40" stroke="#3b82f6" />
                    <line x1="40" y1="30" x2="30" y2="40" stroke="#3b82f6" />
                  </g>
                  <g transform="translate(-13,-19)">
                    <path d="m 15,25 h 5 l 5,5 5,5 5,-5 -5,-5 -5,-5" stroke-width="2" stroke="#3b82f6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
                    <circle cx="15" cy="25" r="2" fill="#3b82f6" />
                  </g>
                </svg>
                <span className="text-lg font-bold">ArcMutate</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Enterprise mutation testing built on PiTest
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
                  <a href="#pricing" className="hover:text-primary">
                    Pricing
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
              <h4 className="font-semibold mb-4">Industries</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#industries" className="hover:text-primary">
                    Automotive
                  </a>
                </li>
                <li>
                  <a href="#industries" className="hover:text-primary">
                    Financial Services
                  </a>
                </li>
                <li>
                  <a href="#industries" className="hover:text-primary">
                    Healthcare
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#company" className="hover:text-primary">
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
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 ArcMutate. Built by the creators of PiTest.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
