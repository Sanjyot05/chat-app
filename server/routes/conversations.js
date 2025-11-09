const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Conversation = require('../models/Conversation');
const Message = require('../models/Message');

// GET /conversations/:id/messages
router.get('/:id/messages', auth, async (req, res) => {
  const messages = await Message.find({ conversation: req.params.id }).sort('createdAt').populate('sender', 'name email');
  res.json(messages);
});

// POST /conversations  -> create or get conversation (pass participants array)
router.post('/', auth, async (req, res) => {
  const { participants } = req.body; // [id1, id2]
  // find existing conversation with same participants
  let conv = await Conversation.findOne({ participants: { $all: participants, $size: 2 } });
  if (!conv) conv = await Conversation.create({ participants });
  res.json(conv);
});

module.exports = router;
