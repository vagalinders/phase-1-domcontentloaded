document.addEventListener('DOMContentLoaded', function(){
    console.log('the DOM has loaded')
    const text = document.getElementById('text');
    console.log(text.textContent);
    text.textContent = 'This is really cool!';
    
});






