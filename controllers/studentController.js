'use strict';

const firebase = require('../db');
const Sinistre = require('../models/student');
const Users = require('../models/user');
const firestore = firebase.firestore();


const addStudent = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('Sinistre').doc().set(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}


const getAllStudents = async (req, res, next) => {
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
                    doc.data().datesinistre,
                    doc.data().heureSinistre,
                    doc.data().lieuSinistre,
          
                );
                studentsArray.push(sinistre);
            });
            res.send(studentsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getStudent = async (req, res, next) => {
    try {
        const id = req.params.id;
        const student = await firestore.collection('Sinistre').doc(id);
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

const updateStudent = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const student =  await firestore.collection('Sinistre').doc(id);
        await student.update(data);
        res.send('Student record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteStudent = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('Sinistre').doc(id).delete();
        res.send('Record deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addStudent,
    getAllStudents,
    getStudent,
    updateStudent,
    deleteStudent
}