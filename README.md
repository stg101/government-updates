# Government updates

## Installation

1. Clone this repository: `git clone git@github.com:stg101/government-updates.git`.
2. `cd` into `government-updates`: `cd government-updates`.
3. Create a new virtualenv called "env": `virtualenv env`.
4. Activate the local virtualenv: `. env/bin/activate`.

### Api - Django, Postgres

1. `cd` into `api`: `cd api`.
2. Install dependencies: `pip install -r requirements.txt`.
3. Create a postgres database if you don't have one already, you can follow this tutorial: https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04
4. Create .env file and fill it usign .env_example as guidance. `touch .env`
5. Start api server: `python manage.py runserver`.

### Client - React , Redux

1. `cd` into `client`: `cd ../client`.
2. Install dependencies: `yarn install`.
3. Start client: `yarn start`.
