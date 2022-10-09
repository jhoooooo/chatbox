const msgLimit = 5;
const msgParent = document.querySelector('.sl__chat__layout'); //container

if(msgParent.children.length > msgLimit){
  $('#log>div').not($('#log>div').slice(-msgLimit)).fadeOut().remove(500); //slice out every div except msglimit thus negative.
};

//put inside onEventReceived.
