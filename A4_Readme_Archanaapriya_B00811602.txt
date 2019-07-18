{\rtf1\ansi\ansicpg1252\cocoartf1671\cocoasubrtf500
{\fonttbl\f0\fnil\fcharset0 Baskerville-Bold;\f1\froman\fcharset0 TimesNewRomanPSMT;\f2\froman\fcharset0 TimesNewRomanPS-BoldMT;
\f3\fnil\fcharset0 Baskerville;\f4\fmodern\fcharset0 Courier;\f5\fswiss\fcharset0 ArialMT;
\f6\froman\fcharset0 TimesNewRomanPS-ItalicMT;}
{\colortbl;\red255\green255\blue255;\red60\green93\blue132;\red45\green67\blue93;\red0\green0\blue0;
\red0\green0\blue0;\red52\green52\blue52;\red255\green255\blue255;\red0\green0\blue233;\red38\green38\blue38;
}
{\*\expandedcolortbl;;\cssrgb\c29801\c44401\c59000;\cssrgb\c22880\c33440\c44000;\cssrgb\c0\c1\c1;
\cssrgb\c0\c0\c0;\cssrgb\c26494\c26499\c26494;\cssrgb\c100000\c100000\c100000;\cssrgb\c0\c0\c93333;\cssrgb\c20000\c20000\c20000;
}
\margl1440\margr1440\vieww25400\viewh16000\viewkind0
\deftab720
\pard\tx560\tx1120\tx1680\tx2240\tx2800\tx3360\tx3920\tx4480\tx5040\tx5600\tx6160\tx6720\pardeftab720\sl360\slmult1\partightenfactor0

\f0\b\fs80 \cf2 \expnd0\expndtw0\kerning0
ASSIGNMENT-4\
\pard\tx560\tx1120\tx1680\tx2240\tx2800\tx3360\tx3920\tx4480\tx5040\tx5600\tx6160\tx6720\pardeftab720\sl360\slmult1\partightenfactor0

\fs36 \cf3 IMPLEMENTATION OF BACK-END FUNCTIONALITY\
HAUL-SHARE\
Team- RUNTIME TERROR\cf2  \
\cf3 ADVANCED WEB SERVICES-CSCI570\
\pard\tx560\tx1120\tx1680\tx2240\tx2800\tx3360\tx3920\tx4480\tx5040\tx5600\tx6160\tx6720\pardeftab720\sl360\slmult1\partightenfactor0

\f1\b0\fs24 \cf4   \
\pard\tx560\tx1120\tx1680\tx2240\tx2800\tx3360\tx3920\tx4480\tx5040\tx5600\tx6160\tx6720\pardeftab720\sl360\slmult1\partightenfactor0

\f2\b \cf4 Submitted by:
\f1\b0 \
\pard\pardeftab720\sl360\slmult1\qj\partightenfactor0
\cf5 Name : \cf4 Archanaapriya Nallasivan\
\cf5 Banner number : \cf4 B00811602                                                                                                                                                                                                         
\f0\b\fs36 \cf3                                                                                                                        
\f3\b0\fs24 \cf6 \
\pard\tx560\tx1120\tx1680\tx2240\tx2800\tx3360\tx3920\tx4480\tx5040\tx5600\tx6160\tx6720\pardeftab720\sl360\slmult1\partightenfactor0
\cf4                                                                                                                                                                                                                          
\f1       
\f3 \
\pard\tx560\tx1120\tx1680\tx2240\tx2800\tx3360\tx3920\tx4480\tx5040\tx5600\tx6160\tx6720\pardeftab720\sl360\slmult1\partightenfactor0

\f2\b \cf4 A.4.1. GIT REPOSITORY LINK\
INSTALLATION AND SETUP\
\pard\tx560\tx1120\tx1680\tx2240\tx2800\tx3360\tx3920\tx4480\tx5040\tx5600\tx6160\tx6720\pardeftab720\sl360\slmult1\qj\partightenfactor0

\f1\b0 \cf4 I have pushed my code in the branch \'91Login-Reg-Backend-B00811602
\fs22 \'92 . \
Repository link - 
\fs24 \cf5 https://git.cs.dal.ca/holla/haul-share-project [1] .\
Branch worked on : \cb7 \ul  \ulnone https://git.cs.dal.ca/holla/haul-share-project/tree/Login-Reg-Backend-B00811602 [1] .\cb1 \

\f2\b PROJECT SETUP ON LOCAL MACHINE FROM GITLAB
\f1\b0 \
\pard\pardeftab720\sl360\slmult1\partightenfactor0
\cf5 1. Clone project from gitlab.cs.dal.ca\
2. Go to the directory 'Haul-Share-Project_Group5' on the terminal/console.\
3. Run 'npm install' on the terminal  to download necessary libraries to run the application.(Install node[2] and npm[7] before this step)\
4. After the installation, run 'npm start' on the terminal. The server files need not be explicitly run as they are concurrently run with front end. \
5. A browser will open locally and run the application on 'localhost:3000' (The port might change depending on the applications running on the user's browser)\
6. \'91server.js\'92 could be run using node server.js command.\
\pard\tx560\tx1120\tx1680\tx2240\tx2800\tx3360\tx3920\tx4480\tx5040\tx5600\tx6160\tx6720\pardeftab720\sl360\slmult1\qj\partightenfactor0

\f2\b \cf4 PROJECT LINK ON HEROKU \
https://haul-share-official.herokuapp.com/ 
\f1\b0  [8] .\

\f2\b LOGIN DETAILS\

\f1\b0 You can also register with the system and then login using that credentials, or use the login credentials which is already registered and the user details are stored in database.
\f4 \cf5 \
\pard\pardeftab720\sl360\slmult1\partightenfactor0

\f1 \cf5 Username: haul@share.com\
Password: hauls
\f4 \
\pard\tx560\tx1120\tx1680\tx2240\tx2800\tx3360\tx3920\tx4480\tx5040\tx5600\tx6160\tx6720\pardeftab720\sl360\slmult1\qj\partightenfactor0

\f1 \cf4 \

\f2\b A.4.2. FEATURE AND ITS DESCRIPTION\

\f1\b0 As a part of assignment 4, front end and back end of  User Management feature has been completed. \

\f2\b TASKS INCLUDED\

\f1\b0 1. Login page
\f2\b \

\f1\b0 2. Registration page
\f2\b \

\f1\b0 Login page is the landing screen of Haul-Share application. The user should be registered in order to access any of its features. In other words, first time users should be registered with the application before logging in.\

\f2\b TECHNOLOGIES USED \
Front-end- 
\f1\b0 ReactJS, Bootstrap, Material-UI.\

\f2\b Back- end-services- 
\f1\b0 Node.js, Express, nodemon, bcrypt (to hash passwords), Cors.\

\f2\b Database - 
\f1\b0 MongoDB, Mongoose is used to connect back end services to database.\

\f2\b MongoDB Atlas
\f1\b0  is used as it is a cloud based services .\
\pard\pardeftab720\sl360\slmult1\partightenfactor0
\cf5 The application is developed using the MERN stack\cf4 \
\pard\tx560\tx1120\tx1680\tx2240\tx2800\tx3360\tx3920\tx4480\tx5040\tx5600\tx6160\tx6720\pardeftab720\sl360\slmult1\qj\partightenfactor0

\f2\b \cf4 COMPATABILITY
\f1\b0 \
The application is responsive and compatible with different browsers.\
The application is W3C compliant.\
Login and signup is made with all validations and  it is also compatible in different browsers\

\f2\b \
A.4.3. BOILERPLATE USED\
\pard\pardeftab720\sl360\slmult1\partightenfactor0
\cf4 joi :\cf9  
\f1\b0 Object schema description language and validator for JavaScript objects [5].\cf4 \
\pard\pardeftab720\sl360\slmult1\partightenfactor0

\f2\b \cf5 \cb7 joi-objectid:
\f5\b0\fs26  
\f1\fs24 \cf9 \cb1 MongoDB objectId validator [6].\
Note : These are used for validations.\
\
\pard\pardeftab720\sl360\slmult1\qj\partightenfactor0

\f2\b \cf4 A.4.4. IMAGES AND LOGOS - AUTHOR ATTRIBUTION \
\pard\pardeftab720\sl360\slmult1\qj\partightenfactor0

\f1\b0 \cf4 Given author attribution in code comments. \
In Signup and Login, icons  were used from the project proposal submission. ( designed by meghna)\
\pard\pardeftab720\sl360\slmult1\qj\partightenfactor0

\f2\b \cf4 \
A.4.5. CODE MODIFICATIONS\
\pard\pardeftab720\sl360\slmult1\partightenfactor0

\f1\b0 \cf9 I have used the below piece of code for validations using boilerplates. [9]\
\pard\pardeftab720\sl360\slmult1\partightenfactor0
\cf5     uname: Joi.string().min(2).max(25).required(),\
    email_reg: Joi.string().min(2).max(100).required().email(),\
    new_pass: Joi.string().min(5).max(100).required(),\
    confirm_pass: Joi.string().min(5).max(100).required() \
\
I have used the below code from stack overflow to resolve the issue, [11].\
    app.use(function(req, res, next) \{\
    res.setHeader('Access-Control-Allow-Origin', '*');\
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');\
    res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-type,Accept');\
    next();\
\pard\pardeftab720\sl360\slmult1\partightenfactor0

\f2\b \cf4 \
\pard\pardeftab720\sl360\slmult1\qj\partightenfactor0
\cf4 A.4.6. FOLDER STRUCTURE\
\pard\pardeftab720\sl360\slmult1\qj\partightenfactor0

\f1\b0 \cf4 1. All the front end files are in the \'91src/components\'92 folder.\
2. All images are in \'91public/images\'92 folder.\
3. All the backend files are present in \'91src/server\'92 folder.\
4. Routes is present in utils.js.\
\pard\pardeftab720\sl360\slmult1\qj\partightenfactor0

\f2\b \cf4 \
A.4.7.FRONT END VALIDATIONS\
\pard\tx560\tx1120\tx1680\tx2240\tx2800\tx3360\tx3920\tx4480\tx5040\tx5600\tx6160\tx6720\pardeftab720\sl360\slmult1\qj\partightenfactor0
\cf4 FILES WORKED AND VALIDATIONS\

\f1\b0 1. I have written a \'91register\'92 POST method to create add the user to the database when he/she registers in our application. If the user is already registered, he/she is taken to the login page. Proper validations are done in the registration page.\
2. I have written a \'91login\'92 POST method to allow the user to login to our application. The credentials are validated and then they are allowed to enter the home page.\
3. Password stored in database is encrypted.\
    MongoDB Atlas credentials: \
    User - ar803514@dal.ca , Password - B00811602\
4. The files I worked on \'91server.js\'92 (Backend) and \'91Login.js\'92 (Frontend) . Few validation changes are made in the existing front end code. Proper error recovery messages added on both front-end and back-end.\
\pard\pardeftab720\sl360\slmult1\qj\partightenfactor0
\cf4 \
\pard\pardeftab720\sl360\slmult1\qj\partightenfactor0

\f2\b \cf4 A.4.8. REFERENCES\
\pard\pardeftab720\sl360\slmult1\partightenfactor0

\f1\b0 \cf4 \
[1] \cf5 \cb7 "Sign in",\'a0GitLab, 2019. [Online]. Available: https://git.cs.dal.ca/users/sign_in. [Accessed: 17- Jul- 
\f5 2019].
\f1 \cf4 \cb1 \
[2]  \cf5 \cb7 N. Foundation, "Node.js",\'a0Node.js, 2019. [Online]. Available: https://nodejs.org/en/. [Accessed: 17- Jul- 2019].\cf4 \cb1 \
\pard\pardeftab720\sl360\slmult1\partightenfactor0
\cf5 \cb7 [3]"Starting with Authentication (A tutorial with Node.js and MongoDB)",\'a0
\f6\i Medium
\f1\i0 , 2019. [Online]. Available: https://medium.com/createdd-notes/starting-with-authentication-a-tutorial-with-node-js-and-mongodb-25d524ca0359. [Accessed: 14- Jul- 2019].\
[4]"Using CORS - HTML5 Rocks",\'a0
\f6\i HTML5 Rocks - A resource for open web HTML5 developers
\f1\i0 , 2019. [Online]. Available: https://www.html5rocks.com/en/tutorials/cors/. [Accessed: 14- Jul- 2019].\cf4 \cb1 \
\cf5 \cb7 [5] "joi",\'a0
\f6\i npm
\f1\i0 , 2019. [Online]. Available: https://www.npmjs.com/package/joi. [Accessed: 12- Jul- 2019].\
[6] "joi-objectid",\'a0
\f6\i npm
\f1\i0 , 2019. [Online]. Available: https://www.npmjs.com/package/joi-objectid. [Accessed: 12- Jul- 2019].\
\pard\tx5494\pardeftab720\sl360\slmult1\partightenfactor0
\cf5 [7] "npm | build amazing things",\'a0
\f6\i Npmjs.com
\f1\i0 , 2019. [Online]. Available: https://www.npmjs.com/. [Accessed: 17- Jul- 2019].\
\pard\pardeftab720\sl360\slmult1\partightenfactor0
\cf5 [8] \cf9 \cb1 Heroku\cb7 . [Online]. Available: https://dashboard.heroku.com/apps. [Accessed: 17-Jul-2019].\cf5 \
[9]\'94Composing React Components \'96 Vegibit\'94,\'a0
\f6\i Vegibit.com
\f1\i0 , 2019. [Online]. Available: https://vegibit.com/composing-react-components/. [Accessed: 14- Jul- 2019].\
[10] "Node.js MongoDB User Registration \'96 Vegibit",\'a0
\f6\i Vegibit.com
\f1\i0 , 2019. [Online]. Available: https://vegibit.com/node-js-mongodb-user-registration/. [Accessed: 14- Jul- 2019].\
[11]  
\fs26 D. node.js and M. Panah, "Difference between res.setHeader and res.header in node.js",\'a0Stack Overflow, 2019. [Online]. Available: https://stackoverflow.com/questions/40840852/difference-between-res-setheader-and-res-header-in-node-js. [Accessed: 18- Jul- 2019].\
\pard\pardeftab720\sl360\slmult1\partightenfactor0

\fs24 \cf6 \cb1 [12] \'93React \'96 A JavaScript Library for Building User Interfaces.\'94 \'96 A JavaScript Library for Building User Interfaces, reactjs.org/.\
[13] \'93React Bootstrap.\'94 React, react-bootstrap.github.io/\
[14] \'93The World's Most Popular React UI Framework - Material-UI.\'94 Material, material-ui.com/\
\
\pard\pardeftab720\sl360\slmult1\partightenfactor0

\f2\b \cf5 \cb7 IMAGE REFERENCES\
\pard\pardeftab720\sl360\slmult1\partightenfactor0

\f1\b0 \cf6 \cb1 [1]\'93Free Logo Maker - Create Your Own Logo in Minutes!\'94 Free Logo Maker - Create Your Own Logo in Minutes!, logomakr.com/.\
[2] \'93User Icons.\'94 Free Download, PNG and SVG, https://icons8.com/icons/set/user\
[3] "Key Icons.\'94 Free Download, PNG and SVG, http://icons8.com/icons/set/key\
[4] "Email Icons.\'94 Free Download, PNG and SVG, http://icons8.com/icons/set/email\
[5] "Phone Icons.\'94 Free Download, PNG and SVG, http://icons8.com/icons/set/phone\
[6] "Lock Icons.\'94 Free Download, PNG and SVG, http://icons8.com/icons/set/lock\
\
}