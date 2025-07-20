import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, 
    },
    resources: {
      en: {
        translation: {
          title: "Tennis Player Dashboard",
          playerStats: "Player Statistics",
          rankingHistory: "Ranking History",
          wins: "Wins",
          losses: "Losses",
          rank: "Rank",
          year: "Year",
          selectPlayer: "Select a Player",
          comparePlayer: "Compare with",
          none: "None",
          showTable: "Show Table",
          hideTable: "Hide Table",
          clearComparison: "Clear Comparison",
          playerA: "Player A",
          playerB: "Player B",
          playerC: "Player C",
        },
      },
      fr: {
        translation: {
          title: "Tableau de Bord des Joueurs de Tennis",
          playerStats: "Statistiques des Joueurs",
          rankingHistory: "Historique du Classement",
          wins: "Victoires",
          losses: "Défaites",
          rank: "Classement",
          year: "Année",
          selectPlayer: "Sélectionnez un joueur",
          comparePlayer: "Comparer avec",
          none: "Aucun",
          showTable: "Afficher le tableau",
          hideTable: "Masquer le tableau",
          clearComparison: "Effacer la comparaison",
          playerA: "Joueur A",
          playerB: "Joueur B",
          playerC: "Joueur C",
        },
      },
    },
  });

export default i18n;