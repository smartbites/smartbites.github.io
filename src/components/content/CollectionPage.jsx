import { Link } from 'react-router-dom';
import ResourceGrid from '../ui/ResourceGrid';

function CollectionLinkList({ heading, items }) {
  return (
    <section aria-labelledby="collection-list-heading">
      <h2 id="collection-list-heading">{heading}</h2>
      <ul>
        {items.map((item) => (
          <li key={item.slug}>
            <article>
              <h3>
                <Link to={item.to}>{item.title}</Link>
              </h3>
              {item.summary && <p>{item.summary}</p>}
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function CollectionPage({
  title,
  description,
  intro,
  items = [],
  listTitle = 'Available items',
  variant = 'cards',
  children,
}) {
  const hasItems = items.length > 0;
  return (
    <article>
      <header>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
        {intro && <p>{intro}</p>}
      </header>

      {variant === 'cards' && hasItems && <ResourceGrid title={listTitle} tiles={items} />}
      {variant === 'list' && hasItems && <CollectionLinkList heading={listTitle} items={items} />}

      {children}
    </article>
  );
}
