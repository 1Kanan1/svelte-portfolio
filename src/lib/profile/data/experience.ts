import { writable, type Writable } from "svelte/store";
import type { Experience } from "../types/experience";

export const experience: Writable<Experience[]> = writable([
  {
    id: "andersenlab",
    companyName: "Andersen Lab",
    companyLogo: "",
    positions: [
      {
        id: 1,
        title: "Middle Frontend Developer",
        type: "Full-Time",
        period: {
          start: "08.2025",
          end: "Present",
        },
        responsibilities: [
          "Develop AI Chat and AI Assistant features.",
          "Develop Whiteboards with real-time collaboration.",
          "Build and maintain the Zalo Mini App for Simplamo with seamless integration.",
          "Develop interactive chart and analytics widgets for the Dashboard to enhance data visualization.",
          "Develop and maintain core features to enhance functionality and user experience.",
          "Ensure UI/UX consistency and adherence to standards.",
          "Implement robust frontend solutions for web and mobile platforms.",
          "Analyze technical capabilities and provide optimal solutions.",
        ],
        skills: [
          "typescript",
          "react",
          "react native",
          "redux",
          "git",
          "tailwindcss",
        ],
        isExpanded: false,
      },
      {
        id: 2,
        title: "Middle Frontend Developer",
        type: "Full-Time",
        period: {
          start: "08.2025",
          end: "Present",
        },
        responsibilities: [
          "Develop AI Chat and AI Assistant features.",
          "Develop Whiteboards with real-time collaboration.",
          "Build and maintain the Zalo Mini App for Simplamo with seamless integration.",
          "Develop interactive chart and analytics widgets for the Dashboard to enhance data visualization.",
          "Develop and maintain core features to enhance functionality and user experience.",
          "Ensure UI/UX consistency and adherence to standards.",
          "Implement robust frontend solutions for web and mobile platforms.",
          "Analyze technical capabilities and provide optimal solutions.",
        ],
        skills: [
          "typescript",
          "react",
          "react native",
          "redux",
          "git",
          "tailwindcss",
        ],
        isExpanded: false,
      },
    ],
  },
  {
    id: "andersenlab",
    companyName: "Andersen Lab",
    companyLogo: "",
    positions: [
      {
        id: 1,
        title: "Middle Frontend Developer",
        type: "Full-Time",
        period: {
          start: "08.2025",
          end: "Present",
        },
        responsibilities: [
          "Develop AI Chat and AI Assistant features.",
          "Develop Whiteboards with real-time collaboration.",
          "Build and maintain the Zalo Mini App for Simplamo with seamless integration.",
          "Develop interactive chart and analytics widgets for the Dashboard to enhance data visualization.",
          "Develop and maintain core features to enhance functionality and user experience.",
          "Ensure UI/UX consistency and adherence to standards.",
          "Implement robust frontend solutions for web and mobile platforms.",
          "Analyze technical capabilities and provide optimal solutions.",
        ],
        skills: [
          "typescript",
          "react",
          "react native",
          "redux",
          "git",
          "tailwindcss",
        ],
        isExpanded: false,
      },
    ],
  },
]);
