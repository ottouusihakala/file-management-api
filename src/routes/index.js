// var express = require('express');
// var router = express.Router();
import express from 'express'
import fs from 'fs'

const router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/file', (req, res, next) => {
  fs.readdir('./', (err, files) => {
    res.send(JSON.stringify(files))
  })
})

module.exports = router;
