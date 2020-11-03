const { Router } = require('express');
const Microphone = require('../models/microphoneModel');

module.exports = Router()
  .post('/', (req, res, next) => {
    Microphone
      .insert(req.body)
      .then(microphone => res.send(microphone))
      .catch(next);
  });
