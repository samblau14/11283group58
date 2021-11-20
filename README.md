# **World Like Me:**
## What if everyone in the world lived like me?

## Authors: Sam Blau, Lily Maloney, Rachel West, Nick Strawser

## Overview:
World Like Me is a webapp with the goal of informing users of the environmental impact of their daily living habits and providing guidance on how to reduce that impact.

A user is brought first to the landing page where they are able to read a short mission statement on World Like Me and then click to begin the survey. They are then brought to the survey page where they must answer all questions before submitting and being taken to the results and analytics page. The results and analytics page displays the user’s carbon footprint and daily water usage, as well as comparing it to global and national averages. 
These results are taken from calculations done with the user’s survey responses. Each survey question aids in calculating either carbon footprint or water usage.

## Procedures
How to get the project running:

Download or clone the '11283group58' repository

Install [Node](https://nodejs.org/en/) (Make sure Node package manager (npm) is installed along with node and Node has a version of at least 16.4.0)

Open terminal and navigate to the `11283group58/mern/client` folder

Run the following commands in a terminal (These are all of the dependencies)
```
npm install mongodb express cors dotenv
npm install --save react-bootstrap bootstrap@3
npm install --save react-router-dom
npm install axios
npm install --save react-scripts
npm install @mui/material
npm install react-bootstrap-range-slider
npm install --save react-delay-link
npm install --save react-to-print
npm install @emotion/react
npm install @emotion/styled
```

Now that all the dependencies are installed, to run the project execute the following command from within the ‘client’ folder
```
npm start
```
The website will now automatically open in your browser (Default is localhost:3000)

## Roadmap
Features we are in the process of or planning to implement:
- Graph on analytics page that displays user carbon footprint and water usage compared to continent and global averages.
- Download button on analytics page that downloads a formatted analytics page that the user can save
- Sharable link on the analytics page that is copied with the press of the ‘copy’ button
- Feedback on what the user can change in their lifestyle that will have the greatest impact on their carbon footprint
- Feedback on what the user’s best lifestyle habit is
- Ability for users to login with twitter to save their survey results and view past survey answers and analytics
- Ability for users to share their results through twitter with a preformatted draft
