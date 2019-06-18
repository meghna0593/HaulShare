#########################################################################################
# Assignment 2                                                                          #
# Name          : Meghna Ramachandra Holla                                              #
# Banner number : B00812604 			                                                #
# Course Code   : CSCI5709												                #
#########################################################################################

######Installation and Setup######

I. Project link to GitLab
https://git.cs.dal.ca/holla/a2_meghna_ramachandraholla [27]

II. Project Setup on the local system from GitLab
1. Clone project from gitlab.cs.dal.ca
2. Go to the directory 'A2_Meghna_RamachandraHolla' on the terminal/console
3. Run 'npm install' on the terminal  (Install node[29] and npm[30] before this step)
4. After the installation, run 'npm start' on the terminal
5. A browser will open locally and run the application on 'localhost:3000' (The port might change depending on the applications running on the user's browser)

III. Link to pages for the application running on localhost
1. Login/Register Page (Landing) - localhost:3000/
2. Home Page - localhost:3000/home
3. Profile Page - localhost:3000/profile
4. Create Ad Page - localhost:3000/post-ad

IV. Project link on Heroku:
https://haulshare.herokuapp.com/ [1]

IV. Link to pages for the application running on Heroku
1. Login/Register Page (Landing) - https://haulshare.herokuapp.com/
2. Home Page - https://haulshare.herokuapp.com/home
3. Profile Page - https://haulshare.herokuapp.com/profile
4. Create Ad Page - https://haulshare.herokuapp.com/post-ad

######Compatiblility######
The application is compatible with different browsers like Microsoft Edge, Google Chrome, FireFox.
The application is responsive. It can be viewed on phones(screen width upto 480px), tablets (screen width from 480px-1024px) and large screens(screen width greater than 1024px)

#####Color Schemes######
-Used various shades of Blue in the entire application as the logo contains a lighter shade of blue. 
-The buttons that need user's attention is in blue color where as the ones that do not need a user's attention are in grey color. For instance, the user should not focus deleting one's profile, therefore 'Delete Profile' button is in grey color.

######A2.1###### 
The Four Pages worked on:
1. Login and Registration Page
2. User Profile Page
3. Home Page
4. Create Ad Page

######A2.2###### 
Framework used: ReactJS[2]
Boilerplates used: ReactBootstrap[3], MaterialUI[4], React-Star-Rating-Component[5], React-router-dom[25]

-Used FormControl,Card,Form,Button,Image,Container,Row,Col,InputGroup,Image,Navbar,Nav,NavDropdown from ReactBootstrap[3].
-Used Slider, AppBar, Tabs, Tab, Typography from MaterialUI[4].
-Used StarRatingComponent from React-Star-Rating-Component[5]
-Used React Router DOM[25] to create path to pages
-Navigating between pages using history[26].
-Changed CSS classes and added inline styling to best suit the wireframe designed in Assignment 1.
-Not defined font family explicitly. Used ReactBootstrap's and MaterialUI's default font-family.[3][4][14]

######A2.3 A2.4 A2.5 A2.6 A2.7######
-The design of the application is based on the wireframe, task flow diagram and sitemap defined in Assignment1.
-On clicking 'Price' checkbox on Home page, a slider[11] is displayed with options to choose from.
-The 'pencil'[24] icon on 'User Profile' page under Profile picture is the 'Edit' button. On clicking this, the fields on this page will be enabled for editing. After making changes, 'Save' button should be pressed. This will disable the options for editing. 
-On clicking the logo on top-left corner, the page is redirected to Home page.
-Proper messages and labels displayed for ease of use.
-Implemented Responsive web pages with front-end validations [15][16]
-Displayed proper error recovery messages in places with forms and user input.

########A2.8########
Icons used from Icons8[6]
Application logo created on LogoMakr[7]

######A2.9######
Links to the pages given in 'Installation and Setup' section. 
-Implemented links to pages by clicking on buttons 
-On clicking 'Login' button, the page is redirected to 'Home' page 
-On clicking 'Post Ad' button on Header, the page is redirected to 'Create Ad' page.
-On clicking 'Post Ad' button on 'Create Ad' page, the page is redirected to 'Home' page.
-On clicking 'View Profile' button on Home page, the page is redirected to 'User Profile' page
-On clicking 'Sign Out' on 'User' icon in the Header, the page is redirected to Landing page

######A2.10######
-Changed CSS classes and added inline styling to best suit the wireframe designed in Assignment 1.
-Used getFileUpload() function from MDN Web Docs [21]. Used this function to upload picture on 'Post Ad' page. This function was edited by adding different styling attributes and by changing single selection to multiple selection.
-Used Radio buttons[22] to select between 'Transporter' and 'Customer' options. The CSS properties were changed. Improved the toggling between these two radio buttons.

######References######
[1] “Heroku.” Cloud Application Platform, www.heroku.com/
[2] “React – A JavaScript Library for Building User Interfaces.” – A JavaScript Library for Building User Interfaces, reactjs.org/.
[3] “React Bootstrap.” React, react-bootstrap.github.io/
[4] “The World's Most Popular React UI Framework - Material-UI.” Material, material-ui.com/
[5] “React-Star-Rating-Component.” Npm, www.npmjs.com/package/react-star-rating-component. 
[6] “Download Free Icons, Music, Stock Photos, Vectors.” Download Free Icons, Music, Stock Photos, Vectors, icons8.com/.
[7] “Free Logo Maker - Create Your Own Logo in Minutes!” Free Logo Maker - Create Your Own Logo in Minutes!, logomakr.com/.
[8] “User Icons.” Free Download, PNG and SVG, https://icons8.com/icons/set/user
[9] “Human Icons.” Free Download, PNG and SVG, http://icons8.com/icons/set/human
[10] "Full Screen Icons.” Free Download, PNG and SVG, http://icons8.com/icons/set/full-screen
[11] "Slider React Component - Material-UI.” Material, material-ui.com/components/slider/ 
[12] "Trip Icons.” Free Download, PNG and SVG, http://icons8.com/icons/set/trip
[13] "Search Icons.” Free Download, PNG and SVG, http://icons8.com/icons/set/search
[14] “Tabs React Component - Material-UI.” Material, material-ui.com/components/tabs/.
[15] “Regular Expressions.” MDN Web Docs, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions.
[16] Goyvaerts, Jan. “Alternation with The Vertical Bar or Pipe Symbol.” Regex Tutorial - Alternation with The Vertical Bar, www.regular-expressions.info/alternation.html.
[17] "Key Icons.” Free Download, PNG and SVG, http://icons8.com/icons/set/key
[18] "Email Icons.” Free Download, PNG and SVG, http://icons8.com/icons/set/email
[19] "Phone Icons.” Free Download, PNG and SVG, http://icons8.com/icons/set/phone
[20] "Lock Icons.” Free Download, PNG and SVG, http://icons8.com/icons/set/lock
[21] “FileReader.readAsDataURL().” MDN Web Docs, developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL.
[22] “Custom Radio Buttons.” Tryit Editor v3.6, www.w3schools.com/howto/tryit.asp?filename=tryhow_css_custom_radio
[23] “React-Star-Rating-Component.” Npm, www.npmjs.com/package/react-star-rating-component. 
[24] "Pencil Icons.” Free Download, PNG and SVG, https://icons8.com/icons/set/pencil
[25] “React-Router-Dom.” Npm, www.npmjs.com/package/react-router-dom.
[26] “History.” Npm, www.npmjs.com/package/history.
[27] “GitLab.” GitLab, git.cs.dal.ca/
[28] “Visual Studio Code - Code Editing. Redefined.” RSS, Microsoft, 14 Apr. 2016, code.visualstudio.com/.
[29] Foundation, Node.js. “Download.” Node.js, nodejs.org/en/download/.
[30] “NPM.” Npm, www.npmjs.com/get-npm.
