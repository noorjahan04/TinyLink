import { nanoid } from "nanoid";
import Link from "../models/Link.js";
import { validateURL } from "../utils/validateURL.js";

// Create Short Link
export const createLink = async (req, res) => {
  try {
    const { longUrl, customCode } = req.body;

    if (!validateURL(longUrl)) {
      return res.status(400).json({ error: "Invalid URL" });
    }

    const code = customCode || nanoid(6);

    // Check code exists
    const existing = await Link.findOne({ code });
    if (existing) return res.status(409).json({ error: "Code already exists" });

    const newLink = await Link.create({
      code,
      longUrl
    });

    res.status(201).json(newLink);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all links
export const getAllLinks = async (req, res) => {
  const links = await Link.find().sort({ createdAt: -1 });
  res.json(links);
};

// Get stats of a single link
export const getLinkStats = async (req, res) => {
  const { code } = req.params;

  const link = await Link.findOne({ code });
  if (!link) return res.status(404).json({ error: "Not found" });

  res.json(link);
};

// Delete a link
export const deleteLink = async (req, res) => {
  const { code } = req.params;

  const deleted = await Link.findOneAndDelete({ code });
  if (!deleted) return res.status(404).json({ error: "Not found" });

  res.json({ message: "Deleted successfully" });
};

// Redirect logic
export const redirectLink = async (req, res) => {
  const { code } = req.params;

  const link = await Link.findOne({ code });
  if (!link) return res.status(404).send("Not Found");

  link.clicks += 1;
  link.lastClicked = new Date();
  await link.save();

  res.redirect(302, link.longUrl);
};
