function newItem(){
  let li=$('<li></li>');
  let inputValue=$('#input').val();
  li.append(inputValue);
  if (inputValue===''){
    alert('Fill in the blank');
  }else{
    let list=$('#list');
    list.append(li);
  }

  function crossOut(){
    li.toggleClass('strike');
  }
  li.on('dblclick', function(crossOut){
      li.toggleClass('strike');
})
let crossOutButton=$('<crossOutButton></crossOutButton>');
crossOutButton.append(document.createTextNode('X'));
li.append(crossOutButton);

function deleteItem(){
  li.toggleClass('delete');
}

$(crossOutButton).on('click',function(){
  li.toggleClass('delete')
})

$('#list').sortable();

}
