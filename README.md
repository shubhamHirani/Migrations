
# Migration with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. change entities which will affect database schema.
4. Run `ts-node ./node_modules/.bin/typeorm migration:generate -n <fileName>` to generate migration files.
5. Run `ts-node ./node_modules/.bin/typeorm migration:create -n <fileName>` to create empty migration file.
6. Run `ts-node ./node_modules/typeorm/cli.js migration:run` to run that migration files.
7. Run `npm start` to insert/update/delete/read data inside the database.<br />

# Documentation
[Documentation](https://docs.google.com/document/d/1uRlRIA4zkEX1p0eKeqBVcKR3OYQTb1GIojgweLvwqSs/edit#heading=h.vr232sj8v4lr)
