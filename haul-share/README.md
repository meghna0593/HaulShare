 **CSCI5709- Advanced Topic in Web Development**

# Haul-Share Web Application

# Overview:

The Haul-Share web application aims to help its customer in transportation of goods and luggage from one location to other by pooling all the goods available in the locality. This would help people shifting to a different location by helping them to transport their goods in an economical way. The application can be used for both requesting and providing transportation. The main features of the application are provided below:

1. Post request for transportation of goods.

2. Post request to provide transportation of goods for a fee.

3. View the request list and accept suitable posts that are present on the website for transportation and luggage.

Uniform color code has been implemented for buttons and screens present in the application to  provide better user experience to customers using the application.
# Screens Developed:

The application is developed using React JS framework. Four front-end screens were developed as part of this development. The list of screens and their functionality are provided below:

### 1. Registration screen:

The registration screen serves as the landing page for the application. First time users can register themselves with the application by providing the details requested in the web-page. This will allow uses to login to the application at any later point. This screen was developed based on the design provided by Ron E [1]. Form validations are provided to prevent incorrect information from being submitted.

URL:[https://haul-share-project.herokuapp.com/](https://haul-share-project.herokuapp.com/)

###  2. Login screen:

The login page is provided in the same screen as the registration. Since the back-end for the application is yet to be implemented, only the validation of username and password are put in place. The tutorial from  'TheCodePro' was used as reference in the web-page development[1]. Changes have been made to make the screen responsive using media query and provide validation for inputs submitted. The design for the screen has been modified to better suit the Haul-Share application needs. 

URL:[https://haul-share-project.herokuapp.com/sign-in](https://haul-share-project.herokuapp.com/sign-in)

### 3. View Post Screen:
The view post screen acts as the home screen for the application. The users will land in this screen once they login to the application. This screen provides the list of recent posts that are present in the website. The user can search through the request list using the search bar provided on screen. This screen also gives users the option to post a new request.

URL:[https://haul-share-project.herokuapp.com/home-page](https://haul-share-project.herokuapp.com/home-page)

### 4. Detail Description Screen:
The detail description screen can be navigated from the view-post screen by clicking on the 'name' or 'location' of the post. This page will give a detailed overview of the request posted on the home screen. The user can also find the rating of the requester in this page. From this page the user will have access to notify the requester to accept the request.

URL:[https://haul-share-project.herokuapp.com/detail-desc](https://haul-share-project.herokuapp.com/detail-desc) 



# Instruction for loading the project:
The application is hosted on 'Heroku' and the endpoint URL for each web-page is provided with the screen above. There is no special requirement for the application to function. Pages can also be accessed from the navigation bar provided in the home screen. The source code for the application can be found in the below URL :

Git repository : https://git.cs.dal.ca/varung/a2_gopalakrishnan_varun_b00823111_web 

#  Development Framework:
Below is the list of libraries that were used in the development of this application:
 1. Form Validation:
 For validating the forms present in the application the Formik library was used. This library helps in retrieving data from the form state and handle submissions[2]. Yup library was used for parsing the input submitted to the form which is later used for validation [2].
 
 2. Responsive Design:
 Media query was used to provide a responsive interface for the users of the application [3]. This will help in viewing the web-page in different screen sizes with ease. The image present in the landing screen is removed while viewing on smaller screen [5].
 
3. React Drop-down:
 The React drop-down menu was use in the registration page to allow users to select the province during registration process [4]. This information is required since the application is aimed to be released only in the Atlantic province during the initial phase.
 
 4. Dynamic Table:
 Dynamic table has been used in the home screen to provide the list of posts that are present in the website[6]. This will allow the table to expand as per the number of posts displayed. Lorem Ipsum was used to generate dummy data to fill data in detail description page[7]. 
4. Bootstrap search:
The React bootstrap search has been used in the home screen of the application to provide users with the ability to search the request list[8].
This will help the users save time while browsing through the posts present in the application.

5. Material UI Image:
The material UI image has been used to render the images present in the application. This will provide a smooth transition to the user while loading the image[9]. Also, alternate image are displayed if there is an error while loading the primary image.

6. Material UI Rating:
The material UI rating feature is used in the home screen and the detail description screen for the users to view and provide rating to others users in the application respectively[10].  This will help users decide whether to accept or reject a request.
   


# References:

[1]"Learn React.js by Example - React Sign Up Form Example", _YouTube_, 2019. [Online]. Available: https://www.youtube.com/watch?v=56E8b9prPTs. [Accessed: 01- Jun- 2019].

[2]"Validating a Login Form in React", _YouTube_, 2019. [Online]. Available: https://www.youtube.com/watch?v=JiFCwo3iBuk. [Accessed: 01- Jun- 2019].

[3]H. [closed], "How to build a responsive website with ReactJs", _Stack Overflow_, 2019. [Online]. Available: https://stackoverflow.com/questions/32742532/how-to-build-a-responsive-website-with-reactjs. [Accessed: 01- Jun- 2019].

[4]"react-dropdown", _npm_, 2019. [Online]. Available: https://www.npmjs.com/package/react-dropdown. [Accessed: 01- Jun- 2019].

[5]"unDraw | Colorful illustrations", _Undraw.co_, 2019. [Online]. Available: https://undraw.co/search. [Accessed: 01- Jun- 2019].

[6]"An easy way to create a customize dynamic table in react js - DEV Community 👩‍💻👨‍💻", _Dev.to_, 2019. [Online]. Available: https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg. [Accessed: 01- Jun- 2019].

[7]"Lorem Ipsum - All the facts - Lipsum generator", _Lipsum.com_, 2019. [Online]. Available: https://www.lipsum.com/. [Accessed: 01- Jun- 2019].

[8]"React Bootstrap Search - examples & tutorial. Basic & advanced usage", _Material Design for Bootstrap_, 2019. [Online]. Available: https://mdbootstrap.com/docs/react/forms/search/. [Accessed: 01- Jun- 2019].

[9]"TeamWertarbyte/material-ui-image", _GitHub_, 2019. [Online]. Available: https://github.com/TeamWertarbyte/material-ui-image/blob/v3.1.0/README.md. [Accessed: 01- Jun- 2019].

[10]"Wertarbyte Material-UI Components", _Mui.wertarbyte.com_, 2019. [Online]. Available: https://mui.wertarbyte.com/#material-ui-rating. [Accessed: 02- Jun- 2019].
