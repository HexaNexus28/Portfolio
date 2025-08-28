import js from '../images/js_2.jpeg';
import html from '../images/html.webp';
import css from '../images/css.webp';
import php from '../images/php.webp';
import csharp from '../images/csharp.jpeg';
import nodesjs from '../images/nodejs.webp';
import reactImg from '../assets/react.svg';
import mysql from '../images/mysql.webp';
import wpf from '../images/wpf.webp';
import tailwindcss from '../images/tailwindcss.webp';
const projects = [
    {
        id: 1,
        title: 'DeathStudio',
        technologies: [html, css, nodesjs],
        role: 'Back-End Developer – Web Escape Game',
        resume: 'Création d’un mini-jeu web interactif de type escape game où l’utilisateur doit résoudre des énigmes pour s’échapper. Logique, interface utilisateur et animations intégrées en JavaScript (Mars 2024, Durée : 2 mois)',
        link: '',
        comingSoon: false
    },
    {
        id: 2,
        title: 'Cookify',
        technologies: [php, mysql, html, css, js],
        role: 'Back-End Developer & Scrum Master – Cooking Website',
        resume: 'Développement d’un site web dynamique permettant de découvrir des recettes, les commenter, les mettre en favoris, et accéder à un tableau de bord personnel avec informations utilisateur, favoris et livres de cuisine. Back-office complet pour la gestion des contenus (2024-2025, Durée : 3 mois)',
        link: '',
        comingSoon: false
    },
    {
        id: 3,
        title: 'Skyndar',

        technologies: [csharp, wpf, php, mysql, html, css, js,],
        role: 'Back-End Developer – Appointment Booking Application',
        resume: 'Développement d’un écosystème synchronisé comprenant une application bureau pour les administrateurs (création de prestations, créneaux, suivi des rendez-vous) et un site web public pour la prise de rendez-vous en ligne (Visio ou présentiel) avec synchronisation des données en temps réel via MySQL (Mars 2025, Durée : 3 mois)',
        link: 'https://github.com/HexaNexus28/Skyndar',
        comingSoon: false

    },
    {
        id: 4,
        title: 'Personal Portfolio',
        technologies: [reactImg, html, tailwindcss, js],
        role: 'Front-End & React Developer – Personal Portfolio',
        resume: 'Création d’un portfolio interactif pour présenter mes projets et compétences, avec navigation fluide via React Router et design responsive pour mobile et desktop (2025, Durée : 1 mois)',
        link: 'https://github.com/HexaNexus28/Portfolio',
        comingSoon: false
    },
    {
        id: 5,
        title: 'Journal Educatif',
        technologies: [php, mysql, html, css, js],
        role: 'FullStack Developer',
        resume: 'Réalisé pour un client : journal éducatif interactif. Les utilisateurs lisent, likent, commentent, explorent catégories et écoutent podcasts, pendant que l’admin contrôle tout le contenu.',
        link: 'https://github.com/HexaNexus28/JE',
        comingSoon: false
    }, {
        id: 11,
        title: 'Chess Online',
        technologies: [reactImg, js, php, mysql],
        role: 'FullStack Developer – Game',
        resume: 'Plateforme d’échecs en ligne avec parties multijoueurs, classement Elo, sauvegarde des parties et interface interactive en temps réel.',
        link: '',
        comingSoon: true
    },
    {
        id: 12,
        title: 'Staff Planning App',
        technologies: [reactImg, nodesjs, mysql, tailwindcss, js],
        role: 'FullStack Developer – Productivity Tool',
        resume: 'Application pour gérer les plannings de personnel, assigner des shifts, visualiser disponibilités et générer des rapports automatiquement.',
        link: '',
        comingSoon: true
    }


];


export default projects;