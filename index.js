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
