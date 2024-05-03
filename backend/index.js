const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "Private-Key": "c230d495-8da7-4262-b5a5-35ea90a31593" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    console.log(e);
    if (e.response) {
      return res.status(e.response.status).json(e.response.data);
    }
  }
  return res.json({ username: username, secret: "secret" });
});

app.listen(3001);
