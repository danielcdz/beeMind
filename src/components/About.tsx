import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Award, Clock } from "lucide-react";
import teacherStudent from "@/assets/teacher-student.jpg";
import onlineLearning from "@/assets/online-learning.jpg";
import certification from "@/assets/certification.jpg";
const About = () => {
  const features = [{
    icon: <BookOpen className="w-8 h-8" />,
    title: "Comprehensive Curriculum",
    description: "Our courses cover grammar, vocabulary, pronunciation, and conversation skills with structured learning paths."
  }, {
    icon: <Users className="w-8 h-8" />,
    title: "Expert Instructors",
    description: "Learn from certified native English speakers and experienced ESL teachers with proven track records."
  }, {
    icon: <Award className="w-8 h-8" />,
    title: "Certified Learning",
    description: "Earn internationally recognized certificates upon course completion to boost your career prospects."
  }, {
    icon: <Clock className="w-8 h-8" />,
    title: "Flexible Schedule",
    description: "Study at your own pace with 24/7 access to course materials and live sessions that fit your schedule."
  }];
  return <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background blur effects */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-blur rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-blur rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why Choose BeeMind?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We've helped thousands of students achieve English fluency through our innovative teaching methods, 
            personalized approach, and comprehensive curriculum designed for real-world communication.
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
            <h4 className="text-xl font-bold text-foreground mb-2">Expert Guidance</h4>
            <p className="text-muted-foreground">One-on-one support from certified English teachers</p>
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
            <h4 className="text-xl font-bold text-foreground mb-2">Flexible Learning</h4>
            <p className="text-muted-foreground">Study anywhere, anytime with our online platform</p>
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
            <h4 className="text-xl font-bold text-foreground mb-2">Get Certified</h4>
            <p className="text-muted-foreground">Earn recognized certificates to advance your career</p>
          </div>
        </div>

        {/* Course Levels */}
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-card animate-fade-in">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">
            Our Course Levels
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold">
                A1-A2
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">Beginner</h4>
              <p className="text-muted-foreground">
                Start your English journey with basic vocabulary, simple grammar, and everyday conversations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold">
                B1-B2
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">Intermediate</h4>
              <p className="text-muted-foreground">
                Build confidence with complex grammar, expanded vocabulary, and professional communication.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold">
                C1-C2
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">Advanced</h4>
              <p className="text-muted-foreground">
                Master fluency with nuanced expression, academic writing, and native-level communication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;