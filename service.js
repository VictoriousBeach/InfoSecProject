// const watson = require('watson-developer-cloud');

// const assistant = new watson.AssistantV1({
//   username: process.env.WATSON_USERNAME,
//   password: process.env.WATSON_PASSWORD,
//   url:      process.env.WATSON_URL,
//   version:  process.env.WATSON_VERSION
// });



// const AssistantV2 = require('ibm-watson/assistant/v2');
// const { BasicAuthenticator } = require('ibm-watson/auth');

// const assistant = new AssistantV2({
//   version: process.env.WATSON_VERSION,
//   authenticator: new BasicAuthenticator({
//     username: process.env.WATSON_USERNAME,
//     password: process.env.WATSON_PASSWORD,
//   }),
//   url: process.env.WATSON_URL,
// });

const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

const assistant = new AssistantV2({
  version: process.env.WATSON_VERSION,
  authenticator: new IamAuthenticator({
    apikey: process.env.WATSON_APIKEY,
  }),
  url: process.env.WATSON_URL,
});



exports.getMessage = body =>
  new Promise((resolve, reject) => {
    assistant.message(
      {
        workspace_id: process.env.WATSON_WORKSPACE_ID,
        input: { text: body.input }
      },
      function(err, response) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(response);
        }
      }
    );
  });