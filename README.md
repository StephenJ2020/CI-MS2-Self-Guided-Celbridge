![Self-Guided Celbridge logo]()
 
# Project Description   
**Code Institute: Interactive Frontend Development**  
 
The Milestone 2 project assignment is to build an interactive front-end site. The site should respond to the users' actions, allowing users to actively engage with data, alter the way the site displays the information to achieve their preferred goals.   
I have the option to choose from one of the following three scenarios or to come up with my own idea:    
  * Build a memory game  
  * Create a site that calls on the Google Maps API and/or the Google Places API (or similar) to allow users to search for their next holiday destination.  
  * Build a front-end website that is themeable and customisable using JavaScript, and that remembers the customisation for the next time.  
    
I have chosen to create an interactive site for a Self-Guided Walking Tour of Celbridge, in Co. Kildare.  Again this project is related to one of the voluntary community groups that I'm involved in.  One of the members of the Celbridge Heritage & Tourism Forum produced a printed guide to Celbridge with 30 points of interest.  The Celbridge Heritage & Tourism Forum then sought funding to have an [Audio Guide](https://www.abartaheritage.ie/castletown-house-and-celbridge-heritage-trail-audio-guide/) produced based on a slightly altered version on this printed guide.  The site will allow users to choose their starting point and to view the details of the tour via a mobile enable interactive map.     
   
#Project Requirements  
  
Main Technologies  
  * Required: HTML, CSS, JavaScript.    
  * Optional: jQuery or any other JavaScript libraries, external APIs.  
    
Mandatory Requirements  
  1. Dynamic Front End Project: Write custom JavaScript, HTML and CSS code to create a front-end web application consisting of one or more HTML pages with significant interactive functionality.  
  2. Site Responses: Use JavaScript to have the site produce relevant responses dependent on users' actions.  
  3. Information Architecture: Incorporate a main navigation menu (unless irrelevant) and structured layout (you might want to use Bootstrap to accomplish this).  
  4. Documentation: Write a README.md file for your project that explains what the project does and the value that it provides to its users.  
  5. Version Control: Use Git & GitHub for version control.  
  6. Attribution: Maintain clear separation between code written by you and code from external sources (e.g. libraries or tutorials). Attribute any code from external sources to its source via comments above the code and (for larger dependencies) in the README.  
  7. Deployment: Deploy the final version of your code to a hosting platform such as GitHub Pages.  
     
    
# Content  
 
# UX Design        
   
## User Stories:  
    
The user is looking a site than can primarily function as a navigation tool for a self-guided walking tour when used on a mobile internet enabled device.  But they also want to be able to use the site as a research and planning tool on their desktop prior to there visit to Celbridge.   
   
  - ### First Time Visitor Goals  
   
 1. As a First Time Visitor, I want to be able to navigate the site easily with the minimum number of clicks to get to the desired information.  
 2. As a First Time Visitor, I want to easily select from which end of the route I want to start the walking tour.  
 3. As a First Time Visitor, I want to easily see an overview of the whole route on a map that is easy to understand.  
 4. As a First Time Visitor, I want to be able to see information about each location without having to leave the map.  
 5. As a First Time Visitor, I want a map that is mobile enabled so that it will show my location if I'm using my mobile or tablet to follow the route.  
 6. As a First Time Visitor, I want a site that gives me the option to view a "text" based version of the details without having to use the map.  
 7. As a First Time Visitor, I want a site that can play the relevant part of the [Abarta Audio Guide](https://www.abartaheritage.ie/castletown-house-and-celbridge-heritage-trail-audio-guide/) at each location on my chosen route.  
 8. As a First Time Visitor, I want a site that allows me to contact the site owner for any additional information I would like about the Self-Guided Walking Tour.  
   
   
   - ### Returning & Frequent Visitor Goals  
   
 1. As a Returning Visitor, I want to be able to revist details of individual locations without having to click through each location in sequence.  
 2. As a Returning Visitor, I want to be able to be able to contact the site owner to arrange a Guided Group Tour.   
 3. As a Frequent User, I want to be able to follow updates on Social Media so that it is quick and easy for me to share them with my family and friends.   
   
# Functional Specification   
 
## Current feature requirements:      
 * Fully responsive website that will automatically adapt for desktop, tablet and mobile devices.    
 * A single page site with four clearly defined sections.  The first section will act as a landing page with each of the other sections hidden from view (using JavaScript) until the user navigates to that section.
 * A navigation bar that will be fixed to the top of the screen so that it is always visible, even as the user scrolls down the page. 
 * A full-screen landing page with a set of three scrolling hero images (using Bootstrap Carousel), each image will visually communicate elements of what the user can expect to encounter upon the self-guided walking tour.  
 * The Home screen / Landing page section will contain two buttons which will allow the user to select their starting point for the self-guided walking tour.    
 * The second section will contain an interactive map showing the full route from the users chosen starting point.  
 * The second section will contain an interactive list of all the locations on the tour.  On Mobile / Tablet devices this will slide out from the left-side of the screen as a secondary navigation function purely for this section of the site and it will be activated by a Hambuger nav button.
 * On Desktop this secondary navigation will permanently occupy one third of the screen.  
 * Each of the locations listed in the secondary navigation will correspond to a marker on the map and will use JavaScript to call a function that will populate the marker with the details about that location.  
 * The third section will use the same JavaScript functions as used in the second section, to create a HTML text based version of the tour details.  On Mobile devices details will be displayed one location at a time.  On Tablets upto four locations will be displayed and on Desktop the details of six locations will be displayed at once.  
 * The third section will use pagination to generate a Next / Previous button to navigate through these text based details.  
 * The fourth and final section will contain a contact form will utilise Email JS to actually send an email request to the site owner.
  
## Future feature requirements:   
* Additional JavaScript functionality will be added that will extract the relevant part of the [Abarta Audio Guide](https://www.abartaheritage.ie/castletown-house-and-celbridge-heritage-trail-audio-guide/) so that the user can chose to play the acompaning audio clip for their current location.  
* Additional JavaScript functionality will be added that will allow the user even greater control of where they start from and the route that they chose to follow.  
  
  
# Structure  
  
***index.html***  
 * Will contain a horizontal fixed navbar.  
 * Will be divided into four clearly defined sections.  
 * Section one will act as a landing page with two buttons to allow the user to choose their starting point for the self-guided walking tour.  
 * Section two will contain an interactive map with a secondary vertical navbar.
 * Section three will generate an HTML text based version of the tour details based on the users chosen starting point.  
 * Section four will contain a contact form and a footer with social media links.
 * Using JavaScript, only one section of the page will be visible at any time.  
      
     
# wireframes
[Desktop](https://github.com/StephenJ2020/CI-MS2-Self-Guided-Celbridge/blob/2bcf32e87b2a4d8d0205e465e765f10c6597d36a/assets/images/rm-desktop-wireframe.png)  
![Desktop](./assets/images/rm-desktop-wireframe-tbn.png)     
[Tablet](https://github.com/StephenJ2020/CI-MS2-Self-Guided-Celbridge/blob/2bcf32e87b2a4d8d0205e465e765f10c6597d36a/assets/images/rm-tablet-wireframe.png)  
![Tablet](./assets/images/rm-tablet-wireframe-tbn.png)    
[Mobile](https://github.com/StephenJ2020/CI-MS2-Self-Guided-Celbridge/blob/2bcf32e87b2a4d8d0205e465e765f10c6597d36a/assets/images/rm-mobile-wireframe.png)  
![Mobile](./assets/images/rm-mobile-wireframe-tbn.png)  
   
  
         
# Visual Design  
  
  
    
  
 
# Technologies Used  
 
## Languages Used
 
-  [HTML5](https://en.wikipedia.org/wiki/HTML5)
 
-  [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
 
-  [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
  
  
### Frameworks, Libraries & Programs Used
 
   
# TESTING      
  
    
# Deployment  
 
 
# Credits  
 
 
 
# Acknowledgements  