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
        id: 1,
        title: 'API Micro-Transactions',
        coverimage: '../images/micro-transactions.png',
        technologies: [csharp, nodesjs, mysql, html, css, js],
        role: 'FullStack Developer – ASP.NET Core API + React.Vite',
        problem: 'Besoin d\'un système backend robuste et anti-triche pour gérer les achats in-game et l\'inventaire des joueurs.',
        solution: 'Conception d\'une API sécurisée avec gestion transactionnelle complète et création d\'un dashboard d\'administration réactif.',
        impact: 'Architecture scalable prête pour la production, assurant l\'intégrité des données et transactions.',
        github: "https://github.com/HexaNexus28/micro-transactions-app.git",
        demo: "",
        comingSoon: false
    },
    {
        id: 2,
        title: 'Cookify',
        coverimage: '../images/JE.png',
        technologies: [php, mysql, html, css, js],
        role: 'Back-End Developer & Scrum Master',
        problem: 'Absence d\'une plateforme centralisée permettant aux passionnés de cuisine de gérer leurs recettes et favoris.',
        solution: 'Développement complet d\'une application web communautaire incluant back-office, gestion des utilisateurs et interaction sociale.',
        impact: 'Mise en production d\'un écosystème fonctionnel en 3 mois avec gestion complète de base de données.',
        github: "https://github.com/HexaNexus28/cookify",
        demo: "",
        comingSoon: false
    },
    {
        id: 3,
        title: 'Skyndar',
        coverimage: '../images/JE.png',
        technologies: [csharp, wpf, php, mysql, html, css, js],
        role: 'Back-End Developer',
        problem: 'Gestion complexe et désynchronisée des plannings de rendez-vous (visio et présentiel).',
        solution: 'Développement d\'un d\'écosystème synchronisé (Application Bureau WPF + Web) gérant les prestations et créneaux.',
        impact: 'Logiciel assurant une parfaite synchronisation temps-réel, évitant les conflits de rendez-vous pour les professionnels.',
        github: "https://github.com/HexaNexus28/skyndar",
        demo: "",
        comingSoon: true
    },
    {
        id: 4,
        title: 'Portfolio B2B',
        technologies: [reactImg, html, tailwindcss, js],
        role: 'Front-End React Developer',
        problem: 'Nécessité de présenter une expertise technique immédiatement compréhensible par des Leads Devs / CTOs.',
        solution: 'Création d\'une Single Page Application avec React Router, restructurée pour conversion et axée sur la valeur.',
        impact: 'Interface performante, responsive, avec un parcours utilisateur optimisé pour le recrutement.',
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
        problem: 'Le client nécessitait une solution interactive d\'articles et podcasts entièrement administrable.',
        solution: 'Réalisation fullstack sur-mesure d\'un site interactif et de son interface d\'administration sécurisée.',
        impact: 'Digitalisation réussie du projet client avec déploiement complet et gestion de contenu autonome.',
        github: "",
        demo: "https://journaleducatif.com/",
        comingSoon: false
    }
];

export default projects;
