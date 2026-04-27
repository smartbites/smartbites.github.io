import PageTemplate from "../components/layout/PageTemplate";
import CollectionPage from "../components/content/CollectionPage";
import { getResourcesByCollection } from "../data/resourceCatalog";
import ResourceGrid from "../components/ui/ResourceGrid";

const guidesMeta = {
  browserTitle: "AI Guides & Prompt Engineering",
  title: "AI Guides & Prompt Engineering",
  description:
    "Prompt Engineering Strategies for Professionals and Responsible World Citizens.",
  keywords: "",
  category: "Guides",
  featuredImage:
    "/assets/DALL" +
    "\u00B7" +
    "E-2024-08-12-22.33.41-Create-a-photorealistic-miniature-restaurant-scene-that-is-distinct-from-previous-ones.-The-restaurant-is-branded-Smart-Bites-with-a-visible-sign-di.webp",
  ogImage:
    "/assets/DALL" +
    "\u00B7" +
    "E-2024-08-12-22.33.41-Create-a-photorealistic-miniature-restaurant-scene-that-is-distinct-from-previous-ones.-The-restaurant-is-branded-Smart-Bites-with-a-visible-sign-di.webp",
};

function GuidesPageContent() {
  const allGuides = getResourcesByCollection("guides");
  const guides = allGuides.filter((item) => !item.collections.includes("training"));
  const trainingItems = getResourcesByCollection("training");

  return (
    <CollectionPage
      title="Guides"
      description="This section collects practical AI guides and prompt engineering recipes for people-powered, responsible governance workflows."
      intro="Start with any guide, then move to the training simulations for deeper practice."
      items={guides}
      listTitle="Available Guides"
      variant="cards"
    >
      <section>
        <h2>Training simulations</h2>
        {trainingItems.length > 0 ? <ResourceGrid title="Available simulations" tiles={trainingItems} /> : null}
      </section>
    </CollectionPage>
  );
}

export default function GuidesPage() {
  return <PageTemplate meta={guidesMeta} Content={GuidesPageContent} isArticle={false} />;
}
