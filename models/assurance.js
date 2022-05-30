class Assurance {
    constructor(
      id,
      Nom,
      num_contrat,
      num_carte_verte,
        du,
        au,
        agence,
        nom_agence,
        adresse,
        pays,
        telephone,
        email,
        prise_encharge) {
          this.id = id;
          this.Nom =Nom;
            this.num_contrat=num_contrat;
            this.num_carte_verte=num_carte_verte;
           this.du  =du;
           this.au =au;
           this.agence =agence;
           this.nom_agence =nom_agence;
           this.adresse =adresse;
           this.pays =pays;
           this.telephone =telephone;
           this.email =email;
           this.prise_encharge =prise_encharge;
    }
}

module.exports= Assurance;