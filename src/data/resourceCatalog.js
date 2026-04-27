import { routeContentMap } from '../content';

function resolveCatalogImage(slug, fallbackImage) {
  const routeMeta = routeContentMap[slug];
  return routeMeta?.featuredImage || fallbackImage;
}

export const resourceCatalog = [
  {
    slug: 'training-simulation-lewins-model',
    to: '/training-simulation-lewins-model/',
    title: "Training Simulation: Lewin's Model",
    summary:
      "A recipe for navigating unfreezing, changing, and refreezing for sustainable change.",
    collections: ['guides', 'training'],
    image: resolveCatalogImage(
      'training-simulation-lewins-model',
      '/assets/DALL' +
        '\u00B7' +
        'E-2024-08-12-22.33.41-Create-a-photorealistic-miniature-restaurant-scene-that-is-distinct-from-previous-ones.-The-restaurant-is-branded-Smart-Bites-with-a-visible-sign-di.webp',
    ),
    order: 1,
  },
  {
    slug: 'training-simulation-kotters-8-step-change-model',
    to: '/training-simulation-kotters-8-step-change-model/',
    title: "Training Simulation: Kotter's 8-Step Change Model",
    summary: 'A guided path through urgency, coalition building, and institutionalization.',
    collections: ['guides', 'training'],
    image: resolveCatalogImage(
      'training-simulation-kotters-8-step-change-model',
      '/assets/DALL' +
        '\u00B7' +
        'E-2024-08-12-21.20.24-Create-a-photorealistic-miniature-restaurant-scene-with-a-focus-on-fine-details.-The-restaurant-is-branded-Smart-Bites-with-a-visible-sign-displayin.webp',
    ),
    order: 2,
  },
  {
    slug: 'training-simulation-adkar-model',
    to: '/training-simulation-adkar-model/',
    title: "Training Simulation: ADKAR Model",
    summary: 'A practical simulation for awareness, desire, knowledge, ability, and reinforcement.',
    collections: ['guides', 'training'],
    image: resolveCatalogImage(
      'training-simulation-adkar-model',
      '/assets/DALL' +
        '\u00B7' +
        'E-2024-08-12-22.21.49-Create-a-photorealistic-miniature-restaurant-scene-with-a-focus-on-fine-details-similar-to-the-previous-one.-The-restaurant-is-branded-Smart-Bites-.webp',
    ),
    order: 3,
  },
  {
    slug: 'cookbook',
    to: '/cookbook/',
    title: 'Changes Protocol Cookbook',
    summary:
      'Reference recipes and practical workflows for policy, governance, and leadership work.',
    collections: ['guides'],
    image: '/assets/Changes_Logo.png',
    order: 4,
  },
  {
    slug: 'proposals',
    to: '/proposals/',
    title: 'Proposals',
    summary:
      'Build persuasive, structured proposals with prompts and governance-first framing.',
    collections: ['guides'],
    image: '/assets/e434af80-f34c-44f3-a7f9-4fddf7a6151e.jpeg',
    order: 5,
  },
  {
    slug: 'reports',
    to: '/reports/',
    title: 'Reports',
    summary: 'Create clear, data-driven reports that are readable and decision-ready.',
    collections: ['guides'],
    image: '/assets/048ac430-b097-4951-930e-37577ae94b4d.jpeg',
    order: 6,
  },
  {
    slug: 'presentations',
    to: '/presentations/',
    title: 'Presentations',
    summary: 'Craft narrative, visual, and persuasive presentations with AI-assisted structure.',
    collections: ['guides'],
    image: '/assets/ChatGPT Image Apr 27, 2026, 10_24_17 AM.webp',
    order: 7,
  },
  {
    slug: 'case-studies',
    to: '/case-studies/',
    title: 'Case Studies',
    summary: 'Build evidence-rich case studies and replicate proven change practices.',
    collections: ['guides'],
    image: '/assets/ChatGPT Image Apr 27, 2026, 10_25_35 AM.webp',
    order: 8,
  },
  {
    slug: 'newsletters',
    to: '/newsletters/',
    title: 'Newsletters',
    summary: 'Turn lessons and updates into concise, engaging newsletter distributions.',
    collections: ['guides'],
    image: '/assets/b217dba0-7241-4d7f-9ee0-33ccacce252b.jpeg',
    order: 9,
  },
  {
    slug: 'blog-posts',
    to: '/blog-posts/',
    title: 'Blog Posts',
    summary: 'Publish clear, consistent, and audience-ready posts with structured prompt workflows.',
    collections: ['guides'],
    image: '/assets/ca5c2ad1-b7de-4c0a-a284-156d4267b978.jpeg',
    order: 10,
  },
  {
    slug: 'articles',
    to: '/articles/',
    title: 'Articles',
    summary: 'Author structured articles with practical prompt templates and governance framing.',
    collections: ['guides'],
    image: '/assets/975423d4-72ff-4f63-a4ef-b8f3a17abd23.jpeg',
    order: 11,
  },
  {
    slug: 'research-papers',
    to: '/research-papers/',
    title: 'Research Papers',
    summary: 'Explore practical prompts and structure for academic research writing.',
    collections: ['guides'],
    image: '/assets/be2de973-b14c-4e72-812f-e1bbd1e4e3b7.jpeg',
    order: 12,
  },
];

export const collectionPages = [
  {
    slug: 'guides',
    label: 'AI Guides Archive',
    path: '/guides/',
    icon: '/assets/books.png',
    order: 1,
    navScopes: ['topBar', 'home', 'footer'],
  },
  {
    slug: 'category/training',
    label: 'Training',
    path: '/category/training/',
    icon: '/assets/fries.png',
    order: 2,
    navScopes: [],
  },
];

export function getResourcesByCollection(collection) {
  return resourceCatalog
    .filter((item) => item.collections.includes(collection))
    .slice()
    .sort((a, b) => a.order - b.order);
}

export function getCollectionPages(scope) {
  const pages = collectionPages
    .filter((item) => item.navScopes.includes(scope))
    .slice()
    .sort((a, b) => a.order - b.order);

  return pages;
}
