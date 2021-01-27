const express = require('express');
const router = express.Router();
const db = require('../../db/database');
const inputCheck = require('../../utils/inputCheck');

// originally app.get('/api/candidates')
router.get('/candidates', (req, res) => {
  // internal logic remains the same
});

// app.get('/api/candidate/:id')
router.get('/candidate/:id', (req, res) => {});

// app.post('/api/candidate')
router.post('/candidate', ({ body }, res) => {});

// app.put('/api/candidate/:id')
router.put('/candidate/:id', (req, res) => {});

// app.delete('/api/candidate/:id')
router.delete('/candidate/:id', (req, res) => {});

module.exports = router;