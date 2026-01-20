const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Basit veri: oyuncu ve şirket
let players = [];

// Oyuncu ekleme
app.post('/api/register', (req, res) => {
  const { uid, name } = req.body;
  if (!players.find(p => p.uid === uid)) {
    players.push({
      uid,
      name,
      companies: [],
      cash: 100000,
    });
  }
  res.json({ success: true, player: players.find(p => p.uid === uid) });
});

// Şirket ekleme
app.post('/api/addCompany', (req, res) => {
  const { uid, companyName, type } = req.body;
  const player = players.find(p => p.uid === uid);
  if (!player) return res.status(404).json({ error: "Player not found" });

  const newCompany = {
    id: Date.now(),
    name: companyName,
    type,
    revenue: 0,
    expense: 0,
    netProfit: 0,
  };
  player.companies.push(newCompany);
  res.json({ success: true, companies: player.companies });
});

// Şirket istatistiklerini al
app.get('/api/companies/:uid', (req, res) => {
  const player = players.find(p => p.uid === req.params.uid);
  if (!player) return res.status(404).json({ error: "Player not found" });
  res.json({ companies: player.companies, cash: player.cash });
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));