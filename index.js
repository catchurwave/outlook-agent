require('dotenv').config();
const express = require('express');
const { createOutlookAccount } = require('./browser');

const app = express();
app.use(express.json());

app.post('/create', async (req, res) => {
  try {
    const result = await createOutlookAccount();
    res.json({ success: true, data: result });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Correction ici : port par défaut 3000 si process.env.PORT est vide
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Agent Outlook lancé sur http://localhost:${PORT}`);
});
