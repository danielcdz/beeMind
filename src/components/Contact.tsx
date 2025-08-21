import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Contact = () => {
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: actionCardsRef, isVisible: actionCardsVisible } = useScrollAnimation();
  const { elementRef: contactInfoRef, isVisible: contactInfoVisible } = useScrollAnimation();
  const { elementRef: faqRef, isVisible: faqVisible } = useScrollAnimation();
      return (
      <section ref={sectionRef} id="contact" className="py-20 relative overflow-hidden">
        {/* Background blur effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-blur rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-blur rounded-full blur-3xl opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div ref={headerRef} className={`text-center mb-16 animate-fade-in ${headerVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para ayudarte, contáctanos y te ayudaremos a empezar tu viaje de aprendizaje de inglés.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Action Buttons */}
          <div ref={actionCardsRef} className={`grid md:grid-cols-2 gap-6 mb-12 ${actionCardsVisible ? 'visible' : ''}`}>
            <Card className={`shadow-card hover:shadow-glow transition-all duration-300 bg-card/80 backdrop-blur-sm animate-slide-in-left animate-stagger-1 ${actionCardsVisible ? 'visible' : ''}`}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">WhatsApp</h3>
                <p className="text-muted-foreground mb-6">
                  Envíanos un mensaje directo por WhatsApp para obtener respuestas rápidas
                </p>
                <Button 
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 hover:shadow-glow transition-all duration-300 py-6 text-lg text-white"
                  onClick={() => window.open('https://wa.me/50672926155?text=¡Hola! Me interesa aprender inglés con BeeMind', '_blank')}
                >
                  Enviar WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className={`shadow-card hover:shadow-glow transition-all duration-300 bg-card/80 backdrop-blur-sm animate-slide-in-right animate-stagger-2 ${actionCardsVisible ? 'visible' : ''}`}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground mx-auto mb-4">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Email</h3>
                <p className="text-muted-foreground mb-6">
                  Envíanos un email con tus preguntas sobre nuestros cursos
                </p>
                <Button 
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 py-6 text-lg text-white"
                  onClick={() => window.open('mailto:info@beemind.com?subject=Consulta sobre cursos de inglés', '_blank')}
                >
                  Enviar Email
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div ref={contactInfoRef} className={`grid md:grid-cols-2 gap-6 max-w-2xl mx-auto ${contactInfoVisible ? 'visible' : ''}`}>
            <Card className={`shadow-card bg-card/80 backdrop-blur-sm animate-fade-in animate-stagger-1 ${contactInfoVisible ? 'visible' : ''}`}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Email</h3>
                    <p className="text-muted-foreground">beemindenglish@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className={`shadow-card bg-card/80 backdrop-blur-sm animate-fade-in animate-stagger-2 ${contactInfoVisible ? 'visible' : ''}`}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Teléfono</h3>
                    <p className="text-muted-foreground">+506 7292-6155</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <div ref={faqRef} className={`mt-12 ${faqVisible ? 'visible' : ''}`}>
            <Card className={`shadow-card bg-gradient-primary text-primary-foreground animate-scale-in ${faqVisible ? 'visible' : ''}`}>
              <CardContent className="p-8">
                <h3 className="font-bold text-2xl mb-6 text-center">Preguntas Frecuentes</h3>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <p className="font-medium mb-2">¿Qué niveles ofrecen?</p>
                    <p className="opacity-90">Ofrecemos todos los niveles desde principiante hasta avanzado.</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">¿Cómo son las clases?</p>
                    <p className="opacity-90">Las clases son individuales, y se llevan a cabo en un horario flexible, para que puedas elegir el horario que mejor te convenga.</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">¿Puedo cambiar de plan?</p>
                    <p className="opacity-90">¡Absolutamente! Puedes cambiar de plan en cualquier momento.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;