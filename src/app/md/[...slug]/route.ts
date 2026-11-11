import { NextRequest } from "next/server";
import { renderMarkdownForPath } from "@/lib/markdown";
import { canonicalUrl } from "@/lib/siteUrl";

export async function GET(
  _req: NextRequest,
  context: { params: { slug: string[] } }
) {
  const slugParts = context.params.slug || [];
  const rawPath = slugParts.join("/") === "__index" ? "/" : `/${slugParts.join("/")}`;
  const cleanCanonicalPath = rawPath === "/" ? "/" : rawPath.replace(/\.md$/i, "");
  const markdown = renderMarkdownForPath(cleanCanonicalPath);

  if (!markdown) {
    return new Response("# 404 Not Found\n\nNo Markdown resource found for this route.\n", {
      status: 404,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "X-Robots-Tag": "noindex, follow",
      },
    });
  }

  return new Response(markdown, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Link: `<${canonicalUrl(cleanCanonicalPath)}>; rel="canonical"`,
      "X-Robots-Tag": "noindex, follow",
      Vary: "Accept",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
