# Week-5-FAKM Project 
## Description
A website where the user to search through posts for things that they need or allows a user to post about surplus items they have.

If you have any spare things to give, just FAKM.com!

![FAKM](https://i.imgur.com/SKn4Omq.png)

## Install 
To install the project: 
1. Clone the project
2. Run `npm install` to setup package dependencies
3. Create local production database called whatever you like
4. Create a test database called mytestdatabase_week_5 with the same owner/user
5. Create a .env file in the project root
   PGDATABASE=local_production_database
   PGUSER=your_db_user
   PGPASSWORD=your_db_password
6. Run `npm run wipedb` to init or reset your production db
7. Run `npm test` to run tests
8. Run `npm start` to start

## Schemas
```javascript=
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  postcode VARCHAR(8)
);
```
```javascript=
CREATE TABLE category (
  id SERIAL PRIMARY KEY,
  category VARCHAR(20)
);
```
```javascript=
  id SERIAL PRIMARY KEY,  
  title VARCHAR(255) NOT NULL,
  time TIMESTAMPTZ,
  category INTEGER,
  post TEXT NOT NULL,  
  user_id INTEGER
```

## User Stories
1. As a scared person in this pandemic I stocked up way too many stuff. I'd like a place where I can post about these surplus goods so people who are in need collect them.
2. As a person who didn't stock up in this pandemic and only finds empty shelves in the shops, I'd like a place to see what other people are giving away so I can find essentials.
3. As a person that can't find toilet paper in the shops, I'd like to limit my search so I can find what I need. 

## Methodology & Planning
### Wireframe
![](https://i.imgur.com/EryZ5t1.png)

## Schema 
Users

| id | name | postcode |
|-|-|-|
| INT     | TXT     | TXT     |

Posts
| id | user_id | title | post | timestamp| category |
|-|-|-|-|-|-|
| INT | INT | "Spare loo roll" | "10 rolls total, 2 per caller, Call Barry on 0725466765" |2pm 20/Sep/2020 |2 |

Categories
|id|category|
|-|-|
|1| "Food" |
|2| "Toiletries" |
|3| "Household" |
|4| "Other" |

## Stack

### Testing methodology
:duck: 

## Issue Tags

## DAY 1
- Design sprint: wireframing, user flow diagram
- Set up the boilerplate 
- Mobbed on the schemas
- Issues added to Project Board

## DAY 2
### Morning 
- Review issues to baseline objectives for day
- Quick discussion on best way to approach learning on subject that is on everyones learning objectives
- Split onto: 
	- Ina & Joe: schema completion, request handling and serving static assets ()
	- Gio & Roger: Finishing the static files and starting to query the db
### Afternoon
- PostgreSQL fun :1234: :exploding_head: 

## Personal Learning Objectives
### Gio 
- Better understanding of Postgres in Node architecture
- Database testing
- 
### Ina
- Get more comfortable with Postgres 
- Testing, testing, testing
- Database queries

### Joe
- Able to deploy a database project on Heroku and understand using EVs
- Understand how to safely query a database to get data and display it to DOM
- We can use joins to access related data in different tables

### Roger
- Understand deployment to heroku
- Understand how to test, and TDD, database queries


## OBJECTS

### Getposts object
  The object our listings page sends to /getposts
  whenever search or one of the checkboxes/buttons
  are clicked, or enter is pressed
  
    {
        search: string
        food: bool
        toiletries: bool
        household: bool
        other: bool
    }


### Listing object
  The object /getposts returns to the listings page
  
    {
        listing_id: number (the id from the listings table)
        name: string
        title: string
        date: datestamp
        postcode: string
        body: string
    }

## PAGES

/

    Title : Text
    Mission statement : Image with overlaid text
    Offer something : Link to /form
    View offers : Link to /listings
    
/list

    Header
    Search bar and button
    Filter by: Food, Toiletries, Household, Other
        Checkboxes styled as toggle buttons.
        All greyed by default but acting as if all on
        Clicking each ungreys and activates filtering
    The list of things on offer
        Item X
            Date/Time
            Username
            Title
            Postcode
            Post
            Delete button
        
/form

    Header
    Explanation
    Title
    Category
        Food
        Toiletries
        Household
        Other
    Username
    Postcode
    Post

## Files & Folders

/public
/public/home.html
/public/form.html
/public/listings.html
/public/listings.js
/public/styles.css
.gitignore
.env (each need to add our own)

## ROUTES / HANDLERS

GET / public
POST /processform
POST /getposts
DELETE /delete

## Queries

insert 
getlistings
Inesert form data

## Co-authoring
Co-authored-by: Joepock123 <joe.m.jackson@live.co.uk>
Co-authored-by: glrta <to.gio@pm.me>
Co-authored-by: itsina96 <itsina96@gmail.com>
Co-authored-by: Roger-Heathcote <github@technicalbloke.com>

## Repo hygeine

.gitignore
