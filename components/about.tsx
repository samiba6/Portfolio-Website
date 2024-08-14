"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>À propos de moi</SectionHeading>
      <p className="mb-3">
        Après avoir obtenu un master en{" "}
        <span className="font-medium text-lg">
          cybersécurité et science des données
        </span>
        , ma passion pour la programmation m'a poussé à suivre un bootcamp en
        développement web. J'y ai développé mes compétences avec{" "}
        <span className="font-medium">Javascript, Next.js et Django</span>.{" "}
        <span className="italic">
          {" "}
          c'est l'aspect résolution de problèmes.{" "}
        </span>{" "}
        <span className="underline">J'adore</span> la sensation de trouver enfin
        une solution à un problème. Je m'intéresse également à{" "}
        <span className="font-medium">
          l'intelligence artificielle. et le Graphic design
        </span>
      </p>

      <p>
        <span className="italic">Quand je ne code pas,</span> je fais de la
        natation, je peins, ou je participe à des compétitions de Capture the
        Flag pour affiner mes compétences en cybersécuritéy{" "}
        <span className="font-medium">Mon objectif est de devenir </span>
        <span className="font-medium text-lg">Pentester </span>et de maîtriser
        tous les systèmes que je croise !
      </p>
    </motion.section>
  );
}
