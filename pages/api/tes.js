const axios = require("axios");

const handler = async (req, res) => {
  const { data } = await axios.get("https://nhentai.net");
  res.send(data);
}

export default handler;