const middleDot = String.fromCharCode(183);

export const featureCards = [
  {
    kicker: '6 Flavours',
    title: 'The Ingredients for Healthy Changes.',
    image: '/assets/85096fa6-d20e-4206-a865-aad35da09dc7.webp',
    body: (
      <ol>
        <li>Freedom 🕊️</li>
        <li>Diversity 🌍</li>
        <li>Inclusion 🤝</li>
        <li>Fitness 💪</li>
        <li>Party 🎉</li>
        <li>Wellbeing 🧘</li>
      </ol>
    ),
  },
  {
    kicker: '3 Steps',
    title: 'Becoming an Agent of Positive and Sustainable Change is Easy! ☺️',
    image: '/assets/ef33fdcc-f8e2-44be-a683-a7130d73b729-768x768.jpeg',
    body: (
      <>
        <p>Our Delicious 3-Step Recipe:</p>
        <ol>
          <li>Choices (Appetizer)</li>
          <li>Context</li>
          <li>Format</li>
          <li>Preparation (Main Course)</li>
          <li>Resources</li>
          <li>Draft</li>
          <li>Delivery (Dessert)</li>
          <li>Refinement</li>
          <li>Content</li>
        </ol>
      </>
    ),
  },
];

export const heroSection = {
  kicker: 'Bite-Sized Guides',
  image: '/assets/638919d9-c2dd-4767-85b1-3e84160bf256.jpeg',
  fallbackImage: '/assets/638919d9-c2dd-4767-85b1-3e84160bf256.jpeg',
  takeawayTo: '#takeaway',
};

export const pageMetaDefaults = {
  title: 'Bite-Sized AI Guides for AI-Empowered Governance & Change Management',
  description: 'Prompt Engineering Strategies for Professionals and Responsible World Citizens.',
};

export const recipeResources = [
  {
    title: 'Proposals',
    to: '/proposals/',
    image: '/assets/e434af80-f34c-44f3-a7f9-4fddf7a6151e.jpeg',
  },
  {
    title: 'Reports',
    to: '/reports/',
    image: '/assets/048ac430-b097-4951-930e-37577ae94b4d.jpeg',
  },
  {
    title: 'Presentations',
    to: '/presentations/',
    image: '/assets/30cb964b-20ec-4152-9921-8375e73bbaf0.jpeg',
  },
  {
    title: 'Case Studies',
    to: '/case-studies/',
    image: '/assets/17d8410d-89e3-41e0-858e-78460535f33b.jpeg',
  },
  {
    title: 'Newsletters',
    to: '/newsletters/',
    image: '/assets/b217dba0-7241-4d7f-9ee0-33ccacce252b.jpeg',
  },
  {
    title: 'Blog Posts',
    to: '/blog-posts/',
    image: '/assets/ca5c2ad1-b7de-4c0a-a284-156d4267b978.jpeg',
  },
];

export const chefResources = [
  {
    title: 'Training Simulation: Lewins Model',
    to: '/training-simulation-lewins-model/',
    image:
      '/assets/DALL' + middleDot + 'E-2024-08-12-22.33.41-Create-a-photorealistic-miniature-restaurant-scene-that-is-distinct-from-previous-ones.-The-restaurant-is-branded-Smart-Bites-with-a-visible-sign-di.webp',
  },
  {
    title: 'Training Simulation: ADKAR Model',
    to: '/training-simulation-adkar-model/',
    image:
      '/assets/DALL' + middleDot + 'E-2024-08-12-22.21.49-Create-a-photorealistic-miniature-restaurant-scene-with-a-focus-on-fine-details-similar-to-the-previous-one.-The-restaurant-is-branded-Smart-Bites-.webp',
  },
  {
    title: "Training Simulation: Kotter's Model",
    to: '/training-simulation-kotters-8-step-change-model/',
    image:
      '/assets/DALL' + middleDot + 'E-2024-08-12-21.20.24-Create-a-photorealistic-miniature-restaurant-scene-with-a-focus-on-fine-details.-The-restaurant-is-branded-Smart-Bites-with-a-visible-sign-displayin.webp',
  },
];

export const takeawayPanel = {
  title: '🧋 Takeaway',
  description:
    'Our Guides Democratize Change Management, Making it Accessible to People from All Walks of Life. We Offer a Formal Process for AI-Augmented Governance, Enabling Decentralized Decision-Making and Data-empowered Insights.',
  starterTitle: '🍴Starters',
  protocol: {
    image: '/assets/521186e3-44d3-47f3-b677-7a70e5fb3847.webp',
    title: 'Changes Protocol',
    text: 'About AI-Empowered Governance',
    ctaLink: '/cookbook/',
    ctaText: 'CookBook',
  },
  recipesTitle: '🍎 Recipes',
  chefTitle: '🎓 Becoming Chef de Change',
};

export const getArchiveBars = (pages = []) =>
  pages
    .filter((page) => page && page.path && page.label)
    .map((page) => ({
      to: page.path,
      label: page.label,
      icon: page.icon,
    }));

export const footerDockItems = [
  { label: 'Policies', to: '/policies/' },
  { label: 'Discussion', to: 'https://github.com/orgs/smartbites/discussions' },
];
