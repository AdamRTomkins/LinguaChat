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


$(document).on('click', '.show-translation', function() {
     $(this).next('div.translation').toggle();
});

$(document).on('click', '.show-suggestion', function() {
    $(this).next('.change').toggle();
});

$(document).on('click', '.submit-suggestion', function() {

    reciever = $(this).attr("user_id");
    message_id=$(this).attr("message_id");

    message = {};
    message['sender'] = connection.session.id;
    message['reciever'] = reciever;
    message['message_id'] = message_id;
    fc = $(this).prev().prev()
    console.log(fc)
    message['suggestion'] = document.getElementById("suggestion-"+message_id).value;
    message['reason'] = document.getElementById("suggestion-"+message_id).value;;

    console.log(message);
    channel = 'chat.edit.' + reciever + '.' + message_id
    console.log(channel);
    connection.session.publish(channel, [message]);

    $(this).prev('.change').toggle();

});
   
//



