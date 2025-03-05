export default async function handler(req, res) {
  const { search } = req.query;

  if (!search || search.length < 3) {
    return res.status(400).json({ error: "Le terme de recherche doit comporter au moins 3 caractères" });
  }

  const apiKey = process.env.OMDB_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "Clé API manquante" });
  }

  try {
    const url = new URL("https://www.omdbapi.com/");
    url.searchParams.set("apikey", apiKey);
    url.searchParams.set("s", search);

    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(`Erreur API OMDb: ${response.statusText}`);
    }

    const data = await response.json();

    if (data.Response === "False") {
      return res.status(404).json({ error: data.Error });
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: `Erreur lors de la récupération des données: ${error.message}` });
  }
}
