export const navLinks = [
  {
    id: 1,
    name: "Accueil",
    href: "#home",
  },
  {
    id: 2,
    name: "À propos",
    href: "#about",
  },
  {
    id: 3,
    name: "Projets",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myProjects = [
  {
    desc: "Podcastr est une plateforme révolutionnaire de Software-as-a-Service qui transforme la création de podcasts. Avec des fonctionnalités avancées basées sur l'IA comme la conversion de texte en plusieurs voix, elle permet aux créateurs de générer divers doublages à partir d'une seule entrée de texte.",
    title: "Podcastr - Plateforme de podcast IA",
    subdesc:
      "Conçu comme une application unique de Software-as-a-Service avec Next.js 14, Tailwind CSS, TypeScript, Framer Motion et Convex, Podcastr est optimisé pour des performances et une évolutivité maximales.",
    href: "https://github.com/yanssou/podcastr",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "LiveDoc - Clone Google Docs en temps réel",
    desc: "LiveDoc est une application collaborative puissante qui élève les capacités d'édition de documents en temps réel. En tant que version améliorée de Google Docs, elle prend en charge des millions de collaborateurs simultanément, garantissant que chaque modification est capturée instantanément et avec précision.",
    subdesc:
      "Avec LiveDoc, les utilisateurs peuvent expérimenter l'avenir de la collaboration, où plusieurs contributeurs travaillent ensemble en temps réel sans aucun décalage, grâce à l'utilisation des dernières fonctionnalités de Next.js et Liveblocks.",
    href: "https://www.youtube.com/watch?v=y5vE8y_f_OM",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "CarePulse - Système de gestion de la santé",
    desc: "Une plateforme innovante de soins de santé conçue pour simplifier les processus médicaux essentiels. Elle simplifie l'enregistrement des patients, la prise de rendez-vous et la gestion des dossiers médicaux, offrant une expérience fluide pour les prestataires de soins et les patients.",
    subdesc:
      "Axé sur l'efficacité, CarePulse intègre des formulaires complexes et des notifications SMS, utilisant Next.js, Appwrite, Twilio et Sentry pour améliorer les flux de travail opérationnels.",
    href: "https://www.youtube.com/watch?v=lEflo_sc82g",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "Horizon - Plateforme bancaire en ligne",
    desc: "Horizon est une plateforme bancaire en ligne complète qui offre aux utilisateurs un tableau de bord centralisé pour la gestion de leurs finances. Elle permet aux utilisateurs de connecter plusieurs comptes bancaires, de surveiller les transactions en temps réel et de transférer de l'argent de manière transparente vers d'autres utilisateurs.",
    subdesc:
      "Conçue avec Next.js 14, Appwrite, Dwolla et Plaid, Horizon garantit une expérience bancaire fluide et sécurisée, adaptée aux besoins des consommateurs modernes.",
    href: "https://www.youtube.com/watch?v=PuOVqP_cjkE",
    texture: "/textures/project/project4.mp4",
    logo: "/assets/project-logo4.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "Imaginify - Application de manipulation de photos IA",
    desc: "Imaginify est une application révolutionnaire de Software-as-a-Service qui permet aux utilisateurs de créer des manipulations photo époustouflantes en utilisant la technologie IA. Avec des fonctionnalités telles que l'édition d'images assistée par l'IA, un système de paiement et un modèle basé sur des crédits.",
    subdesc:
      "Conçue avec Next.js 14, Cloudinary AI, Clerk et Stripe, Imaginify combine technologie de pointe et approche centrée sur l'utilisateur. Elle peut être transformée en une source de revenus secondaires ou même en une entreprise à part entière.",
    href: "https://www.youtube.com/watch?v=Ahwoks_dawU",
    texture: "/textures/project/project5.mp4",
    logo: "/assets/project-logo5.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Sopra Steria",
    pos: "Développeur Full Stack",
    duration: "Septembre 2023 - Décembre 2024",
    title:
      "Développement d'une application web pour le Ministère de l'enseignement supérieur et de la recherche. Refonte du système GECIR qui permet de gérer les demandes de financement des projets de recherche des entreprises leur permettant ainsi de bénéficier du crédit impôt recherche. Utilisation d'Angular pour le front et Java Spring pour le back, PostgreSQL pour la base de données.",
    icon: "/assets/sopra_steria.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Diggers Factory",
    pos: "Développeur Full Stack",
    duration: "Mai 2023 - Août 2023",
    title:
      "Ajout de fonctionnalités backoffice et frontoffice et maintenance du site d'e-commerce de Diggers Factory, vendeurs de vinyles. Utilisation de React pour le front et AdonisJS pour le back, mySQL pour la base de données.",
    icon: "/assets/diggers_factory.png",
    animation: "clapping",
  },
  {
    id: 3,
    name: "GrinLive",
    pos: "Développeur React Native",
    duration: "Septembre 2022 - Avril 2023",
    title:
      "Développement en React Native d'une application de communication en temps réel. Utilisation du webrtc afin de faire communiquer plusieurs participants simultanément et leur permettre d'utiliser leurs deux caméras en même temps. Gestion d'utilisateurs et de comptes à l'aide de Firebase.",
    icon: "/assets/grinlive.png",
    animation: "salute",
  },
];
