import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const markdownContent = `# Francis Oledibe

Software Engineer at Netflix focused on Android playback systems.
I share my experiences, projects, leadership work, and achievements.

## Navigation

- [About](/about.md)
- [Projects](/projects.md)
- [Recent Posts](/posts.md)
- [Archives](/archives.md)
- [RSS Feed](/rss.xml)

## Links

- LinkedIn: [Francis Oledibe](https://www.linkedin.com/in/francisoledibe/)
- GitHub: [oledibefrancis](https://github.com/oledibefrancis)
- Email: somtofrancis380@gmail.com

---
`;

  return new Response(markdownContent, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
