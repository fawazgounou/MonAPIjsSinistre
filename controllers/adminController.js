'use strict';

const firebase = require('../db');
const Users = require('../models/user');
 const Sinistre = require('../models/adminsinistre'); 

const firestore = firebase.firestore();

const getAllSinistre = async (req, res, next) => {
    
    try {
        const check=async (name)=>{
            
            const studentst = await firestore.collection('User').doc(name).collection('Sinistre');
            const datat = await studentst.get();
            return datat;
        }
        const students = await firestore.collection('User');
     
        const data = await students.get();
      
        const studentsArray = [];
        const accident= [];
        

        if(data.empty) {
            res.status(404).send('No student record found');
        }else {
            const totalS= [];
            data.forEach(doc => {
                doc.data().name==null?"":doc.data().name
                const datat=check(doc.data().name)
                console.log(datat); 
                datat.forEach(docs => {
                    const sinistre = new Sinistre(
                        docs.data().Localisation,
                        docs.data().date_Sinistre,
                        docs.data().Heure_Sinistre,
                        docs.data().Lieu,
                        docs.data().blesse,
                        docs.data().degats,                     
                   );
                   if (sinistre) {
                    totalS.push(sinistre);
                   } 
                });
                studentsArray.push(totalS);
                console.log(studentsArray) ; 
            });
            
            res.send(totalS);

            
            
                        
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}



module.exports = {
    
    getAllSinistre,
   
    
}