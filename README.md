# Week 15 Homework: BurgerSolutionSequelized
We are asked to sequelize the 'Burger' homework, so I began with the
 BurgerSolution posted to the Homeworks directory. I modified the database to include my favorite foods, which have nothing to do with burgers.

The solution builds on an Express and MySQL framework. No additional
  functions are being developed. We just try to make everything work
  with the sequelize object-relational mapper.

"Sequelizing" means removing all direct references to vanilla MySQL,
  replacing MySQL queries with Sequelize queries. By doing this,
  we set the stage for possible conversion to another RDMS in the future.

This is primarily a back-end server project.

My how was to turn this into an app I could actually use... a cumulative calorie counter for each day.

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

* We tried to maintain earier direct mysql work as quick reference files, giving them file names with
the characters '-mysql-direct' added.

* We are now doing development within the WebStorm IDE.

## Testing
We set up the database with 14 initial food items:
mysql.server start
mysql -u root -p
source schema.sql
source seeds.sql
source select.sql

Database changed
+----+-----------------------------------------------------------------------------------------------+----------+----------+
| id | burger_name                                                                                   | devoured | calories |
+----+-----------------------------------------------------------------------------------------------+----------+----------+
|  1 | Oatmean (1/2 Cup)                                                                             |        0 | 150      |
|  2 | Nature Valley Oats n Honey Granola Bars (2 bars)                                              |        0 | 190      |
|  3 | Bimbo Multi Grain Cereal Bar with Chia (1 package)                                            |        0 | 170      |
|  4 | Organics Tomato Basil Soup (1 cup)                                                            |        0 | 90       |
|  5 | Organics Southwestern Black Bean Soup (1 cup)                                                 |        0 | 120      |
|  6 | Springfield California Sun-Dried Seedless Raisins (1 28-gram box)                             |        0 | 90       |
|  7 | Diet Milk Shake (1/2 cup Skim Milk, 2 scoops protien powder, 2 scoops powdered peanut butter) |        0 | 270      |
|  8 | 1/3 Footlong Roast Veggie Delite Subway Sandwich                                              |        0 | 150      |
|  9 | 1/3 Footlong Oven Roasted Chicken Subway Sandwich                                             |        0 | 210      |
| 10 | 1/3 Footlong Classic Tuna Subway Sandwich                                                     |        0 | 150      |
| 11 | 1/3 Footlong Carved Turkey Subway Sandwich                                                    |        0 | 170      |
| 12 | Frozen Yogurt (1 cup)                                                                         |        0 | 130      |
| 13 | Orange Juice (1 cup)                                                                          |        0 | 110      |
| 14 | Mighty Mago Juice (1 bottle)                                                                  |        0 | 290      |
+----+-----------------------------------------------------------------------------------------------+----------+----------+
14 rows in set (0.00 sec)

We exit from the command line interface. Return to the main directory and execute the applicaiton via npm start

We run the application and check that we can add a treat item with default calories of 500. This works as well.

Selecting times to eat moves them to the right as desired, eliminating them from the left-hand-side list.

The coversion to sequelize begins in the config/connection.js file with

```

var Sequelize = require('sequelize');
var connection = new Sequelize('myburgers_db', 'root', '');

var Burger = connection.define(
    'burger', {
      id: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        primaryKey: true
      },
      burger_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      devoured: {
        type: Sequelize.BOOLEAN,
        defaultValue: 'FALSE'
      },
      calories: {
        type: Sequelize.INTEGER,
        defaultValue: 500
      }
    }
);

connection.sync().then (function() {
    Burger.findAll().then (function (burger) {
        console.log(burger.dataValues);
    });
});
```

Did not get very far with the sequelize conversion, as we received errors at this point.
