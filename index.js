const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/313GonePostal.html')
})

app.use(express.static(__dirname + '/public'));

app.get("/form", function(request, response) {
  console.log('Data passed via get');
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

function getRate(request, response) {
  console.log("getRate called");
  const mailMethod = request.query.mailMethod;
  const weight = Number(request.query.weight);

  calculateRate(response, mailMethod, weight);
}

function calculateRate(response, mailMethod, weight) {
  let result = 0;
  console.log("rate called");
  // weight = weight*16;

  if (mailMethod == "stamped") {
    if (weight < 1) {
      result = 0.55;
    } else if (weight < 2) {
      result = 0.70;
    } else if (weight < 3) {
      result = 0.85;
    } else if (weight < 3.5) {
      result = 1;
    } else {
      alert("Weight is outside the approved range for stamped letters");
    }
  } else if (mailMethod == "metered") {
    if (weight < 1) {
      result = 0.5;
    } else if (weight < 2) {
      result = 0.65;
    } else if (weight < 3) {
      result = 0.8;
    } else if (weight < 3.5) {
      result = 0.95;
    } else {
      alert("Weight is outside the approved range for metered letters");
    }
  } else if (mailMethod == "large") {
    if (weight < 1) {
      result = 1;
    } else if (weight < 2) {
      result = 1.15;
    } else if (weight < 3) {
      result = 1.3;
    } else if (weight < 4) {
      result = 1.45;
    } else if (weight < 5) {
      result = 1.6;
    } else if (weight < 6) {
      result = 1.75;
    } else if (weight < 7) {
      result = 1.9;
    } else if (weight < 8) {
      result = 2.05;
    } else if (weight < 9) {
      result = 2.2;
    } else if (weight < 10) {
      result = 2.35;
    } else if (weight < 11) {
      result = 2.5;
    } else if (weight < 12) {
      result = 2.65;
    } else if (weight < 13) {
      result = 2.8;
    } else {
      alert("Weight is outside the approved range for large envolopes");
    }
  } else if (mailMethod == "firstClass") {
    if (weight < 4) {
      result = 3.66;
    } else if (weight < 8) {
      result = 4.39;
    } else if (weight < 12) {
      result = 5.19;
    } else if (weight < 13) {
      result = 5.71;
    } else {
      alert("Weight is outside the approved range for large envolopes");
    }
  }

  const params = {
    weight: weight,
    rate: result,
    mailMethod: mailMethod
  };

  response.render('pages/results', params);
}

