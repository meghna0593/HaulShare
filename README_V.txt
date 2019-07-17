-- Anuj Sharma (B00825885)
-- Group 5 (Runtime Error)
-- Application: (Haul Share)

**************************************************************************************************

Application URL: https://haul-share-official.herokuapp.com/
Git URL for my branch: https://git.cs.dal.ca/holla/haul-share-project/tree/Anuj_Sharma_B00825885_2
Git URL for master branch: https://git.cs.dal.ca/holla/haul-share-project

**************************************************************************************************

Issues faced: 

Earlier, I was pushing my code on a different branch (https://git.cs.dal.ca/holla/haul-share-project/tree/Anuj_Sharma_B00825885).
Unfortunately, there were some issues on the repository and I was not able to push my changes on it.
As a result, I had to create a new branch to push my changes. 

**************************************************************************************************

Project Setup to run application:

	* Clone the project from the git repository.
	*	Change directory to the project folder from git bash.
	*	Install npm and node.js in the local system.
	*	Execute the command "npm install --save" and "npm install concurrently --save" to install the required node modules from the terminal.
	*	Execute the command "npm start" from the terminal to launch the application

**************************************************************************************************

Feature Description and steps followed:

As part of Assignment 4, I am implementing the "View Requests" feature. In this feature, the user will be able to see all the requests posted by
both Service provider and the Customer. Requests  will be visible to the user as soon as he/she logs in. The requests are divided into 2 parts:
"Transporter" and "Requester". Each request is displayed in a card. Each card will display the type of the request at the top left. If a customer
requests for a trip, the card will display "Requester" and it will display "Transporter" if a Service provider posts a trip.
On the Home page, the card will display only few details like Storage space and destination. To view more details, the user has to click the
button on top right button. This will open a prompt where all the details like source, destination, service charge, email id etc. will be present.

Also, if a customer posts an advertisement, then that request will be visible on the Home page in the card.

A button (Request trip or Offer trip) on each card as well as on each prompt box will be present. If the requested is posted by a transporter,
then the card will contain "Request Trip" button so that the user can request the service provider. Similarly, if the request is posted by a 
customer, then the card will contain "Offer Trip" button so that a service provider can offer his/her services to that customer.

For now, clicking the Request Trip/Offer Trip button will not provide any functionality since that will be covered in the Notification feature.

**************************************************************************************************

Technology used:

The application is developed using a combination of Html, CSS, Bootstrap and React JS. HTML is used to create the tags.
CSS, React Bootstrap and Material-UI will be used for styling the pages.[5] (D1_Group5)

**************************************************************************************************

Database: We are using MongoDB Atlas for posting and fetching the data for our web application.

**************************************************************************************************

Javascript files:

The following files are used for developing the feature:

haul-share-project/src/component/Home/home.js : This will display the home page where all the requests can be viewed.

haul-share-project/src/component/Ad-Description/adDesc.js: This will display the detailed description of each request.

haul-share-project/src/server/models/user.model.js : For connecting to the database.

haul-share-project/src/server/routes/users.js : For routing.

haul-share-project/src/server/server_a.js : For connecting to the server. 
This file contains the server code specific to my feature.

haul-share-project/src/server/server_k.js : For connecting to the server.
This file contains the server code specific to my group member's feature.

haul-share-project/src/server/server_m.js : For connecting to the server.
This file contains the server code specific to my group member's feature.

haul-share-project/src/server/server_v.js : For connecting to the server.
This file contains the server code specific to my group member's feature.

haul-share-project/src/server/server.js : For connecting to the server.
This file contains the server code specific to my group member's feature.

***************** NOTE: server_a.js file is implemented for my functionality individually.
For the complete project run, all the server files mentioned above need to run i.e. 
my feature is dependent on other features, so, all the server files have to run.*********************

**************************************************************************************************


NOTE: For now, the Search box and filters will not be working as those are separate features, which will be implemented later.

**************************************************************************************************

Code reference/modification : 

a.) For connecting to the database: const uri = "mongodb+srv://HaulShare:aakmv@cluster0-9pfpk.mongodb.net/Db_HaulShare"

(Referred from: [3] ("Learn the MERN stack by building an exercise tracker — MERN Tutorial", Medium, 2019.))

**************************************************************************************************

b.) For fetching data from backend to frontend:

<Row className="row-padding">
                        <Col md={4} className="label-header-style">
                            Current Address:
                        </Col>
                        <Col md={8}>
                        {this.state.data.source}
                        </Col>
                    </Row>

(Referred from: [4] "Let’s build a full stack MongoDB, React, Node and Express (MERN) app", Medium, 2019. [Online].) 

**************************************************************************************************

c.) componentWillMount() { //on page load
        fetch('http://localhost:20000/users/',{ method:'GET'})
          .then((data) => data.json())
          .then((res) => //this.setState({ data: res.data }));
          {console.log(res)
            this.setState({
                result:res,
                storage: res[0].storageSpace,
                dest: res[0].destination,
                uType: res[0].typeOfUser
                 })
            
            }

(Referred from: [4] "Let’s build a full stack MongoDB, React, Node and Express (MERN) app", Medium, 2019. [Online].) 

**************************************************************************************************

References:

[1]"Access MongoDB in Node.js", Tutorialsteacher.com, 2019. [Online]. 
Available: https://www.tutorialsteacher.com/nodejs/access-mongodb-in-nodejs. 
[Accessed: 17- Jul- 2019].

[2]"Introduction about Node.js and MongoDB - GeeksforGeeks", GeeksforGeeks, 2019. [Online]. 
Available: https://www.geeksforgeeks.org/introduction-about-node-js-and-mongodb/. 
[Accessed: 17- Jul- 2019].

[3]"Learn the MERN stack by building an exercise tracker — MERN Tutorial", Medium, 2019. [Online]. 
Available: https://medium.com/@beaucarnes/learn-the-mern-stack-by-building-an-exercise-tracker-mern-tutorial-59c13c1237a1. 
[Accessed: 17- Jul- 2019].

[4]"Let’s build a full stack MongoDB, React, Node and Express (MERN) app", Medium, 2019. [Online]. 
Available: https://medium.com/javascript-in-plain-english/full-stack-mongodb-react-node-js-express-js-in-one-simple-app-6cc8ed6de274. 
[Accessed: 17- Jul- 2019].

[5] Content referred from Group project proposal (D1_Group5).