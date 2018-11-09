
    var getBody = document.body;

    var newElement = document.createElement("h5");

    var date = new Date();
    var currentHour = date.getHours();

    var createTxtMsg;

    if (currentHour >= 3 && currentHour < 10) {
      createTxtMsg ="God morgen";
    } else if (currentHour >= 10 && currentHour < 16) {
      createTxtMsg ="God eftermiddag";
    } else if (currentHour >= 16 && currentHour < 22) {
      createTxtMsg ="God aften";
    } else if (currentHour >= 22 && currentHour < 3) {
      createTxtMsg ="God aften :)";
    } else {
      createTxtMsg ="Der er noget galt med din tidszone";
    }

  var createEleTxt = document.createTextNode(createTxtMsg);
  newElement.appendChild(createEleTxt);

  getBody.appendChild(newElement);

  newElement.setAttribute("class", "welcome");

  newElement.style.cssText = "text-align:center; font-size:50px; font-family:Arial;";
