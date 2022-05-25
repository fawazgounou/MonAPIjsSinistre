'use strict';

const firebase = require('../db');
const Sinistre = require('../models/adminsinistre');

const firestore = firebase.firestore();

const getAllSinistre = async (req, res, next) => {
    try {
        const students = await firestore.collection('Sinistre');
        const data = await students.get();
        const studentsArray = [];
        if(data.empty) {
            res.status(404).send('No student record found');
        }else {
            data.forEach(doc => {
                const sinistre = new Sinistre(
                    doc.id,
                    doc.data().date_Sinistre==null?"":doc.data().date_Sinistre,
                    doc.data().Heure_Sinistre==null?"":doc.data().Heure_Sinistre,
                    doc.data().Lieu==null?"":doc.data().Lieu,
                    doc.data().Localisation==null?"":doc.data().Localisation,
                    doc.data().blesse==null?"":doc.data().blesse,
                    doc.data().degats==null?"":doc.data().degats,
                    doc.data().id_vehiculeA==null?"":doc.data().id_vehiculeA,
                    doc.data().id_vehiculeB==null?"":doc.data().id_vehiculeB,
                    doc.data().id_AssuranceA==null?"":doc.data().id_AssuranceA,
                    doc.data().id_AssuranceB==null?"":doc.data().id_AssuranceB,
                    doc.data().id_assuréA==null?"":doc.data().id_assuréA,
                    doc.data().id_AssuréB==null?"":doc.data().id_AssuréB,
                    doc.data().id_CirconstanceA==null?"":doc.data().id_CirconstanceA,
                    doc.data().id_CirconstanceB==null?"":doc.data().id_CirconstanceB,
                    doc.data().id_conducteurA==null?"":doc.data().id_conducteurA,
                    doc.data().id_conducteurB==null?"":doc.data().id_conducteurB,
                    doc.data().id_observationA==null?"":doc.data().id_observationA,
                    doc.data().id_observationB==null?"":doc.data().id_observationB,
                );
                studentsArray.push(sinistre);
            });
            res.send(studentsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}


module.exports = {
    
    getAllSinistre,
   
    
}