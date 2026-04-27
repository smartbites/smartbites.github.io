import PageTemplate from "../components/layout/PageTemplate";

const policiesMeta = {
  browserTitle: "Smart Bites | Policies",
  title: "Policies",
  description: "Smart Bites | Policies",
  keywords: "",
  category: "Ethics",
  featuredImage: "/assets/smartbites_foodtruck.webp",
  ogImage: "/assets/smartbites_foodtruck.webp",
};

function PoliciesPageContent() {
  return (
    <article>
      <header>
        <h1>Policies</h1>
      </header>
      <section>
        <h2>Ethics</h2>
        <p>
          At Smart Bites, we are committed to upholding the highest ethical
          standards in all aspects of our work. Our AI-powered guides and
          strategies are designed to empower individuals and organizations while
          adhering to the following core principles:
        </p>
        <h3>1. Freedom</h3>
        <p>
          We believe in the freedom of thought, expression, and choice. Our
          content is created to inspire and enable users to make informed
          decisions and pursue their goals without undue influence or
          manipulation.
        </p>
        <h3>2. Diversity</h3>
        <p>
          We embrace and celebrate diversity in all its forms. Our AI guides are
          designed to be inclusive and respectful of different perspectives,
          cultures, and experiences, fostering an environment of mutual
          understanding and growth.
        </p>
        <h3>3. Inclusion</h3>
        <p>
          We are committed to creating content that is accessible and inclusive to
          all individuals, regardless of their background, abilities, or
          circumstances. We strive to break down barriers and promote equal
          opportunities for learning and success.
        </p>
        <h3>4. Fitness</h3>
        <p>
          We believe in the importance of mental and physical well-being. Our
          AI-powered strategies are designed to promote healthy habits,
          work-life balance, and personal growth, empowering users to lead
          fulfilling and productive lives.
        </p>
        <h3>5. Party</h3>
        <p>
          We recognize the value of celebration, joy, and social connection. Our
          guides encourage users to find moments of happiness, build meaningful
          relationships, and create a sense of community in their personal and
          professional lives.
        </p>
        <h3>6. Wellbeing</h3>
        <p>
          We prioritize the overall well-being of our users and the communities
          they serve. Our AI-powered content is created with the intention of
          promoting positive change, reducing stress, and fostering a sense of
          purpose and fulfillment.
        </p>
        <p>
          By adhering to these ethical principles, we aim to create a platform
          that empowers individuals to unlock their full potential, while
          contributing to a more inclusive, compassionate, and sustainable world.
        </p>
      </section>
      <section>
        <h2>Privacy</h2>
        <h2>Who we are</h2>
        <p>Our website address is: https://smartbites.github.io/.</p>
        <h2>Cookies</h2>
        <p>
          We use cookies to collect anonymous data for analytics purposes. These
          cookies do not contain any personal information and are used solely to
          improve our website's performance and user experience.
        </p>
        <h2>Embedded content from other websites</h2>
        <p>
          Articles on this site may include embedded content (e.g., videos,
          images, articles, etc.). Embedded content from other websites behaves in
          the exact same way as if the visitor has visited the other website.
        </p>
        <p>
          These websites may collect data about you, use cookies, embed additional
          third-party tracking, and monitor your interaction with that embedded
          content, including tracking your interaction with the embedded content if
          you have an account and are logged in to that website.
        </p>
        <h2>Analytics</h2>
        <p>
          We use third-party analytics tools to collect anonymous data about our
          website's traffic and usage patterns. This data is used to improve our
          website's performance and user experience. No personally identifiable
          information is collected or stored by us.
        </p>
        <h2>Who we share your data with</h2>
        <p>We do not share any personal data with third parties.</p>
      </section>
    </article>
  );
}

export default function PoliciesPage() {
  return (
    <PageTemplate
      meta={policiesMeta}
      Content={PoliciesPageContent}
      isArticle={false}
    />
  );
}