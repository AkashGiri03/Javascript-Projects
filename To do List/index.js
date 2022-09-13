function addtodo()
{
    var taskname = document.getElementById('taskname').value 
    var tododiv = document.getElementById('mytodo')

    var newtodo = document.createElement('div')
     
      var todoname = document.createElement('li')
     todoname.innerHTML = taskname 
     var deletebtn = document.createElement('i')
     deletebtn.classList.add('fa')
     deletebtn.classList.add('fa-trash') 

     newtodo.appendChild(todoname)
     newtodo.appendChild(deletebtn)

     tododiv.appendChild(newtodo)
}


var tododiv = document.getElementById('mytodo')
tododiv.addEventListener('click',deleteitem)


function deleteitem(e)
{
  const element = e.target
  if(element.classList[0]=='fa')
  {
    element.parentElement.remove()
  }
  
}