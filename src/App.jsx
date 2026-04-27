import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import CategoryTrainingPage from './pages/CategoryTrainingPage';
import GuidesPage from './pages/GuidesPage';
import PoliciesPage from './pages/PoliciesPage';
import indexCatalog from './pages/index.json';
import { routeContentMap } from './content';
import PageTemplate from './components/layout/PageTemplate';

const pageOverrides = {
  policies: {
    browserTitle: 'Smart Bites | Policies',
    element: <PoliciesPage />,
  },
  'category/training': {
    browserTitle: 'Training | Smart Bites',
    element: <CategoryTrainingPage />,
  },
  guides: {
    browserTitle: 'AI Guides & Prompt Engineering',
    element: <GuidesPage />,
  },
};

function withTrailingVariants(path) {
  const cleanPath = path.endsWith('/') ? path.slice(0, -1) : path;
  return [cleanPath, `${cleanPath}/`];
}

const routeEntries = indexCatalog
  .filter((entry) => entry.id !== 'index')
  .flatMap((entry) =>
    withTrailingVariants(entry.path).map((path) => ({
      path,
      pageId: entry.id,
    })),
  );

function findPageData(pageId) {
  const pageData = indexCatalog.find((entry) => entry.id === pageId);
  if (!pageData) {
    return null;
  }

  const override = pageOverrides[pageId];
  if (override) {
    return {
      slug: pageData.id,
      path: pageData.path,
      title: pageData.title,
      description: pageData.description,
      browserTitle: override.browserTitle,
      element: override.element,
    };
  }

  const contentData = routeContentMap[pageId];
  if (!contentData?.Content) {
    return null;
  }

  return {
    slug: pageData.id,
    path: pageData.path,
    title: pageData.title,
    browserTitle: contentData.browserTitle || pageData.title,
    description: pageData.description,
    keywords: contentData.keywords || '',
    category: contentData.category || '',
    featuredImage: contentData.featuredImage || '',
    ogImage: contentData.ogImage || contentData.featuredImage || '',
    element: (
      <PageTemplate
        meta={{
          slug: pageData.id,
          path: pageData.path,
          title: pageData.title,
          browserTitle: contentData.browserTitle || pageData.title,
          description: pageData.description,
          keywords: contentData.keywords || '',
          category: contentData.category || '',
          featuredImage: contentData.featuredImage || '',
          ogImage: contentData.ogImage || contentData.featuredImage || '',
        }}
        Content={contentData.Content}
        isArticle={contentData.isArticle !== false}
      />
    ),
  };
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {routeEntries.map(({ path, pageId }) => {
        const routeData = findPageData(pageId);

        if (!routeData) {
          return null;
        }

        return (
          <Route
            key={path}
            path={path}
            element={routeData.element}
          />
        );
      })}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
