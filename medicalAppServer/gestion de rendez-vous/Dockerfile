# Utiliser une image officielle de PHP
FROM php:8.2-apache

# Installation des extensions PHP nécessaires
RUN docker-php-ext-install pdo pdo_mysql

# Copie des fichiers de votre projet Symfony dans le conteneur
COPY . /var/www/html

# Configuration du serveur web Apache
RUN a2enmod rewrite

# Définition du répertoire de travail
WORKDIR /var/www/html

# Exposition du port 80 pour le trafic entrant
EXPOSE 80
