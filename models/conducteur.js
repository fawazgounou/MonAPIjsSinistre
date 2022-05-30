class Conducteur {
    constructor(
        id,
        Nom,
        Prenom,
        date_naissance,
        Adresse,
        telephone,
        email,
        num_permis,
        pays,
        categorie,
        fin_valide_permis,
         id_SignatureCA,
     
    ) { this.id = id;    
         this.Nom =Nom;
            this.Prenom=Prenom;
            this.date_naissance  =date_naissance;
            this.Adresse=Adresse;
            this.telephone =telephone;
            this.email =email;
            this.num_permis =num_permis;
           this.pays =pays;
           this.categorie =categorie;
           this.fin_valide_permis =fin_valide_permis;
          this.id_SignatureCA =id_SignatureCA;
        
    }
}

export default Conducteur;