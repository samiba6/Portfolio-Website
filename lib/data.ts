import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi2";

import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Accueil",
    hash: "#home",
  },
  {
    name: "À propos",
    hash: "#about",
  },
  {
    name: "Projets",
    hash: "#projects",
  },
  {
    name: "Compétences",
    hash: "#skills",
  },
  {
    name: "Expérience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Stage assistant Risk et Cyber",
    location: "BNP Paribas Rosa Parks, FR",
    organisation: "BNP Paribas",
    description:
      "Participation à la mise en œuvre des programmes de cybersécurité pour répondre aux exigences du DORA (Digital Operational Resilience Act). Réponse aux objectifs de contrôle de la maturité de la cybersécurité. Fourniture de preuves sur la plateforme ServiceNow pour assurer la conformité et la résilience opérationnelle.",
    tasks: [
      "Mise en œuvre des programmes de cybersécurité en conformité avec DORA.",
      "Évaluation de la maturité de la cybersécurité.",
      "Gestion de la conformité et de la résilience via ServiceNow.",
    ],
    icon: React.createElement(FaReact),
    date: "2024/04 - Present",
  },
  {
    title: "Consultant CRM Salesforce",
    location: "Softinnovation, Paris, FR",
    organisation: "Softinnovation",
    description:
      "Intégrer les solutions IAM avec les systèmes Salesforce existants. Développer et configurer des solutions Salesforce pour la gestion des identités et des accès.",
    tasks: [
      "Intégration des solutions IAM avec Salesforce.",
      "Développement de solutions pour la gestion des identités et des accès.",
      "Configuration des systèmes Salesforce pour répondre aux besoins des clients.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "2022/11 - 2023/05",
  },
  {
    title: "Stage fin d'étude",
    location: "Strasbourg, FR",
    organisation:
      "CESI: écoles des ingénieurs - LINEACT laboratoire scientifique",
    description:
      "Travail en étroite collaboration avec une doctorante pour le développement de solutions innovantes dans le cadre de projets de recherche scientifique. Conception et développement d'un programme en Python pour optimiser le déploiement de capteurs sans fil dans des maquettes IFC, en évitant les obstacles et assurant une couverture réseau efficace grâce à des modèles numériques.",
    tasks: [
      "Développement d'un programme en Python pour exploiter des maquettes IFC.",
      "Optimisation du déploiement de capteurs sans fil en évitant les obstacles.",
      "Utilisation de modèles numériques pour améliorer la couverture réseau.",
    ],
    icon: React.createElement(HiAcademicCap),
    date: "2022/02 - 2022/09",
  },
] as const;
export const projectsData = [
  {
    title: "Évaluation de la Sécurité des Systèmes d'Information",
    description:
      "Réalisation d'audits de sécurité complets pour évaluer la résilience des systèmes d'information de l'organisation et formuler des recommandations pour l'amélioration.",
    tags: ["Audit de sécurité", "Résilience", "Recommandations"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Network Packet Sniffing",
    description:
      "Développement d'un script Python pour surveiller en permanence le trafic réseau, en décodant les informations encapsulées dans les paquets de données.",
    tags: ["Python", "Surveillance Réseau", "Décodage de Paquets"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Sécurisation du Protocole SMTP",
    description:
      "Utilisation de technologies et de protocoles de sécurité tels que TLS (Transport Layer Security) pour chiffrer les transmissions de données.",
    tags: ["TLS", "Sécurité des Données", "Cryptographie"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Installation, Configuration et Déploiement de Nextcloud",
    description:
      "Réalisation de l'installation, de la configuration et du déploiement de Nextcloud pour un environnement de travail collaboratif sécurisé.",
    tags: ["Nextcloud", "Déploiement", "Sécurité"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "OWASP Juice Shop Pentest",
    description:
      "Apprentissage des techniques d'attaque en effectuant des tests de sécurité sur OWASP Juice Shop, un site web vulnérable conçu à des fins pédagogiques pour sensibiliser à la sécurité des applications web.",
    tags: ["OWASP", "Pentest", "Sécurité Web"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  // Core Web Development Skills
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "RESTful APIs",

  // Backend and Databases
  "Python",
  "Django",
  "PostgreSQL",
  "MongoDB",
  "NoSQL",
  "SQL/PLSQL",
  "Firebase",
  "Talend",
  "Framer Motion",

  // DevOps and System Administration
  "Linux",
  "Windows Server",
  "Active Directory",
  "Docker",
  "GitHub",

  // Security and Networking
  "Kali Linux",
  "Burp Suite",
  "OWASP",
  "Metasploit",
  "Nmap",
  "Wireshark",
  "Cisco Packet Tracer",
  "IDS/IPS",
  "Firewall",
  "The OSI Model",
  "Remote Code Execution",
  "Dirbuster",
  "Nikto",
  "Hashcat",
  "John the Ripper",
  "OSINT",

  // Programming Languages and Frameworks
  "Flutter",
  "Java",
  "PHP",
  "C",
  "R",
  "Laravel",

  "UML",

  // Machine Learning and Data Science
  "Scikit-learn",
  "Machine Learning",

  // Other Skills
  "Latex",
  "Adobe Illustrator",
] as const;
