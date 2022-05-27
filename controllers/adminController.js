'use strict';

const firebase = require('../db');
const Sinistre = require('../models/adminsinistre');

const firestore = firebase.firestore();

const getAllSinistre = async (req, res, next) => {
    try {
      
        const students = await firestore.collection('User');
        
        const data = await students.get();
        
        const studentsArray = [];
        if(data.empty) {
            res.status(404).send('No student record found');
        }else {
            data.forEach(async doc => {
                const stud= await firestore.collection('User').doc(doc.data().id).collection('Sinistre').doc().get();
                stud.forEach(doc => {
                    console.log(doc.data().id);
                })

            });
            console.log(studentsArray);
            res.send(studentsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}


module.exports = {
    
    getAllSinistre,
   
    
}