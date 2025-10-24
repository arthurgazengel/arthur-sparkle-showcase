const ClientLogos = () => {
  const clients = [
    { name: "CMI Media", logo: "https://cmimedia.fr/themes/custom/cmi/CMI_LOGO_HORIZONTAL_BRIQUE_RVB.png" },
    { name: "LumApps", logo: "https://skoutpr.com/wp-content/uploads/2023/03/LumApps-logo-01-1.png" },
    { name: "Air France KLM Cargo", logo: "https://www.airfranceklm.com/sites/default/files/2024-06/air_france-klm_martinair_cargo_couleur_rgb2.png" },
    { name: "Red Bull", logo: "https://blog.logomyway.com/wp-content/uploads/2021/07/red-bull-symbol.png" },
    { name: "Secours Populaire", logo: "https://www.francebenevolat.org/sites/default/files/thumbnails/t_63e24bddd5361669986049.jpg" },
    { name: "Jardins Loisirs", logo: "https://smda-sas.com/wp-content/uploads/LOGO_JL_PRO-840x250.png" },
    { name: "Rayser", logo: "https://files.sbcdnsb.com/images/Tx1GZKCk74awWE2LX0UK1w/businesses/1684497984/logo-rayser-rvb-sans-baseline.jpg" },
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-semibold text-center mb-4 text-foreground">
          J'ai travaillé avec eux
        </h3>
        <p className="text-center text-muted-foreground mb-12">
          Dans le cadre de missions freelance, d'emplois, d'alternances ou projets étudiants.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
