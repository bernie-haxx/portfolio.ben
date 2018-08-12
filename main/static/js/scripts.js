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
    stroke: {'red':'transparent'},
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
  radius:{0:200,easing:'cubic.out'},
  angle:{360:0, easing:'quad.out'},
  left:0,
  count:20,
  children:{
    shape: 'polygon',
    points: 3,
    // angle:{300:0},
    radius:{10:100},
    duration:3000,
    fill:['red','purple','yellow']
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