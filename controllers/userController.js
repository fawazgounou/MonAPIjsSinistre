'use strict';

const firebase = require('../db');
const Users = require('../models/user');
const firestore = firebase.firestore();
const Sinistre = require('../models/adminsinistre'); 
const Vehicule = require('../models/vehicule');

const addUsers = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('User').doc(req.body.name).set(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addcompagnie = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('Compagnie').doc(req.body.name).set(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}


const getuser = async (req, res, next) => {
    try {
        
        const id = req.params.id;
        console.log(id);
        const student = await firestore.collection('User').doc(id);
       
        const data = await student.get();
        if(!data.exists) {
            res.status(404).send('Student with the given ID not found');
        }else {
            res.json(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}




const getUserSinistre = async (req, res, next) => {
    try {
        
        const id = req.params.id;
        console.log(id);
        const student = await firestore.collection('User').doc(id).collection('Sinistre')
       
        const data = await student.get();
        const studentsArray = [];
        if(data.empty) {
            res.status(404).send('Student with the given ID not found');
        }else {
            data.forEach(doc => {
                const sinistre = new Sinistre(
                    doc.data().Localisation,
                    doc.data().date_Sinistre,
                    doc.data().Heure_Sinistre,
                    doc.data().Lieu,
                    doc.data().blesse,
                    doc.data().degats,                     
               );
                studentsArray.push(sinistre);
            });
            res.send(studentsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}



const getAllusers = async (req, res, next) => {
    try {
        const students = await firestore.collection('User');
        
        const data = await students.get();
        const studentsArray = [];
        if(data.empty) {
            res.status(404).send('No student record found');
        }else {
            data.forEach(doc => {
                const sinistre = new Users(
                    doc.data().name==null?"":doc.data().name,
                    doc.data().mail==null?"":doc.data().mail,
                    doc.data().password==null?"":doc.data().password,
                    doc.data().role==null?"":doc.data().role,
                    
                );
                studentsArray.push(sinistre);
            });
            res.send(studentsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const UsersinistreV = async (req, res, next) => {
    try {
        
        const id = req.params.id;
        console.log(id);
        const student = await firestore.collection('User').doc(id).collection('Sinistre').doc('VehiculeA')
       
        const data = await student.get();
        const studentsArray = [];
        if(data.empty) {
            res.status(404).send('Student with the given ID not found');
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


module.exports = {
    addUsers,
    getuser,
    getAllusers,
    addcompagnie,
    getUserSinistre,
    UsersinistreV
   }