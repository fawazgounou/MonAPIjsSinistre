class Sinistre {
    constructor(Localisation, date_Sinistre, Heure_Sinistre, Lieu, blesse,
        degats) {
            this.Localisation = Localisation;
            this.date_Sinistre = date_Sinistre;
            this.Heure_Sinistre = Heure_Sinistre;
            this.Lieu = Lieu;
            this.blesse = blesse;
            this.degats = degats;
           
    }
}

module.exports = Sinistre;