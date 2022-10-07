var bStop = document.querySelector('#stopButton')
var bSlow = document.querySelector('#slowButton')
var bGo = document.querySelector('#goButton')

var lStop = document.querySelector('#stopLight')
var lSlow = document.querySelector('#slowLight')
var lGo = document.querySelector('#goLight')


bStop.addEventListener('click', function(event){
  if (lStop.style.backgroundColor ==='black') {
      lStop.style.backgroundColor = 'red'
      console.log('bulb on')
  } else {
    lStop.style.backgroundColor = 'black'
    console.log('bulb off')
  }
})


bSlow.addEventListener('click', function(event){
  if (lSlow.style.backgroundColor ==='black') {
      lSlow.style.backgroundColor = 'orange'
      console.log('bulb on')
  } else {
    lSlow.style.backgroundColor = 'black'
    console.log('bulb off')
  }
})


bGo.addEventListener('click', function(event){
  if (lGo.style.backgroundColor ==='black') {
      lGo.style.backgroundColor = 'green'
      console.log('bulb on')
  } else {
    lGo.style.backgroundColor = 'black'
    console.log('bulb off')
  }
})



bStop.addEventListener('mouseover',function(event){
  console.log("Entered Stop button")
})
 
bStop.addEventListener('mouseout',function(event){
  console.log("Left Stop button")
})


bSlow.addEventListener('mouseover',function(event){
  console.log("Entered Slow button")
})
 
bSlow.addEventListener('mouseout',function(event){
  console.log("Left Slow button")
})

bGo.addEventListener('mouseover',function(event){
  console.log("Entered Go button")
})
 
bGo.addEventListener('mouseout',function(event){
  console.log("Left Go button")
})


