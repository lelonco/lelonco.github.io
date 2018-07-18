var mainform =document.querySelector('.contact');
var form =mainform.querySelector('.contact__fildset');
var nameimput = form.querySelector('#name');
var email =form.querySelector('#email');
var validateBtn = form.querySelector('.submit');
var elems=form.querySelectorAll('.contact__input');
console.log(email);
console.log(nameimput);

mainform.addEventListener('submit', function (event) {
  event.preventDefault();
 var errors = form.querySelectorAll('.error');
    for(var i=0;i<errors.length;i++){
      errors[i].remove();
    }
  for(var i=0;i<elems.length;i++)
  {
    if(!elems[i].value)
    {
        console.log(elems[i]+" is Empty");
        var error = document.createElement('span');
        error.className='error';
        error.innerHTML = 'Is Empty!';
        elems[i].parentElement.insertBefore(error, elems[i]);
    }
  }

});
