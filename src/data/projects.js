import js from '../images/js.svg';
import html from '../images/html.svg';
import css from '../images/css.svg';
import php from '../images/php.svg';
import csharp from '../images/csharp.svg';
import nodesjs from '../images/nodejs.svg';
import reactImg from '../assets/react.svg';
import mysql from '../images/mysql.svg';
import wpf from '../images/wpf.svg';
import tailwindcss from '../images/tailwind.svg';
const projects = [

    {
        id: 2,

        title: 'Cookify',
        coverimage: '../images/JE.png',
        technologies: [php, mysql, html, css, js],
        role: 'Back-End Developer & Scrum Master – Cooking Website',
        resume: 'Développement d’un site web dynamique permettant de découvrir des recettes, les commenter, les mettre en favoris, et accéder à un tableau de bord personnel avec informations utilisateur, favoris et livres de cuisine. Back-office complet pour la gestion des contenus (2024-2025, Durée : 3 mois)',
        github: "https://github.com/HexaNexus28/cookify",
        demo: "",
        comingSoon: false
    },
    {
        id: 3,
        title: 'Skyndar',

        technologies: [csharp, wpf, php, mysql, html, css, js,],
        role: 'Back-End Developer – Appointment Booking Application',
        resume: 'Développement d’un écosystème synchronisé comprenant une application bureau pour les administrateurs (création de prestations, créneaux, suivi des rendez-vous) et un site web public pour la prise de rendez-vous en ligne (Visio ou présentiel) avec synchronisation des données en temps réel via MySQL (Mars 2025, Durée : 3 mois)',
        github: "https://github.com/HexaNexus28/skyndar",
        demo: "",
        comingSoon: false

    },
    {
        id: 4,
        title: 'Personal Portfolio',
        technologies: [reactImg, html, tailwindcss, js],
        role: 'Front-End & React Developer – Personal Portfolio',
        resume: 'Création d’un portfolio interactif pour présenter mes projets et compétences, avec navigation fluide via React Router et design responsive pour mobile et desktop (2025, Durée : 1 mois)',
        github: "https://github.com/HexaNexus28/portfolio",
        demo: "https://yawo-portfolio.vercel.app/",
        comingSoon: false
    },
    {
        id: 5,
        title: 'Journal Educatif',
        coverimage: '../images/JE.png',
        technologies: [php, mysql, html, css, js],
        role: 'FullStack Developer',
        resume: 'Réalisé pour un client : journal éducatif interactif. Les utilisateurs lisent, likent, commentent, explorent catégories et écoutent podcasts, pendant que l’admin contrôle tout le contenu.',
        github: "",
        demo: "",
        comingSoon: false
    }, {
        id: 11,
        title: 'Chess Online',
        technologies: [reactImg, js, csharp, mysql],
        role: 'FullStack Developer – Game',
        resume: 'Plateforme d’échecs en ligne avec parties multijoueurs, classement Elo, sauvegarde des parties et interface interactive en temps réel.',
        github: "",
        demo: "",

        comingSoon: true
    },
    {
        id: 12,
        title: 'Staff Planning App',
        technologies: [reactImg, nodesjs, mysql, tailwindcss, js],
        role: 'FullStack Developer – Productivity Tool',
        resume: 'Application pour gérer les plannings de personnel, assigner des shifts, visualiser disponibilités et générer des rapports automatiquement.',
        github: "",
        demo: "",
        comingSoon: true
    }


];


export default projects;
