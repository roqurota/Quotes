const express = require('express');
const router = express.Router();
const Template = require('../models/template')

router.get('/', ( req, res ) => {
    res.render('index');
});

router.get('/templates', async ( req, res ) => {
    try {
        const templates = await Template.find({});
        res.render('templates', { templates: templates });
    } catch {
        res.render('index');
    }
});

router.get('/new', async ( req, res ) => {
    res.render('new');
});

router.post('/create', ( req, res ) => {
    const template = new Template({
        title: "John",
        quotes: [
            "Hello here1",
            "And hello there2",
            "Wherever you are3"
        ]
    });
    template.save((err, newTemplate) => {
        if (err) {
            res.render('index');
        } else {
            res.send('templates');
        }
    });
});

module.exports = router;