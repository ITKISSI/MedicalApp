FROM php:8.2-apache

WORKDIR /var/www/html

RUN docker-php-ext-install mysqli && \
    docker-php-ext-enable mysqli

# Installez phpMyAdmin
RUN apt-get update && apt-get install -y phpmyadmin

COPY . /var/www/html

EXPOSE 80
