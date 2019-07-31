var add_button = document.getElementById('addbutton');
var item = document.getElementById('item');


function add_click(){
  var input = item.value;
  if (input === ''){
    alertify.set('notifier','delay', 3);
    alertify.set('notifier','position', 'top-center');
    alertify.error('you need to enter an activity name first!');
  }
  else{
    
  }

}

add_button.addEventListener("click", add_click);
