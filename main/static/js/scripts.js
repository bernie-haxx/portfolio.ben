 AOS.init();



const redCirc = new mojs.Shape({
  // isShowStart:true,
  left:0 ,top:0,
  stroke: 'black',
  fill:'none',
  radius: 15,
  strokeWidth:10,
  duration:150
  
})
.then({
  strokeWidth:0,
  scale:{to:2, easing:'sin.in'},
  duration:200
  
});

const sparks = new mojs.Burst({
  left:0 ,top:0,
  radius:{0:50},
  angle:{0:90},
  count:30,
  children:{
    shape: 'cross',
    points: 15,
    stroke: 'white',
    fill: 'none',
    duration:300,
  }
  
});
const redsparks = new mojs.Burst({
  left:0 ,top:0,
  radius:{150:350},
  angle:{0:90, easing:'cubic.out'},
  count:9,
  children:{
    shape: 'line',
    points: 15,
    stroke: {'black':'transparent'},
    strokeWidth: 5,
    scaleX:{0.5:0},
    degreeShift: 'rand(-90,90)',
    radius:'rand(20, 300)',
    delay:'rand(0,150)',
    duration:200,
  }
  
});
const triangles = new mojs.Burst({
  left:0 ,top:0,
  radius:{0:100,easing:'cubic.out'},
  angle:{360:0, easing:'quad.out'},
  left:0,
  count:20,
  children:{
    shape: 'polygon',
    points: 3,
    // angle:{300:0},
    radius:{10:100},
    duration:3000,
    fill:['black','white','grey']
  }
  
});


document.addEventListener( 'click', function (e){
  redCirc
    .tune({ x: e.pageX, y: e.pageY })
    .replay();
  sparks
    .tune({ x: e.pageX, y: e.pageY })
    .replay();

  
});




$(document).ready(function() {
  $('.baseline').animate({left:'0'},{
    duration: 2000
  });
  $('.me').animate({left:'0'},{
    duration: 4000
  });
});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

$("#me").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top,
        
    });
});

anime ({
  targets: ['#welcome', '#back'],
  width: '0px',
  delay: function(el) {
    if (el.classList.contains('first')) {
      return 0;
    } else {
      return 1500;
    }
  },
  duration: 1500,
  loop: false,
  easing: 'easeInOutQuad'
});


$(window).scroll(function(){
    $("#header").css("opacity", 1 - $(window).scrollTop() / 500);
  });

/// Scroll fade in when 100px from the top 
$(window).scroll(function() {
  if ($(this).scrollTop()> 50) {
    $('nav').fadeIn();
   } else {
    $('nav').fadeOut();
   }
});

/// Scroll back to top
$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

