import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// images
import cineverseImage from "@/../public/cineverse.png";
import cleanartImage from "@/../public/cleanart.png";
import movieappImage from "@/../public/movieapp.png";
import chattyImage from "@/../public/chatty.png";
import archiveImage from "@/../public/archive.png";
import ecommercezImage from "@/../public/ecommercez.png";
import nxserverImage from "@/../public/nxserver.png";
// TODO: fix image
import nxclientImage from "@/../public/nxserver.png";
import betterclawImage from "@/../public/nxserver.png";

// icons
import nextjsIcon from "@/../public/nextjs-icon.svg";
import tailwindIcon from "@/../public/tailwind.png";
import clerkIcon from "@/../public/clerk.png";
import mongodbIcon from "@/../public/mongodb.ico";
import kotlinIcon from "@/../public/kotlin.png";
import openrouterIcon from "@/../public/openrouter.png";
import nodejsIcon from "@/../public/nodejs.svg";
import expressIcon from "@/../public/express.webp";
import reactIcon from "@/../public/react.png";
import javaIcon from "@/../public/java.webp";
import cIcon from "@/../public/c.png";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const projects = [
  {
    name: "Cineverse",
    description:
      "A platform to get details, watch trailers, stream live and download torrents of movies and TV shows",
    link: "https://cineverse-entertainment.vercel.app",
    status: 0,
    image: cineverseImage,
    techStack: [0, 1, 2, 4],
    category: 0,
  },
  {
    name: "NxServer",
    description:
      "A platform to pipe your phone notifications to your selected clients so you can facilitate your business workflow which will eliminate potential fraud due to obsolete payment verification methods",
    link: "https://cineverse-entertainment.vercel.app",
    status: 0,
    image: nxserverImage,
    techStack: [0, 1, 2, 4],
    category: 0,
  },
  {
    name: "Chatty",
    description:
      "Chat and image sharing platform",
    link: "https://ca001.onrender.com",
    status: 1,
    image: chattyImage,
    techStack: [7, 8, 9, 4],
    category: 0,
  },
  {
    name: "CleanArt",
    description:
      "An ecommerce platform to shop art products by a unified artist",
    link: "https://cineverse-entertainment.vercel.app",
    status: 0,
    image: cleanartImage,
    techStack: [0, 1, 2, 4],
    category: 0,
  },
  {
    name: "NxClient",
    description:
      "The Mobile app you would use along with the NxServer, this is the app that listens to your notifications and pipe them to the backend of NxServer so that you selected clients view your payment completed notifications directly on their browsers to verify the payment",
    link: null,
    status: 0,
    image: nxclientImage,
    techStack: [2, 5],
    category: 2,
  },
  {
    name: "Archive",
    description:
      "A simple archive manager to view, compress and extract archive files with multiple format support",
    link: null,
    status: 1,
    image: archiveImage,
    techStack: [10],
    category: 1,
  },
  {
    name: "BetterClaw",
    description:
      "A better, cleaner and simpler interface to use AI with multiple free models",
    link: "https://better-claw-one.vercel.app",
    status: 2,
    image: null,
    techStack: [0, 1, 2, 6],
    category: 0,
  },
  {
    name: "Keylogger",
    description:
      "A simple linux kernel module for keylogging, no process trace",
    link: "",
    status: 1,
    image: null,
    techStack: [11],
    category: 4,
  },
];

export const projectStatuses = [
  { index: 0, text: "Done, maintained" },
  { index: 1, text: "Done, no maintenance" },
  { index: 2, text: "Still in development" },
  { index: 3, text: "Upcoming" },
];

export const techStacks = [
  {
    index: 0,
    name: "NextJs",
    icon: nextjsIcon,
  },
  {
    index: 1,
    name: "TailwindCSS",
    icon: tailwindIcon,
  },
  {
    index: 2,
    name: "Clerk",
    icon: clerkIcon,
  },
  {
    index: 3,
    name: "TMDB API",
    icon: null,
  },
  {
    index: 4,
    name: "MongoDB",
    icon: mongodbIcon,
  },
  {
    index: 5,
    name: "Kotlin",
    icon: kotlinIcon,
  },
  {
    index: 6,
    name: "OpenRouter",
    icon: openrouterIcon,
  },
  {
    index: 7,
    name: "ReactJs",
    icon: reactIcon,
  },
  {
    index: 8,
    name: "ExpressJs",
    icon: expressIcon,
  },
  {
    index: 9,
    name: "NodeJs",
    icon: nodejsIcon,
  },
  {
    index: 10,
    name: "Java",
    icon: javaIcon,
  },
  {
    index: 11,
    name: "C",
    icon: cIcon,
  },
];

export const projectCategories = [
  { index: 0, text: "Web" },
  { index: 1, text: "Desktop App" },
  { index: 2, text: "Mobile App" },
  { index: 3, text: "Advanced" },
  { index: 4, text: "Linux" },
];
