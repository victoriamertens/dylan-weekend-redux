![MIT LICENSE](https://img.shields.io/github/license/scottbromander/the_marketplace.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/scottbromander/the_marketplace.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/scottbromander/the_marketplace.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/scottbromander/the_marketplace.svg?style=social)

# PROJECT NAME
Dylan's Feedback Loop

## Description

_Duration: 2 Day Sprint All Day Saturday & Sunday Morning_

I created a multi page site using react and specifically redux. I had to create several pages with input field that would each save data that was entered locally to the client side store using redux. After gathering the numbers and comment I had to display them using redux on the review page. From there the answers were POSTed using axios and saved in my postgres database. From here you were sent to the final page to affirm you saved your answers and could send another feedback loop. This last step also cleared all the information in the store client side but saved responses in the database.

## Screen Shot

![Alt text](../../../../../../../var/folders/fk/xbndvqmx7t3gfqm_xfvs0w_w0000gn/T/TemporaryItems/NSIRD_screencaptureui_c6iVQb/Screen%20Shot%202022-12-04%20at%2012.40.44%20PM.png)

![Alt text](../../../../../../../var/folders/fk/xbndvqmx7t3gfqm_xfvs0w_w0000gn/T/TemporaryItems/NSIRD_screencaptureui_M6yb13/Screen%20Shot%202022-12-04%20at%2012.39.08%20PM.png)

![Alt text](../../../../../../../var/folders/fk/xbndvqmx7t3gfqm_xfvs0w_w0000gn/T/TemporaryItems/NSIRD_screencaptureui_4iKsHh/Screen%20Shot%202022-12-04%20at%2012.39.38%20PM.png)

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- Express
- Axios
- Redux
- Postgres

## Installation

1. Create a database named `your database name`,
2. The queries in the `tables.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Install redux: `npm install redux@4 react-redux@7 redux-logger@3`
5. Run `npm run server` in your terminal
6. Run `npm run client` in your terminal
7. The `npm run client` command will open up a new browser tab for you!

## Usage
How does someone use this application? Tell a user story here.

1. Enter the number correlating with the question 1 is low and 5 is high 
2. Continue answering and hitting subsequent 'NEXT' buttons
3. Pages will automatically lead you through questions
4. Review will show your answers and save them on submit
5. Finally the successful submission will lead you to the page to clear inputs and start over


## Built With

- React
- Redux
- Javascript
- Express
- Postgres


## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. (Thank your DANE!)

## Support
If you have suggestions or issues, please email me at [dylanroets@yahoo.com]