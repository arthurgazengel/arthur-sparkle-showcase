import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, GraduationCap, Briefcase, TrendingUp } from "lucide-react";

const CV = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Mon Curriculum Vitae
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez mon parcours, mes compétences et mes expériences dans le marketing digital.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Formation</h3>
                    <p className="text-sm text-foreground/70">
                      Bac+5 en Stratégie Digitale & Management de Projet - Ecole 89
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Expérience</h3>
                    <p className="text-sm text-foreground/70">
                      +7 ans d'expériences en Marketing, Communication & Commerce
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-border mb-8">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Expertise</h3>
                  <p className="text-sm text-foreground/70">
                    Parcours multisectoriel (E-commerce, Média, SaaS, Logistique...)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Téléchargez mon CV pour en savoir plus sur mes formations, expériences et réalisations.
            </p>
            <Button size="lg" variant="accent" asChild>
              <a
                href="https://drive.google.com/uc?export=download&id=1ZsvVaLY1-sjc9AUvfqfvb_LJIlN3Z-L4"
                download
                className="inline-flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Télécharger mon CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;
