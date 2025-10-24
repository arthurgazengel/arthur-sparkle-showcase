import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Tools = () => {
  const toolCategories = [
    {
      title: "Analyse & Gestion Data/CRM",
      tools: ["Salesforce", "Google Analytics", "Looker Studio", "ERP / CMS"],
    },
    {
      title: "Marketing digital & Création",
      tools: ["Mailchimp", "Brevo", "Canva", "Suite Adobe"],
    },
    {
      title: "Productivité & Collaboration",
      tools: [
        "Google Suite (Docs, Sheets, Slides, Drive…)",
        "Suite Microsoft (Word, Excel, PowerPoint, Outlook…)",
        "Notion, Asana, Trello, Monday",
      ],
    },
    {
      title: "Technologies & Innovation",
      tools: [
        "Outils et solutions d'IA (ChatGPT et autres)",
        "Développement web léger / front-end : HTML, CSS, JavaScript",
      ],
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Outils & technologies maîtrisés
          </h2>
          <p className="text-lg text-muted-foreground">
            Compétences transverses pour accompagner vos projets
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {toolCategories.map((category, index) => (
            <Card key={index} className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.tools.map((tool, idx) => (
                    <li key={idx} className="text-sm text-foreground/70 flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      {tool}
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

export default Tools;
