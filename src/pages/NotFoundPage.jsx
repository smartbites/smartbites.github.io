import { Link } from 'react-router-dom';
import AppShell from '../components/layout/AppShell';

function NotFoundPage() {
  return (
    <AppShell>
      <section className="sb-not-found">
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to="/">Go to the home page</Link>
      </section>
    </AppShell>
  );
}

export default NotFoundPage;
