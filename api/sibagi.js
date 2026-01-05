let lastData = null;

export default function handler(req, res) {
  const token = req.headers["sibagi-streamboost-callback-token"];
  const VALID_TOKEN = "zrHPHrpTRNT1OKCZPOEr51Op";

  if (token !== VALID_TOKEN) {
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
