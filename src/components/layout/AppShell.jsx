import TopBar from '../ui/TopBar';
import SiteFooter from '../ui/SiteFooter';
import ScrollToTopButton from '../ui/ScrollToTopButton';

function AppShell({ children }) {
  return (
    <main className="app-shell">
      <TopBar title="Smart Bites" />
      <div className="app-shell__frame">
        {children}
        <SiteFooter />
      </div>
      <ScrollToTopButton />
    </main>
  );
}

export default AppShell;
