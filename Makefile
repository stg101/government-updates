.PHONY: help
SHELL := /bin/bash

up:
	docker-compose up

reset-db: clear-db migrate-db

clear-db:
	docker-compose run --rm api python manage.py flush

migrate-db:
	docker-compose run --rm api python manage.py makemigrations locations
	docker-compose run --rm api python manage.py makemigrations comments
	docker-compose run --rm api python manage.py migrate

ps:
	docker-compose ps