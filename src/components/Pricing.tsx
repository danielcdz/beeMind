import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Crown, Zap } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basico",
      price: "₡25,000",
      period: "/mes",
      description: "Perfecto para principiantes que quieren empezar su viaje de aprendizaje de inglés",
      icon: <Zap className="w-6 h-6" />,
      features: [
        "Acceso a materiales de ingles basico",
        "1 clase individual por semana",
        "Acceso a foro de la comunidad",
      ],
      popular: false,
      buttonText: "Inicia ahora",
      buttonLink: "https://wa.me/50672926155?text=Hola! Me interesa aprender inglés en BeeMind con el plan basico!"
    },
    {
      name: "Pro",
      price: "₡45,000",
      period: "/mes",
      description: "Ideal para estudiantes que quieren un inglés profesional",
      icon: <Crown className="w-6 h-6" />,
      features: [
        "Acceso a materiales de ingles intermedio",
        "2 clases individuales por semana",
        "Acceso a foro de la comunidad",
        "Acceso a materiales de ingles avanzado",
        "Talleres conversacionales"
      ],
      popular: true,
      buttonText: "Escoge Pro",
      buttonLink: "https://wa.me/50672926155?text=Hola! Me interesa aprender inglés en BeeMind con el plan Pro!"
    },
    {
      name: "Premium",
      price: "₡70,000",
      period: "/mes",
      description: "Plan intensivo para estudiantes que quieren aprender ingles de manera rapida",
      icon: <Crown className="w-6 h-6" />,
      features: [
        "Acceso a materiales de ingles avanzado",
        "3 clases individuales por semana",
        "Acceso a foro de la comunidad",
        "Talleres conversacionales",
        "Seguimiento exclusivo",
        "Materiales didacticos",
      ],
      popular: false,
      buttonText: "Inicia Premium",
      buttonLink: "https://wa.me/50672926155?text=Hola! Me interesa aprender inglés en BeeMind con el plan Premium!"
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
            Elige tu plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Selecciona el plan perfecto para tu viaje de aprendizaje de inglés. Todos los planes incluyen acceso a nuestra metodología probada.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative shadow-card hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2 flex flex-col ${
                plan.popular ? 'ring-2 ring-primary scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    Popular
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

              <CardContent className="pt-0 flex-1 flex flex-col">
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full py-6 text-lg font-medium transition-all duration-300 mt-auto ${
                    plan.popular 
                      ? 'bg-gradient-primary hover:shadow-glow animate-glow' 
                      : 'hover:bg-gradient-primary hover:shadow-glow'
                  }`}
                  onClick={() => window.open(plan.buttonLink, '_blank')}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-4">
            Todos los planes incluyen un 30 días de garantía de devolución de dinero
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span>✓ No hay costos de matricula</span>
            <span>✓ Cancelar en cualquier momento</span>
            <span>✓ Acceso instantáneo</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;