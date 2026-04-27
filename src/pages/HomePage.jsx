import AppShell from '../components/layout/AppShell';
import FeatureCard from '../components/ui/FeatureCard';
import HeroCard from '../components/ui/HeroCard';
import TakeawayPanel from '../components/ui/TakeawayPanel';
import { getCollectionPages } from '../data/resourceCatalog';
import {
  featureCards,
  heroSection,
  pageMetaDefaults,
  recipeResources,
  chefResources,
  takeawayPanel,
  getArchiveBars,
} from '../config/homepage';

function HomePage() {
  const title = pageMetaDefaults.title;
  const description = pageMetaDefaults.description;
  const archiveBars = getArchiveBars(getCollectionPages('home'));

  return (
    <AppShell>
      <HeroCard
        kicker={heroSection.kicker}
        image={heroSection.image}
        title={
          <>
            Bite-Sized AI Guides
            <br />
            for AI-Empowered Governance
            <br />
            &amp; Change Management
          </>
        }
        subtitle={description}
        ctaText="Takeaway"
        ctaTo={heroSection.takeawayTo}
      />

      <div className="home-feature-grid">
        {featureCards.map((card, index) => (
          <FeatureCard
            key={card.title}
            className="sb-animate-enter"
            style={{ transitionDelay: `${100 + index * 80}ms` }}
            kicker={card.kicker}
            title={card.title}
            image={card.image}
            fallbackImage={heroSection.fallbackImage}
          >
            {card.body}
          </FeatureCard>
        ))}
      </div>

      <TakeawayPanel
        className="sb-animate-enter"
        style={{ transitionDelay: '220ms' }}
        title={takeawayPanel.title}
        description={takeawayPanel.description}
        starterTitle={takeawayPanel.starterTitle}
        protocol={takeawayPanel.protocol}
        recipeResources={recipeResources}
        chefResources={chefResources}
        recipeHeading={takeawayPanel.recipesTitle}
        chefHeading={takeawayPanel.chefTitle}
        bars={archiveBars}
      />

    </AppShell>
  );
}

export default HomePage;
