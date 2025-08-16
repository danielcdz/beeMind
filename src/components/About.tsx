import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Clock, HeartHandshake, GraduationCap, Star, Target, Trophy } from "lucide-react";
import teacherStudent from "@/assets/teacher-student.jpg";
import onlineLearning from "@/assets/online-learning.jpg";
import certification from "@/assets/certification.jpg";
const About = () => {
  const features = [{
    icon: <Clock className="w-8 h-8" />,
    title: "Horario flexible",
    description: "En BeeMind tu escoges tu horario ya sea que estudies o trabajes nuestras clases son flexibles y se ajustan a tu agenda."
  }, {
    icon: <HeartHandshake className="w-8 h-8" />,
    title: "Soporte de la comunidad",
    description: "En BeeMind no solo aprendes inglés, también formas parte de una comunidad que te acompaña en cada paso. Conectamos a estudiantes de tu mismo nivel para que practiques, compartas y crezcas junto a otros que, al igual que tú, buscan mejorar y avanzar."
  }, {
    icon: <Users className="w-8 h-8" />,
    title: "Seguimiento personalizado",
    description: "Cada clase es un espacio dedicado solo para ti, donde tu profesor te acompaña en cada paso para que aprendas a hablar inglés de manera efectiva y eficiente."
  }, {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Profesores capacitados",
    description: "Profesores altamante capacitados para enseñar inglés de manera efectiva y eficiente."
  }];
  return <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background blur effects */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-blur rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-blur rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">¿Por qué elegir BeeMind?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A diferencia de otros cursos de inglés, BeeMind se centra en lo que realmente importa: la conversación.
          Con clases 1 a 1 totalmente personalizadas, cada sesión es un espacio dedicado solo a ti y tu profesor, 
          donde practicas el uso real del idioma y ganas confianza hablando desde el primer momento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => <Card key={index} className="text-center shadow-card hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2 bg-card/80 backdrop-blur-sm">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>)}
        </div>

        {/* Feature Images Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="relative mb-6 rounded-xl overflow-hidden shadow-card">
              <img 
                src={teacherStudent} 
                alt="Teacher helping student with English lessons" 
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
            </div>
            <h4 className="text-xl font-bold text-foreground mb-2">Guia profesional</h4>
            <p className="text-muted-foreground">Ingles para tu carrera o trabajo</p>
          </div>
          <div className="text-center">
            <div className="relative mb-6 rounded-xl overflow-hidden shadow-card">
              <img 
                src={onlineLearning} 
                alt="Online English learning with laptop and books" 
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
            </div>
            <h4 className="text-xl font-bold text-foreground mb-2">Apredizaje flexible</h4>
            <p className="text-muted-foreground">Aprende donde y cuando quieras, clases 100% en linea</p>
          </div>
          <div className="text-center">
            <div className="relative mb-6 rounded-xl overflow-hidden shadow-card">
              <img 
                src={certification} 
                alt="English certification and achievement with diploma" 
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
            </div>
            <h4 className="text-xl font-bold text-foreground mb-2">Para todos los niveles</h4>
            <p className="text-muted-foreground">BeeMind es para todos, desde principiantes hasta avanzados</p>
          </div>
        </div>

        {/* Course Levels */}
        <div id="courses" className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-card animate-fade-in">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">
            Nuestros niveles
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground">
                <Star className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">Principiante</h4>
              <p className="text-muted-foreground">
                Aprende los conceptos basicos del idioma, con vocabulario y gramatica basica.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground">
                <Target className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">Intermedio</h4>
              <p className="text-muted-foreground">
                Aprende a hablar con fluidez, desarrolla un ingles profesional.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground">
                <Trophy className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">Avanzado</h4>
              <p className="text-muted-foreground">
                Aprende a hablar como un nativo, lleva tu ingles al siguiente nivel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;