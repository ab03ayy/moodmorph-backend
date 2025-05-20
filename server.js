const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());


app.get('/health', (req, res) => {
  res.status(200).send('OK');
});
// Mock meme generation endpoint
app.post('/generate-meme', (req, res) => {
  const { mood, caption } = req.body;
  
  // In a real app, you would:
  // 1. Process an image with the caption
  // 2. Upload to Cloudinary or similar
  // 3. Return the URL
  
  // For demo purposes, we'll return a mock URL
  const mockMemeUrl = `https://example.com/meme-${Date.now()}.jpg?mood=${mood}&caption=${encodeURIComponent(caption)}`;
  
  res.json({
    success: true,
    memeUrl: mockMemeUrl
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => { // '0.0.0.0' is crucial for Render
  console.log(`Server running on port ${PORT}`);
});