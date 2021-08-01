const msgLimit = 5;
const msgParent = document.querySelector('.sl__chat__layout');

if(msgParent.children.length > msgLimit){
  $('#log>div').not($('#log>div').slice(-msgLimit)).fadeOut().remove(500);
};

//put inside onEventReceived.
