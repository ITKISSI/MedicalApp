FROM postgres:13

ENV POSTGRES_USER=user
ENV POSTGRES_PASSWORD=password
ENV POSTGRES_DB=account_creation

COPY ./init-scripts /docker-entrypoint-initdb.d/
