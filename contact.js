//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js
//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js


document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });
