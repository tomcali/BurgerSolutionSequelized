# Week 15 Homework: BurgerSolutionSequelized
We are asked to sequelize the 'Burger' homework, so I began with the
 BurgerSolution posted to the Homeworks directory.

The solution builds on an Express and MySQL framework. No additional
  functions are being developed. We just try to make everything work
  with the sequelize object-relational mapper.

"Sequelizing" means removing all direct references to vanilla MySQL,
  replacing MySQL queries with Sequelize queries. By doing this,
  we set the stage for possible conversion to another RDMS in the future.

This is primarily a back-end server project.

## Viewing the App
The GitHub repository shows the work on the assignment.
https://github.com/tomcali/BurgerSolutionSequelized.git

## Requirements
The requirements for this assignment may be found in the file homework_instructions.md, which is enclosed in the repository under documentation/homework-14-Express-Handlebars.


## Technologies and Coding Process
* We start with GitHub, setting up the BurgerSolutionSequelized
 repository for the application, including the initial README.md file
 and .gitignore directory

* Clone the repository and set up the files required for this assignment,
including .gitignore

* npm init to set up package.json with the ability to add packages/modules
with 'npm init -y'

* Within package.json, we set up the start file with nodemon server.js
so that we can execute easily with 'npm start' and not have to refresh
 the browser window after changes in the program.


* Working within the BurgerSolutionSequelized directory...
Started the MySQL database server with the command 'mysql.server start'
Set up the MySQL database server using CLI commands via 'mysql -u root -p'
 Key files here were schema.sql and seeds.sql, which were executed
 from the CLI with the source command. These were used to create a
 database myburgers_db with a table burgers with fourteen of my favorite foods.
 Columns are the food name and calorie count in the portions usually eaten.
  The additional field devoured (a BOOL or tinyint) was included with the default value of FALSE ('0') to maintain consistency
  with the BurgerSolution work we are building on.
 You will see pretty much the full range of my daily diet, which as nothing to do with burgers.
We also utilize Sequel Pro in reviewing the database.

* We are using a Model-View-Controller design, following the setup established in the BurgerSolution.
* Added numerous node packages with
'npm install --save [package-name]'  Key packages here were express mysql and sequelize. Directories models and controllers were set up to accommodate this MVC structure.

* We are now doing development within the WebStorm IDE.