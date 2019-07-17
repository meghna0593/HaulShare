							Haul Share Website
						     Group 5 - Runtime Terror
						   B00824760- Kushal Reshamdalal	 		


============================================================================================================================================
1. Haul Share Introduction
============================================================================================================================================

Haul Share provides the platform to aid the people who want to transfer their goods across the Atlantic region. This application will provide-
cheap options to the customers for transferring. Along with the customers, the people who want to earn money by filling up the space of their vehicles while they are traveling will also use this website. Moreover, our website includes rating and review feature which will
guide these customers and transporters while choosing each other.

*For checking the code feature go through the following files.

1) Go to Vehicle-Info --> vehicleinfo.js(frontend)
2) Go to Home --> home.js --> adDetails,openVehicleDesc(frontend)
3) Go to server --> server_k.js(backend)

============================================================================================================================================
2. Installation guide
============================================================================================================================================

1) Git URL - https://git.cs.dal.ca/holla/haul-share-project/tree/KushalB00824760
2) Download project from above URL.
3) Heroku URL - https://haul-share-official.herokuapp.com/

============================================================================================================================================
3. Steps to run 
============================================================================================================================================

1. Option-1 (Git - local running)(Specific to my feature)

1) Clone the master branch using https://git.cs.dal.ca/holla/haul-share-project/tree/KushalB00824760
2) Open the project in Visual Code
3) Start two terminals using "+" sign from terminals. Write following commands.
4) In first terminal write "npm start" for strating frontend. 
     --> npm start
5) In second terminal write following commands for changing directory and starting backend service
     --> cd src
     --> cd server
5) Now run following command
     --> nodemon server_k

6) After running following command the backend and front end will start.

2. Option-2 (Heroku) (Perfectly running with other's features)

1) Open https://haul-share-official.herokuapp.com/ into web browser.

For checking the feature do the follwing flows mentioned in (4).

============================================================================================================================================
4. Feature explanation
============================================================================================================================================

"The vehicle information" feature will give the details about vehicles which the transporter swill be using in the posts added by transporters.
The posts added by customers will be having details about the vehicle specification such as required space and other details.    

The users can get posts by following interactions.

In the first step, users will have to log in to our website. In the second step, they will be redirected to the homepage of Haul Share. On the homepage,
they will be able to find different posts posted by customers and transporters. On each post, there will be a link "Click here for Vehicle Details" 
in the bottom to see the vehicle description provided by other users whether they are transporters or customers.

*Flow:*

	Home page -> Posts -> Click here for Vehicle Details

Moreover, the users will be searching the posts through location keyword from search bar. After getting the posts and again they will be able
to see vehicle description through this link.

*Flow:*

	Home page -> Search bar(Keyword input) -> Posts -> Click here for Vehicle Details(one can check after implementation of search bar feature) (Not available right now)  

============================================================================================================================================
5. Technologies used
============================================================================================================================================

*JavaScript Files
1) React-bootstrap.js 1.0.0-beta.10
	<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin />

2)React-bootstrap.min.js
	<script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin />

*Stylesheet
1)<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/>

3) Props for star rating component[3]

<StarRatingComponent
    name={String} /* name of the radio input, it is required */
    value={Number} /* number of selected icon (`0` - none, `1` - first) */
    starCount={Number} /* number of icons in rating, default `5` */
    onStarClick={Function(nextValue, prevValue, name)} /* on icon click handler */
    onStarHover={Function(nextValue, prevValue, name)} /* on icon hover handler */
    onStarHoverOut={Function(nextValue, prevValue, name)} /* on icon hover out handler */
    renderStarIcon={Function(nextValue, prevValue, name)} /* it should return string or react component */
    renderStarIconHalf={Function(nextValue, prevValue, name)} /* it should return string or react component */
    starColor={String} /* color of selected icons, default `#ffb400` */
    emptyStarColor={String} /* color of non-selected icons, default `#333` */
    editing={Boolean} /* is component available for editing, default `true` */
/>

4) HTML5 and CSS3

5) MERN (MongoDB, express, React, NodeJs) framework
   We are using MERN stack for our website development. React renders and returns the HTML code. The components are developed using HTML, CSS, react-bootstrap, and JavaScript.
   It uses React router to load different components according to user requests. NodeJs and express are used to set up the backend for Haul Share.
   Express.js is used for developing NodeJs applications. Express is used to respond to HTTP requests. MongoDB is used for storing the data in JSON format.
   MongoDB is used because it is schemaless. Both structured and unstructured data can be stored easily.    


6 W3C compliant
  We have used React for front-end development which is totally w3c compliant.

============================================================================================================================================
7. Code Modification
============================================================================================================================================

In this feature I am just using GET request. So, I have not taken code from any website for refernce. And because of there is not code in my part which is modified.

============================================================================================================================================
7. Important Note
============================================================================================================================================

I have implemented my feature in my group website. But my feature is dependent upon my groupmate Anuj Sharma’s feature. My feature is to fetch data when the user clicks the “Click here for vehicle details” from the “Trip” card. My feature is bounded in the card which was developed by my other groupmate. For making my feature dynamic he needed some changes in the design of the card and also in his features. So, in my own branch it is not developed static only but from Heroku link on can check its dynamic implementation.

--> For specific my feature
use haul-share-project/KushalB00824760  link

--> It is also working in Heroku link dynamically
use https://haul-share-official.herokuapp.com/

My second feature is left, which will be implemented for the final project after this submission. 

============================================================================================================================================
8. References
============================================================================================================================================

[1]"Learn the MERN stack by building an exercise tracker — MERN Tutorial", Medium, 2019. [Online]. 
    Available: https://medium.com/@beaucarnes/learn-the-mern-stack-by-building-an-exercise-tracker-mern-tutorial-59c13c1237a1. [Accessed: 17- Jul- 2019].
[2]"Create Dynamic Table from json in react js - Tarak - Medium", Medium, 2019. [Online]. 
    Available: https://medium.com/@subalerts/create-dynamic-table-from-json-in-react-js-1a4a7b1146ef. [Accessed: 17- Jul- 2019]. 
[3]"react-star-rating-component", npm, 2019. [Online]. 
    Available: https://www.npmjs.com/package/react-star-rating-component. [Accessed: 17- Jul- 2019].
[4]K. Reshamdalal, "Assignment-3", CSCI5709 – Advanced Topics in Web Development
[5]"Rendering Components in onClick Events in React - Better Programming - Medium", Medium, 2019. [Online]. 
    Available: https://medium.com/better-programming/rendering-components-in-onclick-events-in-react-bc0d7b54e1cd. [Accessed: 17- Jul- 2019].
[6]"Handling User Input in React  — CRUD - The Andela Way - Medium", Medium, 2019. [Online]. 
    Available: https://medium.com/the-andela-way/handling-user-input-in-react-crud-1396e51a70bf. [Accessed: 17- Jul- 2019].
[7]"db.collection.find() — MongoDB Manual", Docs.mongodb.com, 2019. [Online]. 
    Available: https://docs.mongodb.com/manual/reference/method/db.collection.find/. [Accessed: 17- Jul- 2019].
[8]"Cloud: MongoDB Cloud", Cloud.mongodb.com, 2019. [Online]. 
    Available: https://cloud.mongodb.com/v2/5d2bd9facf09a2a1fce159b6#security/database/users. [Accessed: 17- Jul- 2019].
[9]"React.Component – React", Reactjs.org, 2019. [Online]. 
    Available: https://reactjs.org/docs/react-component.html. [Accessed: 17- Jul- 2019].
[10]"How to fetch data in React - RWieruch", Robinwieruch.de, 2019. [Online]. 
    Available: https://www.robinwieruch.de/react-fetching-data/. [Accessed: 17- Jul- 2019].
[11]"react-modal", npm, 2019. [Online]. Available: https://www.npmjs.com/package/react-modal. [Accessed: 17- Jul- 2019].

============================================================================================================================================
9. Images used in vehicle description feature
============================================================================================================================================

[12]"Trip Icons - Free Download, PNG and SVG", Icons8.com, 2019. [Online]. 
    Available: http://icons8.com/icons/set/trip. [Accessed: 17- Jul- 2019].