import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const projects = [
    {
      title: "Jardins Loisirs",
      description:
        "Campagnes e-mailing et création de brochure commerciale pour un site e-commerce spécialisé dans le jardinage et le bricolage.",
      image: "https://cdn.pixabay.com/photo/2016/11/19/20/14/grass-1840929_1280.jpg",
      tags: ["Email Marketing", "Brochure Commerciale", "CRM"],
      stats: [
        { label: "Accompagnement depuis", value: "Janvier 2024" },
        { label: "Performance des Newsletters", value: "+10% CTR" },
      ],
    },
    {
      title: "Rayser",
      description:
        "Stratégie de communication et gestion de la présence LinkedIn pour une entreprise dans l'aménagement des zones de stockage / entrepôt.",
      image:
        "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0",
      tags: ["Community Management", "Création de Contenus", "Engagement B2B"],
      stats: [
        { label: "Total Abonnés", value: "+28%" },
        { label: "Portée des publications", value: "+368%" },
      ],
    },
    {
      title: "Red Bull",
      description:
        "Workshop Red Bull : Chef de projet pour la conception, proposition et présentation d'un projet événementiel Red Bull.",
      image:
        "https://images.unsplash.com/photo-1662948348853-ae7de7300e5e?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0",
      tags: ["Étude de marché", "Stratégie digitale", "Management"],
      stats: [
        { label: "Management", value: "Équipe de 5 personnes" },
        { label: "Concept", value: "Présenté à l'équipe Red Bull" },
      ],
    },
  ];

  return (
    <section id="realisations" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Mes Réalisations</h2>
          <p className="text-lg text-muted-foreground">
            Un aperçu de mes projets récents et les résultats obtenus.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow border-border">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="space-y-2">
                  {project.stats.map((stat, idx) => (
                    <div key={idx} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{stat.label} :</span>
                      <span className="font-semibold text-primary">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
