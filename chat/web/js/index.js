(function() {

  'use strict';

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

})();


$('.show-translation').click(function (){
    $(this).next('.translation').toggle();
});


$('.show-suggestion').click(function (){
    $(this).next('.change').toggle();
});


document.getElementById("myBtn").addEventListener("click", function(){
    var timeline = document.getElementById("tl");
    var li = document.createElement("li");
    var icon = document.createElement("div");

    icon.className="timeline-badge danger"
    icon.innerHtml= '<i class="glyphicon glyphicon-check"></i>'

    li.className="timeline-inverted";
    var dp = document.createElement("div");
    dp.className = "timeline-panel";
    var dh = document.createElement("div");
    dh.classname = "timeline-heading";
    dh.innerHTML='<h4 class="timeline-title">Mussum ipsum cacilds</h4>';

    var db = document.createElement("div");
    db.classname = "timeline-body";
    var msg = document.createElement("p");
    msg.innerHTML=document.getElementById("msg").value;
    li.appendChild(icon);
    db.appendChild(msg)  
    dp.appendChild(dh);     
    dp.appendChild(db);     
    li.appendChild(dp);

    timeline.appendChild(li);
    window.scrollTo(0,document.body.scrollHeight);   

  });
