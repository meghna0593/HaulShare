#########################################################################################
# Assignment 4                                                                          #
# Name          : Meghna Ramachandra Holla                                              #
# Banner number : B00812604 			                                                #
# Course Code   : CSCI5709												                #
#########################################################################################

######Installation and Setup######

I. Project link to GitLab
https://git.cs.dal.ca/holla/haul-share-project [1]

II. Project Setup on the local system from GitLab
1. Clone project from gitlab.cs.dal.ca
2. Go to the directory 'Haul-Share-Project_Group5' on the terminal/console
3. Run 'npm install' on the terminal  (Install node[3] and npm[4] before this step)
4. After the installation, run 'npm start' on the terminal. The server files need not be explicitly run as they are concurrently[5] run with front end. 
5. A browser will open locally and run the application on 'localhost:3000' (The port might change depending on the applications running on the user's browser)

III. Project link on Heroku:
https://haul-share-official.herokuapp.com/ [2]

IV. Link to pages for the application running on Heroku
Create Ad Page - https://haul-share-official.herokuapp.com/post-ad 

######Login Details######
Either register with the system and then login using those credentials, or use the login details given below.
Username: haul@share.com
Passwored: hauls

######Technologies Used######
The framework used for front-end development is ReactJS[10]. Therefore, NodeJS[3] with Express[6] is used for developing the backend services.
The database used is MongoDB[7]. MongoClient[8] is used to make connection with the database.
MongoDB Atlas[9] is used as it is a cloud database service and can be easily accessed by all Haul-Share developers. 

######Features and Files worked on######
1. The feature I worked on is 'Posting Advertisement'. 
2. I have written a 'postAnAd' POST method to create new documents on MongoDB. 
3. I have written a 'getUname' GET/id method to get a particular user based on ID passed.
4. The files I worked on are 'server_m.js'(backend) and 'create-ad.js' (frontend) 
5. The implementation of the feature is inline with the initial design specification[11].

######Project Folder Structure######
The Project folders have been structured to suit their needs. Modular style is followed to structure the files.
All the front-end related files are in 'src/components' folder. 
Every ReactJS component that represents a different page has been put in a separate folder inside 'components' folder. This folder consists of its respective css and js file.
All the images are included in a common folder i.e., 'public/images'
All the back-end related files are in 'src/server' folder.
The folder 'util' has Routes file.

######Additional Changes on User Interface######
1. The 'post-ad' page has been improvised further.
2. Proper recovery messages added for front-end and back-end errors.
3. Autocomplete on Location Search is added.
4. Validations on Date based on current date is added.
5. Validation on Location has changed based on another feature(maps).

######Compatiblility######
The application is compatible with different browsers like Microsoft Edge, Google Chrome, FireFox.
The application is responsive. It can be viewed on phones(screen width upto 480px), tablets (screen width from 480px-1024px) and large screens(screen width greater than 1024px)
The application is w3C Compliant

######References######
[1] “GitLab.” GitLab, git.cs.dal.ca/
[2] “Heroku.” Cloud Application Platform, www.heroku.com/
[3] Foundation, Node.js. “Download.” Node.js, nodejs.org/en/download/.
[4] “NPM.” Npm, www.npmjs.com/get-npm.
[5] “Concurrently.” Npm, www.npmjs.com/package/concurrently.
[6] “Expresss Node.js Web Application Framework.” Express, expressjs.com/.
[7] “The Most Popular Database for Modern Apps.” MongoDB, www.mongodb.com/.
[8] “Mongodb Client.” Npm, www.npmjs.com/package/mongodb.
[9] “Managed MongoDB Hosting on AWS, Azure, and GCP.” MongoDB, www.mongodb.com/cloud/atlas.
[10] “React – A JavaScript Library for Building User Interfaces.” – A JavaScript Library for Building User Interfaces, reactjs.org/.
[11] “Haul-Share Assignment 1, Assignment 2 and Assignment 3”, work done by “Meghna Ramachandra Holla – B00812604”, CSCI 5709, Summer 2019
[12] “React Bootstrap.” React, react-bootstrap.github.io/
[13] “The World's Most Popular React UI Framework - Material-UI.” Material, material-ui.com/
[14] “React-Star-Rating-Component.” Npm, www.npmjs.com/package/react-star-rating-component. 
[15] “Download Free Icons, Music, Stock Photos, Vectors.” Download Free Icons, Music, Stock Photos, Vectors, icons8.com/.
[16] “Free Logo Maker - Create Your Own Logo in Minutes!” Free Logo Maker - Create Your Own Logo in Minutes!, logomakr.com/.
[17] “User Icons.” Free Download, PNG and SVG, https://icons8.com/icons/set/user
[18] “Human Icons.” Free Download, PNG and SVG, http://icons8.com/icons/set/human
[19] "Full Screen Icons.” Free Download, PNG and SVG, http://icons8.com/icons/set/full-screen
[20] "Slider React Component - Material-UI.” Material, material-ui.com/components/slider/ 
[21] "Trip Icons.” Free Download, PNG and SVG, http://icons8.com/icons/set/trip
[22] "Search Icons.” Free Download, PNG and SVG, http://icons8.com/icons/set/search
[23] “Tabs React Component - Material-UI.” Material, material-ui.com/components/tabs/.
[24] “Regular Expressions.” MDN Web Docs, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions.
[25] Goyvaerts, Jan. “Alternation with The Vertical Bar or Pipe Symbol.” Regex Tutorial - Alternation with The Vertical Bar, www.regular-expressions.info/alternation.html.
[26] "Key Icons.” Free Download, PNG and SVG, http://icons8.com/icons/set/key
[27] "Email Icons.” Free Download, PNG and SVG, http://icons8.com/icons/set/email
[28] "Phone Icons.” Free Download, PNG and SVG, http://icons8.com/icons/set/phone
[29] "Lock Icons.” Free Download, PNG and SVG, http://icons8.com/icons/set/lock
[30] “FileReader.readAsDataURL().” MDN Web Docs, developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL.
[31] “Custom Radio Buttons.” Tryit Editor v3.6, www.w3schools.com/howto/tryit.asp?filename=tryhow_css_custom_radio
[32] “React-Star-Rating-Component.” Npm, www.npmjs.com/package/react-star-rating-component. 
[33] "Pencil Icons.” Free Download, PNG and SVG, https://icons8.com/icons/set/pencil
[34] “React-Router-Dom.” Npm, www.npmjs.com/package/react-router-dom.
[35] “History.” Npm, www.npmjs.com/package/history.
[36] “Visual Studio Code - Code Editing. Redefined.” RSS, Microsoft, 14 Apr. 2016, code.visualstudio.com/.


