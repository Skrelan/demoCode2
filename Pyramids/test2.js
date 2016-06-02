function slaves() {

  var m = document.getElementById('myTextField').value;
  if (m.length == 0) {
    alert('Write Some real Text please.');
    return;
  }
  var title = document.getElementById('here');
  title.innerHTML = "<p>"+m+" levels</p>";
  for (var i = 1; i <= m; i++) {
  var container = document.createElement("div");
  container.setAttribute('class','container');
    for (var j = 0; j < i; j++) {
     var div = document.createElement("div");
      div.style.color = "white";
      div.innerHTML = i;
      div.setAttribute('class', 'squares');
      container.appendChild(div);
    }
    title.appendChild(container);
  }

};
