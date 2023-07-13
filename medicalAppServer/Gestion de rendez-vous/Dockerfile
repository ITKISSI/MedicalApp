
FROM php:8.2.4-apache

# Installez les extensions PHP nécessaires pour Symfony
RUN docker-php-ext-install pdo_mysql

# Définissez le répertoire de travail de l'image
WORKDIR /var/www/html

# Copiez tous les fichiers de votre projet dans l'image
COPY . .

# Exposez le port 80 pour Apache
EXPOSE 80


# Définissez le point d'entrée pour l'image
CMD ["apache2-foreground"]