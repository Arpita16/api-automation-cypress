# api-automation-cypress

## API Automation with Cypress with Mocha Awesome Reporter

This repository demonstrates how to implement API automation testing using **Cypress**, a JavaScript-based end-to-end testing framework, and **Mocha Awesome Reporter**, a powerful reporting tool that generates comprehensive, visually appealing test reports.

[![APIAutomation](https://img.shields.io/endpoint?url=https://cloud.cypress.io/badge/simple/2pdddk&style=flat&logo=cypress)](https://cloud.cypress.io/projects/2pdddk/runs)




## Introduction

API automation testing is essential for ensuring the reliability and performance of APIs in modern applications. By leveraging Cypress and Mocha Awesome Reporter, this project provides a robust framework for:

- **Efficient API testing**: Cypress simplifies asynchronous operations, making it ideal for testing RESTful APIs.
- **Customizable and detailed reporting**: Mocha Awesome Reporter generates rich HTML reports, including screenshots, logs, and test execution details, which help in better debugging and test result analysis.

## Features

- Easy-to-write API test scripts using Cypress commands.
- Structured test organization for scalability and maintainability.
- Seamless integration with Mocha Awesome Reporter for visually appealing reports.
- Examples of API tests including GET, POST, PUT, DELETE methods.

## Prerequisites

To get started with this project,ensure the following is installed in the system:

- **Node.js** (v16 or above)
- **npm** or **yarn**

# Getting Started
## Installation

**Clone the repository:**

        git clone https://github.com/Arpita16/api-automation-cypress.git
        cd api-automation-cypress
        
**Install dependencies:**

              npm install
              
## Configuration

**1. Cypress Setup**
      Install Cypress
      
           npm init
           npm install cypress --save-dev
       

**2. Mocha Awesome Reporter Setup**

Mocha Awesome Reporter is configured in the cypress.config.js file. 

      const { defineConfig } = require("cypress");
      module.exports = defineConfig({
      watchForFileChanges:false,
      failOnStatusCode: false,
         e2e: {
             reporter: 'cypress-mochawesome-reporter',
             baseUrl: 'https://gorest.co.in',
                   setupNodeEvents(on, config) {
                           require('cypress-mochawesome-reporter/plugin')(on);
                          on('task', {
                                log(message) {
                                       console.log(message + '\n');
                                       return null;
                             },
    
                       });
                },
           },
   });

  
# Running Tests
  Run the Cypress tests and generate Mocha Awesome reports:

  Run all tests in headless mode:
                  
        npx cypress run
      
 View the Mocha Awesome report in the cypress/reports directory.

# Writing Tests

 Create your API tests in the cypress/e2e folder. Here's an example test for a POST request:

        describe('Create a new user', () => {
             context('POST /public/v2/users', () => {
        
        it('Test POST request', () => {
            cy.request({
                method: 'POST',
                url: '/public/v2/users',
                headers: {
                    'authorization': 'Bearer ' + Cypress.env('ACCESS_TOKEN'), // Generate access token from https://gorest.co.in/consumer/login 
                },
                body: {
                    "name": userName,
                    "gender": "male",
                    "email": emailId,
                    "status": "active"
                }
            }).then((response) => {
                expect(response).to.have.property('status').to.equal(201)
                expect(response.body).to.have.property('id').to.not.be.oneOf([null, ""])
                expect(response.body).to.have.property('name').to.equal(userName)
                expect(response.body).to.have.property('email').to.equal(emailId)
                userId = response.body.id;
                cy.task('log', 'Created a new user with id: ' + userId)
            })


        })

    })
})

**Generating and Viewing Reports**

After running the tests, Mocha Awesome generates reports in the cypress/reports directory.

# To view the HTML report:

Navigate to the cypress/reports directory.

Open the index.html file in your browser.

