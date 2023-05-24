FROM postgres:15

ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=root
ENV POSTGRES_DB=account_creation

COPY ./init-scripts /docker-entrypoint-initdb.d/
