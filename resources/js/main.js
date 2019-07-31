add_button = document.getElementById('addbutton');
item = document.getElementById('item');
console.log(add_button);

add_button.addEventListener ("click", function() {
  if (item.value === ''){
    alert("you must enter an activity first");
  }
});
