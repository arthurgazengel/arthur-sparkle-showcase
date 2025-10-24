import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Stéphane D.",
      role: "Directeur d'Exploitation, Jardins Loisirs",
      text: "Arthur est un professionnel talentueux et passionné dans son domaine. Il possède une grande expérience dans la création de stratégies de marketing en ligne, la création de contenu digital et le suivi des performances des campagnes. Je recommande vivement Arthur pour son professionnalisme et son efficacité.",
    },
    {
      name: "Emanuelle F.",
      role: "Business Developer, Air France KLM",
      text: "Arthur est un collaborateur fiable, concis et rapide ! J'ai beaucoup aimé échanger et apprendre à ses côtés ! Toujours dans un état d'esprit serein, il mène ses objectifs avec succès !",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Témoignages clients
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border">
              <CardContent className="pt-6">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <p className="text-foreground/80 mb-6 italic">{testimonial.text}</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
