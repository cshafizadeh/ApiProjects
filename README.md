# API Projects
A collection of the API projects I have worked on. These were some simple projects I created to begin teaching myself new web development concepts.

## BART API:
This web application uses BART API data to retrieve information about current and upcoming train schedules, allowing the user to find the destinations and arrival times of trains at a station.
### Features:
- This web app utilizes two BART API's. The first gets a list of all available stations and is used as the station options for the user to select, and the second retrieves info about a selected station, presenting the final destinations of all passing trains, and the arrival times of those trains.
- Dynamically renders stations and arrival times for trains at each station, creating a fully scalable site.
- Error handling handles bad input, preventing the user from selecting invalid stations, and only makes an API call if the station selection has changed or the information has updated.

## Stock API:
Website using Polygons stock API. Allows user to select a stock symbol and date, and will return the high, low, opening, and closing values for the selected date.
### Features:
- Error handling sends an error if the stock symbol entered does not exist. The API is also only allowed to make 5 requests per minute, so using React state hooks the stock symbol and current date are checked and a request is sent only of one of them has changed.
- Current date and time are kept track of and used in the stock calender selection, making sure that a user cannot select a future date.

## Languages/Technologies Used:
React, Javascript, HTML, CSS
