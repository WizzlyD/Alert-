let lastData = null;

export default function handler(req, res) {
  // HEADER SESUAI DOKUMENTASI SIBAGI
  const tokenHeader = req.headers["sibagi-streamboost-callback-token"];
  const validToken = process.env.sibagi_key;

  if (!tokenHeader || tokenHeader !== validToken) {
    return res.status(401).json({ error: "Invalid token" });
  }

  if (req.method === "POST") {
    lastData = req.body;
    return res.status(200).json({ success: true });
  }

  if (req.method === "GET") {
    return res.status(200).json(lastData || {});
  }

  res.status(405).end();
}
