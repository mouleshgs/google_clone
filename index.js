function search() {
  var x = document.getElementById("searchbar").value;
  if (x == "") {
    alert("Please enter your question.");
  } else {
    window.open("https://www.google.com/search?q=" + x);
  }
}

function gmail() {
  if (confirm("Are you sure to open gmail?")) {
    window.open(
      "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox",
      "_blank"
    );
  }
}

function changeColor() {
  var change = document.getElementById("searchInput");
  change.style.border = "1px solid rgb(0, 132, 255)";
}


function onSuccess(googleUser) {
  console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
}
function onFailure(error) {
  console.log(error);
}
function renderButton() {
  gapi.signin2.render('my-signin2', {
    'scope': 'profile email',
    'width': 240,
    'height': 50,
    'longtitle': true,
    'theme': 'dark',
    'onsuccess': onSuccess,
    'onfailure': onFailure
  });
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}
