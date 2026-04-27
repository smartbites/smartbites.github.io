export default function ArticleDiscussionCard() {
  return (
    <section className="sb-discussion-card">
      <p>
        Your insights and ideas are valuable in our journey to provide the most helpful content.
        If you have suggestions for improvement, we welcome you to discuss it with us through our
        GitHub forum.
      </p>

      <a
        className="sb-discussion-button"
        href="https://github.com/orgs/smartbites/discussions"
        target="_blank"
        rel="noopener noreferrer"
      >
        Discussions
      </a>
    </section>
  );
}