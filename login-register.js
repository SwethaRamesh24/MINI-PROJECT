var form= document.getElementById('form');
form.addEventListener('mousemove',(e)=>{
    var x = (window.innerWidth/2 -e.pageX)/12;
    var y = (window.innerHeight/2 -e.pageX)/12;
    form.style.transform = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg)'
}); //var a=10;
//var b=30;
//console.log(a+b);