
function save_options() {
  var emission = document.getElementById("emission");
  var carbonEmission = emission.value;
  localStorage["carbonEmission"] = carbonEmission;

  // Update status to let user know options were saved.
  var status = document.getElementById("save-message");
  status.innerHTML = "Saved!";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
}

function S(key) { return localStorage[key]; }

function restore_options() {
  var emission = document.getElementById("emission");
  emission.setAttribute('value', S("carbonEmission"));
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('save-button').addEventListener('click', save_options);
});

window.onload = restore_options ;

google_analytics('UA-1471148-11');