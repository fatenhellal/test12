import React, { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import './Categories.css';
import Footer from "../Footer";
import Search from "./Search";
import { useTranslation } from 'react-i18next';


  const categories ={
    "1": {
      "category": "SANTÉ",
      "image": "SANTE1.jpeg",
      "subcategories": [
        {
          "name": "medecins",
          "image": "medecin.jpeg",
          "subcategories": [
            {
              "name": "Médecine généraliste",
              "image": "Médecine généraliste.jpeg"
            },
            {
              "name": "Pédiatrie",
              "image": "Pédiatrie.jpeg"
            },
            {
              "name": "Psychiatre",
              "image": "Psychiatre.jpeg"
            },
            {
              "name": "Gynécologue",
              "image": "Gynécologue.jpeg"
            },
          
            {
              "name": "Allergologue",
              "image": "Allergologue.jpeg"
            },
            {
              "name": "Neurologue",
              "image": "Neurologue.jpeg"
            },
            {
              "name": "Dentiste",
              "image": "Chirurgien orale.jpeg"
            },
            {
              "name": "Ophtalmologiste",
              "image": "Ophtalmologiste.jpeg"
            },
            {
              "name": "Diabétologue",
              "image": "Endocrinologue-diabétologue-nutritionniste.jpeg"
            },
            {
              "name": "Dermatologue",
              "image": "Dermatologue.jpeg"
            },
            {
              "name": "Médecine cardiovasculaire",
              "image": "Médecine cardiovasculaire.jpeg"
            },
          
            {
              "name": "Anatomo-cytopathologiste",
              "image": "Anatomo-cytopathologiste.jpeg"
            },
            {
              "name": "Anesthésiste-réanimateur",
              "image": "Anesthésiste-réanimateur.jpeg"
            },
           
           
           
            {
              "name": "Médecine du travail",
              "image": "Médecine du travail.jpeg"
            },
            {
              "name": "Médecine du sport",
              "image": "Médecine du sport.jpg"
            },
     
            
         
           
            {
              "name": "Hépato-gastro-entérologue",
              "image": "Hépato-gastro-entérologue.jpeg"
            },
           
         
            {
              "name": "Biologiste médicale",
              "image": "Biologiste médicale.jpeg"
            },
          
           
      
            {
              "name": "Médecine intensive-réanimation",
              "image": "Médecine intensive-réanimation.jpeg"
            },
            
            {
              "name": "Médecine nucléaire",
              "image": "Médecine nucléaire.jpg"
            },
            {
              "name": "Médecine physique réadaptateur",
              "image": "Médecine physique réadaptateur.jpeg"
            },
           
            
         
            {
              "name": "Oncologue",
              "image": "Oncologue.jpeg"
            },
            
            {
              "name": "Pneumologue",
              "image": "Pneumologue.jpeg"
            },
          
            {
              "name": "Radiologue et imagerie médicale",
              "image": "Radiologue et imagerie médicale.jpeg"
            },
            
          
            {
              "name": "Chirurgien pédiatrique",
              "image": "Chirurgien pediatrique.jpeg"
            },
            {
              "name": "Chirurgien maxillo facial stomatologue",
              "image": "Chirurgien maxillo facial stomatologue.jpeg"
            },
          
            {
              "name": "Chirurgien orthopédiste traumatologue",
              "image": "Chirurgien orthopédiste traumatologue.jpeg"
            },
            {
              "name": "Chirurgien thoracique et cardiovasculaire",
              "image": "Chirurgien thoracique et cardiovasculaire.jpeg"
            },
            {
              "name": "Chirurgien vasculaire",
              "image": "Chirurgien vasculaire.jpeg"
            },
            {
              "name": "Chirurgien viscérale et digestive",
              "image": "Chirurgien viscérale et digestive.jpeg"
            },
            {
              "name": "Gynécologue obstétricien",
              "image": "Gynécologue obstrétricien.jpeg"
            },
            {
              "name": "Neurochirurgien",
              "image": "Neurochirurgien.jpeg"
            },
        
            {
              "name": "Oto-Rhino-Laryngologiste",
              "image": "Oto-Rhino-Laryngologiste.jpeg"
            },
            {
              "name": "Urologue",
              "image": "Urologue.jpeg"
            },
           
        
            {
              "name": "Biologie de la reproduction",
              "image": "Biologie de la reproduction.jpg"
            },
            {
              "name": "Hématologue et immunologiste",
              "image": "Hématologue et immunologiste.jpeg"
            },
           
            {
              "name": "Médecine moléculaire, génétique et pharmacologie",
              
              "image": "medcinemoleculaire.jpeg"
            }
          ]
        },
        
        
        
        {
          "name": "Clinique",
          "image": "Clinique.png"
        },
        ,{
          "name": "SOS Infirmerie",
          "image": "SOS Infirmerie.jpeg"
        },
        {
          "name": "Pharmacie",
          "image": "Pharmacie.jpeg"
        },
        {
          "name": "Ambulance",
          "image": "Ambulance.jpeg"
        },
        {
          "name": "Centre médicale",
          "image": "Centre médicale.jpg"
        },
        
        {
          "name": "Kiné",
          "image": "Kiné.jpeg"
        },
        {
          "name": "Infermier",
          "image": "Infirmerie.jpeg"
        },
        {
          "name": "Nutritionniste",
          "image": "nutritionniste.jpeg"
        },
        ,
        {
          "name": "Opticien",
          "image": "opticien.jpeg"
        },
        {
          "name": "Laboratoire",
          "image": "labo.jpeg"
        },
       
        
      
        
        {
          "name": "Auxiliére de vie",
          "image": "auxiliérevie.jpeg"
        },
        
        
        {
          "name": "Paramédicale",
          "image": "paramedicale.jpeg"
        },
        {
          "name": "Vétérinaire",
          "image": "Vétérinaire.jpeg"
        },{
          "name": "Technicien de matériel",
          "image": "Technicien de matériel.jpeg"
        }
      ]
    },
    "2": {
      "category": "DROIT",
      "image": "DROIT.jpg",
      "subcategories": [
        {
          "name": "Avocats",
          "image": "Avocats.jpeg",
          "subcategories": [
            {
              "name": "Avocat à la cour d'appel",
              "image": "Avocat à la cour d'appel.jpeg"
            },
           

           
            {
              "name": "Avocat à la cour de cassation",
              "image": "Avocat à la cour de cassation.jpeg"
            },
            {
              "name": "Avocat",
              "image": "Avocat stagiaire.jpeg"
            }]
        },
        {
          "name": "Notaire",
          "image": "Notaire.jpeg"
        },
        {
          "name": "Huissiers",
          "image": "Huissiers.jpeg"
        },
        {
          "name": "Traducteur",
          "image": "Traducteur.jpeg"
        },
        {
          "name": "Experts",
          "image": "Experts.jpeg"
        },
        {
          "name": "Conseiller juridique d'entreprise",
          "image": "Conseiller juridique d'entreprise.jpeg"
        }
      ]
    },
    "3": {
      "category": "BÂTIMENT",
      "image": "BÂTIMENT.jpeg",
      "subcategories": [
        {
          "name": "Architecte",
          "image": "Architecte.jpeg"
        },
        {
          "name": "Ingénieur de béton",
          "image": "Ingénieur de béton.jpeg"
        },
        {
          "name": "Architecte de l'intérieur",
          "image": "Architecte de l'intérieur.jpeg"
        },
        {
          "name": "Génie civil",
          "image": "Génie civil.jpeg"
        },{
          "name": "Promotion immobilière",
          "image": "Promotion immobilière.jpeg"
        },
        {
          "name": "Entrepreneur",
          "image": "entrepreneur de construction.jpg"
        },
        {
          "name": "Cuisine sur mesure",
          "image": "cuisine sur mesure.jpeg"
        },
        {
          "name": "Urbaniste",
          "image": "Urbaniste.jpeg"
        },
        {
          "name": "Paysagistes",
          "image": "Paysagistes.jpeg"
        },
        
        {
          "name": "Topographe",
          "image": "Topographe.jpeg"
        },
       
        {
          "name": "Location de matériel de construction",
          "image": "Location de matériel de construction.jpeg"},
        {
          "name": "Vente de matériel de construction",
          "image":"Vente de matériel de construction.jpg"
        },
       
      ]
    },
    "4": {
      "category": "SHOPPING",
      "image": "SHOPPING1.jpeg",
      "subcategories": [
        {
          "name": "Hommes",
          "image": "Homme.jpeg",
          "subcategories": [
            {
              "name": "Prêt à porter",
              "image": "Prêt à porter homme.jpeg"},
            {
              "name": "Accessoires",
              "image": "Accessoires homme.jpeg"
            },
            {
              "name": "Chaussures",
              "image": "Chaussures homme.jpeg"
            }
          ]
        },
        {
          "name": "Femmes",
          "image": "femme.jpeg",
          "subcategories": [
            {
              "name": "Prêt à porter",
              "image": "Prêt à porter femme.jpeg"
            },
            {
              "name": "Accessoires",
              "image": "Accessoires femme.jpeg"
            },
            {
              "name": "Chaussures",
              "image": "Chaussures femme.jpeg"
            }
           
          ]
        },
        {
          "name": "Enfants",
          "image": "Enfant.jpeg",
          "subcategories": [
            {
              "name": "Prêt à porter",
              "image": "Prêt à porter enfant.jpeg"
            },
            {
              "name": "Accessoires",
              "image": "Accessoires enfant.jpg"
            },
            {
              "name": "Chaussures",
              "image": "Chaussures enfant.jpg"
            },
            {
              "name": "Jouets",
              "image": "Jouets.jpeg"
            }
          ]
        },
        {
          "name": "Maisons",
          "image": "maison.jpeg",
          "subcategories": [
            {
              "name": "Cuisine",
              "image": "cuisine.jpeg"
            },
            {
              "name": "Tapis et rideaux",
              "image": "tapie et rideaux.jpeg"
            },
            {
              "name": "Meuble",
              "image": "meuble.jpeg"
            }
            ,
            {
              "name": "Moquette",
              "image": "moquette moderne.jpg"
            }
          ]
        },
        {
          "name": "Centre commerciaux",
          "image": "Centre commerciau.jpeg"
        },
        {
          "name": "Bijouterie",
          "image": "Bijouterie.jpeg"
        },
        {
          "name": "Super fripe",
          "image": "Super fripe.jpeg"
        },
        {
          "name": "Boutique divers",
          "image": "Boutique divers.jpg"
        },
        {
          "name": "Produits cosmétiques",
          "image": "Produits cosmétiques.jpeg"
        },
        {
          "name": "Parfumerie",
          "image": "parfumeri.jpeg",
        }, {
          "name": "Artisanat",
          "image": "artisanat tunisienne.jpg"
        },
            {
              "name": "Handmade",
              "image": "Handmade.jpg"
            },
            {
              "name": "Importer",
              "image": "Importer.jpeg"
            },
           
            
          ]
        }
,
    "5": {
      "category": "MÉTIERS",
      "image": "MÉTIERS.jpeg",
      "subcategories": [
        {
          "name": "Maçon",
          "image": "Maçon.jpeg"},
        {
          "name": "Électricien",
          "image": "electricien.jpeg"
        },
      
        {
          "name": "Plombier",
          "image": "Plombier.jpeg"
        },
        {
          "name": "Menuisier",
          "image": "Menuisier .jpeg"
        },
        {
          "name": "Étanchéité",
          "image": "Étanchéité.jpg"
        },
        {
          "name": "Aluminium",
          "image": "Aluminium.jpeg"
        },
        {
          "name": "Forgeron",
          "image": "Forgeron.jpeg"
        },
        {
          "name": "Chaud Froid",
          "image": "chaudfroid.jpeg"
        },
        {
          "name": "Réparation électroménager",
          "image": "reparationelectromenager.jpeg"
        },
        

        
        {
          "name": "Artisan bijoutier",
          "image": "Artisante bijoutier.jpeg"
        },
        {
          "name": "Jardinier",
          "image": "Jardinier.jpeg"
        },
        {
          "name": "Pâtissier",
          "image": "Pâtissier.jpeg"
        },
        {
          "name": "Femme de ménage",
          "image": "Femme de ménage.jpeg"
        },
        {
          "name": "Baby sitter",
          "image": "Baby sitter.jpeg"
        },
        {
          "name": "Courtier",
          "image": "courtier.jpeg"
        },
        {
          "name": "Faux plafond",
          "image": "Faux plafond.jpeg"
        },
        {
          "name": "Placo",
          "image": "Placo.jpeg"
        },
        {
          "name": "Parabole",
          "image": "Parabole.jpg"
        },
        {
          "name": "Soudeur",
          "image": "Soudeur.jpeg"
        },
        
        {
          "name": " Vitrerie",
          "image": "Vitrerie.jpeg"
        },

       
        {
          "name": "Tapissiers",
          "image": "Tapissiers.jpeg"
        },
        {
          "name": "Préparateurs radio et télévision",
          "image": "Préparateurs radio et télévision.jpeg"
        },
        {
          "name": "Charpentier métallique",
          "image": "charpentier métallique.jpeg"
        },
        {
          "name": "Plongeur",
          "image": "plongeur.jpeg"
        },
        {
          "name": "Pêcheur",
          "image": "pêche.jpg"
        },
        {
          "name": "Fleuriste",
          "image": "Fleuriste.jpeg"
        },
     
      ]
    },
    "6": {
      "category": "GASTRONOMIE",
      "image": "GASTRONOMIE1.jpeg",
      "subcategories": [
        {
          "name": "Restaurant à la carte",
          "image": "Restaurant à la carte.jpeg"
        },
        {
          "name": "Fast food",
          "image": "Fast food.jpeg"
        },
        {
          "name": "Restaurant lounge",
          "image": "Restaurant lounge.jpeg"
        },
        {
          "name": "Spécialité locale",
          "image": "Spécialité locale.jpeg"
        },
        {
          "name": "Pâtisserie",
          "image": "Pâtisserie.jpeg"
        },
        {
          "name": "Food camion",
          "image": "Food camion.jpeg"
        },
        {
          "name": "Traiteur",
          "image": "Traiteur.jpeg"
        },
        {
          "name": "Conserve alimentaire",
          "image": "Conserve alimentaire.jpeg"
        }
      ]
    },
    "7": {
      "category": "LOISIR",
      "image": "LOISIR.jpg",
      "subcategories": [
        {
          "name": "Cinéma",
          "image": "Cinéma.jpeg"
        },
        {
          "name": "Café",
          "image": "Café.jpeg"
        },
        {
          "name": "Salon de thé",
          "image": "Salon de thé.jpeg"
        },
        {
          "name": "Parc de loisirs",
          "image": "Parc de loisirs.jpeg"
        },
        {
          "name": "Espace familiale",
          "image": "Espace famillialle.jpeg"
        },
        {
          "name": "Théâtre",
          "image": "Théâtre.jpeg"
        },
        {
          "name": "Festival",
          "image": "Festival.jpg"
        },
        {
          "name": "Disco",
          "image": "Disco.jpg"
        },
       
        
        
        {
          "name": "Cirque",
          "image": "cirque.jpg"
        },
         ,{
          "name": "Rando et camping",
          "image": "Rando et camping.jpeg"
        },
      ]
    },
    "8": {
      "category": "GROSSISTE - DÉPOT",
      "image": "grossiste.jpeg",
      "subcategories": [
        {
          "name": "Agroalimentaire",
          "image": "GROSSISTE - DEPOT Agroalimentaire.jpg"
        },
        {
          "name": "Construction",
          "image": "GROSSISTE - DEPOT Construction.jpg"
        },
        {
          "name": "Vêtements",
          "image": "GROSSISTE - DEPOT Vêtements.jpeg"
        },
        {
          "name": "Accessoires",
          "image": "GROSSISTE - DEPOT Accessoires.jpg"
        },
        {
          "name": "Décoration",
          "image": "GROSSISTE - DEPOT Décoration.jpeg"
        },
        {
          "name": "Lumière et câble",
          "image": "GROSSISTE - DEPOT Lumière et câble.jpg"
        },
        {
          "name": "Maquillage",
          "image": "GROSSISTE - DEPOT Maquillage.jpeg"
        },
        {
          "name": "Fournisseur médical",
          "image": "GROSSISTE - DEPOT Fournisseur médical.jpg"
        },
        {
          "name": "Électroménager",
          "image": "GROSSISTE - DEPOT Électroménager.jpeg"
        },
        {
          "name": "Article Bébé et Maman",
          "image": "GROSSISTE - DEPOT Article Bébé et Maman.jpg"
        },
        {
          "name": "Plastique",
          "image": "GROSSISTE - DEPOT Plastique.jpg"
        },
        {
          "name": "Jouets",
          "image": "GROSSISTE - DEPOT Jouets.jpeg"
        },
        {
          "name": "Informatique",
          "image": "GROSSISTE - DEPOT Informatique.jpeg"
        },
        {
          "name": "Agriculture",
          "image": "GROSSISTE - DEPOT Agricole.jpg"
        },
        {
          "name": "Meuble",
          "image": "GROSSISTE - DEPOT Meuble.jpeg"
        },
        {
          "name": "Fourniture scolaire",
          "image": "GROSSISTE Fourniture scolaire.jpg"
        },
        {
          "name": "Eaux et boissons gazeuses",
          "image": "GROSSISTE Eaux minérales et boissons gazeuses.jpeg"
        }
      ]
    },
    "9": {
      "category": "MARCHÉ",
      "image": "MARCHÉ1.jpeg",
      "subcategories": [
        {
          "name": "Boulangerie",
          "image": "Boulangerie.jpeg"
        },
        {
          "name": "Boucherie",
          "image": "boucherie.jpg"
        },
        {
          "name": "Charcuterie",
          "image": "Charcuterie.jpg"
        },
        {
          "name": "Crémerie",
          "image": "Crémerie.jpeg"
        },
        {
          "name": "Épicerie",
          "image": "Épicerie.jpeg"
        },
        {
          "name": "Poissonnerie",
          "image": "Poissonnerie.jpeg"
        },
        {
          "name": "Vendeur fruits et légumes",
          "image": "Vendeur fruits et légumes.jpeg"
        },
        {
          "name": "Poulailler",
          "image": "poulailler vendeur marche.jpg"
        },
        {
          "name": "Magasin",
          "image": "Magasin.jpeg"
        },
        {
          "name": "Drug store",
          "image": "drugstore.jpeg"
        },
        {
          "name": "Vente du miel",
          "image": "Vente du miel.jpeg"
        },
        {
          "name": "Vente matériel de péche",
          "image": "peche2.jpeg"
        },
        {
          "name": "Vente matériel de chasse",
          "image": "chasse.jpeg"
        },
        {
          "name": "Supermarché",
          "image": "supermache.jpeg"
        }
        
      ]
    },
    "10": {
      "category": "ÉDUCATION",
      "image": "EDUCATION.jpeg",
      "subcategories": [
        {
          "name": "Établissement privé",
          "image": "Etablissement prive.jpeg",
          "subcategories": [
        {
          "name": " Garderie scolaire ",
          "image": "Garderie scolaire.jpeg"
        },
        {
          "name": " Crèche  ",
          "image": "crèche garderie.jpg"
        },
        {
          "name": "Jardin d'enfants ",
          "image": "jardin d'enfants.jpeg"
        },
        {
          "name": " Centre de soutien scolaire",
          "image": "centre de soutien scolaire.jpeg"
        },
        {
          "name": "  Centre de formation ",
          "image": "Centre de formation.jpeg"
        },
        {
          "name": " Ecole",
          "image": "école.jpeg"
        },
        {
          "name": "  Lycée ",
          "image": "Lycée.jpg"
        },
        {
          "name": "  Faculté ",
          "image": "faculté.jpeg"
        },
       
      
      ]
        },
        {
          "name": "Accompagnateur",
          "image": "Accompagnateur.jpeg"
        },
        {
          "name": "Enseignant",
          "image": "Enseignant.jpeg"
        },
        {
          "name": "Professeurs",
          "image": "Professeurs.jpeg"
        },
       
        {
          "name": "Club Robotique",
          "image": "Club robotique.jpg"
        },
        {
          "name": "Coworking space",
          "image": "Coworking space.jpeg"
        },
        {
          "name": "Centre d'handicapés",
          "image": "Centre d'handicapés.jpeg"
        }
      ]
    },
    "11": {
      "category": "ESTHETIQUE",
      "image": "ESTHETIQUE.jpg",
      "subcategories": [
        {
          "name": "Coiffure",
          "image": "coiffures homme et femme.jpg",
          "subcategories":
          [
              {"name":"Hommes",
              "image":"Coiffeur homme.jpeg"
            },
              {
              "name":"Femmes",
              "image":"Coiffeur femme.jpeg"
            }
            ]
        },
        {
          "name": "Centre de remise en forme",
          "image": "centreremiseenforme.jpeg"
        },{
          "name": "Estheticienne",
          "image": "estheticienne.jpeg"
        },
       
        {
          "name": "Epilation",
          "image": "Epilation.jpeg"
        },
        {
          "name": "Centre d'ésthetique",
          "image": "centreesthetique.jpeg"
        },
        
        {
          "name": "Onglerie",
          "image": "Onglerie.jpeg"
        },
        {
          "name": "Chirurgie esthétique",
          "image": "Chirurgie esthétique.jpg",
         
        },
        
        {
          "name": "Piercing",
          "image": "Piercing.jpeg"
        },
        {
          "name": "Tatouage",
          "image": "Tatouage.jpeg"
        },
        {
          "name": "Lazer",
          "image": "Laser.jpeg"
        },
        
        
        
       
        {
          "name": "Microneedling",
          "image": "Microneedling.jpeg"
        }
      ]
    },
    "12": {
      "category": "ÉVÉNEMENTIEL",
      "image": "EVENEMENTIEL1.jpeg",
      "subcategories": [
        {
          "name": "Salle des fête",
          "image": "Salle des fête.jpeg"
        },
        {
          "name": "Location de costumes et des robes de fête",
          "image": "Location de costumes et des robe des fête.jpeg"
        },
        {
          "name": "Location de matériel de fête",
          "image": "Location de matériel des fête.jpeg"
        },
        {
          "name": "Serveurs",
          "image": "serveurs.jpeg"
        },
        {
          "name": "Animateurs",
          "image": "Animateurs.jpeg"
        },
        {
          "name": "Foire",
          "image": "Foire.jpeg"
        },
        {
          "name": "Décoration des fêtes",
          "image": "Décoration des fête.jpeg"
        },
        {
          "name": "Société événementielle",
          "image": "Societe évenementielle.jpeg"
        },
       
      ]
    },
    "13": {
      "category": "TRANSPORT",
      "image": "transport.jpeg",
      "subcategories": [
        {
          "name": "Taxi",
          "image": "Taxi.png"
        },
        {
          "name": "Location de voitures",
          "image": "Location de voitures.jpeg"
        },
        {
          "name": "Grand Taxis",
          "image": "Grand Taxis.png"
        },
        ,
        {
          "name": "Taxi moto",
          "image": "Taxi moto scooter pro.jpg"
        },
        {
          "name": "Louage",
          "image": "louage.jpeg"
        },
        {
          "name": "Transport Maritime",
          "image": "Tansport Maritime.jpeg"
        },
        {
          "name": "Location Transport",
          "image": "Location Transport.jpg",
      "subcategories": [
        {
          "name": "Trottinette",
          "image": "trottinette.jpeg"
        },
        {
          "name": "Calèche",
          "image": "calèche.jpeg"
        },
        {
          "name": "Vélo",
          "image": "vélo.jpg"
        },
        {
          "name": "Train",
          "image": "Train.jpg"
        },
       {
          "name": "Quad",
          "image": "Quad.jpeg"
        },
      ]
        }
      ]
    },
    "14": {
      "category": "SÉCURITÉ",
      "image": "SÉCURITÉ.jpeg",
      "subcategories": [
        {
          "name": "Vente et installation des caméras et alarmes",
          "image": "Vente et installation des camera et alarmes.jpeg"
        },
        {
          "name": "Agence de sécurité",
          "image": "Agence de sécurité.jpg"
        },
        {
          "name": "Location de matériel",
          "image": "Location de matériel.jpeg"
        }
      ]
    },

    "15": {
      "category": "SPORT",
      "image": "SPORT.jpeg",
      "subcategories": [
        {
          "name": "Athlétisme",
          "image": "Athlétisme.jpeg"
        },
        {
          "name": "Aérobic",
          "image": "Aérobic.jpg"
        },
        {
          "name": "Baseball",
          "image": "Baseball.jpg"
        },
        {
          "name": "Basket-ball",
          "image": "Basket-ball.jpg"
        },
        {
          "name": "Billard",
          "image": "Billard.jpg"
        },
        {
          "name": "Bowling",
          "image": "Bowling.jpg"
        },
        {
          "name": "Boxe",
          "image": "Boxe.jpeg"
        },
        {
          "name": "Cyclisme",
          "image": "Cyclisme.jpeg"
        },
        {
          "name": "Club vélo",
          "image": "Club vélo.jpeg"
        },
        {
          "name": "Danse",
          "image": "Danse.jpeg",
          "subcategoriers":[
            {
            "name":"Danse Sportive","image":"Cdanse.jpg"}]
        },
        {
          "name": "Dames",
          "image": "Dames.jpeg"
        },
        {
          "name": "Échecs",
          "image": "Échecs.jpeg"
        },
        {
          "name": "Équitation",
          "image": "Équitation.jpeg"
        },
        {
          "name": "Escrime",
          "image": "Escrime.png"
        },
        {
          "name": "Football",
          "image": "Football.jpeg"
        },
        {
          "name": "Golf",
          "image": "Golf.jpeg"
        },
        {
          "name": "Gymnastique",
          "image": "Gymnastique.jpeg"
        },
        {
          "name": "Handball",
          "image": "Handball.jpeg"
        },
        {
          "name": "Judo",
          "image": "judo.jpeg"
        },
        {
          "name": "Jiu-jitsu",
          "image": "Jiu-jitsu.jpeg"
        },
        {
          "name": "Jet ski",
          "image": "jet ski.jpeg"
        },
        {
          "name": "Karaté",
          "image": "Karaté.jpeg"
        },
        {
          "name": "Kempo",
          "image": "kempo.jpeg"
        },
        {
          "name": "Karting",
          "image": "Karting.jpeg"
        },
        {
          "name": "Kayak",
          "image": "Kayak.jpeg"
        },
        {
          "name": "Kick-boxing",
          "image": "Kick boxing.jpeg"
        },
        {
          "name": "Kung fu",
          "image": "Kung fu.jpeg"
        },
        {
          "name": "Lancer de disque",
          "image": "Lancer de disque.jpeg"
        },
        {
          "name": "Lancer de javelot",
          "image": "Lancer de javelot.jpeg"
        },
        {
          "name": "Lancer de marteau",
          "image": "Lancer de marteau.jpeg"
        },
        {
          "name": "Lancer de poids",
          "image": "Lancer de poids.jpeg"
        },
        {
          "name": "Marche",
          "image": "Marche.jpeg"
        },
        {
          "name": "Moto Cross",
          "image": "Moto (cross).jpeg",
         
        },
        {
          "name": "Musculation",
          "image": "Musculation.jpeg"
        },
        {
          "name": "Marathon",
          "image": "Marathon.jpeg"
        },
        {
          "name": "Natation",
          "image": "Natation.jpeg"
        },
        {
          "name": "Paintball",
          "image": "Paintball.jpeg"
        },
        {
          "name": "Parkour",
          "image": "Parkour.jpeg"
        },
        {
          "name": "Pétanque",
          "image": "Pétanque.jpg"
        },
        {
          "name": "Ping-Pong",
          "image": "Ping-Pong.jpg"
        },
        {
          "name": "Polo",
          "image": "Polo.jpg"
        },
        {
          "name": "Rallye automobile",
          "image": "Rallye automobile.jpg"
        },
        {
          "name": "Rugby",
          "image": "Rugby.jpeg"
        },
        {
          "name": "Saut à la perche",
          "image": "Saut à la perche.jpeg"
        },
        {
          "name": "Saut en hauteur",
          "image": "Saut en hauteur.jpeg"
        },
        {
          "name": "Saut en longueur",
          "image": "Saut en longueur.jpeg"
        },
        {
          "name": "Skateboard",
          "image": "Skateboard.jpeg"
        },
        {
          "name": "Spéléologie",
          "image": "Spéléologie.jpeg"
        },
        {
          "name": "Surf",
          "image": "Surf.jpg"
        },
        {
          "name": "Tennis",
          "image": "Tennis.jpg"
        },
        {
          "name": "Tir à l'arc",
          "image": "Tir à l'arc.jpeg"
        },
        {
          "name": "Vélocross",
          "image": "Vélocross (vélo cross-country, VTT).jpg",
        },
        {
          "name": "Voile",
          "image": "Voile.jpg"
        },
        {
          "name": "Volley-ball",
          "image": "Volley-ball.jpg"
        },
        {
          "name": "Water-polo",
          "image": "Water-polo.jpg"
        },
        {
          "name": "Yoga",
          "image": "Yoga.jpg"
        },
        {
          "name": "Zumba",
          "image": "Zumba.jpg"
        },
        {
          "name": "Equipe",
          "image": "Equipe.jpeg"
        },
        {
          "name": "Joueur",
          "image": "Joueur.jpeg"
        },
        {
          "name": "Agent",
          "image": "Agent.jpeg"
        },
        {
          "name": "Salle",
          "image": "Salle.jpg"
        },
        {
          "name": "Préparateurs physique",
          "image": "Préparateurs physique.jpeg"
        },
        {
          "name": "Educateur",
          "image": "Educateur.jpeg"
        },
        {
          "name": "Entraîneur",
          "image": "Entraîneur.jpeg"
        },
        {
          "name": "Vendeur d'articles de sport",
          "image": "Vendeur d’articles de sport.jpeg"
        },
        {
          "name": "Parie  bet",
          "image": "parie beat.jpg"
        }
      ]
    },

      "16": {
        "category": "INFORMATIQUE",
        "image": "INFORMATIQUE1.jpeg",
        "subcategories": [
          ,
          {
            "name": "Opérateurs GSM & Internet",
            "image": "operateur Gsm.jpg",
            "subcategories": [
              {
                "name": "Ooredo",
                "image": "ooredoo_internet.jpg"
              },
              {
                "name": "Orange",
                "image": "orange-tunisie.png"
              },
              {
                "name": "Topnet",
                "image": "topnet (1).png"
              }
              ,
              {
                "name": "Hexabyte",
                "image": "hexabyte.jpeg"
              }  ,
              {
                "name": "Lyca",
                "image": "lyca.jpeg"
              },
              {
                "name": "Tunisie télécom",
                "image": "tt.jpeg"
              }
              ,
              {
                "name": "Global net",
                "image": "gnet.jpeg"
              }
             

              
              
            
            ]
          },
         
          {
            "name": "Vente de matériel informatique",
            "image": "Vente de matériel informatique.jpeg"
          },
          {
            "name": "Développeur",
            "image": "Développeur.jpeg"
          },
          {
            "name": "Réparation portable",
            "image": "Réparation portable.jpeg"
          },
          {
            "name": "Maintenance informatique",
            "image": "Maintenance informatique.jpeg"
          },
          {
            "name": "Boite de développement",
            "image": "Boite de développement.jpeg"
          },
          {
            "name": "Data analyste",
            "image": "Data analyste.jpeg"
          },
          {
            "name": "Montage vidéo",
            "image": "Montage vidéo.jpeg"
          },
          {
            "name": "Designer",
            "image": "Designer.png"
          },
          {
            "name": "Cybersécurité",
            "image": "Cybersécurité.png"
          },
          {
            "name": "Infographiste",
            "image": "Infographiste.png"
          },
          {
            "name": "Centre d'appel",
            "image": "centre d'appel.jpeg"
          },
          {
            "name": "Freelance",
            "image": "Freelance.png"
          },
          {
            "name": "Publinet",
            "image": "Publinet.jpg"
          },
          ,
          {
            "name": "Imprimerie",
            "image": "imprimerie.jpeg"
          }
          
        ]
      },
      "17": {
        "category": "TOURISME",
        "image": "TOURISME1.jpeg",
        "subcategories": [
          {
            "name": "Hôtel de charme",
            "image": "Hôtel de charme.jpeg"
          },
          {
            "name": "Hôtel de ville",
            "image": "hôtel de ville.jpg"
          },
          {
            "name": "Hôtel",
            "image": "Hôtel.jpeg"
          },
          {
            "name": "Agence de voyage",
            "image": "Agence de voyage.jpg"
          },
          {
            "name": "Maisons d'hôtes",
            "image": "Maisons d'hôtes.jpeg"
          },
          {
            "name": "Base nautique",
            "image": "Base nautique.jpg"
          }
        ]
      },

      "18": {
        "category": "ARTS",
        "image": "ARTS.jpeg",
        "subcategories": [
          {
            "name": "Acteur",
            "image": "acteur.jpg"
          },
          {
            "name": "Actrice",
            "image": "actrice.jpg"
          },
          {
            "name": "chanteurs",
            "image": "chanteur.jpeg"
          },
          {
            "name": "Artiste de ville",
            "image": "Artiste.jpeg"
          },
          {
            "name": "Portraitrice",
            "image": "Peintre.jpeg"
          },
          {
            "name": "Écrivain",
            "image": "Écrivain.jpeg"
          },
          {
            "name": "Poète",
            "image": "Poète.jpeg"
          },
          {
            "name": "Musicien",
            "image": "Musicien.jpeg"
          },
          {
            "name": "Musée",
            "image": "Musée.jpeg"
          },
          {
            "name": "Galerie",
            "image": "Galerie.jpeg"
          }
        ]
      },
      "19": {
        "category": "AUTO. MOTO",
        "image": "automotoavion.jpeg",
        "subcategories": [
          
          {
            "name": "Avion",
            "image": "avion.jpg",
             "subcategories": [
          
          {
           
            "name": "Mécanique avion",
            "image": "Mécanicien avion.jpg"
          },
          {
           
            "name": "Vendeur(showroom)",
            "image": "Vendeur(showroom) avion.jpeg"
          },
          {
           
            "name": "Pneumatique",
            "image": "Pneumatique avion.jpg"
          },
          {
           
            "name": "Vente piéce de rechange",
            "image": "Vente pièces de rechange avion.jpeg"
          },
          {
           
            "name": "Ferrailleurs",
            "image": "Ferrailleurs avion.jpeg"
          },
          {
           
            "name": "Diagnostique",
            "image": "Diagnostic avion.jpg"
          },
          {
           
            "name": "Remorquage",
            "image": "Remorquage avion.jpg"
          }
        
        ]
            
          },
          {
            "name": "Bateaux",
            "image": "bateau.jpg",
            "subcategories": [
          
          {
           
            "name": "Mécanique navale",
            "image": "Mécanique navale.jpeg"
          },
           
          
        {
         
          "name": "Vendeur(showroom)",
          "image": "Vendeur(showroom) bateaux.jpeg"
        },
     
        {
         
          "name": "Vente piéce de rechange",
          "image": "Vente pièces de rechange bateaux.jpeg"
        },
        {
         
          "name": "Ferrailleurs",
          "image": "Ferrailleurs bateaux.jpeg"
        },
        {
         
          "name": "Diagnostique",
          "image": "Diagnostic bateaux.jpeg"
        },
        {
         
          "name": "Remorquage",
          "image": "remorquage bateau pro.jpg"
        },
        
        {
           
          "name": "Carrossier",
          "image":"Carrossier bateaux.jpeg"
        }
        
        ]
          },
          {
            "name": "Véhicule",
            "image": "véhicule.jpeg"
            ,
            "subcategories": [
          
          {
           
            "name": "Mécanique Véhicule",
            "image": "Mécanicien véhicule.jpg"
          },
          {
           
            "name": "Pneumatique",
            "image": "Pneumatique véhicule.jpeg"
          },
          {
           
            "name": "Vente piéce de rechange",
            "image": "Vente pièces de rechange véhicule.jpg"
          },
          {
           
            "name": "Ferrailleurs",
            "image": "Ferrailleurs véhicule.jpeg"
          },
          {
           
            "name": "Diagnostique",
            "image": "Diagnostic véhicule.jpeg"
          },
          {
           
            "name": "Remorquage",
            "image": "Remorquage véhicule.jpg"
          },
          {
           
            "name": "Modification",
            "image":"Modification véhicule.jpeg"
          },
          {
           
            "name": "Carrossier",
            "image":"Carrossier véhicule.jpg"
          },
          ,{
           
            "name": "Vendeur(showroom)",
            "image": "Vendeur(showroom) véhicule.jpeg"
          }


          
        
        ]
          },
          {
            "name": "Motocycle",
            "image": "motocycle.jpeg"
            ,
            "subcategories": [
          
          {
           
            "name": "Mécanicien",
            "image": "Mécanicien motocycle.jpeg"
          },
          {
           
            "name": "Pneumatique",
            "image": "Pneumatique motocycle.jpeg"
          },
          {
           
            "name": "Vente piéce de rechange",
            "image": "Vente pièces de rechange motocycle.jpeg"
          },
          {
           
            "name": "Ferrailleurs",
            "image": "Ferrailleurs motocycle.jpeg"
          },
          {
           
            "name": "Diagnostique",
            "image": "Diagnostic motocycle.jpeg"
          },
          {
           
            "name": "Remorquage",
            "image": "Remorquage MOTO pro.jpg"
          },
          {
           
            "name": "Carrossier",
            "image": "Carrossier motocycle.jpg"
          },{
           
            "name": "Vendeur(showroom)",
            "image": "Vendeur(showroom) motocycle.jpeg"
          }

         
        
        ]
          },

          {
            "name": "Vélo",
            "image": "vélo.jpg"
            ,
            "subcategories": [
              {
           
                "name": "Cycliste",
                "image": "Mécanicien vélo.jpeg"
              },
          
         
          
          {
           
            "name": "Vente piéce de rechange",
            "image": "Vente pièces de rechange vélo.jpg"
          },
          
          {
           
            "name": "Diagnostique",
            "image": "Diagnostic vélo.jpeg"
          },{
           
            "name": "Carrossier",
            "image": "Carrossier vélo.jpg"
          }
          ,{
           
            "name": "Vendeur(showroom)",
            "image": "Vendeur(showroom) vélo.jpeg"
          }

         
         
          
        ]
          },
          {
            "name": "Auto école",
            "image": "Auto-école.jpeg"
          }


          
        ]
      },
      "20": {
        "category": "AGRICULTURE",
        "image": "AGRICULTURE.jpg",
        "subcategories": [
          {
            "name": "Agricole",
            "image": "agricole.jpeg"
         },
          {
            "name": "Sondage",
            "image": "Sondage.jpg"
          },
          {
            "name": "Élevage",
            
 	          "image": "élevage animaux.jpg" ,
            "subcategories": [
          {
            "name": "Moutons ",
            "image": "Élevage moutons.jpg"
          },
          {
            "name": "Volailles et oiseaux ",
            "image": "Élevage Volailles et oiseaux.jpg"
          },
          {
            "name": "Lapins ",
            "image": "Élevage lapins.jpeg"
          },
          {
            "name": "Chevaux ",
            "image": "Élevage les chevaux.jpeg"
          },
          {
            "name": "Escargot",
            "image": "Élevage escargot.jpg"
          },
          {
            "name": "Abeilles",
            "image": "elevage abeille.jpg"
          },
          {
            "name": "Poisson",
            "image": "poisson.jpeg"
          },]

          },
          
          {
             "name": "Moulin des épices",
            "image": "moulin blé et épices.jpg"
          },
          {
            "name": "Location matériel agricole",
            "image": "Location matériel agricole.jpeg"
          },
          {
            "name": "Regroupement laitière",
            "image": "Regroupement laitière.jpeg"
          },
          {
            "name": "Regroupements céréales",
            "image": "Regroupements céréales.jpeg"
          },
          {
            "name": "Vente matériel agriculture",
            "image": "Vente matériel agriculture.jpeg"
          },
          {
            "name": "Pépinières des plantes",
            "image": "Pépinières des plantes.jpeg"
          },
          
          {
            "name": "Moulin à huile",
            "image": "moulin a huile.jpg"
          }
        ]
      },
      "21": {
        "category": "ÉLECTRONIQUE",
        "image": "ÉLECTRONIQUE.jpg",
        "subcategories": [

          {
            "name": "Vente matériel électronique",
            "image": "Vente matériel électronique.jpg"
          },
          {
            "name": "Matériel parabolique",
            "image": "Matériel parabolique.jpg"
          },    {
            "name": "Enseigne Lumineuse",
            "image": "enseigne.jpeg"
          },
          
          {
            "name": "Matériels électroménager",
            "image": "Matériels électroménager.jpeg"
          },
          {
            "name": "lustres",
            "image": "lustres.jpeg"
          },
          {
            "name": "Quincaillerie",
            "image": "quianquillerie.jpeg"
          }
        ]
      },

      "22": {
    "category": "FINANCE",
    "image": "FINANCE.jpeg",
    "subcategories": [
      {
        "name": "Banque",
        "image": "Banque.jpeg"
      },
      {
        "name": "Comptable",
        "image": "Comptable.jpeg"
      },
      {
        "name": "Financier",
        "image": "Financier.jpeg"
      },
     
      {
        "name": "Leasing",
        "image": "Leasing.jpeg"
      },
      {
        "name": "Recouvrement",
        "image": "Recouvrement.jpg"
      },
      {
        "name": "Ste des cartes magnétiques",
        "image": "Ste des cartes magnétiques.jpeg"
      },
      {
        "name": "Service cash",
        "image": "Service cash.jpg"
      },
      {
        "name": "Change devise",
        "image": "Change devise.jpg"
      }
    ]
  },
  "23": {
    "category": "USINE",
    "image": "usines.jpg",
    "subcategories": [
      {
        "name": "Agroalimentaire",
        "image": "Agroalimentaire.jpeg"
      },
      {
        "name": "Construction",
        "image": "Construction.jpg"
      },
      {
        "name": "Vêtements",
        "image": "Vêtements.jpeg"
      },
      {
        "name": "Maquillage",
        "image": "Maquillage.jpg"
      },
      {
        "name": "Matériel médical",
        "image": "matérielle médical.jpg"
      },
      {
        "name": "Électroménager",
        "image": "Électroménager.jpg"
      },
      {
        "name": "Plastique",
        "image": "USINE Plastique.jpg"
      },
      {
        "name": "Jouets",
        "image": "Jouets.jpg"
      },
      {
        "name": "Verrerie",
        "image": "verrerie.jpeg"
      },
      {
        "name": "Informatique",
        "image": "Informatique.jpg"
      },
      {
        "name": "Agricole divers",
        "image": "Agricole.jpg",
        "subcategories": [
          {
            "name": "Fourage",
            "image": "Fourrage.jpeg"
          },
          {
            "name": "Embalage thon et sardine",
            "image": "emballage de sardine et thon.jpeg"
          },
        ]
      },
      {
        "name": "Meuble",
        "image": "Meuble.jpg"
      },
      {
        "name": "Fourniture scolaire",
        "image": "Fourniture scolaire usine.jpg"
      },
      {
        "name": "Emballage",
        "image": "Emballage.jpg"
      },
      {
        "name": "Fabrication De Boite Métallique",
        "image": "Fabrication De Boite Métallique.jpg"
      },
      {
        "name": "Recyclage",
        "image": "Recyclage.jpg",
        "subcategories": [
          {
            "name": "Plastique",
            "image": "plastique.jpg"
          },
          {
            "name": "Carton",
            "image": "carton.jpg"
          },
          {
            "name": "Fer",
            "image": "fer.jpg"
          },
        ]
      }
    ]
  },
  "24": {
    "category": "SERVICES",
    "image": "SERVICES.jpeg",
    "subcategories": [
      {
        "name": "Livraison",
        "image": "livraison2.jpeg",
        "subcategories": [
      {
        "name": "Véhicule",
        "image": "livraison véhicule.jpg"
      },
      {
        "name": "Motocycle",
        "image": "livraison moto.jpg"
      }
    ]},
      {
        "name": "Lavage de voiture et vidange",
        "image": "Lavage de voiture et vidange.png"
      },
      {
        "name": "Service d'hygiène",
        "image": "service d'hygiéne.jpg"
      },
      {
        "name": "Pressing",
        "image": "Pressing.jpg"
      },
      {
        "name": "Entreprise de désinfection",
        "image": "Entreprise de désinfection.jpg"
      },
      {
        "name": "Vente tenues de travail",
        "image": "Vente tenus de travail.jpg"
      },
      {
        "name": "Déménagement",
        "image": "Déménagement.jpeg"
      },
      {
        "name": "Société de recherche de pétrole",
        "image": "Société de recherche de pétrole.jpg"
      }
      ,
      {
        "name": "Photovoltaïques",
        "image": "photovoltaique.jpeg"
      }

     
    ]
  }
  }

  
  const Categories = () => {
     const { t, i18n } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();
    const { gouvernoratName, gouvernoratData } = location.state || {};
    const [selectedDelegations, setSelectedDelegations] = useState([]);
  
    const handleCheckboxChange = (delegation) => {
      setSelectedDelegations((prev) =>
        prev.includes(delegation)
          ? prev.filter((item) => item !== delegation)
          : [...prev, delegation]
      );
    };
  
    const handleCategoryClick = (categoryData) => {
      console.log("Navigating to:", `/tunisie/${gouvernoratName.toLowerCase()}/${categoryData.category.toLowerCase()}`);
      console.log("State being passed:", { gouvernoratName, gouvernoratData, categoryData });
    
      navigate(`/tunisie/${gouvernoratName.toLowerCase()}/${categoryData.category.toLowerCase()}/cat`, {
        state: { gouvernoratName, gouvernoratData, categoryData },
      });
    };
  
    if (!gouvernoratData) {
      return <div>No data available for this gouvernorat.</div>;
    }
  
    return (
      <div className="container-column">
        <div className="container-cat">
          {/* Left Section: Delegations List */}
          <div className="left-section-cat">
            <div className="gouvernaurat-container-cat">
            <h1>{t('welcome')}</h1>
              <h3 className="gouvernaurat-title-cat">{t("Tunis")}</h3>
              <ul className="delegation-list-cat">
                {gouvernoratData.delegations.map((delegation, index) => (
                  <li key={index} className="delegation-item-cat">
                    <label>
                      <input
                        type="checkbox"
                        value={delegation}
                        checked={selectedDelegations.includes(delegation)}
                        onChange={() => handleCheckboxChange(delegation)}
                      />
                      {delegation}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
  
          {/* Middle Section: Background Image and Categories List */}
          <div className="middle-section-cat">
            {/* Background Image Section */}
            <div className="background-image-container">
              <img
                src={gouvernoratData.image_url}
                alt={`felbled_tunisie_${gouvernoratName}`}
                className="gouvernaurat-image"
              />
              <div className="image-overlay-text">
                <p className="gouvernaurat-name">{gouvernoratName}</p>
              </div>
            </div>
  
            {/* Categories List Section */}
            <Search />
            <div className="categories-list-container">
              <div className="categories-grid">
                {Object.values(categories).map((categoryGroup, index) => (
                  <div
                    key={index}
                    className="category-item-cat cursor-pointer"
                    onClick={() => handleCategoryClick(categoryGroup)}
                  >
                    <div className="image-container-cat">
                      <img
                        src={`/${categoryGroup.image}`}
                        alt={categoryGroup.category}
                        className="image-cat"
                      />
                      <div className="overlay-cat">
                        <div className="overlay1-cat">
                          <p className="category-name-cat">{categoryGroup.category}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
  
          {/* Right Section: Placeholder for Ads */}
          <div className="right-section-cat">
            {/* Placeholder for right ad */}
          </div>
        </div>
        <Footer />
      </div>
    );
  };
  
  export default Categories;