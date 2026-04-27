import PageTemplate from "../components/layout/PageTemplate";
import CollectionPage from "../components/content/CollectionPage";
import { getResourcesByCollection } from "../data/resourceCatalog";

const categoryTrainingMeta = {
  browserTitle: "Training | Smart Bites",
  title: "Training",
  description:
    "Training simulations for practical change management and leadership development.",
  keywords:
    "Lewin's Change Management Model, Unfreeze Change Refreeze, Training Simulation, Organizational Change, Sustainable Change, Collaborative Change, Change Management Strategies, Chef Change Agents, Inclusive Transformation, Business Growth",
  category: "SMART BITES BY BASIL KOROMPILIAS",
  featuredImage:
    "/assets/DALL" +
    "\u00B7" +
    "E-2024-08-12-22.33.41-Create-a-photorealistic-miniature-restaurant-scene-that-is-distinct-from-previous-ones.-The-restaurant-is-branded-Smart-Bites-with-a-visible-sign-di.webp",
  ogImage:
    "/assets/DALL" +
    "\u00B7" +
    "E-2024-08-12-22.33.41-Create-a-photorealistic-miniature-restaurant-scene-that-is-distinct-from-previous-ones.-The-restaurant-is-branded-Smart-Bites-with-a-visible-sign-di.webp",
};

function CategoryTrainingPageContent() {
  const trainingItems = getResourcesByCollection("training");

  return (
    <CollectionPage
      title="Training"
      description="The Training collection gathers practical change management simulations you can use to explore, test, and improve organizational shifts."
      intro="Each simulation provides a focused framework for planning and delivering lasting change."
      items={trainingItems}
      listTitle="Available simulations"
      variant="cards"
    >
      <section>
        <h2>How to use these simulations</h2>
        <ol>
          <li>Open one simulation and review the scenario context.</li>
          <li>Use the steps as a coaching guide for planning training sessions.</li>
          <li>Adapt each model to your team's goals and constraints.</li>
        </ol>
      </section>
    </CollectionPage>
  );
}

export default function CategoryTrainingPage() {
  return (
    <PageTemplate
      meta={categoryTrainingMeta}
      Content={CategoryTrainingPageContent}
      isArticle={false}
    />
  );
}
