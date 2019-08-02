var add_button = document.getElementById('addbutton');
var list = document.getElementById('todo');


function remove_item(){
  list = this.parentNode.parentNode.parentNode;
  item = this.parentNode.parentNode;
  // text = item.getAttribute("value");
  text = item.innerText;
  alertify.set('notifier','delay', 2);
  alertify.message("Removed " + text + ".");
  list.removeChild(item);

}

function check_item(){
  console.log(this)
  if (this.innerHTML === "<img src=\"resources/css/success.png\" width=\"30px\" height=\"30px\">"){
    this.innerHTML =  "<img src=\"resources/css/successs.png\" width=\"30px\" height=\"30px\">";
  }
  else{
    this.innerHTML =  "<img src=\"resources/css/success.png\" width=\"30px\" height=\"30px\">";
    alertify.set('notifier','delay', 3);
    alertify.set('notifier','position', 'bottom-right');
    alertify.success('good job');
  }
}


function add_click(){
  var item = document.getElementById('item');
  var input = item.value;
  if (input === ''){
    alertify.set('notifier','delay', 3);
    alertify.set('notifier','position', 'bottom-right');
    alertify.error('you need to enter an activity name first!');
  }
  else{
    var new_item = document.createElement('li');
    new_item.innerText = input;

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    var done = document.createElement('button');
    done.classList.add('done');
    done.innerHTML =  "<img src=\"resources/css/successs.png\" width=\"30px\" height=\"30px\">";
    done.addEventListener('click', check_item);

    var remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML =  "<img src=\"resources/css/can.png\" width=\"30px\" height=\"30px\">";
    remove.addEventListener('click', remove_item);

    buttons.appendChild(done);
    buttons.appendChild(remove);


    new_item.appendChild(buttons);
    list.prepend(new_item);
  }
  item.value = '';
}

add_button.addEventListener("click", add_click);
