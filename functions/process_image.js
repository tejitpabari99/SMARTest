const { google } = require("googleapis")
// (
//   process.env.GOOGLE_APPLICATION_CREDENTIALS
// );

predict_json = (image) => {
  console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS);
  auth(function(err, authClient) {
    const instance = {
      image: image
    };

    if (err) {
      console.error(err);
    }
    else {
      var ml = google.ml({
        version: "v1",
        auth: authClient
      });
      // Predict
      ml.projects.predict(
        {
          name: "projects/smartest-df9af/models/machinelearning",
          resource: {
            instances: [instance]
          }
        },
        function(err, result) {
          if (err) {
            return callback(err);
          }
          console.log(result.data.predictions);
          /*
          This is what would be returned
          [ { classes: 4,
              probabilities:
               [ 0.17773951590061188,
                 0.2288326621055603,
                 0.1773587018251419,
                 0.18088945746421814,
                 0.235179603099823 ] } ]
          */
          var predictions = result.data.predictions;
          var testResults = {
            hiv: true,
            syphilis: true,
            control: true
          };
          switch (indexOfMax(predictions[0].probabilities)) {
            case 0:
              break;
            case 1:
              testResults.hiv = false;
              break;
            case 2:
              testResults.syphilis = false;
              break;
            case 3:
              testResults.hiv = false;
              testResults.syphilis = false;
              break;
            case 4:
              testResults.control = false;
              break;
            default:
              testResults.control = false;
              break;
          }
          console.log(testResults);
          return testResults;
        }
      );
    }
  });
};

function auth(callback) {
  google.auth.getApplicationDefault(function(err, authClient) {
    if (err) {
      return callback(err);
    }
    if (authClient.createScopedRequired && authClient.createScopedRequired()) {
      authClient = authClient.createScoped([
        "https://www.googleapis.com/auth/cloud-platform"
      ]);
    }
    callback(null, authClient);
  });
}

function indexOfMax(arr) {
  if (arr.length === 0) {
    return -1;
  }

  var max = arr[0];
  var maxIndex = 0;

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      maxIndex = i;
      max = arr[i];
    }
  }
  return maxIndex;
}
// /versions/version1 module.exports

calculateResult = (req, res) => {
  var sample_array = new Array(32);
  for (var i = 0; i < 32; i++) {
    sample_array[i] = new Array(32);
    for (var j = 0; j < 32; j++) {
      sample_array[i][j] = 0;
    }
  }
  this.predict_json(sample_array);
};
