import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, BarChart3, Mail, Share2, FolderKanban, Palette } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Stratégie Marketing",
      description: "Élaboration d'une stratégie digitale sur mesure pour atteindre vos objectifs.",
      points: ["Audit complet", "Plan d'action détaillé", "Suivi de performance"],
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analyse & Reporting",
      description: "Suivi précis des performances et recommandations d'optimisation.",
      points: ["Tableaux de bord", "Analyses approfondies", "Rapports mensuels"],
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Marketing",
      description: "Campagnes emailing performantes pour fidéliser et convertir vos clients.",
      points: ["Newsletter & E-mailing", "Automatisation", "Personnalisation"],
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Réseaux Sociaux",
      description: "Gestion et animation de vos communautés sur les principales plateformes sociales.",
      points: ["Stratégie digitale", "Community management", "Création de contenu"],
    },
    {
      icon: <FolderKanban className="w-8 h-8" />,
      title: "Gestion de Projet",
      description: "Gérer un projet de A à Z.",
      points: ["Définition du projet", "Préparation & Organisation", "Résultats concrets"],
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Infographiste",
      description: "Conception et réalisation de support visuels.",
      points: ["Contenu Web", "Brochure, Flyers, Catalogue...", "Contenu IA"],
    },
  ];

  return (
    <section id="competences" className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Compétences opérationnelles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des solutions digitales complètes pour répondre à tous vos besoins marketing & communication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  {skill.icon}
                </div>
                <CardTitle className="text-xl">{skill.title}</CardTitle>
                <CardDescription>{skill.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {skill.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-foreground/70">
                      <span className="text-primary mt-1">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
