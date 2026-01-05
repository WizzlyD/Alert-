let lastEvent = null;

export default async function handler(req, res) {
  if (req.method === "POST") {
    lastEvent = req.body;
    return res.status(200).json({ success: true });
  }

  if (req.method === "GET") {
    return res.status(200).json(lastEvent || {});
  }

  return res.status(405).end();
}
