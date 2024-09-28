const express = require('express');

const router = express.Router();

/**
 * Retrieve all TODO existing in database
 */
router.get('/', (req, res) => {
    res.json({message: "GET all TODOs"});
});

/**
 * Retrieve details for a specific TODO existing in database.
 */
router.get('/:id', (req, res) => {
    res.json({message: "GET specific TODOs"});
});

/**
 * Retrieve details for a specific TODO existing in database.
 */
router.post('/', (req, res) => {
    res.json({message: "POST create a new TODO"});
});

/**
 * Retrieve details for a specific TODO existing in database.
 */
router.patch('/:id', (req, res) => {
    res.json({message: "PATCH update a specific TODO"});
});

/**
 * Retrieve details for a specific TODO existing in database.
 */
router.delete('/:id', (req, res) => {
    res.json({message: "DELETE remove a specific TODO from database"});
});

module.exports = router;