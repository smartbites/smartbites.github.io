# Homepage to Article Pages Conversion Order

## Convert in this order

1. `home` (homepage)
2. `articles`
3. `blog-posts`
4. `case-studies`
5. `chatgpt`
6. `claude`
7. `cookbook`
8. `google-gemini`
9. `guides`
10. `newsletters`
11. `notion-ai`
12. `noworries`
13. `policies`
14. `presentations`
15. `proposals`
16. `reports`
17. `research-papers`
18. `thanks`
19. `tools`
20. `training-simulation-adkar-model`
21. `training-simulation-kotters-8-step-change-model`
22. `training-simulation-lewins-model`

## Notes

- `category/training` and `guides/page/2` should be handled as auxiliary routes after core route set is stable.
- Continue one page at a time, each with:
  - `plans/<slug>.md`
  - `src/pages/<Slug>Page.jsx`
  - CSS pass in `src/index.css`
