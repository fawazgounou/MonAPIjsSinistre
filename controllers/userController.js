'use strict';

const firebase = require('../db');
const firestore = firebase.firestore();
const Users = require('../models/user');
const Sinistre = require('../models/adminsinistre'); 
const { query } = require('express');



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

// const updateUserEmail = async (req, res, next) => {
//     try {
//         const id = req.params.id;
//         const data = req.body;
//         const student =  await firestore.collection('User').doc(id);
//         await student.update(data);
//         res.send('Student record updated successfuly');        
//     } catch (error) {
//         res.status(400).send(error.message);
//     }
// }


const getUserSinistre = async (req, res, next) => {
    try {
        
        const id = req.params.id;
        
        const student = await firestore.collection('User').doc(id).collection('Sinistre')

        const data = await student.get();
        const studentsArray = [];
        
        // console.log(data.empty)

        if(data.empty) {
            res.status(404).send('Student with the given ID not found');
        }else {
            data.forEach(doc => {
                const sinistre = new Sinistre(
                    doc.id,
                    doc.data().ArriereA==null ? "" : doc.data().ArriereA,
                    doc.data().ArriereB==null ? "" : doc.data().ArriereB,
                    doc.data().AvantA==null ? "" : doc.data().AvantA,
                    doc.data().AvantB==null ? "" : doc.data().AvantB,
                    doc.data().DroitA==null ? "" : doc.data().DroitA,
                    doc.data().DroitB==null ? "" : doc.data().DroitB,
                    doc.data().GaucheA==null ? "" : doc.data().GaucheA,
                    doc.data().GaucheB==null ? "" : doc.data().GaucheB,
                    doc.data().HautA==null ? "" : doc.data().HautA,
                    doc.data().HautB==null ? "" : doc.data().HautB,
                    doc.data().Localisation==null ? "" : doc.data().Localisation,
                    doc.data().SignatureA==null ? "" : doc.data().SignatureA,
                    doc.data().SignatureB==null ? "" : doc.data().SignatureB,
                    doc.data().assure==null ? "" : doc.data().assure,
                    doc.data().assureB==null ? "" : doc.data().assureB,
                    doc.data().blesse==null ? "" : doc.data().blesse,
                    doc.data().circonstance==null ? "" : doc.data().circonstance,
                    doc.data().conducteur==null ? "" : doc.data().conducteur,
                    doc.data().conducteurB==null ? "" : doc.data().conducteurB,
                    doc.data().observation==null ? "" : doc.data().observation,
                    doc.data().sinistre==null ? "" : doc.data().sinistre,
                    doc.data().temoins==null ? "" : doc.data().temoins,
                    doc.data().vehicule==null ? "" : doc.data().vehicule,
                    doc.data().assuranceA==null ? "" : doc.data().assuranceA,
                    doc.data().assuranceB==null ? "" : doc.data().assuranceB,
                    
                    // doc.data().AdresseASB==null ? "" : doc.data().AdresseASB,
                    // doc.data().AdresseCB==null ? "" : doc.data().AdresseCB,
                    // doc.data().ArriereA==null? "" : doc.data().ArriereA,
                    // doc.data().ArriereB==null ? "" : doc.data().ArriereB,
                    // doc.data().AvantA==null ? "" : doc.data().AvantA,
                    // doc.data().AvantB==null ? "" : doc.data().AvantB,
                    // doc.data().CirconstanceCB==null ? "" : doc.data().CirconstanceCB,
                    // doc.data().Code_PostalASB==null ? "" : doc.data().Code_PostalASB,
                    // doc.data().DescriptionCB==null ? "" : doc.data().DescriptionCB,
                    // doc.data().DroitA==null ? "" : doc.data().DroitA,
                    // doc.data().DroitB==null ? "" : doc.data().DroitB,
                    // doc.data().DetailleCB==null ? "" : doc.data().DetailleCB,
                    // doc.data().EmailASB==null ? "" : doc.data().EmailASB,
                    // doc.data().GaucheA==null ? "" : doc.data().GaucheA,
                    // doc.data().GaucheB==null ? "" : doc.data().GaucheB,
                    // doc.data().HautA==null ? "" : doc.data().HautA,
                    // doc.data().HautB==null ? "" : doc.data().HautB,
                    // doc.data().Localisation==null ? "" : doc.data().Localisation,
                    // doc.data().MarqueB==null ? "" : doc.data().MarqueB,
                    // doc.data().NomASB==null ? "" : doc.data().NomASB,
                    // doc.data().NomB==null ? "" : doc.data().NomB,
                    // doc.data().NomCB==null ? "" : doc.data().NomCB,
                    // doc.data().Numero_immatriculationB==null ? "" : doc.data().Numero_immatriculationB,
                    // doc.data().Pays_immatriculationB==null ? "" : doc.data().Pays_immatriculationB,
                    // doc.data().PrenomASB==null ? "" : doc.data().PrenomASB,
                    // doc.data().PrenomCB==null ? "" : doc.data().PrenomCB,
                    // doc.data().SignatureA==null ? "" : doc.data().SignatureA,
                    // doc.data().SignatureB==null ? "" : doc.data().SignatureB,
                    // doc.data().TelephoneASSB==null ? "" : doc.data().TelephoneASSB,
                    // doc.data().adresseB==null ? "" : doc.data().adresseB,
                    // doc.data().agenceB==null ? "" : doc.data().agenceB,
                    // doc.data().assure==null ? "" : doc.data().assure,
                    // doc.data().auB==null ? "" : doc.data().auB,
                    // doc.data().blesse==null ? "" : doc.data().blesse,
                    // doc.data().categorieCB==null ? "" : doc.data().categorieCB,
                    // doc.data().circonstance==null ?  "" : doc.data().circonstance,
                    // doc.data().conducteur==null ? "" : doc.data().conducteur,
                    // doc.data().cote_droit==null ? "" : doc.data().cote_droit,
                    // doc.data().cote_gauche==null ? "" : doc.data().cote_gauche,
                    // doc.data().date_naissanceCB==null ? "" : doc.data().date_naissanceCB,
                    // doc.data().duB==null ? "" : doc.data().duB,
                    // doc.data().emailB==null ? "" : doc.data().emailB,
                    // doc.data().emailCB==null ? "" : doc.data().emailCB,
                    // doc.data().fin_valide_permisCB==null ? "" : doc.data().fin_valide_permisCB,
                    // doc.data().nom_agenceB==null ? "" : doc.data().nom_agenceB,
                    // doc.data().num_carte_verteB==null ? "" : doc.data().num_carte_verteB,
                    // doc.data().num_contratB==null ? "" : doc.data().num_contratB,
                    // doc.data().num_permisCB==null ? "" : doc.data().num_permisCB,
                    // doc.data().observation==null ? "" : doc.data().observation,
                    // doc.data().paysB==null ? "" : doc.data().paysB,
                    // doc.data().paysCB==null ? "" : doc.data().paysCB,
                    // doc.data().prise_enchargeB==null ? "" : doc.data().prise_enchargeB,
                    // doc.data().sinistre==null ? "" : doc.data().sinistre,
                    // doc.data().telephoneAB==null ? "" : doc.data().telephoneAB,
                    // doc.data().telephoneCB==null ? "" : doc.data().telephoneCB,
                    // doc.data().temoins==null ? "" : doc.data().temoins,
                    // doc.data().vehicule==null ? "" : doc.data().vehicule,
                )
            //     const sinistre = new Sinistre(
            //         doc.id,
            //         doc.data().Localisation==null?"":doc.data().Localisation,
            //         doc.data().date_Sinistre==null?"":doc.data().date_Sinistre,
            //         doc.data().Heure_Sinistre==null?"": doc.data().Heure_Sinistre,
            //         doc.data().Lieu==null?"":doc.data().Lieu,
            //         doc.data().blesse==null?"":doc.data().blesse,
            //         doc.data().degats==null?"": doc.data().degats,  
            //         doc.data().nomT==null?"": doc.data().nomT,
            //         doc.data().prenomT==null?"": doc.data().prenomT,
            //         doc.data().TelephoneT==null?"": doc.data().TelephoneT,   
            //         doc.data().AdresseT==null?"":doc.data().AdresseT, 
            //         doc.data().nomB==null?"": doc.data().nomB,
            //         doc.data().prenomB==null?"": doc.data().prenomB,
            //         doc.data().AdresseB==null?"": doc.data().AdresseB,       
            //         doc.data().telephoneB==null?"":doc.data().telephoneB,
            //         doc.data().ProfessionB==null?"":doc.data().ProfessionB, 
            //         doc.data().SituationB==null?"":doc.data().SituationB,
            //         doc.data().CasqueB==null?"":doc.data().CasqueB,  
            //         doc.data().Centre_HospitalierB==null?"": doc.data().Centre_HospitalierB, 
            //         doc.data().Nature_GravitéB==null?"":doc.data().Nature_GravitéB, 
            //         doc.data().MarqueV==null?"": doc.data().MarqueV,
            //         doc.data().Numero_immatriculationV==null?"": doc.data().Numero_immatriculationV,
            //         doc.data().Pays_immatriculationV==null?"":doc.data().Pays_immatriculationV,
            //         doc.data().NomAS==null?"":doc.data().NomAS,
            //         doc.data().PrenomAS==null?"":doc.data().PrenomAS,
            //         doc.data().AdresseAS==null?"":doc.data().AdresseAS,       
            //         doc.data().TéléphoneAS==null?"":doc.data().TéléphoneAS,
            //         doc.data().Code_PostalAS==null?"":doc.data().Code_PostalAS, 
            //         doc.data().EmailAS==null?"":doc.data().EmailAS,
            //         doc.data().NomA==null?"":doc.data().NomA,
            //         doc.data().num_contrat==null?"":doc.data().num_contrat,
            //         doc.data().num_carte_verte==null?"":doc.data().num_carte_verte, 
            //         doc.data().du==null?"":doc.data().du,  
            //         doc.data().au==null?"":doc.data().au, 
            //         doc.data().agence==null?"":doc.data().agence,  
            //         doc.data().nom_agence==null?"":doc.data().nom_agence,  
            //         doc.data().adresse==null?"":doc.data().adresse,  
            //         doc.data().pays==null?"":doc.data().pays, 
            //         doc.data().telephone==null?"":doc.data().telephone,
            //         doc.data().email==null?"":doc.data().email, 
            //         doc.data().prise_encharge==null?"":doc.data().prise_encharge,   
            //         doc.data().Circonstance==null?"":doc.data().Circonstance, 
            //         doc.data().NomC==null?"":doc.data().NomC,
            //         doc.data().PrenomC==null?"":doc.data().PrenomC,
            //         doc.data().date_naissanceC==null?"":doc.data().date_naissanceC, 
            //         doc.data().AdresseC==null?"":doc.data().AdresseC,       
            //         doc.data().telephoneC==null?"":doc.data().telephoneC,
            //         doc.data().emailC==null?"":doc.data().emailC, 
            //         doc.data().num_permisC==null?"":doc.data().num_permisC,  
            //         doc.data().paysC==null?"":doc.data().paysC, 
            //         doc.data().categorieC==null?"":doc.data().categorieC, 
            //         doc.data().fin_valide_permisC==null?"":doc.data().fin_valide_permisC,  
            //         doc.data().Description==null?"":doc.data().Description,
            //         doc.data().Détaille==null?"":doc.data().Détaille,
            //         doc.data().AvantA==null?"":doc.data().AvantA,  
            //         doc.data().ArriereA==null?"":doc.data().ArriereA,  
            //         doc.data().DroitA==null?"":doc.data().DroitA,  
            //         doc.data().GaucheA==null?"":doc.data().GaucheA,  
            //         doc.data().HautA==null?"":doc.data().HautA,  
            //         doc.data().CroquisA==null?"":doc.data().CroquisA,
            //         doc.data().SignatureA==null?"":doc.data().SignatureA,
            //         doc.data().MarqueB==null?"": doc.data().MarqueB,
            //         doc.data().Numero_immatriculationB==null?"": doc.data().Numero_immatriculationB,
            //         doc.data().Pays_immatriculationB==null?"":doc.data().Pays_immatriculationB,
            //         doc.data().NomASB==null?"":doc.data().NomASB,
            //         doc.data().PrenomASB==null?"":doc.data().PrenomASB,
            //         doc.data().AdresseASB==null?"":doc.data().AdresseASB,       
            //         doc.data().TéléphoneASSB==null?"":doc.data().TéléphoneASSB,
            //         doc.data().Code_PostalASB==null?"":doc.data().Code_PostalASB, 
            //         doc.data().EmailASB==null?"":doc.data().EmailASB,
            //         doc.data().NomB==null?"":doc.data().NomB,
            //         doc.data().num_contratB==null?"":doc.data().num_contratB,
            //         doc.data().num_carte_verteB==null?"":doc.data().num_carte_verteB, 
            //         doc.data().duB==null?"":doc.data().duB,  
            //         doc.data().auB==null?"":doc.data().auB, 
            //         doc.data().agenceB==null?"":doc.data().agenceB,  
            //         doc.data().nom_agenceB==null?"":doc.data().nom_agenceB,  
            //         doc.data().adresseB==null?"":doc.data().adresseB,  
            //         doc.data().paysB==null?"":doc.data().paysB, 
            //         doc.data().telephoneAB==null?"":doc.data().telephoneAB,
            //         doc.data().emailB==null?"":doc.data().emailB, 
            //         doc.data().prise_enchargeB==null?"":doc.data().prise_enchargeB,   
            //         doc.data().CirconstanceCB==null?"":doc.data().CirconstanceCB, 
            //         doc.data().NomCB==null?"":doc.data().NomCB,
            //         doc.data().PrenomCB==null?"":doc.data().PrenomCB,
            //         doc.data().date_naissanceCB==null?"":doc.data().date_naissanceCB, 
            //         doc.data().AdresseCB==null?"":doc.data().AdresseCB,       
            //         doc.data().telephoneCB==null?"":doc.data().telephoneCB,
            //         doc.data().emailCB==null?"":doc.data().emailCB, 
            //         doc.data().num_permisCB==null?"":doc.data().num_permisCB,  
            //         doc.data().paysCB==null?"":doc.data().paysCB, 
            //         doc.data().categorieCB==null?"":doc.data().categorieCB, 
            //         doc.data().fin_valide_permisCB==null?"":doc.data().fin_valide_permisCB,  
            //         doc.data().DescriptionCB==null?"":doc.data().DescriptionCB,
            //         doc.data().DétailleCB==null?"":doc.data().DétailleCB,
            //         doc.data().AvantB==null?"":doc.data().AvantB,  
            //         doc.data().ArriereB==null?"":doc.data().ArriereB,  
            //         doc.data().DroitB==null?"":doc.data().DroitB,  
            //         doc.data().GaucheB==null?"":doc.data().GaucheB,  
            //         doc.data().HautB==null?"":doc.data().HautB, 
            //         doc.data().SignatureB==null?"":doc.data().SignatureB,
            //    );
               
                studentsArray.push(sinistre);
               
            });
            res.send(studentsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}


const getdetailssinistre = async (req, res, next) => {
    try {
        const user = req.params.uid;
        const id =req.params.id;
        const student = await firestore.collection('User').doc(user).collection('Sinistre').doc(id)
        const data = await student.get();
        if(!data.exists) {
            res.status(404).send('Student with the given ID not found');
        }else {
            res.send(
                data.data()==null?"":data.data()
            );
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
                    doc.id,
                    doc.data().name==null?"":doc.data().name,
                    doc.data().mail==null?"":doc.data().mail,
                    doc.data().role==null?"":doc.data().role,
                  );
                studentsArray.push(sinistre);
            });
            console.log(studentsArray)
            res.send(studentsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateRole = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const student =  await firestore.collection('User').doc(id);
        await student.update(data);
        res.send('Student record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const recherche = async (req, res, next) => {
    try {
        
        const date = req.params.date;
        const id = req.params.id;
        const student = await firestore.collection('User').doc(id).collection('Sinistre');
       
        const data = await student.where('date_Sinistre', '==', req.params.date).get();
        
        const studentsArray = [];
        if(data.empty) {
            res.status(404).send('Student with the given date not found');
        }else { data.forEach(doc => {
            const sinistre = new Sinistre(
                doc.id,
                doc.data().Localisation==null?"":doc.data().Localisation,
                doc.data().date_Sinistre==null?"":doc.data().date_Sinistre,
                doc.data().Heure_Sinistre==null?"": doc.data().Heure_Sinistre,
                doc.data().Lieu==null?"":doc.data().Lieu,
                doc.data().blesse==null?"":doc.data().blesse,
                doc.data().degats==null?"": doc.data().degats,  
                doc.data().nomT==null?"": doc.data().nomT,
                doc.data().prenomT==null?"": doc.data().prenomT,
                doc.data().TelephoneT==null?"": doc.data().TelephoneT,   
                doc.data().AdresseT==null?"":doc.data().AdresseT, 
                doc.data().nomB==null?"": doc.data().nomB,
                doc.data().prenomB==null?"": doc.data().prenomB,
                doc.data().AdresseB==null?"": doc.data().AdresseB,       
                doc.data().telephoneB==null?"":doc.data().telephoneB,
                doc.data().ProfessionB==null?"":doc.data().ProfessionB, 
                doc.data().SituationB==null?"":doc.data().SituationB,
                doc.data().CasqueB==null?"":doc.data().CasqueB,  
                doc.data().Centre_HospitalierB==null?"": doc.data().Centre_HospitalierB, 
                doc.data().Nature_GravitéB==null?"":doc.data().Nature_GravitéB, 
                doc.data().MarqueV==null?"": doc.data().MarqueV,
                doc.data().Numero_immatriculationV==null?"": doc.data().Numero_immatriculationV,
                doc.data().Pays_immatriculationV==null?"":doc.data().Pays_immatriculationV,
                doc.data().NomAS==null?"":doc.data().NomAS,
                doc.data().PrenomAS==null?"":doc.data().PrenomAS,
                doc.data().AdresseAS==null?"":doc.data().AdresseAS,       
                doc.data().TéléphoneAS==null?"":doc.data().TéléphoneAS,
                doc.data().Code_PostalAS==null?"":doc.data().Code_PostalAS, 
                doc.data().EmailAS==null?"":doc.data().EmailAS,
                doc.data().NomA==null?"":doc.data().NomA,
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
                doc.data().Circonstance==null?"":doc.data().Circonstance, 
                doc.data().NomC==null?"":doc.data().NomC,
                doc.data().PrenomC==null?"":doc.data().PrenomC,
                doc.data().date_naissanceC==null?"":doc.data().date_naissanceC, 
                doc.data().AdresseC==null?"":doc.data().AdresseC,       
                doc.data().telephoneC==null?"":doc.data().telephoneC,
                doc.data().emailC==null?"":doc.data().emailC, 
                doc.data().num_permisC==null?"":doc.data().num_permisC,  
                doc.data().paysC==null?"":doc.data().paysC, 
                doc.data().categorieC==null?"":doc.data().categorieC, 
                doc.data().fin_valide_permisC==null?"":doc.data().fin_valide_permisC,  
                doc.data().Description==null?"":doc.data().Description,
                doc.data().Détaille==null?"":doc.data().Détaille,
                doc.data().AvantA==null?"":doc.data().AvantA,  
                doc.data().ArriereA==null?"":doc.data().ArriereA,  
                doc.data().DroitA==null?"":doc.data().DroitA,  
                doc.data().GaucheA==null?"":doc.data().GaucheA,  
                doc.data().HautA==null?"":doc.data().HautA,  
                doc.data().CroquisA==null?"":doc.data().CroquisA,
                doc.data().SignatureA==null?"":doc.data().SignatureA,
                doc.data().MarqueB==null?"": doc.data().MarqueB,
                doc.data().Numero_immatriculationB==null?"": doc.data().Numero_immatriculationB,
                doc.data().Pays_immatriculationB==null?"":doc.data().Pays_immatriculationB,
                doc.data().NomASB==null?"":doc.data().NomASB,
                doc.data().PrenomASB==null?"":doc.data().PrenomASB,
                doc.data().AdresseASB==null?"":doc.data().AdresseASB,       
                doc.data().TéléphoneASSB==null?"":doc.data().TéléphoneASSB,
                doc.data().Code_PostalASB==null?"":doc.data().Code_PostalASB, 
                doc.data().EmailASB==null?"":doc.data().EmailASB,
                doc.data().NomB==null?"":doc.data().NomB,
                doc.data().num_contratB==null?"":doc.data().num_contratB,
                doc.data().num_carte_verteB==null?"":doc.data().num_carte_verteB, 
                doc.data().duB==null?"":doc.data().duB,  
                doc.data().auB==null?"":doc.data().auB, 
                doc.data().agenceB==null?"":doc.data().agenceB,  
                 doc.data().nom_agenceB==null?"":doc.data().nom_agenceB,  
                doc.data().adresseB==null?"":doc.data().adresseB,  
                doc.data().paysB==null?"":doc.data().paysB, 
                doc.data().telephoneAB==null?"":doc.data().telephoneAB,
                doc.data().emailB==null?"":doc.data().emailB, 
                doc.data().prise_enchargeB==null?"":doc.data().prise_enchargeB,   
                doc.data().CirconstanceCB==null?"":doc.data().CirconstanceCB, 
                doc.data().NomCB==null?"":doc.data().NomCB,
                doc.data().PrenomCB==null?"":doc.data().PrenomCB,
                doc.data().date_naissanceCB==null?"":doc.data().date_naissanceCB, 
                doc.data().AdresseCB==null?"":doc.data().AdresseCB,       
                doc.data().telephoneCB==null?"":doc.data().telephoneCB,
                doc.data().emailCB==null?"":doc.data().emailCB, 
                doc.data().num_permisCB==null?"":doc.data().num_permisCB,  
                doc.data().paysCB==null?"":doc.data().paysCB, 
                doc.data().categorieCB==null?"":doc.data().categorieCB, 
                doc.data().fin_valide_permisCB==null?"":doc.data().fin_valide_permisCB,  
                doc.data().DescriptionCB==null?"":doc.data().DescriptionCB,
                doc.data().DétailleCB==null?"":doc.data().DétailleCB,
                doc.data().AvantB==null?"":doc.data().AvantB,  
                doc.data().ArriereB==null?"":doc.data().ArriereB,  
                doc.data().DroitB==null?"":doc.data().DroitB,  
                doc.data().GaucheB==null?"":doc.data().GaucheB,  
                doc.data().HautB==null?"":doc.data().HautB, 
                doc.data().SignatureB==null?"":doc.data().SignatureB,
                
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
    updateRole,
    addcompagnie,
    getUserSinistre,
    getdetailssinistre,
    recherche,
     
   }