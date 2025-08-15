import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Crown, Zap } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$29",
      period: "/month",
      description: "Perfect for beginners starting their English journey",
      icon: <Zap className="w-6 h-6" />,
      features: [
        "Access to basic courses",
        "Weekly progress reports",
        "Community forum access",
        "Mobile app access",
        "Email support"
      ],
      popular: false,
      buttonText: "Get Started"
    },
    {
      name: "Pro",
      price: "$59",
      period: "/month",
      description: "Ideal for serious learners who want comprehensive features",
      icon: <Crown className="w-6 h-6" />,
      features: [
        "All Basic features",
        "Advanced courses & materials",
        "1-on-1 tutoring sessions (2/month)",
        "Personalized learning path",
        "Priority support",
        "Certificate of completion",
        "Practice tests & assessments"
      ],
      popular: true,
      buttonText: "Choose Pro"
    },
    {
      name: "Premium",
      price: "$99",
      period: "/month",
      description: "Complete mastery package for professional development",
      icon: <Crown className="w-6 h-6" />,
      features: [
        "All Pro features",
        "Unlimited 1-on-1 tutoring",
        "Business English specialization",
        "IELTS/TOEFL exam preparation",
        "Native speaker conversation practice",
        "Custom curriculum design",
        "24/7 premium support",
        "Job placement assistance"
      ],
      popular: false,
      buttonText: "Go Premium"
    }
  ];

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      {/* Background blur effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-blur rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-blur rounded-full blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Choose Your Learning Path
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select the perfect plan for your English learning journey. All plans include access to our proven methodology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative shadow-card hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular ? 'ring-2 ring-primary scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-6">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  plan.popular ? 'bg-gradient-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  {plan.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full py-6 text-lg font-medium transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-primary hover:shadow-glow animate-glow' 
                      : 'hover:bg-gradient-primary hover:shadow-glow'
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-4">
            All plans come with a 30-day money-back guarantee
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span>✓ No setup fees</span>
            <span>✓ Cancel anytime</span>
            <span>✓ Instant access</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;