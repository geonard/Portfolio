@echo off
echo ==============================
echo Création du projet React
echo ==============================

:: Demande du nom du projet
set /p projectName=Entrez le nom du projet : 

:: Création du dossier du projet
mkdir %projectName%
cd %projectName%

:: Initialisation du projet React
echo Initialisation de React...
npx create-react-app .

:: Création des répertoires pour les composants et pages
echo Création de la structure...
mkdir src\components
mkdir src\pages
mkdir src\styles

:: Création de fichiers de base
echo Création de fichiers...
echo // Composant Header > src\components\Header.js
echo // Composant Footer > src\components\Footer.js
echo // Page Home > src\pages\Home.js
echo // Page About > src\pages\About.js
echo // Fichier de style global > src\styles\global.css

:: Modification de App.js pour utiliser la nouvelle structure
(
echo import React from "react";
echo import Header from "./components/Header";
echo import Footer from "./components/Footer";
echo import Home from "./pages/Home";
echo import "./styles/global.css";
echo.
echo function App() {
echo ^    return (
echo ^        <div className="App">
echo ^            <Header />
echo ^            <Home />
echo ^            <Footer />
echo ^        </div>
echo ^    );
echo }
echo export default App;
) > src\App.js

:: Installation de Bootstrap
echo Installation de Bootstrap...
npm install bootstrap

echo ==============================
echo Projet prêt !
echo Pour démarrer : 
echo cd %projectName% && npm start
pause
