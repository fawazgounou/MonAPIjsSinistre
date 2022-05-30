'use strict';

const firebase = require('../db');
const Users = require('../models/user').default;
const firestore = firebase.firestore();
const Sinistre = require('../models/adminsinistre').default; 
const Vehicule = require('../models/vehicule').default;

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
const getTemoin = async (req, res, next) => {
    try {
        
        const id = req.params.id;
        console.log(id);
        const student = await firestore.collection('User').doc(id).collection('Sinistre').doc('Temoins')
       
        const data = await student.get();
        const studentsArray = [];
        if(data.empty) {
            res.status(404).send('Student with the given ID not found');
        }else {
            data.forEach(doc => {
                const sinistre = new Temoins(
                    doc.id,
                    doc.data().nom==null?"":doc.data().nom,
                    doc.data().prenom==null?"":doc.data().prenom,
                    doc.data().Telephone==null?"":doc.data().Telephone,   
                    doc.data().Adresse==null?"":doc.data().Adresse,                        
               );
                studentsArray.push(sinistre);
            });
            res.send(studentsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getBlesse = async (req, res, next) => {
    try {
        
        const id = req.params.id;
        console.log(id);
        const student = await firestore.collection('User').doc(id).collection('Sinistre').doc('Blesse')
       
        const data = await student.get();
        const studentsArray = [];
        if(data.empty) {
            res.status(404).send('Student with the given ID not found');
        }else {
            data.forEach(doc => {
                const sinistre = new Blesse(
                    doc.id,
                    doc.data().nom==null?"":doc.data().nom,
                    doc.data().prenom==null?"":doc.data().prenom,
                    doc.data().Adresse==null?"":doc.data().Adresse,       
                    doc.data().Telephone==null?"":doc.data().Telephone,
                    doc.data().Profession==null?"":doc.data().Profession, 
                    doc.data().Situation==null?"":doc.data().Situation,
                    doc.data().Casque==null?"":doc.data().Casque,  
                    doc.data().Centre_Hospitalier==null?"":doc.data().Centre_Hospitalier, 
                    doc.data().Nature_Gravité==null?"":doc.data().Nature_Gravité,                  
               );
                studentsArray.push(sinistre);
            });
            res.send(studentsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAssure = async (req, res, next) => {
    try {
        
        const id = req.params.id;
        console.log(id);
        const student = await firestore.collection('User').doc(id).collection('Sinistre').doc('AssureA')
       
        const data = await student.get();
        const studentsArray = [];
        if(data.empty) {
            res.status(404).send('Student with the given ID not found');
        }else {
            data.forEach(doc => {
                const sinistre = new Assure(
                    doc.id,
                    doc.data().nom==null?"":doc.data().nom,
                    doc.data().prenom==null?"":doc.data().prenom,
                    doc.data().Adresse==null?"":doc.data().Adresse,       
                    doc.data().Telephone==null?"":doc.data().Telephone,
                    doc.data().Code_Postal==null?"":doc.data().Code_Postal, 
                    doc.data().Email==null?"":doc.data().Email,  
                           
               );
                studentsArray.push(sinistre);
            });
            res.send(studentsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAssurance = async (req, res, next) => {
    try {
        
        const id = req.params.id;
        console.log(id);
        const student = await firestore.collection('User').doc(id).collection('Sinistre').doc('AssuranceA')
       
        const data = await student.get();
        const studentsArray = [];
        if(data.empty) {
            res.status(404).send('Student with the given ID not found');
        }else {
            data.forEach(doc => {
                const sinistre = new Assurance(
                    doc.id,
                    doc.data().Nom==null?"":doc.data().Nom,
                    doc.data().num_contrat==null?"":doc.data().num_contrat,
                    doc.data().num_carte_verte==null?"":doc.data().num_carte_verte, 
                    doc.data().du==null?"":doc.data().du,  
                    doc.data().au==null?"":doc.data().au, 
                    doc.data().agence==null?"":doc.data().agence,  
                     doc.data().nom_agence==null?"":doc.data().nom_agence,  
                    doc.data().adresse==null?"":doc.data().adresse,  
                    doc.data().pays==null?"":doc.data().pays, 
                    doc.data().telephone==null?"":doc.data().telephone,
                    doc.data().email==null?"":doc.data().email, 
                    doc.data().prise_encharge==null?"":doc.data().prise_encharge, 
               );
                studentsArray.push(sinistre);
            });
            res.send(studentsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getConducteur = async (req, res, next) => {
    try {
        
        const id = req.params.id;
        console.log(id);
        const student = await firestore.collection('User').doc(id).collection('Sinistre').doc('ConducteurA')
       
        const data = await student.get();
        const studentsArray = [];
        if(data.empty) {
            res.status(404).send('Student with the given ID not found');
        }else {
            data.forEach(doc => {
                const sinistre = new Conducteur(
                    doc.id,
                    doc.data().Nom==null?"":doc.data().Nom,
                    doc.data().Prenom==null?"":doc.data().Prenom,
                    doc.data().date_naissance==null?"":doc.data().date_naissance, 
                    doc.data().Adresse==null?"":doc.data().Adresse,       
                    doc.data().telephone==null?"":doc.data().telephone,
                    doc.data().email==null?"":doc.data().email, 
                    doc.data().num_permis==null?"":doc.data().num_permis,  
                    doc.data().pays==null?"":doc.data().pays, 
                    doc.data().categorie==null?"":doc.data().categorie, 
                    doc.data().fin_valide_permis==null?"":doc.data().fin_valide_permis,  
                    doc.data().id_SignatureCA==null?"":doc.data().id_SignatureCA, 
                    
               );
                studentsArray.push(sinistre);
            });
            res.send(studentsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getCirconstance = async (req, res, next) => {
    try {
        
        const id = req.params.id;
        console.log(id);
        const student = await firestore.collection('User').doc(id).collection('Sinistre').doc('CirconstanceA')
       
        const data = await student.get();
        const studentsArray = [];
        if(data.empty) {
            res.status(404).send('Student with the given ID not found');
        }else {
            data.forEach(doc => {
                const Circonstance = new Circonstance(
                    doc.id,
                    doc.data().Circonstance==null?"":doc.data().Circonstance,
                    doc.data().id_CirconstanceA==null?"":doc.data().id_CirconstanceA,
                  
               );
                studentsArray.push(Circonstance);
            });
            res.send(studentsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getObservation = async (req, res, next) => {
    try {
        
        const id = req.params.id;
        console.log(id);
        const student = await firestore.collection('User').doc(id).collection('Sinistre').doc('Observation')
       
        const data = await student.get();
        const studentsArray = [];
        if(data.empty) {
            res.status(404).send('Student with the given ID not found');
        }else {
            data.forEach(doc => {
                const Observation = new Observation(
                    doc.id,
                    doc.data().Description==null?"":doc.data().Description,
                    doc.data().Détaille==null?"":doc.data().Détaille,
                    
                    
               );
                studentsArray.push(Observation);
            });
            res.send(studentsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}


const getPhotos = async (req, res, next) => {
    try {
        
        const id = req.params.id;
        console.log(id);
        const student = await firestore.collection('User').doc(id).collection('Sinistre').doc('PhotosA')
       
        const data = await student.get();
        const studentsArray = [];
        if(data.empty) {
            res.status(404).send('Student with the given ID not found');
        }else {
            data.forEach(doc => {
                const Photo = new Photo(
                    doc.id,
                    doc.data().imageUrl==null?"":doc.data().imageUrl,
                    doc.data().name==null?"":doc.data().name,
                    
                    
               );
                studentsArray.push(Photo);
            });
            res.send(studentsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getCroquis = async (req, res, next) => {
    try {
        
        const id = req.params.id;
        console.log(id);
        const student = await firestore.collection('User').doc(id).collection('Sinistre').doc('CroquisA')
       
        const data = await student.get();
        const studentsArray = [];
        if(data.empty) {
            res.status(404).send('Student with the given ID not found');
        }else {
            data.forEach(doc => {
                const Croquis = new Croquis(
                    doc.id,
                    doc.data().imageUrl==null?"":doc.data().imageUrl,
                    doc.data().name==null?"":doc.data().name,
                    
                    
               );
                studentsArray.push(Croquis);
            });
            res.send(studentsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getSignature = async (req, res, next) => {
    try {
        
        const id = req.params.id;
        console.log(id);
        const student = await firestore.collection('User').doc(id).collection('Sinistre').doc('SignatureA')
       
        const data = await student.get();
        const studentsArray = [];
        if(data.empty) {
            res.status(404).send('Student with the given ID not found');
        }else {
            data.forEach(doc => {
                const Signature = new Signature(
                    doc.id,
                    doc.data().imageUrl==null?"":doc.data().imageUrl,
                    doc.data().name==null?"":doc.data().name,
                    
                    
               );
                studentsArray.push(Signature);
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
    UsersinistreV,
    getTemoin,
    getBlesse,
    getAssure,
    getAssurance,
    getConducteur,
    getCirconstance,
    getPhotos,
    getCroquis,
    getSignature,

   }