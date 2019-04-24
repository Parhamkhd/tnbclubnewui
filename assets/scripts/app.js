    
    
    document.getElementById('login').addEventListener('click' ,function(){
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('login-overlay').style.display = 'block';
        document.getElementById('overlay').classList.add('animated', 'fadeInDown');
        document.getElementById('login-overlay').classList.add('animated', 'fadeInDown');




    });

    document.getElementById('overlay').addEventListener('click', function(){
        document.getElementById('overlay').style.display ='none';
        document.getElementById('login-overlay').style.display = 'none';

    });

    document.getElementById('cancel').addEventListener('click', function(){
        document.getElementById('overlay').style.display ='none';
        document.getElementById('login-overlay').style.display = 'none';

    });

    var mobileDisplay = document.getElementById('mobileMenu');

function openClose(){
    if(mobileDisplay.style.display == ''){
        mobileDisplay.style.display = "block";
        document.getElementById('mobileMenu').classList.add('animated', 'fadeInDown');

    }else if(mobileDisplay.style.display == 'block'){
        mobileDisplay.style.display = "";

    }
    
}
    

$(window).resize(function() {
    if(window.innerWidth >= 990){
        mobileDisplay.style.display = "";
        document.getElementById('nav-icon3').classList.remove('open');

    }

    if(window.innerWidth<990){
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('login-overlay').style.display = 'none';

    }
});