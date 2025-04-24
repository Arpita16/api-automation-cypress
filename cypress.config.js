const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "2pdddk",
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
  
  env:{
   
    ACCESS_TOKEN:"1e7ced5d72468d2b5f8263be474161e3e8f076758695e340ae8f597055773b0b"
  }
},
});

