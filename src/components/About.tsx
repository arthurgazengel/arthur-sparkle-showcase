const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            À propos de moi
          </h2>
          <p className="text-center text-xl text-primary font-semibold mb-8">
            Arthur GAZENGEL
          </p>

          <div className="space-y-6 text-lg text-foreground/80">
            <p>
              Mon activité <strong>freelance</strong> est née de plusieurs années d'expérience en{" "}
              <strong>marketing digital</strong> et <strong>communication</strong>, renforcées par un{" "}
              <strong>Bac +5 en Stratégie digitale et Management de projet</strong>.
            </p>

            <p>
              J'accompagne les entreprises, artisans et commerçants dans leurs objectifs de visibilité et de
              croissance, en m'appuyant sur un parcours riche en <strong>e-commerce</strong>,{" "}
              <strong>fidélisation</strong> et <strong>gestion de projets</strong>.
            </p>

            <p>
              Selon vos besoins, je peux intervenir comme <strong>chargé de marketing digital</strong>,{" "}
              <strong>chef de projet</strong> ou <strong>community manager</strong>, avec une vision
              stratégique et orientée résultats.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
