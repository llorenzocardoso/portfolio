import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";	
import project2Secondary from "../assets/projects/project-2-secondary.png";
import project1Secondary from "../assets/projects/project-1-secondary.jpg";

export const PROJECTS = [
  {
    id: 1,
    title: "FlixFlix",
    project_url: "https://github.com/llorenzocardoso/projects/tree/main/movie-app/flutter/app_filmes",
    image: project1,
    secondaryImage: project1Secondary, 
    description:
      "A movie app in Flutter with secure login, a trending movies catalog, a featured carousel, and a dark theme, using Firebase and the TMDb API. Currently, I am refactoring it to Kotlin to add new functionalities.",
    technologies: ["Flutter", "Kotlin", "Firebase", "Figma", "TMDb API"],
  },
  {
    id: 2,
    title: "Weather App",
    project_url: "https://github.com/llorenzocardoso/projects/tree/main/weather_app_flutter/weather_app",
    image: project2,
    secondaryImage: project2Secondary, 
    description:
      "A weather app in Flutter with real-time data from the OpenWeatherMap API. The app allows users to search for the weather in multiple cities, displays data such as temperature and humidity, and features intuitive animations and an adjustable night mode. It also includes geolocation to dynamically show the local weather.",
    technologies: ["Flutter", "Dart", "Geolocator", "Lottie", "OpenWeatherMap API"],
  },
];

export const PROJETOS = [
  {
    id: 1,
    title: "FlixFlix",
    project_url: "https://github.com/llorenzocardoso/projects/tree/main/movie-app/flutter/app_filmes",
    image: project1,
    secondaryImage: project1Secondary, 
    description:
      "A movie app in Flutter with secure login, a trending movies catalog, a featured carousel, and a dark theme, using Firebase and the TMDb API. Currently, I am refactoring it to Kotlin to add new functionalities.",
    technologies: ["Flutter", "Kotlin", "Firebase", "Figma", "TMDb API"],
  },
  {
    id: 2,
    title: "Weather App",
    project_url: "https://github.com/llorenzocardoso/projects/tree/main/weather_app_flutter/weather_app",
    image: project2,
    secondaryImage: project2Secondary, 
    description:
      "A weather app in Flutter with real-time data from the OpenWeatherMap API. The app allows users to search for the weather in multiple cities, displays data such as temperature and humidity, and features intuitive animations and an adjustable night mode. It also includes geolocation to dynamically show the local weather.",
    technologies: ["Flutter", "Dart", "Geolocator", "Lottie", "OpenWeatherMap API"],
  },
];
