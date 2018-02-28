# Doctor Lookup

#### A program that use BetterDoctor Api to help user's find doctors in Portland, OR.  2/16/17

#### By **Edgar Hernandez Ortiz**

## Description
A web application that takes a user's search criteria and return a list of doctors in the Portland area. User's can search either by first name or by symptom.

### Specs
| Spec | Input | Output |
| :------------- | :------------- | :------------- |
| **To search by first name enter a name and select the name option to search for doctors with that name.** |"Edgar", select "Search by name"| Return list of doctors named Edgar in Portland |
| **To search by symptom enter a symptom and select the symptom option.** |"rash", select "Search by symptom"| Return list of doctors that can treat your symptom in Portland |

### Future additions
Providing profile picture of doctors in results.
Adding working link to doctor's website.
Adding additional information if doctors don't have website or if they aren't accepting new patients.

## Setup/Installation  Requirements
1. Clone this repository link.
`https://github.com/Edgarcho/Doctor-Lookup-.git`
2. Run these commands in terminal.<br>`$ npm install` <br> `$ bower install`
3. Create `.env` file in the top level of the project directory. Paste this in the file `exports.apiKey = "apiKey enter here";`.
4. Get API key from  `https://developer.betterdoctor.com/`. Paste your API key in the `.env` file where `apiKey enter here` is at.
3. When you are ready to get the project up and running, use the following commands.<br>`$ gulp build` <br> `$ gulp serve`

## Known Bugs
* No known bugs at this time. 

## Technologies Used
 * Javascript
  * Jquery
  * Gulp
  * Bower
  * JSHint
  * Jasmine
  * Karma     
 * HTML
 * CSS
 * BootStrap

## Support and contact details

_Email no one with any questions, comments, or concerns._

### License

*This software is licensed under the MIT license*

Copyright (c) 2018 **_Edgar Hernandez Ortiz_**
