'use strict';

const firebase = require('../db');
const Vehicule = require('../models/vehicule');

const firestore = firebase.firestore();

const getAllvehiculeA = async (req, res, next) => {
    try {
        const students = await firestore.collection('VehiculeA');
        const data = await students.get();
        const studentsArray = [];
        if(data.empty) {
            res.status(404).send('No student record found');
        }else {
            data.forEach(doc => {
                const sinistre = new Vehicule(
                    doc.id,
                    doc.data().Marque==null?"":doc.data().Marque,
                    doc.data().Numero_immatriculation==null?"":doc.data().Numero_immatriculation,
                    doc.data().Pays_immatriculation==null?"":doc.data().Pays_immatriculation,
                    
                   
                );
                studentsArray.push(sinistre);
            });
            res.send(studentsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const get1vehiculeA = async (req, res, next) => {
    
    try {
        const id = req.params.id;
        const student = await firestore.collection('VehiculeA').doc(id);
        const data = await student.get();
        if(!data.exists) {
            res.status(404).send('Student with the given ID not found');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    
    get1vehiculeA,
    getAllvehiculeA,
    
}