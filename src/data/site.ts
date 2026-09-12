export type Lang = 'en' | 'fr';

export const SITE = 'https://marcopecoraro.com';

export const person = {
  name: 'Marco Pecoraro',
  email: 'marco.m.pecoraro@gmail.com',
  phone: '+1-514-717-4314',
  phoneDisplay: '(514) 717-4314',
  linkedin: 'https://www.linkedin.com/in/marcopecoraro',
  city: 'Montreal',
  region: 'Quebec',
  country: 'CA',
};

/* ------------------------------------------------------------------ */
/* UI chrome                                                           */
/* ------------------------------------------------------------------ */

export const ui = {
  en: {
    nav: [
      { href: '/', label: 'Home' },
      { href: '/sap-ewm-consultant', label: 'SAP EWM' },
      { href: '/sap-tm-consultant', label: 'SAP TM' },
      { href: '/sap-pp-qm-consultant', label: 'PP & QM' },
      { href: '/warehouse-process-consulting', label: 'Process Consulting' },
      { href: '/sap-expertise', label: 'Expertise' },
      { href: '/projects', label: 'Projects' },
      { href: '/about', label: 'About' },
      { href: '/contact', label: 'Contact' },
    ],
    langSwitch: 'Français',
    langSwitchLabel: 'Voir en français',
    skipToContent: 'Skip to content',
    available: 'Available for a remote EWM or TM contract',
    readMore: 'Read the project detail',
    allProjects: 'See all eleven projects',
    cvDownload: 'Download CV (PDF)',
    cvFile: '/marco-pecoraro-sap-consultant-cv.pdf',
    contactCta: 'Get in touch',
    footerNote:
      'Independent SAP consultant working remotely from Montreal, Quebec. On site for design workshops, cutover and go-live.',
    footerRights: 'All rights reserved.',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    linkedinLabel: 'LinkedIn',
    certHeading: 'Certified by SAP',
    formName: 'Your name',
    formEmail: 'Your email',
    formCompany: 'Company',
    formMessage: 'What do you need help with?',
    formSubmit: 'Send message',
    formNote:
      'Or email me directly — I answer every message about EWM and TM work within a day.',
    on: 'on',
  },
  fr: {
    nav: [
      { href: '/fr/', label: 'Accueil' },
      { href: '/fr/consultant-sap-ewm', label: 'SAP EWM' },
      { href: '/fr/consultant-sap-tm', label: 'SAP TM' },
      { href: '/fr/consultant-sap-pp-qm', label: 'PP et QM' },
      { href: '/fr/conseil-processus-entrepot', label: 'Conseil en processus' },
      { href: '/fr/expertise-sap', label: 'Expertise' },
      { href: '/fr/projets', label: 'Projets' },
      { href: '/fr/profil', label: 'Profil' },
      { href: '/fr/contact', label: 'Contact' },
    ],
    langSwitch: 'English',
    langSwitchLabel: 'View in English',
    skipToContent: 'Aller au contenu',
    available: 'Disponible pour un mandat en télétravail en EWM ou en TM',
    readMore: 'Lire le détail du projet',
    allProjects: 'Voir les onze projets',
    cvDownload: 'Télécharger le CV (PDF)',
    cvFile: '/marco-pecoraro-consultant-sap-cv-fr.pdf',
    contactCta: 'Me joindre',
    footerNote:
      'Consultant SAP indépendant en télétravail depuis Montréal, au Québec. Sur place pour les ateliers de conception, la bascule et la mise en service.',
    footerRights: 'Tous droits réservés.',
    emailLabel: 'Courriel',
    phoneLabel: 'Téléphone',
    linkedinLabel: 'LinkedIn',
    certHeading: 'Certifié par SAP',
    formName: 'Votre nom',
    formEmail: 'Votre courriel',
    formCompany: 'Entreprise',
    formMessage: 'Quel est votre besoin ?',
    formSubmit: 'Envoyer le message',
    formNote:
      'Ou écrivez-moi directement : je réponds à toute demande en EWM ou en TM dans la journée.',
    on: 'sur',
  },
};

/* ------------------------------------------------------------------ */
/* Certifications                                                      */
/* ------------------------------------------------------------------ */

export const certs = [
  {
    en: 'SAP Certified Application Associate — Transportation Management in SAP S/4HANA',
    fr: 'SAP Certified Application Associate — Transportation Management in SAP S/4HANA',
    year: '2023',
  },
  {
    en: 'SAP Certified Application Associate — Extended Warehouse Management with SAP S/4HANA',
    fr: 'SAP Certified Application Associate — Extended Warehouse Management with SAP S/4HANA',
    year: '2022',
  },
  {
    en: 'Configuring SAP Business Network for Logistics',
    fr: 'Configuring SAP Business Network for Logistics',
    year: '2025',
  },
  {
    en: 'The Internet of Things with SAP',
    fr: 'The Internet of Things with SAP',
    year: '2022',
  },
  {
    en: 'Lean Six Sigma Black Belt (ICBB), Management & Strategy Institute',
    fr: 'Ceinture noire Lean Six Sigma (ICBB), Management & Strategy Institute',
    year: '2019',
  },
];

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export type Project = {
  id: string;
  slug: string;
  slugFr: string;
  page: boolean;
  dates: { en: string; fr: string };
  title: { en: string; fr: string };
  role: { en: string; fr: string };
  context: { en: string; fr: string };
  summary: { en: string; fr: string };
  detail?: { en: string[]; fr: string[] };
  meta?: {
    title: { en: string; fr: string };
    desc: { en: string; fr: string };
  };
};

export const projects: Project[] = [
  {
    id: 'ewm-qm-full-cycle',
    slug: 'sap-ewm-qm-full-cycle-implementation',
    slugFr: 'implantation-complete-sap-ewm-qm',
    page: true,
    dates: { en: 'Sep 2023 — present', fr: 'sept. 2023 — aujourd’hui' },
    title: {
      en: 'Full-cycle SAP EWM and QM implementation on S/4HANA',
      fr: 'Implantation complète de SAP EWM et QM sur S/4HANA',
    },
    role: { en: 'Lead EWM and QM consultant', fr: 'Consultant principal EWM et QM' },
    context: {
      en: 'S/4HANA including the first Feature Pack Stack (FPS01), delivered remote',
      fr: 'S/4HANA incluant le premier Feature Pack Stack (FPS01), livré en télétravail',
    },
    summary: {
      en: 'Sole functional owner of the warehouse and quality streams, from the first requirement workshop through go-live and ongoing hypercare.',
      fr: 'Seul responsable fonctionnel des volets entrepôt et qualité, du premier atelier de besoins jusqu’à la mise en service et la stabilisation.',
    },
    detail: {
      en: [
        'Sole functional lead for the EWM and QM streams from project start through go-live and ongoing hypercare.',
        'Configured the complete warehouse structure: supply chain units, storage types and sections, storage bins and bin determination, activity areas, work centers, and the warehouse process types behind every movement.',
        'Built inbound and outbound execution end to end — goods receipt, putaway and stock removal strategies, warehouse order creation rules, packing, staging and goods issue — with POSC and LOSC storage control.',
        'Configured handling unit management, batch management and FEFO stock removal for shelf-life-controlled stock, plus replenishment strategies and physical inventory.',
        'Delivered the quality stream: inbound quality inspection, inspection lot processing, and blocked and quality stock handling integrated with EWM putaway.',
        'Set up the RF framework transactions and PPF-driven printing used on the warehouse floor.',
        'Wrote the functional and technical (RICEFW) specifications and drove the build with ABAP developers through unit test.',
        'Ran system and user acceptance testing, led business demos and key-user training, and owned the defect queue through go-live and hypercare.',
      ],
      fr: [
        'Seul responsable fonctionnel des volets EWM et QM, du démarrage du projet jusqu’à la mise en service et la stabilisation en cours.',
        'Configuration complète de la structure d’entrepôt : unités de chaîne logistique, types de magasin et sections, emplacements et règles de détermination, zones d’activité, postes de travail, et les types de processus derrière chaque mouvement.',
        'Mise en place de l’exécution amont et aval de bout en bout : réception, stratégies de rangement et de prélèvement, règles de création des ordres d’entrepôt, emballage, mise à quai et expédition, avec contrôle de stockage POSC et LOSC.',
        'Configuration des unités de manutention, de la gestion des lots et du prélèvement FEFO pour les stocks à durée de conservation, ainsi que des stratégies de réapprovisionnement et de l’inventaire physique.',
        'Livraison du volet qualité : contrôle à réception, traitement des lots de contrôle et gestion du stock bloqué, intégrés au rangement EWM.',
        'Mise en place des transactions du cadre RF et de l’impression pilotée par PPF utilisées sur le plancher d’entrepôt.',
        'Rédaction des spécifications fonctionnelles et techniques (RICEFW) et pilotage des développements avec les développeurs ABAP jusqu’aux essais unitaires.',
        'Exécution des essais système et d’acceptation, animation des démonstrations et de la formation des utilisateurs clés, et prise en charge de la file de billets jusqu’à la stabilisation.',
      ],
    },
    meta: {
      title: {
        en: 'Full-cycle SAP EWM and QM implementation on S/4HANA — project detail',
        fr: 'Implantation complète SAP EWM et QM sur S/4HANA — détail du projet',
      },
      desc: {
        en: 'How a full SAP EWM and QM implementation on S/4HANA FPS01 was configured end to end: warehouse structure, POSC and LOSC, FEFO, handling units, RF, PPF printing and quality inspection.',
        fr: 'Comment une implantation complète SAP EWM et QM sur S/4HANA FPS01 a été configurée de bout en bout : structure d’entrepôt, POSC et LOSC, FEFO, unités de manutention, RF, impression PPF et contrôle qualité.',
      },
    },
  },
  {
    id: 'tm-best-practices',
    slug: 'sap-tm-ewm-integration-s4hana-2023',
    slugFr: 'integration-sap-tm-ewm-s4hana-2023',
    page: true,
    dates: { en: 'Sep 2023 — May 2024', fr: 'sept. 2023 — mai 2024' },
    title: {
      en: 'SAP TM on S/4HANA 2023, integrated with EWM',
      fr: 'SAP TM sur S/4HANA 2023, intégré à EWM',
    },
    role: { en: 'SAP TM functional lead', fr: 'Responsable fonctionnel SAP TM' },
    context: {
      en: 'Pharmacy distribution network, SAP Best Practices implementation',
      fr: 'Réseau de distribution pharmaceutique, implantation des SAP Best Practices',
    },
    summary: {
      en: 'Activated the SAP Best Practices content for Transportation Management and took it all the way to a production-ready solution wired into warehouse execution.',
      fr: 'Activation du contenu SAP Best Practices pour Transportation Management et livraison d’une solution prête pour la production, arrimée à l’exécution d’entrepôt.',
    },
    detail: {
      en: [
        'Implemented SAP Best Practices for Transportation Management on S/4HANA 2023, from activation of the standard scope through to a production-ready solution.',
        'Delivered the full TM configuration: freight unit building rules, freight order and freight booking types, planning profiles and the transportation cockpit, carrier selection and tendering, charge management and freight settlement, and output management for transport documents.',
        'Built and loaded the complete TM master data set: transportation network of locations, zones, lanes and means of transport, carriers and business partners, freight agreements and rate tables.',
        'Configured the TM and EWM integration: transportation requirements from deliveries, transportation units in EWM, loading and unloading, and door and staging assignment.',
        'Wrote the functional and technical specifications for the TM gaps and drove the developments with ABAP through build and unit test.',
        'Built the test scripts, ran integration testing across TM, EWM, MM and SD, trained the users and supported go-live.',
      ],
      fr: [
        'Implantation des SAP Best Practices pour Transportation Management sur S/4HANA 2023, de l’activation du contenu standard jusqu’à une solution prête pour la production.',
        'Configuration complète de TM : règles de constitution des unités de fret, types d’ordre et de réservation, profils de planification et cockpit de transport, sélection et appel d’offres des transporteurs, gestion des tarifs et règlement du fret, gestion des sorties.',
        'Constitution et chargement de l’ensemble des données de base TM : réseau de transport (sites, zones, voies, moyens de transport), transporteurs et partenaires d’affaires, ententes de fret et tables de tarifs.',
        'Configuration de l’intégration TM et EWM : besoins de transport issus des livraisons, unités de transport dans EWM, chargement et déchargement, affectation des portes et des zones de mise à quai.',
        'Rédaction des spécifications fonctionnelles et techniques pour les écarts TM et pilotage des développements avec l’équipe ABAP jusqu’aux essais unitaires.',
        'Rédaction des scénarios d’essais, essais d’intégration entre TM, EWM, MM et SD, formation des utilisateurs et soutien à la mise en service.',
      ],
    },
    meta: {
      title: {
        en: 'SAP TM and EWM integration on S/4HANA 2023 — project detail',
        fr: 'Intégration SAP TM et EWM sur S/4HANA 2023 — détail du projet',
      },
      desc: {
        en: 'SAP Best Practices for Transportation Management on S/4HANA 2023: freight unit building rules, transportation cockpit, carrier tendering, freight settlement, and the TM to EWM integration.',
        fr: 'SAP Best Practices pour Transportation Management sur S/4HANA 2023 : règles de constitution des unités de fret, cockpit de transport, appel d’offres, règlement du fret et intégration TM vers EWM.',
      },
    },
  },
  {
    id: 'mfs-a-frame',
    slug: 'sap-ewm-mfs-a-frame-automated-picking',
    slugFr: 'sap-ewm-mfs-prelevement-automatise-a-frame',
    page: true,
    dates: { en: 'Mar 2023 — Aug 2023', fr: 'mars 2023 — août 2023' },
    title: {
      en: 'SAP EWM with MFS, driving an A-Frame automated picker',
      fr: 'SAP EWM avec MFS, pilotant un préleveur automatisé A-Frame',
    },
    role: { en: 'SAP functional analyst', fr: 'Analyste fonctionnel SAP' },
    context: {
      en: 'Pharmaceutical distribution, warehouse automation',
      fr: 'Distribution pharmaceutique, automatisation d’entrepôt',
    },
    summary: {
      en: 'Connected SAP EWM to an A-Frame picking machine through the Material Flow System, down to the telegram traffic between EWM and the automation layer.',
      fr: 'Raccordement de SAP EWM à une machine de prélèvement A-Frame au moyen du Material Flow System, jusqu’au trafic de télégrammes entre EWM et la couche d’automatisation.',
    },
    detail: {
      en: [
        'Implemented SAP EWM on S/4HANA and integrated it with an A-Frame automated picking machine through the Material Flow System (MFS).',
        'Configured MFS communication points, conveyor segments, resources and telegram handling between EWM and the automation layer.',
        'Configured warehouse structure, inbound and outbound processing, transportation units, physical inventory, printing and RF.',
        'Produced blueprints, cutover plans, functional and technical specifications, process flows and master data requirements.',
        'Managed the project backlog in JIRA and ran the daily scrum, then built and executed the test plans validating the solution against requirements.',
        'Provided issue resolution and daily queue monitoring after go-live.',
      ],
      fr: [
        'Implantation de SAP EWM sur S/4HANA et intégration à une machine de prélèvement automatisé A-Frame au moyen du Material Flow System (MFS).',
        'Configuration des points de communication MFS, des segments de convoyeur, des ressources et du traitement des télégrammes entre EWM et la couche d’automatisation.',
        'Configuration de la structure d’entrepôt, des processus amont et aval, des unités de transport, de l’inventaire physique, de l’impression et du RF.',
        'Production des documents de conception, des plans de bascule, des spécifications, des flux de processus et des exigences en données de base.',
        'Gestion du carnet de projet dans JIRA et animation de la mêlée quotidienne, puis élaboration et exécution des plans d’essais.',
        'Résolution des problèmes et surveillance quotidienne de la file après la mise en service.',
      ],
    },
    meta: {
      title: {
        en: 'SAP EWM MFS integration with an A-Frame picking machine — project detail',
        fr: 'Intégration SAP EWM MFS avec une machine A-Frame — détail du projet',
      },
      desc: {
        en: 'Integrating SAP EWM with an A-Frame automated picking machine using the Material Flow System: communication points, conveyor segments, resources and telegram handling.',
        fr: 'Intégration de SAP EWM à une machine de prélèvement A-Frame avec le Material Flow System : points de communication, segments de convoyeur, ressources et télégrammes.',
      },
    },
  },
  {
    id: 'upgrade-1809-2023',
    slug: 'sap-ewm-upgrade-1809-to-2023',
    slugFr: 'mise-a-niveau-sap-ewm-1809-vers-2023',
    page: true,
    dates: { en: '2024 — 2025', fr: '2024 — 2025' },
    title: {
      en: 'S/4HANA upgrade from 1809 to 2023, with the warehouse running',
      fr: 'Mise à niveau S/4HANA de 1809 vers 2023, entrepôt en marche',
    },
    role: { en: 'EWM regression and defect resolution', fr: 'Régression EWM et correction des anomalies' },
    context: {
      en: 'Highly customized EWM landscape driving automated picking equipment',
      fr: 'Environnement EWM fortement personnalisé pilotant un équipement de prélèvement automatisé',
    },
    summary: {
      en: 'A five-release jump on a landscape full of Z-development and live automated picking, where the warehouse could not stop. Every defect found, root-caused and closed.',
      fr: 'Un saut de cinq versions sur un environnement rempli de développements Z et de prélèvement automatisé en production, sans arrêt possible. Chaque anomalie trouvée, expliquée et corrigée.',
    },
    detail: {
      en: [
        'Member of the upgrade project team on a landscape carrying heavy Z-development and live automated picking equipment, where uninterrupted warehouse operations were the non-negotiable requirement.',
        'Defined and executed the EWM regression test scope across inbound, outbound, RF, printing, physical inventory and the custom objects driving the automation interface.',
        'Identified the defects raised by the release jump, analyzed root cause across configuration and custom code, and corrected them with the development team.',
        'All issues were closed out and the automated picking operation continued running after cutover — the upgrade went live successfully.',
      ],
      fr: [
        'Membre de l’équipe de mise à niveau, sur un environnement comportant de nombreux développements Z et un équipement de prélèvement automatisé en production, où la continuité des opérations était une exigence incontournable.',
        'Définition et exécution de la portée des essais de régression EWM : processus amont et aval, RF, impression, inventaire physique et objets personnalisés pilotant l’interface d’automatisation.',
        'Identification des anomalies causées par le saut de version, analyse des causes racines en configuration et en code personnalisé, et correction avec l’équipe de développement.',
        'Toutes les anomalies ont été résolues et le prélèvement automatisé a continué de fonctionner après la bascule : la mise à niveau a été un succès.',
      ],
    },
    meta: {
      title: {
        en: 'SAP EWM upgrade from S/4HANA 1809 to 2023 — regression and defect resolution',
        fr: 'Mise à niveau SAP EWM de S/4HANA 1809 vers 2023 — régression et correction',
      },
      desc: {
        en: 'Regression testing and defect resolution for an S/4HANA 1809 to 2023 upgrade on a heavily customized EWM landscape driving automated picking equipment.',
        fr: 'Essais de régression et correction des anomalies pour une mise à niveau S/4HANA de 1809 vers 2023 sur un environnement EWM fortement personnalisé.',
      },
    },
  },
  {
    id: 'pp-pill-packing',
    slug: '',
    slugFr: '',
    page: false,
    dates: { en: 'Nov 2024 — Aug 2026', fr: 'nov. 2024 — août 2026' },
    title: {
      en: 'SAP PP for automated pill-packing lines',
      fr: 'SAP PP pour lignes d’emballage de médicaments automatisées',
    },
    role: { en: 'PP functional consultant', fr: 'Consultant fonctionnel PP' },
    context: {
      en: 'Multiple plants, several robotic packing machine models',
      fr: 'Plusieurs usines, plusieurs modèles de machines robotisées',
    },
    summary: {
      en: 'Discrete manufacturing in S/4HANA across multiple plants: production order types, routings, work centers and capacity, MRP and planned-order scheduling, plus a custom non-valuated material type for output that is not stock-relevant.',
      fr: 'Fabrication discrète dans S/4HANA sur plusieurs usines : types d’ordre de fabrication, gammes, postes de travail et capacités, MRP et ordonnancement, et un type d’article non valorisé pour une production non pertinente au stock.',
    },
  },
  {
    id: 'cloud-public-wm',
    slug: '',
    slugFr: '',
    page: false,
    dates: { en: 'Nov 2025 — Mar 2026', fr: 'nov. 2025 — mars 2026' },
    title: {
      en: 'Warehouse Management on S/4HANA Cloud Public Edition',
      fr: 'Gestion d’entrepôt sur S/4HANA Cloud Public Edition',
    },
    role: { en: 'Warehouse management consultant', fr: 'Consultant en gestion d’entrepôt' },
    context: { en: 'Delivered remote', fr: 'Livré en télétravail' },
    summary: {
      en: 'Storage control for Pick-Pack scenarios, handling unit management, and the warehouse organizational structure, working fit-to-standard inside cloud constraints rather than reaching for enhancements.',
      fr: 'Contrôle de stockage pour les scénarios Pick-Pack, gestion des unités de manutention et structure organisationnelle de l’entrepôt, en approche fit-to-standard dans les contraintes de l’infonuagique.',
    },
  },
  {
    id: 'arm',
    slug: '',
    slugFr: '',
    page: false,
    dates: { en: 'Mar 2023 — May 2023', fr: 'mars 2023 — mai 2023' },
    title: {
      en: 'Advanced Returns Management with EWM integration',
      fr: 'Advanced Returns Management avec intégration EWM',
    },
    role: { en: 'Functional consultant', fr: 'Consultant fonctionnel' },
    context: { en: 'Pharmaceutical distribution', fr: 'Distribution pharmaceutique' },
    summary: {
      en: 'Returns order types, refund determination, inspection at goods receipt in EWM, follow-up activities and logistical follow-up, aligned with MM and SD credit and stock postings.',
      fr: 'Types d’ordre de retour, détermination des remboursements, inspection à la réception dans EWM, activités subséquentes et suivi logistique, alignés avec les écritures MM et SD.',
    },
  },
  {
    id: 'colombia',
    slug: '',
    slugFr: '',
    page: false,
    dates: { en: 'Aug 2022 — Jan 2023', fr: 'août 2022 — janv. 2023' },
    title: {
      en: 'SAP EWM rollout, Colombia distribution center',
      fr: 'Déploiement SAP EWM, centre de distribution en Colombie',
    },
    role: { en: 'SAP EWM business analyst, Dollarama', fr: 'Analyste d’affaires SAP EWM, Dollarama' },
    context: {
      en: 'Second-largest retail warehouse in South America',
      fr: 'Deuxième plus grand entrepôt de détail en Amérique du Sud',
    },
    summary: {
      en: 'Warehouse structure, process types, bin determination, putaway and stock removal strategies, warehouse order creation rules, physical inventory, PPF printing, replenishment, POSC and LOSC. Users trained in Spanish.',
      fr: 'Structure d’entrepôt, types de processus, détermination des emplacements, stratégies de rangement et de prélèvement, règles de création des ordres, inventaire physique, impression PPF, réapprovisionnement, POSC et LOSC. Utilisateurs formés en espagnol.',
    },
  },
  {
    id: 'el-salvador-intl',
    slug: '',
    slugFr: '',
    page: false,
    dates: { en: 'Feb 2022 — Jul 2022', fr: 'févr. 2022 — juill. 2022' },
    title: {
      en: 'SAP EWM rollout, El Salvador international warehouse',
      fr: 'Déploiement SAP EWM, entrepôt international au Salvador',
    },
    role: { en: 'SAP EWM business analyst, Dollarama', fr: 'Analyste d’affaires SAP EWM, Dollarama' },
    context: { en: 'Import-driven receiving flows', fr: 'Flux de réception liés à l’importation' },
    summary: {
      en: 'International warehouse structure with inbound, outbound and internal movement processes, then testing, key-user training and post-go-live stabilization.',
      fr: 'Structure de l’entrepôt international avec les processus amont, aval et internes, puis essais, formation des utilisateurs clés et stabilisation.',
    },
  },
  {
    id: 'el-salvador-nat',
    slug: '',
    slugFr: '',
    page: false,
    dates: { en: 'Jan 2022 — Jun 2022', fr: 'janv. 2022 — juin 2022' },
    title: {
      en: 'SAP EWM rollout, El Salvador national warehouse',
      fr: 'Déploiement SAP EWM, entrepôt national au Salvador',
    },
    role: { en: 'SAP EWM business analyst, Dollarama', fr: 'Analyste d’affaires SAP EWM, Dollarama' },
    context: { en: 'National distribution', fr: 'Distribution nationale' },
    summary: {
      en: 'Warehouse structure, bin determination, putaway and stock removal, replenishment and physical inventory, with consultation on inbound, outbound, replenishment and ad-hoc stock movements.',
      fr: 'Structure d’entrepôt, détermination des emplacements, rangement et prélèvement, réapprovisionnement et inventaire physique, avec conseil sur les mouvements de stock.',
    },
  },
  {
    id: 'sandoz-tm',
    slug: '',
    slugFr: '',
    page: false,
    dates: { en: 'Aug 2020 — Apr 2021', fr: 'août 2020 — avr. 2021' },
    title: {
      en: 'SAP TM implementation, Sandoz Canada',
      fr: 'Implantation SAP TM, Sandoz Canada',
    },
    role: { en: 'SAP TM analyst, Kuehne+Nagel', fr: 'Analyste SAP TM, Kuehne+Nagel' },
    context: {
      en: 'Delivered with the Novartis global SAP team',
      fr: 'Livré avec l’équipe SAP mondiale de Novartis',
    },
    summary: {
      en: 'Requirements into functional and technical specifications, system testing and troubleshooting, go-live support, forwarder training on freight bidding, and the complete end-user manuals for Sandoz and its carriers.',
      fr: 'Besoins traduits en spécifications fonctionnelles et techniques, essais et résolution de problèmes, soutien à la mise en service, formation des transitaires et rédaction des manuels complets pour Sandoz et ses transporteurs.',
    },
  },
];

export const featured = projects.filter((p) => p.page);

/* ------------------------------------------------------------------ */
/* Home page                                                           */
/* ------------------------------------------------------------------ */

export const home = {
  en: {
    metaTitle: 'Marco Pecoraro — Remote SAP EWM and TM Consultant, S/4HANA',
    metaDesc:
      'Freelance SAP EWM and TM consultant working remotely. Eleven S/4HANA implementations, rollouts and upgrades in retail, pharmaceutical and distribution. SAP certified in both EWM and TM.',
    h1: 'I configure SAP warehouse and transport execution, remotely, from blueprint to hypercare.',
    lede:
      'Eleven S/4HANA implementations, rollouts and upgrades across retail, pharmaceutical and distribution operations in Canada and Latin America. I run the workshops, write the specifications, do the configuration, drive the testing, and stay on the queue after go-live.',
    releasesLabel: 'Releases I have delivered on',
    releases: [
      'S/4HANA 1809 through 2023, including FPS01',
      'S/4HANA Cloud Public Edition',
      'Embedded and decentralized EWM',
      'Embedded TM',
    ],
    whatHeading: 'What I am usually brought in to do',
    what: [
      {
        t: 'Own a warehouse stream end to end',
        d: 'Warehouse structure, storage control, handling units, batch and FEFO, replenishment, physical inventory, RF and printing — configured, tested and stabilized by one person who stays accountable for it.',
      },
      {
        t: 'Make transport and warehouse talk to each other',
        d: 'Freight units, planning, carrier selection and settlement in TM, then the integration into EWM so transportation units, loading and staging actually work on the floor.',
      },
      {
        t: 'Get a customized landscape through an upgrade',
        d: 'Regression scope, defect hunting and root cause across configuration and Z-code, on systems where automated equipment cannot stop running.',
      },
      {
        t: 'Write the documentation nobody else wants to write',
        d: 'Functional and technical specifications, blueprints, cutover plans, test scripts and end-user manuals, in English, French or Spanish.',
      },
    ],
    projectsHeading: 'Recent projects',
    ctaHeading: 'Looking for an EWM or TM consultant?',
    ctaBody:
      'I am available now for remote contract work, and I travel on site for design workshops, cutover and go-live. Tell me what release you are on and where the project is stuck.',
  },
  fr: {
    metaTitle: 'Marco Pecoraro — Consultant SAP EWM et TM en télétravail, S/4HANA',
    metaDesc:
      'Consultant SAP EWM et TM indépendant en télétravail. Onze implantations, déploiements et mises à niveau S/4HANA en détail, pharmaceutique et distribution. Certifié SAP en EWM et en TM.',
    h1: 'Je configure l’exécution d’entrepôt et de transport dans SAP, en télétravail, de la conception à la stabilisation.',
    lede:
      'Onze implantations, déploiements et mises à niveau S/4HANA en commerce de détail, en distribution pharmaceutique et en centres de distribution, au Canada et en Amérique latine. J’anime les ateliers, je rédige les spécifications, je fais la configuration, je pilote les essais et je reste sur la file après la mise en service.',
    releasesLabel: 'Versions livrées',
    releases: [
      'S/4HANA de 1809 à 2023, incluant FPS01',
      'S/4HANA Cloud Public Edition',
      'EWM intégré et décentralisé',
      'TM intégré',
    ],
    whatHeading: 'Ce pour quoi on me confie un mandat',
    what: [
      {
        t: 'Porter un volet entrepôt de bout en bout',
        d: 'Structure d’entrepôt, contrôle de stockage, unités de manutention, lots et FEFO, réapprovisionnement, inventaire physique, RF et impression : configurés, testés et stabilisés par une seule personne qui en demeure responsable.',
      },
      {
        t: 'Faire dialoguer le transport et l’entrepôt',
        d: 'Unités de fret, planification, sélection des transporteurs et règlement dans TM, puis l’intégration vers EWM pour que les unités de transport, le chargement et la mise à quai fonctionnent réellement sur le plancher.',
      },
      {
        t: 'Faire passer un système personnalisé à une nouvelle version',
        d: 'Portée de régression, chasse aux anomalies et analyse des causes en configuration comme en code Z, sur des systèmes où l’équipement automatisé ne peut pas s’arrêter.',
      },
      {
        t: 'Rédiger la documentation que personne ne veut écrire',
        d: 'Spécifications fonctionnelles et techniques, documents de conception, plans de bascule, scénarios d’essais et manuels d’utilisation, en anglais, en français ou en espagnol.',
      },
    ],
    projectsHeading: 'Projets récents',
    ctaHeading: 'Vous cherchez un consultant EWM ou TM ?',
    ctaBody:
      'Je suis disponible dès maintenant pour un mandat en télétravail, et je me déplace pour les ateliers de conception, la bascule et la mise en service. Dites-moi votre version et où le projet bloque.',
  },
};

/* ------------------------------------------------------------------ */
/* Service pages                                                       */
/* ------------------------------------------------------------------ */

export const services = {
  ewm: {
    en: {
      metaTitle: 'SAP EWM Consultant, Remote — S/4HANA Extended Warehouse Management',
      metaDesc:
        'Remote SAP EWM consultant, certified in Extended Warehouse Management with SAP S/4HANA. Warehouse structure, POSC and LOSC, handling units, FEFO, MFS automation, RF and printing.',
      h1: 'SAP EWM consultant, working remotely',
      lede:
        'I have configured Extended Warehouse Management on S/4HANA for pharmaceutical, retail and international distribution warehouses — including one connected to an A-Frame picking machine and one that had to survive a five-release upgrade without stopping.',
      blocks: [
        {
          t: 'Warehouse structure and master data',
          d: 'Supply chain units, storage types and sections, storage bins and bin determination, activity areas, work centers, and the warehouse process types that sit behind every movement.',
        },
        {
          t: 'Inbound and outbound execution',
          d: 'Goods receipt, putaway and stock removal strategies, warehouse order creation rules, packing, staging and goods issue, with process-oriented and layout-oriented storage control.',
        },
        {
          t: 'Stock handling for regulated goods',
          d: 'Handling unit management, batch management, FEFO stock removal for shelf-life-controlled material, replenishment strategies, posting changes, ad-hoc movements and physical inventory.',
        },
        {
          t: 'Automation through MFS',
          d: 'Communication points, conveyor segments, resources and telegram handling between EWM and the automation layer, including A-Frame automated picking.',
        },
        {
          t: 'Quality inspection inside the warehouse',
          d: 'Inbound quality inspection, inspection lot processing and blocked stock handling, integrated with EWM putaway rather than bolted on beside it.',
        },
        {
          t: 'Upgrades and regression',
          d: 'Release upgrades on landscapes carrying heavy Z-development, where the regression scope has to cover the custom objects driving live equipment.',
        },
      ],
      deployHeading: 'Deployment options I work with',
      deploy: [
        'Embedded EWM on S/4HANA',
        'Decentralized EWM',
        'Warehouse Management in S/4HANA Cloud Public Edition',
      ],
      projHeading: 'EWM projects',
      certNote:
        'SAP Certified Application Associate — Extended Warehouse Management with SAP S/4HANA.',
      faq: [
        {
          q: 'What is the difference between embedded and decentralized EWM?',
          a: 'Embedded EWM runs inside the same S/4HANA system as your ERP, sharing the database and the delivery documents directly — simpler to operate, and the default choice for a single-site or moderate-complexity warehouse. Decentralized EWM runs as a separate system connected by queued RFC, which adds an integration layer but isolates warehouse execution from ERP performance and maintenance windows — the right call for a high-volume site running automation that cannot tolerate an ERP outage or upgrade disrupting the floor. I have configured both, and the deciding factor is almost always transaction volume and how much the warehouse depends on uptime independent of the rest of the system.',
        },
        {
          q: 'What does an EWM upgrade regression actually involve?',
          a: 'On a landscape without custom development, a regression is mostly retesting standard flows. On a landscape like the ones I have upgraded — heavy Z-development and live automated picking equipment — it means defining test scope across inbound, outbound, RF, printing and physical inventory, then specifically re-validating every custom object that talks to the automation interface, because that is where a release jump breaks things standard regression scripts do not cover. I run the tests, find where configuration or Z-code no longer matches the new release behavior, root-cause it, and fix it with the development team before cutover — not after.',
        },
        {
          q: 'What is the practical difference between POSC and LOSC storage control?',
          a: 'Process-oriented storage control (POSC) drives packing, staging and goods issue for a warehouse process type — the sequence of steps a handling unit goes through. Layout-oriented storage control (LOSC) governs how EWM decides where stock actually sits and moves within the physical storage type, using putaway and stock removal strategies. In practice they work together: POSC decides what happens, LOSC decides where. Getting both configured to agree with the real layout of the building is most of what makes putaway and picking fast instead of a source of daily tickets.',
        },
        {
          q: 'Can Extended Warehouse Management run in S/4HANA Cloud Public Edition?',
          a: 'Yes — as Warehouse Management in S/4HANA Cloud Public Edition, a fit-to-standard scope of EWM covering storage control for Pick-Pack scenarios, handling unit management and the standard warehouse organizational structure. The configuration options are narrower than an on-premise or private-cloud EWM implementation, so the real work is mapping your process onto what the cloud edition actually allows rather than reaching for an enhancement, which usually is not available. I have delivered a warehouse management implementation on Cloud Public Edition and know where those cloud constraints actually bite.',
        },
      ],
    },
    fr: {
      metaTitle: 'Consultant SAP EWM en télétravail — S/4HANA Extended Warehouse Management',
      metaDesc:
        'Consultant SAP EWM en télétravail, certifié en Extended Warehouse Management avec SAP S/4HANA. Structure d’entrepôt, POSC et LOSC, unités de manutention, FEFO, automatisation MFS, RF et impression.',
      h1: 'Consultant SAP EWM, en télétravail',
      lede:
        'J’ai configuré Extended Warehouse Management sur S/4HANA pour des entrepôts pharmaceutiques, de détail et de distribution internationale, dont un raccordé à une machine de prélèvement A-Frame et un autre qui devait survivre à un saut de cinq versions sans s’arrêter.',
      blocks: [
        {
          t: 'Structure d’entrepôt et données de base',
          d: 'Unités de chaîne logistique, types de magasin et sections, emplacements et règles de détermination, zones d’activité, postes de travail, et les types de processus derrière chaque mouvement.',
        },
        {
          t: 'Exécution amont et aval',
          d: 'Réception, stratégies de rangement et de prélèvement, règles de création des ordres d’entrepôt, emballage, mise à quai et expédition, avec contrôle de stockage orienté processus et orienté disposition.',
        },
        {
          t: 'Gestion des stocks réglementés',
          d: 'Unités de manutention, gestion des lots, prélèvement FEFO pour les articles à durée de conservation, stratégies de réapprovisionnement, changements de statut, mouvements ponctuels et inventaire physique.',
        },
        {
          t: 'Automatisation par MFS',
          d: 'Points de communication, segments de convoyeur, ressources et traitement des télégrammes entre EWM et la couche d’automatisation, incluant le prélèvement automatisé A-Frame.',
        },
        {
          t: 'Contrôle qualité dans l’entrepôt',
          d: 'Contrôle à réception, traitement des lots de contrôle et gestion du stock bloqué, intégrés au rangement EWM plutôt qu’ajoutés à côté.',
        },
        {
          t: 'Mises à niveau et régression',
          d: 'Mises à niveau de version sur des environnements chargés de développements Z, où la portée de régression doit couvrir les objets personnalisés qui pilotent l’équipement en production.',
        },
      ],
      deployHeading: 'Modes de déploiement',
      deploy: [
        'EWM intégré à S/4HANA',
        'EWM décentralisé',
        'Gestion d’entrepôt dans S/4HANA Cloud Public Edition',
      ],
      projHeading: 'Projets EWM',
      certNote:
        'SAP Certified Application Associate — Extended Warehouse Management with SAP S/4HANA.',
      faq: [
        {
          q: 'Quelle est la différence entre EWM intégré et EWM décentralisé ?',
          a: 'EWM intégré tourne dans le même système S/4HANA que votre ERP, partageant la base de données et les documents de livraison directement : plus simple à exploiter, et le choix par défaut pour un site unique ou de complexité modérée. EWM décentralisé tourne comme un système distinct relié par RFC en file d’attente, ce qui ajoute une couche d’intégration mais isole l’exécution d’entrepôt des performances et des fenêtres de maintenance de l’ERP : le bon choix pour un site à haut volume avec de l’automatisation qui ne tolère pas qu’un arrêt ou une mise à niveau de l’ERP perturbe le plancher. J’ai configuré les deux, et le facteur décisif est presque toujours le volume de transactions et le degré de dépendance de l’entrepôt à une disponibilité indépendante du reste du système.',
        },
        {
          q: 'En quoi consiste concrètement une régression lors d’une mise à niveau EWM ?',
          a: 'Sur un environnement sans développement personnalisé, une régression consiste surtout à retester les flux standards. Sur un environnement comme ceux que j’ai fait passer à une nouvelle version — chargé de développements Z et avec un équipement de prélèvement automatisé en production — cela signifie définir la portée des essais sur les processus amont, aval, le RF, l’impression et l’inventaire physique, puis revalider spécifiquement chaque objet personnalisé qui communique avec l’interface d’automatisation, car c’est là qu’un saut de version brise des choses que les scripts de régression standards ne couvrent pas. Je fais les essais, je trouve où la configuration ou le code Z ne correspond plus au comportement de la nouvelle version, j’en établis la cause racine, et je corrige avec l’équipe de développement avant la bascule, pas après.',
        },
        {
          q: 'Quelle est la différence pratique entre le contrôle de stockage POSC et LOSC ?',
          a: 'Le contrôle de stockage orienté processus (POSC) pilote l’emballage, la mise à quai et l’expédition d’un type de processus d’entrepôt : la séquence des étapes que traverse une unité de manutention. Le contrôle de stockage orienté disposition (LOSC) régit la façon dont EWM détermine où le stock se trouve et se déplace réellement dans le type de magasin physique, au moyen des stratégies de rangement et de prélèvement. En pratique, les deux travaillent ensemble : POSC décide de ce qui se passe, LOSC décide où. Faire en sorte que les deux correspondent à la disposition réelle du bâtiment est ce qui rend le rangement et le prélèvement rapides plutôt qu’une source de billets quotidiens.',
        },
        {
          q: 'Extended Warehouse Management peut-il tourner dans S/4HANA Cloud Public Edition ?',
          a: 'Oui, sous la forme de la gestion d’entrepôt dans S/4HANA Cloud Public Edition, une portée fit-to-standard d’EWM couvrant le contrôle de stockage pour les scénarios Pick-Pack, la gestion des unités de manutention et la structure organisationnelle standard de l’entrepôt. Les options de configuration sont plus restreintes qu’une implantation EWM sur site ou en cloud privé, donc le vrai travail consiste à faire correspondre votre processus à ce que permet réellement l’édition cloud plutôt que de recourir à une amélioration, généralement indisponible. J’ai livré une implantation de gestion d’entrepôt sur Cloud Public Edition et je sais où ces contraintes infonuagiques se manifestent réellement.',
        },
      ],
    },
    projectIds: ['ewm-qm-full-cycle', 'mfs-a-frame', 'upgrade-1809-2023', 'cloud-public-wm', 'colombia', 'el-salvador-intl', 'el-salvador-nat', 'arm'],
  },
  tm: {
    en: {
      metaTitle: 'SAP TM Consultant, Remote — S/4HANA Transportation Management',
      metaDesc:
        'Remote SAP TM consultant, certified in Transportation Management in SAP S/4HANA. Freight units, transportation cockpit, carrier selection and tendering, freight settlement, TM to EWM integration.',
      h1: 'SAP TM consultant, working remotely',
      lede:
        'I have implemented Transportation Management twice: once on S/4HANA 2023 from the SAP Best Practices content through to a production-ready solution integrated with EWM, and once for a pharmaceutical manufacturer alongside a global SAP team.',
      blocks: [
        {
          t: 'Planning and execution',
          d: 'Freight unit building rules, freight order and freight booking types, planning profiles and the transportation cockpit, set up so planners can actually work in it.',
        },
        {
          t: 'Carriers and cost',
          d: 'Carrier selection and tendering, charge management, freight agreements and rate tables, freight settlement, and output management for transport documents.',
        },
        {
          t: 'Transportation network master data',
          d: 'Locations, transportation zones, lanes and means of transport, carriers and business partners — built and loaded, not assumed to exist.',
        },
        {
          t: 'TM and EWM integration',
          d: 'Transportation requirements from deliveries, transportation units in EWM, loading and unloading, and door and staging assignment, so planning survives contact with the warehouse.',
        },
        {
          t: 'Specifications and gaps',
          d: 'Functional and technical specifications for the gaps standard TM does not cover, driven with ABAP developers through build and unit test.',
        },
        {
          t: 'Carrier and user adoption',
          d: 'Integration testing across TM, EWM, MM and SD, forwarder training on freight bidding, user training and the end-user manuals.',
        },
      ],
      deployHeading: 'What I work with',
      deploy: ['Embedded TM on S/4HANA 2023', 'SAP Best Practices activation', 'EDI and IDoc monitoring'],
      projHeading: 'TM projects',
      certNote:
        'SAP Certified Application Associate — Transportation Management in SAP S/4HANA.',
      faq: [
        {
          q: 'How does SAP TM actually integrate with EWM in S/4HANA?',
          a: 'The delivery in ERP generates a transportation requirement, which TM turns into a freight unit for planning. Once tendering and carrier selection are done, TM creates a transportation unit that EWM consumes for loading, staging and goods issue — so the truck door, the staging area and the loading sequence in the warehouse are driven by the same plan the transportation cockpit built. Getting this integration right means the freight unit building rules, the delivery-to-shipment logic and the EWM staging and door assignment all have to agree with each other, which is where most TM-EWM projects actually spend their time.',
        },
        {
          q: 'What is a freight unit, and why does the building rule matter so much?',
          a: 'A freight unit is the object TM plans and tenders — it groups the deliveries or delivery items that should move together based on the freight unit building rule you configure. Get the rule wrong and you either fragment shipments that should have been consolidated, or you group items that need to travel separately, and both mistakes show up as cost and service problems, not configuration errors, so they are hard to trace back to the actual cause. I build the rule against how your carriers actually price and how your warehouse actually stages, not just against the SAP Best Practices default.',
        },
        {
          q: 'Do you work from SAP Best Practices or build TM from scratch?',
          a: 'I usually start from SAP Best Practices activation because it gets a working freight order and freight booking scope in place fast, then I configure the gaps — planning profiles, carrier tendering rules, charge management and freight settlement — against your actual transportation network rather than leaving the standard defaults in place. For a pharmaceutical manufacturer I built the full TM solution outside the Best Practices content entirely, working directly with a global SAP team. Which route is right depends on how close your standard transportation processes are to the SAP Best Practices scope.',
        },
      ],
    },
    fr: {
      metaTitle: 'Consultant SAP TM en télétravail — S/4HANA Transportation Management',
      metaDesc:
        'Consultant SAP TM en télétravail, certifié en Transportation Management dans SAP S/4HANA. Unités de fret, cockpit de transport, sélection des transporteurs, règlement du fret, intégration TM vers EWM.',
      h1: 'Consultant SAP TM, en télétravail',
      lede:
        'J’ai implanté Transportation Management deux fois : une fois sur S/4HANA 2023, du contenu SAP Best Practices jusqu’à une solution prête pour la production et intégrée à EWM, et une fois pour un fabricant pharmaceutique aux côtés d’une équipe SAP mondiale.',
      blocks: [
        {
          t: 'Planification et exécution',
          d: 'Règles de constitution des unités de fret, types d’ordre et de réservation, profils de planification et cockpit de transport, paramétrés pour que les planificateurs puissent réellement y travailler.',
        },
        {
          t: 'Transporteurs et coûts',
          d: 'Sélection et appel d’offres des transporteurs, gestion des tarifs, ententes de fret et tables de tarifs, règlement du fret et gestion des sorties pour les documents de transport.',
        },
        {
          t: 'Données de base du réseau de transport',
          d: 'Sites, zones de transport, voies et moyens de transport, transporteurs et partenaires d’affaires : constitués et chargés, non présumés existants.',
        },
        {
          t: 'Intégration TM et EWM',
          d: 'Besoins de transport issus des livraisons, unités de transport dans EWM, chargement et déchargement, affectation des portes et des zones de mise à quai.',
        },
        {
          t: 'Spécifications et écarts',
          d: 'Spécifications fonctionnelles et techniques pour les écarts que le standard ne couvre pas, pilotées avec les développeurs ABAP jusqu’aux essais unitaires.',
        },
        {
          t: 'Adoption par les transporteurs et les utilisateurs',
          d: 'Essais d’intégration entre TM, EWM, MM et SD, formation des transitaires sur la soumission d’offres, formation des utilisateurs et rédaction des manuels.',
        },
      ],
      deployHeading: 'Ce avec quoi je travaille',
      deploy: ['TM intégré sur S/4HANA 2023', 'Activation des SAP Best Practices', 'Surveillance des EDI et IDoc'],
      projHeading: 'Projets TM',
      certNote:
        'SAP Certified Application Associate — Transportation Management in SAP S/4HANA.',
      faq: [
        {
          q: 'Comment SAP TM s’intègre-t-il concrètement à EWM dans S/4HANA ?',
          a: 'La livraison dans l’ERP génère un besoin de transport, que TM transforme en unité de fret pour la planification. Une fois l’appel d’offres et la sélection du transporteur terminés, TM crée une unité de transport qu’EWM utilise pour le chargement, la mise à quai et l’expédition : la porte du camion, la zone de mise à quai et la séquence de chargement dans l’entrepôt sont donc pilotées par le même plan que celui établi par le cockpit de transport. Bien réaliser cette intégration exige que les règles de constitution des unités de fret, la logique livraison-vers-expédition et l’affectation des portes et zones de mise à quai dans EWM soient toutes cohérentes entre elles, ce qui est là où la plupart des projets TM-EWM passent réellement leur temps.',
        },
        {
          q: 'Qu’est-ce qu’une unité de fret et pourquoi la règle de constitution compte-t-elle autant ?',
          a: 'Une unité de fret est l’objet que TM planifie et soumissionne : elle regroupe les livraisons ou lignes de livraison qui doivent voyager ensemble selon la règle de constitution que vous configurez. Une règle mal conçue fragmente des expéditions qui auraient dû être consolidées, ou regroupe des articles qui doivent voyager séparément, et ces deux erreurs se manifestent comme des problèmes de coût et de service, pas comme des erreurs de configuration, donc elles sont difficiles à retracer à leur cause réelle. Je construis la règle selon la façon dont vos transporteurs tarifient réellement et dont votre entrepôt met réellement à quai, pas seulement selon le défaut des SAP Best Practices.',
        },
        {
          q: 'Travaillez-vous à partir des SAP Best Practices ou construisez-vous TM à partir de zéro ?',
          a: 'Je pars généralement de l’activation des SAP Best Practices parce que cela met rapidement en place une portée fonctionnelle d’ordres et de réservations de fret, puis je configure les écarts : profils de planification, règles d’appel d’offres, gestion des tarifs et règlement du fret, selon votre réseau de transport réel plutôt que de laisser les valeurs par défaut. Pour un fabricant pharmaceutique, j’ai construit la solution TM complète hors du contenu Best Practices, en travaillant directement avec une équipe SAP mondiale. Le bon choix dépend de la proximité entre vos processus de transport standards et la portée des SAP Best Practices.',
        },
      ],
    },
    projectIds: ['tm-best-practices', 'sandoz-tm'],
  },
  ppqm: {
    en: {
      metaTitle: 'SAP PP and QM Consultant, Remote — Discrete Manufacturing on S/4HANA',
      metaDesc:
        'Remote SAP PP and QM consultant. Discrete manufacturing configuration, MRP, routings and work centers, custom material types, and inbound quality inspection integrated with EWM.',
      h1: 'SAP PP and QM consultant, working remotely',
      lede:
        'I configure Production Planning for discrete manufacturing and Quality Management for inbound inspection, usually on landscapes where PP or QM has to work alongside a warehouse EWM is already running — including a multi-plant rollout for automated pill-packing lines.',
      blocks: [
        {
          t: 'Discrete manufacturing setup',
          d: 'Production order types and order-type-dependent parameters, order and settlement profiles, routings, work centers, and the capacity and scheduling parameters that decide whether the plan is realistic.',
        },
        {
          t: 'MRP and scheduling',
          d: 'MRP configuration, MRP controllers and production supervisors, planned-order scheduling, production scheduling profiles, confirmations and print control.',
        },
        {
          t: 'Custom material types',
          d: 'Non-valuated, non-inventory-managed material types for output that runs through a production process but is not stock-relevant — configured for one client across several plants and machine models.',
        },
        {
          t: 'Quality integrated with the warehouse',
          d: 'Inbound quality inspection, inspection lot processing and blocked stock handling, wired into EWM putaway rather than treated as a separate step.',
        },
      ],
      deployHeading: 'What I work with',
      deploy: ['Discrete manufacturing in S/4HANA', 'Robotic and automated packing line interfaces', 'QM inspection at goods receipt'],
      projHeading: 'PP and QM projects',
      faq: [
        {
          q: 'Why would PP and QM be handled by the same consultant?',
          a: 'Because on the projects where this comes up, the two are not really separate problems: a quality inspection lot at goods receipt has to talk to the same warehouse putaway strategy that a production order confirmation eventually feeds into. I have configured both on landscapes that already run EWM, and the value is in one person who understands how a production order, an inspection lot and a warehouse task actually depend on each other, instead of three specialists debugging a handoff between them.',
        },
        {
          q: 'What is a non-valuated, non-inventory-managed material type, and why use one?',
          a: 'It is a material type SAP treats as flowing through a production process without carrying a stock value or inventory quantity — useful for output that has to exist as a trackable object in the system (for scheduling, confirmations, reporting) but is not something you want appearing in stock valuation or inventory counts. I built one for a pill-packing operation where the standard material type would have created inventory postings for something that was not, functionally, stock.',
        },
        {
          q: 'Do you configure QM as a standalone module or only alongside EWM?',
          a: 'Both — the inbound inspection lot processing and blocked-stock handling I configure is the same core QM regardless of whether EWM is in the landscape. What changes is the integration point: with EWM, the inspection has to align with putaway strategy so blocked stock genuinely stays out of pick-eligible bins, which is the part that goes wrong when QM and EWM are configured by different people who never look at each other’s settings.',
        },
      ],
    },
    fr: {
      metaTitle: 'Consultant SAP PP et QM en télétravail — fabrication discrète sur S/4HANA',
      metaDesc:
        'Consultant SAP PP et QM en télétravail. Configuration de la fabrication discrète, MRP, gammes et postes de travail, types d’article personnalisés et contrôle qualité à réception intégré à EWM.',
      h1: 'Consultant SAP PP et QM, en télétravail',
      lede:
        'Je configure la planification de production pour la fabrication discrète et la gestion de la qualité pour le contrôle à réception, généralement sur des environnements où PP ou QM doit fonctionner aux côtés d’un EWM déjà en place, dont un déploiement multi-usines pour des lignes d’emballage de médicaments automatisées.',
      blocks: [
        {
          t: 'Paramétrage de la fabrication discrète',
          d: 'Types d’ordre de fabrication et paramètres dépendants du type d’ordre, profils d’ordre et d’imputation, gammes, postes de travail, et les paramètres de capacité et d’ordonnancement qui déterminent si le plan est réaliste.',
        },
        {
          t: 'MRP et ordonnancement',
          d: 'Configuration du MRP, gestionnaires MRP et superviseurs de production, ordonnancement des ordres planifiés, profils d’ordonnancement de production, confirmations et contrôle d’impression.',
        },
        {
          t: 'Types d’article personnalisés',
          d: 'Types d’article non valorisés et non gérés en stock pour une production qui traverse un processus de fabrication sans être pertinente au stock, configurés pour un client sur plusieurs usines et modèles de machines.',
        },
        {
          t: 'Qualité intégrée à l’entrepôt',
          d: 'Contrôle qualité à réception, traitement des lots de contrôle et gestion du stock bloqué, raccordés au rangement EWM plutôt que traités comme une étape séparée.',
        },
      ],
      deployHeading: 'Ce avec quoi je travaille',
      deploy: ['Fabrication discrète dans S/4HANA', 'Interfaces de lignes d’emballage robotisées', 'Contrôle qualité à réception'],
      projHeading: 'Projets PP et QM',
      faq: [
        {
          q: 'Pourquoi PP et QM seraient-ils pris en charge par le même consultant ?',
          a: 'Parce que sur les projets où cette question se pose, ce ne sont pas vraiment deux problèmes distincts : un lot de contrôle qualité à la réception doit dialoguer avec la même stratégie de rangement d’entrepôt qu’alimente éventuellement une confirmation d’ordre de fabrication. J’ai configuré les deux sur des environnements où EWM tournait déjà, et la valeur réside dans une seule personne qui comprend comment un ordre de fabrication, un lot de contrôle et une tâche d’entrepôt dépendent réellement les uns des autres, plutôt que trois spécialistes qui débogent une transmission entre eux.',
        },
        {
          q: 'Qu’est-ce qu’un type d’article non valorisé et non géré en stock, et pourquoi l’utiliser ?',
          a: 'C’est un type d’article que SAP traite comme circulant dans un processus de fabrication sans porter de valeur de stock ni de quantité en inventaire, utile pour une production qui doit exister comme objet traçable dans le système (pour l’ordonnancement, les confirmations, les rapports) sans apparaître dans la valorisation des stocks ou les comptages. J’en ai configuré un pour une opération d’emballage de médicaments où le type d’article standard aurait généré des écritures d’inventaire pour quelque chose qui n’était pas, fonctionnellement, du stock.',
        },
        {
          q: 'Configurez-vous QM comme module autonome ou seulement aux côtés d’EWM ?',
          a: 'Les deux : le traitement des lots de contrôle à réception et la gestion du stock bloqué que je configure constituent le même socle QM, qu’EWM fasse partie de l’environnement ou non. Ce qui change, c’est le point d’intégration : avec EWM, le contrôle doit s’aligner avec la stratégie de rangement pour que le stock bloqué reste réellement hors des emplacements admissibles au prélèvement, ce qui est précisément l’endroit où les choses tournent mal quand QM et EWM sont configurés par des personnes qui ne consultent jamais les paramètres l’une de l’autre.',
        },
      ],
    },
    projectIds: ['pp-pill-packing'],
  },
  process: {
    en: {
      metaTitle: 'Warehouse Process Improvement Consultant — Lean Six Sigma Black Belt',
      metaDesc:
        'Warehouse process consulting from a Lean Six Sigma Black Belt: assessing existing flows, redesigning inbound, outbound and replenishment, KPI frameworks and Power BI reporting.',
      h1: 'Warehouse process consulting',
      lede:
        'Before I configure anything, I look at whether the process itself is right. I assess existing warehouse flows against a Lean Six Sigma framework, redesign what does not hold up, and build the KPI reporting that shows whether the change actually worked.',
      blocks: [
        {
          t: 'Process assessment and redesign',
          d: 'Walking the inbound, outbound, replenishment and inventory flows as they actually run, not as the process map says they run, and finding where the sequence — not the system — is the bottleneck.',
        },
        {
          t: 'Root cause, not symptom fixes',
          d: 'Lean Six Sigma Black Belt methodology: root cause analysis, waste elimination, process capability, applied to a distribution center floor rather than a factory line.',
        },
        {
          t: 'Slotting and storage strategy',
          d: 'Reworking putaway and pick logic against real pick-frequency and velocity data, not the layout the building happened to start with.',
        },
        {
          t: 'KPIs and Power BI reporting',
          d: 'Throughput, pick accuracy, dock-to-stock time, order cycle time and inventory accuracy, built into balanced scorecards and Power BI dashboards designed for continuous improvement, not a monthly slide.',
        },
        {
          t: 'RFPs and vendor evaluation',
          d: 'Requests for proposal for warehouse equipment and structured vendor evaluation, when the fix genuinely needs new hardware rather than a new process.',
        },
      ],
      deployHeading: 'Where this fits',
      deploy: [
        'Before an SAP EWM implementation, to make sure you are configuring the right process',
        'Independent of any SAP project, as a standalone assessment',
        'Alongside go-live, to build the KPI reporting that proves the new process is working',
      ],
      certHeading: 'Credential',
      certNote: 'Lean Six Sigma Black Belt, ICBB (Management & Strategy Institute, 2019).',
      faq: [
        {
          q: 'What does a warehouse process assessment actually produce?',
          a: 'A clear picture of where inbound, outbound, replenishment or inventory flows lose time or accuracy, backed by root cause analysis rather than opinion, and a redesigned process with the changes ranked by effort and impact. On projects where I have owned this end to end, it also comes with the KPI baseline needed to prove afterward that the redesign actually changed something, which is the part a lot of process reviews skip.',
        },
        {
          q: 'Do you need to touch SAP configuration to improve a warehouse process?',
          a: 'No. Process assessment and redesign is independent of the system underneath it — the Lean Six Sigma methodology applies to how work moves through the building, not to a transaction code. That said, if the warehouse runs on SAP and the redesigned process needs new putaway logic, storage control or replenishment strategy to actually work, I can configure that myself instead of handing a recommendation to someone else to implement and hoping it survives the handoff.',
        },
        {
          q: 'How is this different from a generic supply chain consulting engagement?',
          a: 'I have actually configured the systems that execute the process I am reviewing — EWM storage control, putaway strategies, RF transactions — so a recommendation I make accounts for what the warehouse management system can and cannot do, instead of proposing a process a system three releases behind cannot support. That is also why the KPI reporting I build is aimed at the metrics a warehouse floor actually generates, not a generic consulting template.',
        },
      ],
    },
    fr: {
      metaTitle: 'Consultant en amélioration des processus d’entrepôt — Ceinture noire Lean Six Sigma',
      metaDesc:
        'Conseil en processus d’entrepôt par une ceinture noire Lean Six Sigma : évaluation des flux existants, refonte des processus amont, aval et de réapprovisionnement, indicateurs et rapports Power BI.',
      h1: 'Conseil en processus d’entrepôt',
      lede:
        'Avant de configurer quoi que ce soit, je vérifie si le processus lui-même est le bon. J’évalue les flux d’entrepôt existants selon un cadre Lean Six Sigma, je refais ce qui ne tient pas la route, et je construis les indicateurs qui montrent si le changement a réellement fonctionné.',
      blocks: [
        {
          t: 'Évaluation et refonte des processus',
          d: 'Parcourir les flux amont, aval, de réapprovisionnement et d’inventaire tels qu’ils fonctionnent réellement, pas tels que la cartographie des processus le prétend, et trouver où la séquence, et non le système, est le goulot d’étranglement.',
        },
        {
          t: 'Cause racine, pas correction de symptôme',
          d: 'Méthodologie de ceinture noire Lean Six Sigma : analyse des causes racines, élimination du gaspillage, capabilité des processus, appliquée au plancher d’un centre de distribution plutôt qu’à une ligne d’usine.',
        },
        {
          t: 'Stratégie d’emplacement et de stockage',
          d: 'Refonte de la logique de rangement et de prélèvement selon les données réelles de fréquence et de vélocité de prélèvement, et non selon la disposition initiale du bâtiment.',
        },
        {
          t: 'Indicateurs et rapports Power BI',
          d: 'Débit, exactitude du prélèvement, délai quai-au-stock, délai de cycle des commandes et exactitude des stocks, intégrés dans des tableaux de bord équilibrés et des tableaux Power BI conçus pour l’amélioration continue, pas pour une diapositive mensuelle.',
        },
        {
          t: 'Appels d’offres et évaluation des fournisseurs',
          d: 'Appels d’offres pour l’équipement d’entrepôt et évaluation structurée des fournisseurs, lorsque la solution exige réellement du nouveau matériel plutôt qu’un nouveau processus.',
        },
      ],
      deployHeading: 'Où cela s’intègre',
      deploy: [
        'Avant une implantation SAP EWM, pour s’assurer de configurer le bon processus',
        'Indépendamment de tout projet SAP, comme évaluation autonome',
        'En parallèle de la mise en service, pour construire les indicateurs qui prouvent que le nouveau processus fonctionne',
      ],
      certHeading: 'Titre professionnel',
      certNote: 'Ceinture noire Lean Six Sigma (ICBB), Management & Strategy Institute, 2019.',
      faq: [
        {
          q: 'Qu’est-ce que produit concrètement une évaluation des processus d’entrepôt ?',
          a: 'Une image claire des endroits où les flux amont, aval, de réapprovisionnement ou d’inventaire perdent du temps ou de l’exactitude, appuyée sur une analyse des causes racines plutôt que sur une opinion, et un processus redessiné avec les changements classés par effort et par impact. Sur les projets où j’ai porté cela de bout en bout, cela inclut aussi la base d’indicateurs nécessaire pour prouver ensuite que la refonte a réellement changé quelque chose, ce qu’une bonne partie des revues de processus omettent.',
        },
        {
          q: 'Faut-il toucher à la configuration SAP pour améliorer un processus d’entrepôt ?',
          a: 'Non. L’évaluation et la refonte des processus sont indépendantes du système sous-jacent : la méthodologie Lean Six Sigma s’applique à la façon dont le travail circule dans le bâtiment, pas à un code transaction. Cela dit, si l’entrepôt tourne sur SAP et que le processus redessiné a besoin d’une nouvelle logique de rangement, d’un nouveau contrôle de stockage ou d’une nouvelle stratégie de réapprovisionnement pour fonctionner réellement, je peux le configurer moi-même plutôt que de remettre une recommandation à quelqu’un d’autre en espérant qu’elle survive au transfert.',
        },
        {
          q: 'En quoi est-ce différent d’un mandat générique de conseil en chaîne d’approvisionnement ?',
          a: 'J’ai réellement configuré les systèmes qui exécutent le processus que j’évalue : contrôle de stockage EWM, stratégies de rangement, transactions RF, donc une recommandation que je fais tient compte de ce que le système de gestion d’entrepôt peut ou ne peut pas faire, au lieu de proposer un processus qu’un système en retard de trois versions ne peut pas soutenir. C’est aussi pourquoi les indicateurs que je construis visent les mesures qu’un plancher d’entrepôt génère réellement, et non un gabarit de conseil générique.',
        },
      ],
    },
    projectIds: [],
  },
};

/* ------------------------------------------------------------------ */
/* Projects index, about, contact                                      */
/* ------------------------------------------------------------------ */

export const projectsPage = {
  en: {
    metaTitle: 'SAP EWM, TM and PP Projects — Marco Pecoraro',
    metaDesc:
      'Eleven SAP S/4HANA projects: EWM implementations and rollouts, TM with EWM integration, MFS automation, an 1809 to 2023 upgrade, Cloud Public Edition warehouse management and PP for automated packing.',
    h1: 'Projects',
    lede:
      'Every SAP project I have worked on since 2020, newest first. The four with detail pages are the ones people ask about most.',
  },
  fr: {
    metaTitle: 'Projets SAP EWM, TM et PP — Marco Pecoraro',
    metaDesc:
      'Onze projets SAP S/4HANA : implantations et déploiements EWM, TM intégré à EWM, automatisation MFS, mise à niveau de 1809 vers 2023, gestion d’entrepôt Cloud Public Edition et PP pour l’emballage automatisé.',
    h1: 'Projets',
    lede:
      'Tous les projets SAP réalisés depuis 2020, du plus récent au plus ancien. Les quatre avec une page détaillée sont ceux dont on me parle le plus.',
  },
};

export const about = {
  en: {
    metaTitle: 'About Marco Pecoraro — SAP EWM and TM Consultant in Montreal',
    metaDesc:
      'SAP EWM and TM consultant based in Montreal, working remotely. Background in supply chain management, demand planning and warehouse systems, with eleven S/4HANA projects since 2020.',
    h1: 'About',
    body: [
      'I started in supply chain on the business side — demand planning for a footwear retailer, forecasting for partners across five regions. That is where I learned what a warehouse system feels like when it is wrong, before I ever configured one.',
      'The SAP work started in 2020 on a Transportation Management implementation for a pharmaceutical manufacturer, where I wrote the specifications, ran the testing, and trained the forwarders who had to bid on the lanes. Then four Extended Warehouse Management rollouts for international distribution centers in Colombia, El Salvador and Guatemala, where I trained the users in Spanish.',
      'Since 2023 I have worked as a consultant across EWM, TM, PP and QM: a full-cycle EWM and QM implementation, Transportation Management on S/4HANA 2023 integrated with EWM, an A-Frame picking machine connected through MFS, a production planning solution for automated pill-packing across several plants, warehouse management on Cloud Public Edition, and the regression work that carried a heavily customized landscape from 1809 to 2023 without stopping the warehouse.',
      'I work remotely and have delivered every project that way since 2023. I travel on site for the moments that genuinely need a person in the building: design workshops, cutover and go-live.',
    ],
    langHeading: 'Languages',
    langBody:
      'English, French, Italian and Spanish, all fluent. Spanish is what let me train warehouse users in Latin America directly, without a translator standing between me and the people who had to use the system.',
    eduHeading: 'Education',
    eduBody:
      'Bachelor of Commerce, major in Supply Chain Management, Concordia University (John Molson School of Business), Montreal. Capstone project: a Python algorithm resolving bottlenecks in an automated conveyor system.',
  },
  fr: {
    metaTitle: 'À propos de Marco Pecoraro — consultant SAP EWM et TM à Montréal',
    metaDesc:
      'Consultant SAP EWM et TM basé à Montréal, en télétravail. Parcours en gestion de la chaîne d’approvisionnement, planification de la demande et systèmes d’entrepôt, avec onze projets S/4HANA depuis 2020.',
    h1: 'Profil',
    body: [
      'J’ai commencé en chaîne d’approvisionnement du côté affaires : planification de la demande pour un détaillant de chaussures, prévisions pour des partenaires dans cinq régions. C’est là que j’ai appris ce que ressent un utilisateur quand le système d’entrepôt est mal configuré, bien avant d’en configurer un.',
      'Le travail SAP a commencé en 2020 sur une implantation de Transportation Management pour un fabricant pharmaceutique : rédaction des spécifications, essais, et formation des transitaires qui devaient soumissionner sur les voies. Ont suivi quatre déploiements d’Extended Warehouse Management pour des centres de distribution internationaux en Colombie, au Salvador et au Guatemala, où j’ai formé les utilisateurs en espagnol.',
      'Depuis 2023, je travaille comme consultant en EWM, TM, PP et QM : une implantation complète EWM et QM, Transportation Management sur S/4HANA 2023 intégré à EWM, une machine de prélèvement A-Frame raccordée par MFS, une solution de planification de production pour l’emballage automatisé de médicaments sur plusieurs usines, la gestion d’entrepôt sur Cloud Public Edition, et la régression qui a mené un environnement fortement personnalisé de 1809 à 2023 sans arrêter l’entrepôt.',
      'Je travaille en télétravail et je livre ainsi tous mes projets depuis 2023. Je me déplace pour les moments qui exigent réellement une présence : ateliers de conception, bascule et mise en service.',
    ],
    langHeading: 'Langues',
    langBody:
      'Anglais, français, italien et espagnol, tous courants. C’est l’espagnol qui m’a permis de former directement les utilisateurs d’entrepôt en Amérique latine, sans interprète entre moi et les gens qui devaient se servir du système.',
    eduHeading: 'Formation',
    eduBody:
      'Baccalauréat en administration des affaires, majeure en gestion de la chaîne d’approvisionnement, Université Concordia (John Molson School of Business), Montréal. Projet de fin d’études : un algorithme en Python résolvant les goulots d’étranglement d’un système de convoyeurs automatisé.',
  },
};

export const contact = {
  en: {
    metaTitle: 'Contact — Marco Pecoraro, SAP EWM and TM Consultant',
    metaDesc:
      'Contact Marco Pecoraro for remote SAP EWM or TM contract work. Based in Montreal, available for remote engagements with on-site travel for workshops, cutover and go-live.',
    h1: 'Contact',
    lede:
      'Tell me which release you are on and where the project is stuck. If it is EWM, TM, PP or QM, I can usually tell you in one call whether I am the right person for it.',
    directHeading: 'Direct',
    formHeading: 'Or send a message',
  },
  fr: {
    metaTitle: 'Contact — Marco Pecoraro, consultant SAP EWM et TM',
    metaDesc:
      'Joignez Marco Pecoraro pour un mandat en télétravail en SAP EWM ou TM. Basé à Montréal, disponible en télétravail avec déplacements pour les ateliers, la bascule et la mise en service.',
    h1: 'Contact',
    lede:
      'Dites-moi votre version et où le projet bloque. S’il s’agit d’EWM, de TM, de PP ou de QM, je peux généralement vous dire en un appel si je suis la bonne personne.',
    directHeading: 'Direct',
    formHeading: 'Ou envoyez un message',
  },
};

/* ------------------------------------------------------------------ */
/* helpers                                                             */
/* ------------------------------------------------------------------ */

export function byId(id: string): Project {
  const p = projects.find((x) => x.id === id);
  if (!p) throw new Error('unknown project id: ' + id);
  return p;
}

export function projectHref(p: Project, lang: Lang): string | null {
  if (!p.page) return null;
  return lang === 'en' ? `/projects/${p.slug}` : `/fr/projets/${p.slugFr}`;
}

/** Maps any EN path to its FR counterpart and vice versa, for hreflang. */
export function altPath(path: string, lang: Lang): string {
  const map: Record<string, string> = {
    '/': '/fr/',
    '/sap-ewm-consultant': '/fr/consultant-sap-ewm',
    '/sap-tm-consultant': '/fr/consultant-sap-tm',
    '/sap-pp-qm-consultant': '/fr/consultant-sap-pp-qm',
    '/warehouse-process-consulting': '/fr/conseil-processus-entrepot',
    '/sap-expertise': '/fr/expertise-sap',
    '/projects': '/fr/projets',
    '/about': '/fr/profil',
    '/contact': '/fr/contact',
  };
  if (lang === 'en') {
    if (map[path]) return map[path];
    const m = path.match(/^\/projects\/(.+)$/);
    if (m) {
      const p = projects.find((x) => x.slug === m[1]);
      if (p) return `/fr/projets/${p.slugFr}`;
    }
    return '/fr/';
  }
  const rev = Object.entries(map).find(([, v]) => v === path);
  if (rev) return rev[0];
  const m = path.match(/^\/fr\/projets\/(.+)$/);
  if (m) {
    const p = projects.find((x) => x.slugFr === m[1]);
    if (p) return `/projects/${p.slug}`;
  }
  return '/';
}

/* ------------------------------------------------------------------ */
/* Photos                                                              */
/* ------------------------------------------------------------------ */

export const photo = {
  portrait: '/img/marco-pecoraro.webp',
  w: 800,
  h: 800,
};

export const gallery = [
  {
    src: '/img/a-frame-automated-picking.webp',
    w: 1400,
    h: 1050,
    alt: {
      en: 'An A-Frame automated picking machine loaded with pharmaceutical packs, feeding a take-away conveyor.',
      fr: 'Une machine de prélèvement automatisé A-Frame chargée de produits pharmaceutiques, alimentant un convoyeur.',
    },
    caption: {
      en: 'A-Frame automated picking, integrated with SAP EWM through the Material Flow System.',
      fr: 'Prélèvement automatisé A-Frame, intégré à SAP EWM par le Material Flow System.',
    },
  },
  {
    src: '/img/warehouse-high-bay-aisle.webp',
    w: 1400,
    h: 1050,
    alt: {
      en: 'A high-bay pallet racking aisle in an international distribution center, aisle marker 415 visible.',
      fr: 'Une allée de racks à palettes en grande hauteur dans un centre de distribution international.',
    },
    caption: {
      en: 'High-bay pallet storage in one of the international distribution centers I helped bring live on SAP EWM.',
      fr: 'Stockage de palettes en grande hauteur dans un des centres de distribution internationaux mis en service sur SAP EWM.',
    },
  },
  {
    src: '/img/warehouse-racking-hall.webp',
    w: 1400,
    h: 1050,
    alt: {
      en: 'Wide view of pallet racking rows across a distribution center floor.',
      fr: 'Vue large des rangées de racks à palettes sur le plancher d’un centre de distribution.',
    },
    caption: {
      en: 'Storage types, sections and bins are abstractions until you stand in the aisle they describe.',
      fr: 'Types de magasin, sections et emplacements restent des abstractions jusqu’à ce qu’on se tienne dans l’allée qu’ils décrivent.',
    },
  },
  {
    src: '/img/warehouse-structure.webp',
    w: 1400,
    h: 755,
    alt: {
      en: 'Roof trusses and the top of pallet racking in a distribution center, seen from the warehouse floor.',
      fr: 'Charpente de toiture et sommet des racks à palettes dans un centre de distribution, vus depuis le plancher.',
    },
    caption: {
      en: 'Every process type and movement rule eventually has to work inside a building like this one.',
      fr: 'Chaque type de processus et chaque règle de mouvement doit finir par fonctionner dans un bâtiment comme celui-ci.',
    },
  },
];

/* ------------------------------------------------------------------ */
/* Expertise page                                                      */
/* ------------------------------------------------------------------ */

export const expertise = {
  en: {
    metaTitle: 'SAP EWM, TM and ABAP Expertise — Warehouse Consulting and KPIs',
    metaDesc:
      'Full technical scope: SAP EWM and TM configuration, ABAP enhancement work in EWM and TM, warehouse process improvement, Lean Six Sigma, and warehouse KPI reporting in Power BI.',
    h1: 'What I actually do, in detail',
    lede:
      'Recruiters usually want the keyword list, and clients usually want to know where the edge of my scope is. This page is both. If something here is close to what you need but not quite it, ask — the answer is often yes.',
    groups: [
      {
        t: 'SAP EWM configuration',
        items: [
          'Warehouse structure: supply chain units, storage types, storage sections, storage bins, bin determination, activity areas, work centers',
          'Warehouse process types and the movement design behind them',
          'Process-oriented and layout-oriented storage control (POSC and LOSC)',
          'Putaway and stock removal strategies, warehouse order creation rules',
          'Handling unit management and transportation units',
          'Batch management and FEFO stock removal for shelf-life-controlled stock',
          'Replenishment strategies, posting changes, ad-hoc movements',
          'Physical inventory, including cycle counting',
          'RF framework transactions and screen design for the floor',
          'PPF-driven printing and output',
          'Advanced Returns Management with EWM integration',
          'Embedded EWM, decentralized EWM, and Warehouse Management in S/4HANA Cloud Public Edition',
        ],
      },
      {
        t: 'Warehouse automation and MFS',
        items: [
          'Material Flow System: communication points, conveyor segments, resources, telegram handling',
          'A-Frame automated picking integrated with EWM',
          'Interfaces between EWM and the PLC and automation layer',
          'Regression of automation interfaces through release upgrades, so the equipment keeps running',
        ],
      },
      {
        t: 'SAP TM configuration',
        items: [
          'SAP Best Practices activation for Transportation Management on S/4HANA 2023',
          'Freight unit building rules, freight order and freight booking types',
          'Planning profiles and the transportation cockpit',
          'Carrier selection, tendering and freight bidding',
          'Charge management, freight agreements, rate tables and freight settlement',
          'Transportation network master data: locations, zones, lanes, means of transport',
          'TM and EWM integration: transportation units, loading and unloading, door and staging assignment',
          'EDI and IDoc monitoring',
        ],
      },
      {
        t: 'ABAP and the technical side',
        items: [
          'I write the functional and technical (RICEFW) specifications, then stay in the build rather than handing it over and waiting',
          'Reading and debugging ABAP in EWM and TM, tracing a problem from a floor symptom to the line of code',
          'BAdIs and enhancement spots in EWM and TM',
          'Custom RF screens and PPF action definitions',
          'Fixing defects in Z-objects during release upgrades, alongside the development team',
          'SQL, Python and DAX for data work outside the system',
        ],
      },
      {
        t: 'SAP PP and QM',
        href: '/sap-pp-qm-consultant',
        items: [
          'Discrete manufacturing: production order types, order-type-dependent parameters, order and settlement profiles',
          'Routings, work centers, capacity and scheduling parameters',
          'MRP configuration, MRP controllers, planned-order scheduling and MRP runs',
          'Production scheduling profiles, confirmations, print control',
          'Custom material types, including non-valuated and non-inventory-managed output',
          'Inbound quality inspection, inspection lots and blocked stock, integrated with EWM putaway',
        ],
      },
      {
        t: 'Warehouse consulting and process improvement',
        href: '/warehouse-process-consulting',
        items: [
          'Assessing existing warehouse processes and recommending workflows that are actually faster, not just different',
          'Lean Six Sigma Black Belt: root cause analysis, waste elimination, process capability',
          'Inbound, outbound, replenishment and inventory flow redesign',
          'Slotting and storage strategy against real pick profiles',
          'Requests for proposal for warehouse equipment, and vendor evaluation',
          'Process flows, blueprints and documentation the client can still use two years later',
        ],
      },
      {
        t: 'Warehouse KPIs and reporting',
        items: [
          'KPI frameworks for distribution centers: throughput, pick accuracy, dock-to-stock, order cycle time, inventory accuracy',
          'Power BI dashboards for international distribution centers, built for continuous improvement rather than decoration',
          'Balanced scorecards, Tableau, Qlik and Alteryx',
          'Low-code data collection applications where the source data does not exist yet',
        ],
      },
      {
        t: 'Project delivery',
        items: [
          'Requirement workshops, GAP analysis and fit-to-standard',
          'Blueprints, functional design, cutover planning',
          'Test plans, system integration testing and user acceptance testing',
          'Go-live support, hypercare, daily queue monitoring and issue resolution',
          'Key-user training and end-user manuals, in English, French or Spanish',
          'Agile and Scrum delivery, JIRA and Azure DevOps, running the daily scrum',
        ],
      },
    ],
    trackHeading: 'Where I have done it',
    track: [
      {
        when: 'Mar 2023 — present',
        what: 'SAP techno-functional consultant, EWM, TM, PP and QM',
        where: 'Pharmacy distribution network and further S/4HANA clients, remote',
      },
      {
        when: 'May 2021 — Mar 2023',
        what: 'Business analyst, logistics and systems, SAP EWM',
        where: 'Dollarama L.P., Montreal',
      },
      {
        when: 'Aug 2020 — Apr 2021',
        what: 'SAP logistics analyst, TM and IM',
        where: 'Kuehne+Nagel International AG, assigned to Sandoz Canada',
      },
      {
        when: 'Nov 2019 — Aug 2020',
        what: 'Demand planner',
        where: 'The ALDO Group, Montreal',
      },
    ],
    galleryHeading: 'The floor these systems run on',
  },
  fr: {
    metaTitle: 'Expertise SAP EWM, TM et ABAP — conseil en entrepôt et indicateurs',
    metaDesc:
      'Portée technique complète : configuration SAP EWM et TM, développements ABAP dans EWM et TM, amélioration des processus d’entrepôt, Lean Six Sigma et indicateurs de performance dans Power BI.',
    h1: 'Ce que je fais, en détail',
    lede:
      'Les recruteurs veulent la liste de mots-clés, les clients veulent savoir où s’arrête ma portée. Cette page répond aux deux. Si quelque chose ici s’approche de votre besoin sans y correspondre tout à fait, demandez : la réponse est souvent oui.',
    groups: [
      {
        t: 'Configuration SAP EWM',
        items: [
          'Structure d’entrepôt : unités de chaîne logistique, types de magasin, sections, emplacements, règles de détermination, zones d’activité, postes de travail',
          'Types de processus d’entrepôt et conception des mouvements',
          'Contrôle de stockage orienté processus et orienté disposition (POSC et LOSC)',
          'Stratégies de rangement et de prélèvement, règles de création des ordres d’entrepôt',
          'Unités de manutention et unités de transport',
          'Gestion des lots et prélèvement FEFO pour les stocks à durée de conservation',
          'Stratégies de réapprovisionnement, changements de statut, mouvements ponctuels',
          'Inventaire physique, y compris le comptage cyclique',
          'Transactions du cadre RF et conception des écrans pour le plancher',
          'Impression et sorties pilotées par PPF',
          'Advanced Returns Management avec intégration EWM',
          'EWM intégré, EWM décentralisé et gestion d’entrepôt dans S/4HANA Cloud Public Edition',
        ],
      },
      {
        t: 'Automatisation d’entrepôt et MFS',
        items: [
          'Material Flow System : points de communication, segments de convoyeur, ressources, télégrammes',
          'Prélèvement automatisé A-Frame intégré à EWM',
          'Interfaces entre EWM et la couche d’automatisation et les automates',
          'Régression des interfaces d’automatisation lors des mises à niveau, pour que l’équipement continue de tourner',
        ],
      },
      {
        t: 'Configuration SAP TM',
        items: [
          'Activation des SAP Best Practices pour Transportation Management sur S/4HANA 2023',
          'Règles de constitution des unités de fret, types d’ordre et de réservation',
          'Profils de planification et cockpit de transport',
          'Sélection des transporteurs, appels d’offres et soumissions',
          'Gestion des tarifs, ententes de fret, tables de tarifs et règlement du fret',
          'Données de base du réseau de transport : sites, zones, voies, moyens de transport',
          'Intégration TM et EWM : unités de transport, chargement et déchargement, affectation des portes et zones de mise à quai',
          'Surveillance des EDI et des IDoc',
        ],
      },
      {
        t: 'ABAP et le côté technique',
        items: [
          'Je rédige les spécifications fonctionnelles et techniques (RICEFW), puis je reste dans le développement au lieu de le confier et d’attendre',
          'Lecture et débogage ABAP dans EWM et TM, du symptôme sur le plancher jusqu’à la ligne de code',
          'BAdI et points d’extension dans EWM et TM',
          'Écrans RF personnalisés et définitions d’actions PPF',
          'Correction des anomalies dans les objets Z lors des mises à niveau, avec l’équipe de développement',
          'SQL, Python et DAX pour le travail de données hors système',
        ],
      },
      {
        t: 'SAP PP et QM',
        href: '/fr/consultant-sap-pp-qm',
        items: [
          'Fabrication discrète : types d’ordre de fabrication, paramètres dépendants du type d’ordre, profils d’ordre et d’imputation',
          'Gammes, postes de travail, capacités et paramètres d’ordonnancement',
          'Configuration du MRP, gestionnaires MRP, ordonnancement des ordres planifiés et exécution du MRP',
          'Profils d’ordonnancement de production, confirmations, contrôle d’impression',
          'Types d’article personnalisés, incluant une production non valorisée et non gérée en stock',
          'Contrôle qualité à réception, lots de contrôle et stock bloqué, intégrés au rangement EWM',
        ],
      },
      {
        t: 'Conseil en entrepôt et amélioration des processus',
        href: '/fr/conseil-processus-entrepot',
        items: [
          'Évaluation des processus d’entrepôt existants et recommandation de flux réellement plus rapides, pas seulement différents',
          'Ceinture noire Lean Six Sigma : analyse des causes racines, élimination du gaspillage, capabilité des processus',
          'Refonte des flux amont, aval, de réapprovisionnement et d’inventaire',
          'Stratégie d’emplacement et de stockage selon les profils de prélèvement réels',
          'Appels d’offres pour l’équipement d’entrepôt et évaluation des fournisseurs',
          'Flux de processus, documents de conception et documentation encore utilisable deux ans plus tard',
        ],
      },
      {
        t: 'Indicateurs de performance et rapports',
        items: [
          'Cadres d’indicateurs pour centres de distribution : débit, exactitude du prélèvement, quai-au-stock, délai de cycle des commandes, exactitude des stocks',
          'Tableaux de bord Power BI pour centres de distribution internationaux, conçus pour l’amélioration continue et non pour la décoration',
          'Tableaux de bord équilibrés, Tableau, Qlik et Alteryx',
          'Applications de collecte de données à faible code lorsque la donnée source n’existe pas encore',
        ],
      },
      {
        t: 'Livraison de projet',
        items: [
          'Ateliers de collecte des besoins, analyse des écarts et fit-to-standard',
          'Documents de conception, conception fonctionnelle, planification de la bascule',
          'Plans d’essais, essais d’intégration et essais d’acceptation',
          'Soutien à la mise en service, stabilisation, surveillance quotidienne de la file et résolution des problèmes',
          'Formation des utilisateurs clés et manuels, en anglais, en français ou en espagnol',
          'Livraison Agile et Scrum, JIRA et Azure DevOps, animation de la mêlée quotidienne',
        ],
      },
    ],
    trackHeading: 'Où je l’ai fait',
    track: [
      {
        when: 'mars 2023 — aujourd’hui',
        what: 'Consultant technico-fonctionnel SAP, EWM, TM, PP et QM',
        where: 'Réseau de distribution pharmaceutique et autres clients S/4HANA, en télétravail',
      },
      {
        when: 'mai 2021 — mars 2023',
        what: 'Analyste d’affaires, logistique et systèmes, SAP EWM',
        where: 'Dollarama S.E.C., Montréal',
      },
      {
        when: 'août 2020 — avr. 2021',
        what: 'Analyste logistique SAP, TM et IM',
        where: 'Kuehne+Nagel International AG, affecté chez Sandoz Canada',
      },
      {
        when: 'nov. 2019 — août 2020',
        what: 'Planificateur de la demande',
        where: 'Groupe ALDO, Montréal',
      },
    ],
    galleryHeading: 'Le plancher sur lequel tournent ces systèmes',
  },
};
