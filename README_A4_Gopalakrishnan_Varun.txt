# Group: Runtime Terror                                                        
# Project Name: Haul Share                                                            
# Course Code: CSCI5709

1.	Introduction:
	The main purpose of this web application is to help customers with transportation of goods between two places by pooling the luggage. The application provides a platform for customers to view/post requests on the website for transportation of goods. Movers or people who are taking a similar route for transporting their luggage can pick-up additional goods from the requestor’s location and deliver it to the target location for a fee. The business model works on a similar principle of ridesharing to transport goods. [1]
	Assignment 3 submission focuses on two main features for the Haul-Share web application: Maps and Transport management System. 
	The Maps feature has been implemented as part of assignment 4.

2.	Git Repository [1]:
	Branch:
	-	https://git.cs.dal.ca/holla/haul-share-project/tree/B00823111_Varun_Gopalakrishnan
	
	Master Branch:
	-	https://git.cs.dal.ca/holla/haul-share-project 

3.	Heroku Link [2]:
	The application is hosted in the below link. 
	-	https://haul-share-official.herokuapp.com/ 

4.	Features Implemented:
	As part of this assignment, the full frontend and backend for the Map feature has been implemented.

	This feature can be accessed using the following clickstream:
	-	Login -> home-page -> my-trips (present under the profile icon in the navigation bar) -> View-Map.
	
	The URL to access the map feature directly is given below:
	-	https://haul-share-official.herokuapp.com/maps
	
	The maps will take a default pickup and drop location when accessing the above link. The application will have maps to assist users in accepting requests by providing them with visual representation of the pickup and drop locations [1]. 
	
5.	Project Setup to run application on the local system from GitLab:
	-	Clone the project from the git repository provided.
	-	Change directory to the project folder from git bash.
	-	Install npm and node.js in the local system.
	-	Execute the command ‘npm install --save’ to install the required node modules from the terminal.
	-	Execute the command ‘npm start’ from the terminal to launch the application in ‘local host: 3000’.
	-	The application will launch on the default browser present in the system. 
	-	The server_v.js file needs to be executed using the command 'nodemon server_v.js' from the backend folder.    
	-	(Optional) Install cors plugin in chrome browser to allow Cross-Origin Resource Sharing. Link: https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en

6.	Technology Used:
	-	The application is developed using the MERN stack. 
	-	The front-end is developed using React.js, CSS and Reactstrap. 
	-	The backend for the application is implemented using MongoDB, Node.js and Express. 

	The application is implemented using MERN stack as there is no context switching required between the client and the server side since the code is written using JavaScript libraries on both ends [5]. This will help in developing a highly efficient web application as creating an interface between the front-end and back-end will be seamless.

7.	List of files modified:
	-	Maps.js, map_styles.js and place.jsx under the folder maps have been modified as follows:

	The pickup and drop locations are displayed in the map using dynamic icons that resize based on the zooming level set in the map [8].  The default zooming level is set to 13 and the default loading position of the map is set to Atlantic province.  The google-react-maps from npm is used to display the map in the frontend [10]. This provides full-screen and zooming feature to the map. Geo-encoding is used to decode the latitude and longitude from the address provided in the request fetch method [7]. This operation takes place after the source and destination address are fetched from MongoDB atlas using mongoose library [4].  

	-	Server_v.js and Data.js under the folder server has been modified as follows: 

	The server_v.js uses mongoose to connect to the common database using the connection string provided [3]. The API listens on port 5543 to provide pickup and drop address to requests made from the frontend. The collection c_map_locations is queried using the user_id and the trip_id provided in the request. These details are fetched using the body-parser and sent to the collection to perform a fetch operation to retrieve the specific document present in the collection in the form of JSON object. The model for the collection is defined in the data.js file which is used to store and parse the response as required in the frontend. 

	-	My-trips.js under the folder my-trips has been modified as follows:

	Since the map feature can be accessed only from the my-trips page, modification have been in my-trips.js by creating a method to pass the user_id and the trip_id to the maps feature. This is done by using the local storage present in the application to set-item values in the page while loading. The same values are retrieved in maps.js file by using get-item value feature and passed to the API call dynamically to query the MongoDB collection [6].

8.  Folder Structure:
	The application is designed to have modular folder structure. The frontend files are present under the ‘components’ folder. Each component has separate CSS files attached to it in the feature sub-folder defined under the components directory. The backend components are placed under the server folder. The models used by the server files are placed under the same sub-directory.        

9.  Compatibility :
	The application is compatible with majority of the web and mobile browsers present in the market. The maps feature present in the application cannot be made fully responsive as it is not possible to fit the entire map in the window based on screen size. Since the frontend is developed using React.js the application is fully W3C compliant.


10.	Reference:
 [1]"Assignment-3 Varun Gopalakrishnan[B00823111]", CSCI5709- Advanced topics in Web development, 2019. [Online]. [Accessed: 21- May- 2019].
 
 [2]https://haul-share-official.herokuapp.com/my-trips, 2019. [Online]. Available: https://haul-share-official.herokuapp.com/my-trips. [Accessed: 01- Jul- 2019].
 
 [3]M. Atlas, B. Rick, B. Rick, B. Rick and E. Kartal, "Mongoose with ReplicaSet on Atlas", Stack Overflow, 2019. [Online]. Available: https://stackoverflow.com/questions/41213148/mongoose-with-replicaset-on-atlas. [Accessed: 17- Jul- 2019].

 [4]"MongoDB and Mongoose | Creating a REST API with Node.js", YouTube, 2019. [Online]. Available: https://www.youtube.com/watch?v=WDrU305J1yw&list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q&index=6. [Accessed: 17- Jul- 2019].

 [5]"Let’s build a full stack MongoDB, React, Node and Express (MERN) app", Medium, 2019. [Online]. Available: https://medium.com/javascript-in-plain-english/full-stack-mongodb-react-node-js-express-js-in-one-simple-app-6cc8ed6de274. [Accessed: 17- Jul- 2019].

 [6]"Cloud: MongoDB Cloud", Cloud.mongodb.com, 2019. [Online]. Available: https://cloud.mongodb.com/v2/5d0d181cff7a25c6b277c8cf#clusters. [Accessed: 17- Jul- 2019].

 [7]"benawad/practical-react", GitHub, 2019. [Online]. Available: https://github.com/benawad/practical-react/blob/12_fetch_data_from_api/src/components/FetchRandomUser.js. [Accessed: 17- Jul- 2019].

 [8]"google-map-react/old-examples", GitHub, 2019. [Online]. Available: https://github.com/google-map-react/old-examples/tree/master/web/flux/components/examples/x_simple. [Accessed: 17- Jul- 2019].

 [9]"react-geocode", npm, 2019. [Online]. Available: https://www.npmjs.com/package/react-geocode. [Accessed: 17- Jul- 2019].

 [10]"google-map-react", npm, 2019. [Online]. Available: https://www.npmjs.com/package/google-map-react. [Accessed: 17- Jul- 2019].
					             
