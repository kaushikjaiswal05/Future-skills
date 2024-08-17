const express = require("express");
const Card = require("./models");
const router = express.Router();

router.post("/cards", async (req, res) => {
  const { title, description } = req.body;
  try {
    const newCard = new Card({ title, description });
    await newCard.save();
    res.status(201).json(newCard);
  } catch (err) {
    res
      .status(400)
      .json({ error: "Error creating card", message: err.message });
  }
});

router.get("/cards", async (req, res) => {
  try {
    const cards = await Card.find({});
    res.status(200).json(cards);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error fetching cards", message: err.message });
  }
});

router.get("/cards/:title", async (req, res) => {
  const { title } = req.params;
  try {
    const card = await Card.findOne({ title });
    if (card) {
      res.status(200).json(card);
    } else {
      res.status(404).json({ error: "Card not found" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error fetching card", message: err.message });
  }
});

module.exports = router;
