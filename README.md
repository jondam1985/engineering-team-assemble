# engineering-team-assemble

# Description

This project is a command line interface application (CLI app) that generates and HTML file showing the information of a given engineering team. The app uses [Inquirer](https://www.npmjs.com/package/inquirer) to gather the team's information and its member's information. This information is then passed to a function that creates and html file using NodeJS File System. 

The application takes in the following information:

- Output file name
- Team name
- Team manager name, email and office number
- Engineer name, email and GitHub username
- Intern name, email and school

Each team will have __one__ name, and __one__ manage, but as many as desired engineers and interns may be added.

This app was coded using `HTML5`, `CSS3`, `JavaScript` and `NodeJS` and a basic Object Oriented Programming approach.

__Sample image of HTML file generated for Team: Justice League of America__

![HTML file generated for Team JLA. One Manager, three Engineers and Two Interns]( https://content.screencast.com/users/nrt.damian/folders/Snagit/media/441a876d-dcf7-463c-a03a-a8ab1513e5ee/12.01.2019-15.12.png )

# Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [Credits](#Credits)
- [License](#License)
- [Tests](#Tests)
- [Collaboration](#Collaboration)

# Installation

To use this application clone or download this repo at https://github.com/jondam/engineering-team-assemble.

Once cloned navigate to the containing directory and run `npm install --save` to download all the dependencies listed on the `package.json` file. If you prefer, you can install each dependency individually. For `Inquirer` run `npm install inquirer --save`. For `Jest` run `npm install jest --save-dev`.

The app is ready for use.

# Usage

In the directory containing the app run `node cli.js {filename}`where `{filename}` is to be replaced by your chosen name for the output html file. After this you will be prompted to enter the following information:

__TEAM INFORMATION__

- __Team name__. Enter any name you want. The default value is _"Team Name"_.

__TEAM MANAGER'S INFORMATION__

- __Name__. Enter any name you want. The default value is _"John Doe"_.
- __ID__. Enter any number you want. The default value us _"12345"_.
- __Email__. Enter any email you want. The default value is _"name@company.com"_.
- __Office number__. Enter any number you want. The default value is _"na"_.

__EMPLOYEES' INFORMATION__

- __Role__. Choose between ENGINEER and INTERN.
- __Name__. Enter any name you want. The default value is _"John Doe"_.
- __ID__. Enter any number you want. The default value us _"12345"_.
- __Email__. Enter any email you want. The default value is _"name@company.com"_.
- __If ENGINEER -> GitHub Username__. Enter any username you want. The default value is _"username"_.
- __If INTERN -> School__. Enter any school you want. The default value is _"school of life"_.

__ADD ANOTHER EMPLOYEE__

- You will be asked if you want to add another record. If you choose __YES__ you will be asked again for __EMPLOYEE'S INFORMATION__. If you choose __NO__ the app will finish generating the HTML file.

The generated HTML file will be saved in the _output_ folder.

__[Click here for a demo video](https://www.screencast.com/t/9wcG57wlwo)__.

# Credit

### Author

This project was created by [Damian Ruiz](https://github.com/jondam1985) as a project assignment for the [UofT Full Stack Coding Bootcamp]( https://bootcamp.learn.utoronto.ca/coding/).

### Dependencies

- CLI interface created with [Inquirer](https://www.npmjs.com/package/inquirer).
- Test suite created with [Jest](https://www.npmjs.com/package/jest). 

### Icons

- Icons provided by [Freepik at Flaticon.com](https://www.flaticon.com/authors/freepik).

# License

This project is licensed under the MIT license. Please see [LICENSE](./LICENSE) file for details.

# Tests

Test are located in the __tests__ folder.

To run the tests enter `npm test` from your preferred shell when inside the directory containing the CLI app.

There are four test suites with between three and eight tests per suite. They are as follow:

__Employee test suite__

This suite tests the `Employee class`

- Class generates an object type
- Passing a `name value` generates `name property` and assigns said value to the property via constructor
- Passing a `id value` generates `id property` and assigns said value to the property via constructor
- Passing a `email value` generates `email property` and assigns said value to the property via constructor
- Invoking the `getName` method returns the `name property` previously defined 
- Invoking the `getId` method returns the `id property` previously defined
- Invoking the `getEmail` method returns the `email property` previously defined
- Invoking the `getRole` method returns the `employee`

__Manager test suite__

This suite tests the `Manager class` that expands the `Employee class`

- Passing an `office number value` generates `office number property` and assigns said value to the property via constructor
- Invoking the `getOfficeNumber` method returns the `office number property` previously defined
- Invoking the `getRole` method returns the `manager`

__Engineer test suite__

This suite tests the `Engineer class` that expands the `Employee class`

- Passing an `github username value` generates `github username property` and assigns said value to the property via constructor
- Invoking the `getGithubUser` method returns the `github username property` previously defined
- Invoking the `getRole` method returns the `Engineer`

__Intern test suite__

This suite tests the `Intern class` that expands the `Employee class`

- Passing an `school value` generates `school property` and assigns said value to the property via constructor
- Invoking the `getSchool` method returns the `school property` previously defined
- Invoking the `getRole` method returns the `intern`

# Collaboration

Please feel free to use and update this project as you see feet. Adding a web interface or changing the style are some suggestions.

If you want to discuss this project or any of my other projects <a href="mailto:nrt.damian@gmail.com">please send me an email</a> or follow me at https://github.com/jondam1985.



