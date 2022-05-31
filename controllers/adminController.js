'use strict';

const firebase = require('../db');
const Users = require('../models/user');
 const Sinistre = require('../models/adminsinistre'); 

const firestore = firebase.firestore();

const getAllSinistre = async (req, res, next) => {
    
    try {
       
        const id =req.params.id;
        const name =req.params.name;
            const studentst = await firestore.collection('User').doc(name).collection('Sinistre').doc(id);
            const data = await studentst.get();
          

        const studentsArray = [];
        const accident= [];
        

        if(data.empty) {
            res.status(404).send('No student record found');
        }else {
            
            data.forEach(doc => {
                doc.data().id==null?"":doc.data().id
                const datat=check(doc.data().id)
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
                  
                    studentsArray.push(sinistre);
                  
                });
                studentsArray.push(totalS);
                console.log(studentsArray) ; 
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