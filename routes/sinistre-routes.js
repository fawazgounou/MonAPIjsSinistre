
const express = require('express');
const {
        
    getAllSinistre, 
  
      
      } = require('../controllers/adminController');
      const router = express.Router();



router.get('/voirsinistre', getAllSinistre);




module.exports = {
    routes: router
}