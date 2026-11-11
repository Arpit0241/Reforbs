export async function GET() {
  const key = process.env.INDEXNOW_KEY;
  if (!key) {
    return new Response("INDEXNOW_KEY not configured\n", {
      status: 404,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }
  return new Response(`${key}\n`, {
    status: 200,
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
