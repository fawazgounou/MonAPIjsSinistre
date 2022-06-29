
const express = require('express');
const {
    get1vehiculeA,
    getAllphoto
      
      } = require('../controllers/photoController');
      const router = express.Router();

      router.get('/Allphoto', getAllphoto);
        



module.exports = {
    routes: router
}