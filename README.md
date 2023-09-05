#Art Avenue Web Application

Welcome to **Art Avenue**, a sleek web application built with Node.js, Express.js, Mongoose, MongoDB, Bootstrap 5, and EJS. Whether you are a developer looking to contribute or someone who's keen on understanding the internals, this README provides an overview of the application's dependencies and their purposes.

##About Art Avenue

###Overview:

Art Avenue is a platform designed for artists and art enthusiasts. At its core, the application serves as a bridge between artists eager to showcase their creations and the audience keen on admiring, rating, and reviewing the showcased art.

###Key Features

- **Art Posting**: Artists can seamlessly upload and share their art pieces, be it digital paintings, sculptures, or any form of visual art.

- **Rating & Review**: Every piece of art can be rated and reviewed by registered users. This feature not only helps artists gain feedback but also helps users discover top-rated arts in the community.

- **Coming Soon** - Art Marketplace: We're excited to announce that we'll soon be launching a marketplace feature. Artists will be able to put up their art for sale, allowing users to purchase original artworks directly through the platform.

##Why Art Avenue?

With the surge in digital art and the importance of online communities, Art Avenue aims to provide a space where the passion for art can be fostered, feedback can be given, and art can be celebrated in its various forms. Our upcoming features are aimed to further enhance the community experience and make art more accessible to enthusiasts globally.

Join us in this artistic journey, whether you're an artist looking to gain recognition or an art lover seeking to discover and support emerging talents.

##Authorization, Authentication, and Design Patterns

###Security First

###At Art Avenue, security is our top priority. We have implemented a robust authorization and authentication system to ensure that user data is safe, secure, and only accessible by those with the appropriate permissions.

###CRUD Operations

Our application provides comprehensive CRUD (Create, Read, Update, Delete) capabilities, allowing users to have full control over their data, be it art posts, reviews, or profiles.

###RESTful Design

Art Avenue follows the principles of REST (Representational State Transfer). This ensures that our API is intuitive, follows standard conventions, and is easy to integrate with, should you decide to build upon or adapt our platform.

###MVC Architecture

The backbone of Art Avenue's code structure is the MVC (Model-View-Controller) architecture. This separation of concerns ensures that our application is modular, maintainable, and scalable:

- **Model**: Represents the data structures and database schema.
- **View**: Responsible for what the end-user interacts with (UI).
- **Controller**: Manages the flow of data between the Model and the View.

By adhering to the MVC paradigm and other best practices, Art Avenue strives to provide a seamless experience for both developers and end-users alike.

##Dependencies:

1. **connect-flash ^0.1.1**

Connect-flash is a middleware for Express.js to facilitate the use of flash messages - temporary messages to the user that are removed after being displayed. It's very useful for conveying one-time messages like error alerts or success confirmations.

2. **ejs ^3.1.9**

EJS (Embedded JavaScript templates) is a simple templating engine that allows you to generate HTML markup with plain JavaScript. This helps to produce dynamic web pages.

3. **ejs-mate ^4.0.0**

Ejs-mate is a layout, partial and block template engine for EJS. It enhances the EJS experience by adding features like reusable layouts and blocks.

4. **express ^4.18.2**

Express.js is a fast, unopinionated, and minimalist web framework for Node.js. It facilitates the rapid development of Node based web applications.

5. **express-session ^1.17.3**

This is a middleware for Express.js to manage sessions. Sessions are essential for maintaining user state between page requests.

6. **joi ^17.9.2**

Joi is an object schema validation module. It ensures that data, such as user input, adheres to a particular format or set of rules, improving the safety and reliability of the application.

7. **method-override ^3.0.0**

Method-override lets you use HTTP verbs (like PUT or DELETE) in places where clients don't support it. This is particularly useful with HTML forms.

8. **mongoose ^7.4.3**

Mongoose provides elegant MongoDB object modeling for Node.js. It gives a straight-forward, schema-based solution to model application data, complete with built-in type casting, validation, query building, and more.

9. **passport ^0.6.0**

Passport is authentication middleware for Node.js. It's extensible and can be plugged into any Express-based web application to provide authentication mechanisms.

10. **passport-local ^1.0.0**

Passport strategy for authenticating with a username and password. This module lets you authenticate endpoints using a username and password.

11. **passport-local-mongoose ^8.0.0**

This is a Mongoose plugin that simplifies building username and password login with Passport. It automatically sets up a Mongoose model with passport-specific methods and functionality.

DevDependencies

1. **nodemon ^3.0.1**

Nodemon is a utility that monitors any changes in your source and automatically restarts the server. It’s an essential tool during the development process to ensure code changes reflect instantly.

##Getting Started

Now that you have an idea about each dependency, follow the installation steps or delve deeper into the docs to explore the functionalities.

Installation Steps

If you've forked the Art Avenue repository from GitHub and want to get it up and running on your own machine, follow these steps:

1. **Clone the Repository**

Start by cloning the forked repository to your local machine. Navigate to your desired directory via your terminal or command prompt and run:

git clone https://github.com/M-Elsayed9/CTP-Hackathon.git

2. **Navigate to the Project Directory**

Change your current directory to the Art-Avenue folder:

cd M-Elsayed9/CTP-Hackathon

3. **Install Node Dependencies**

Make sure you have Node.js and npm installed on your machine. Once that's confirmed, install the project dependencies by running:

**npm install**

This command fetches all the dependencies mentioned in the package.json file and installs them locally.

4. **Setup MongoDB**

Ensure you have MongoDB set up on your machine. If not, you can follow the official documentation to get it installed.

Once MongoDB is running, make sure your application is connected by setting up the necessary environment variables or direct configurations in your application code. Database name: ArtAvenue-DB
https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/

5. **Run the Application**

Now that everything is set up, you can run the application using:


**npm start**

This will start the server with nodemon, which will auto-restart upon changes to any files.

7. **Open in Browser**

By default, the application runs on http://localhost:3000. Open this link in your browser to interact with the app.

**IMPORTANT NOTE:** 

we have not implemented an image upload feature, so when prompted to include an image with your post, please use a URL link to an image instead of uploading an image from your device.

or just use these links from the Unsplash API:
>https://source.unsplash.com/collection/10479427/420x340
>https://source.unsplash.com/collection/9265047/420x340
>https://source.unsplash.com/collection/97443817/420x340
>https://source.unsplash.com/collection/65179341/420x340
>https://source.unsplash.com/collection/9542436/420x340

using these links will change the picture whenever you refresh the page.
**ANOTHER IMPORTANT NOTE**

when you open the application in your browser, there will not be any user/art data. so create a couple of users(no duplicates), add some artwork, and try out our platform! we appreciate your feedback.
