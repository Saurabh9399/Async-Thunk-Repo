// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // English translations go here
        home: "Home",
        users: "Users",
        logout: "Logout",
        user_manag: "User Management",
        add_user_data: "Add User Data",
        name: "Name",
        gender: "Gender",
        age: "Age",
        select_gender: "Select Gender",
        male: "Male",
        female: "Female",
        others: "Others",
        enter_your_age: "Enter your age",
        enter_your_name: "Enter your name",
        submit: "Submit",
        search_by_name: "Search by name",
        name_req: "Name is required",
        gender_req: "Gender is required",
        age_req: "Age is required",
        age_positive: "Age must be a positive number",
        filter_by_gender: "Filter by Gender",
        login: 'Login',
        username: 'Username',
        password: 'Password',
        loginButton: 'Login',
        notUser: 'If not a user, please',
        signupLink: 'Signup here?',
        signup: 'Signup',
        signupButton: 'Signup',
        ifUser: 'If user, please',
        loginLink: 'Login here?',
      },
    },
    fr: {
      translation: {
        home: "Maison",
        users: "Utilisateurs",
        logout: "Se déconnecter",
        user_manag: "Gestion des utilisateurs",
        add_user_data: "Ajouter des données utilisateur",
        name: "Nom",
        gender: "Genre",
        age: "Âge",
        select_gender: "Sélectionnez le sexe",
        male: "mâle",
        female: "femelle",
        others: "autres",
        enter_your_age: "Entrez votre âge",
        enter_your_name: "Entrez votre nom",
        submit: "Soumettre",
        search_by_name: "Rechercher par nom",
        name_req: "Le nom est requis",
        gender_req: "Le sexe est requis",
        age_req: "L'âge est requis",
        age_positive: "L'âge doit être un nombre positif",
        filter_by_gender: "Filtrer par sexe",
        login: 'Connexion',
        username: 'Nom d\'utilisateur',
        password: 'Mot de passe',
        loginButton: 'Connexion',
        notUser: 'Si vous n\'êtes pas utilisateur, veuillez',
        signupLink: 'vous inscrire ici?',
        signup: 'Inscription',
        signupButton: 'S\'inscrire',
        ifUser: 'Si vous êtes utilisateur, veuillez',
        loginLink: 'vous connecter ici?',
      },
    },
    // Add translations for other languages as needed
  },
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language if the translation is missing
  interpolation: {
    escapeValue: false, // React already protects from XSS
  },
});

export default i18n;
