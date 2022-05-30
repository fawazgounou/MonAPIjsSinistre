class Sinistre {
    constructor(id, dateSinistre, heureSinistre, lieuSinistre, blesse,
        degats,id_vehiculeA, id_vehiculeB, id_AssuranceA, id_AssuranceB, id_assuréA, id_AsssuréB,
        id_CirconstanceA, id_CirconstanceB, id_conducteurA, id_conducteurB, id_observationA, id_observationB) {
            this.id = id;
            this.dateSinistre = dateSinistre;
            this.heureSinistre = heureSinistre;
            this.lieuSinistre = lieuSinistre;
            this.blesse = blesse;
            this.degats = degats;
            this.id_vehiculeA = id_vehiculeA;
            this.id_vehiculeB = id_vehiculeB;
            this.id_AssuranceA = id_AssuranceA;
            this.id_AssuranceB = id_AssuranceB;
            this.id_assuréA = id_assuréA;
            this.id_AsssuréB = id_AsssuréB;
            this.id_CirconstanceA = id_CirconstanceA;
            this.id_CirconstanceB = id_CirconstanceB;
            this.id_conducteurA = id_conducteurA;
            this.id_conducteurB = id_conducteurB;
            this.id_observationA = id_observationA;
            this.id_observationB = id_observationB;
    }
}

module.exports= Sinistre;