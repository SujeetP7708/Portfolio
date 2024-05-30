
//loaidng animation

window.addEventListener('load', function() {
    setTimeout(function() {
      document.querySelector('.loading1').style.height = '0px';
      
    }, 500);
    setTimeout(function() {
    
      document.querySelector('.loading2').style.height = '0px';
    }, 700);
    setTimeout(function() {
    
      document.querySelector('.name').classList.add('active');
    }, 1500);
    setTimeout(function() {
    
      document.querySelector('.profession').classList.add('active');
    }, 1600);
    setTimeout(function() {
    
      document.querySelector('.intro').classList.add('active');
    }, 1700);
    setTimeout(function() {
    
      document.querySelector('.explore').classList.add('active');
    }, 1800);
    setTimeout(function() {
    
      document.querySelector('.navigation').classList.add('active');
    }, 1900);
    setTimeout(function() {
    
      document.querySelector('.home-bottom').classList.add('active');
    }, 1900);

  });

// about animation
  window.addEventListener('scroll',function(){
        let abouthead=document.querySelector('.about-head')
        let aboutcontent=document.querySelector('.about-content')
        let aboutpos=abouthead.getBoundingClientRect().top;
        let aboutcpos=aboutcontent.getBoundingClientRect().top;
        if(aboutpos<500 || aboutcpos<500 )
        {
        abouthead.classList.add('active')
        aboutcontent.classList.add('active')
        }
  })

  //about before animation

  window.addEventListener('scroll',function()
  {
    var about = document.querySelector('.about');
    var skill = this.document.querySelector('.skills')
    var skillhead = this.document.querySelector('.skills-head')
    var skillcontent = this.document.querySelector('.skills-content')
    var works = document.querySelector('.works-heading')
      var skilltop=skill.getBoundingClientRect().top;
      var skillht=skillhead.getBoundingClientRect().top;
      var skillct=skillcontent.getBoundingClientRect().top;
      var abouttop=about.getBoundingClientRect().top;
      var workstop=works.getBoundingClientRect().top;
      if(abouttop<300 )
      {
        about.classList.add('active')
      
      }
      if(skillht<600 )
      {
        skillhead.classList.add('active')
      
      }
      console.log(skillct)
      if(skillct<1200 )
      {
        
        skillcontent.classList.add('active')
      
      }
      if( workstop<600)
      {
      
        works.classList.add('active')
      }
      
      if( skilltop<600)
      {
      
       skill.classList.add('active')
      }

  })