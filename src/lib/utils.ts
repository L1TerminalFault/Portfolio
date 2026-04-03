import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// images
import cineverseImage from "@/../public/cineverse.png";

// icons
import nextjsIcon from "@/../public/nextjs-icon.svg";
import tailwindIcon from "@/../public/tailwind.png";
import clerkIcon from "@/../public/clerk.png";
import mongodbIcon from "@/../public/mongodb.ico";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const projects = [
  {
    name: "Cineverse",
    description:
      "Platform to get details, watch trailers, stream live and download torrents of movies and TV shows",
    link: "https://cineverse-entertainment.vercel.app",
    status: 0,
    image: cineverseImage,
    techStack: [0, 1, 2, 4],
    category: 0,
  },
  {
    name: "NxServer",
    description:
      "Platform to get details, watch trailers, stream live and download torrents of movies and TV shows",
    link: "https://cineverse-entertainment.vercel.app",
    status: 3,
    image: cineverseImage,
    techStack: [0, 1, 2, 4],
    category: 0,
  },
  {
    name: "CleanArt",
    description:
      "Platform to get details, watch trailers, stream live and download torrents of movies and TV shows",
    link: "https://cineverse-entertainment.vercel.app",
    status: 1,
    image: cineverseImage,
    techStack: [0, 1, 2, 4],
    category: 0,
  },
  {
    name: "NxClient",
    description:
      "Platform to get details, watch trailers, stream live and download torrents of movies and TV shows",
    link: null,
    status: 2,
    image: cineverseImage,
    techStack: [2],
    category: 2,
  },
  {
    name: "Archive",
    description:
      "Platform to get details, watch trailers, stream live and download torrents of movies and TV shows",
    link: null,
    status: 2,
    image: cineverseImage,
    techStack: [0, 1, 2, 4],
    category: 1,
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
];

export const projectCategories = [
  { index: 0, text: "Web" },
  { index: 1, text: "Desktop App" },
  { index: 2, text: "Mobile App" },
  { index: 3, text: "Advanced" },
  { index: 4, text: "Linux" },
];
