'use strict';

const firebase = require('../db');
const Photo = require('../models/photo');

const firestore = firebase.firestore();

const getAllphoto = async (req, res, next) => {
    try {
        const students = awaitfirestore.collection('User').doc(id).collection('Sinistre')
        
        const data = await students.get();
        const studentsArray = [];
        if(data.empty) {
            res.status(404).send('No student record found');
        }else {
            data.forEach(doc => {
                const photo = new Photo(
                    doc.id,
                    doc.data().url==null?"":doc.data().url,
                    console.log(doc.data().url),
           
                );
                studentsArray.push(photo);
            });
            res.send(studentsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}



module.exports = {
    
  
    getAllphoto,
    
}