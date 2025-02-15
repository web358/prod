
let cards = document.querySelectorAll('.work')  
   function show_hide(id) {
       cards.forEach(x => {
          x.style.display = x.getAttribute('id') == id ? 'block' : 'none';
          document.querySelector('.bg').style.display = 'none'
          document.querySelector('.bg2').style.display = 'none'
        });
        
      }

      function show_first() {
        cards.forEach(x => x.style.display = 'none')
        if (window.matchMedia('screen and (min-width: 800px)').matches) {
          document.querySelector('.bg').style.display = 'block'
        }
        if (window.matchMedia('screen and (max-width: 760px)').matches) {
          document.querySelector('.bg2').style.display = 'block'
        }
        }

let titles = document.querySelectorAll('h4')
titles.forEach(x => {
  Array(24).fill().forEach(() => {
    let bubbleDiv = document.createElement('span')
    bubbleDiv.className = 'bubble2'
      x.appendChild(bubbleDiv)
  })
  x.addEventListener('click', () => {
    x.querySelectorAll('.bubble2').forEach(x => x.classList.add('anim'))
    setTimeout(function(){
      x.querySelectorAll('.bubble2').forEach(x => x.classList.remove('anim'))
    },1000)
}) 
})

let desc = Array.from(document.querySelectorAll('.product')) // zaduljitelno Array.from ina4e dava indexOf is not a function
let img = Array.from(document.querySelectorAll('.image'))
let close2 = Array.from(document.querySelectorAll('.close2'))

   desc.forEach(x => x.addEventListener('click', show)) 
  function show(e){
    let i = desc.indexOf(e.target)
    if(i !== -1){
        img[i].style.display = 'block'
        close2[i].style.display = 'block'
        onBlur()
    }
  }

  close2.forEach(x => x.addEventListener('click', hide)) 
  function hide(e){
    let i = close2.indexOf(e.target)
    if(i !== -1){
      img[i].style.display = 'none'
      close2[i].style.display = 'none'
      offBlur()
    }
  }

  let li = Array.from(document.querySelectorAll('li'))
  li[0].addEventListener('click', showDesc1)
  function showDesc1() {
    Array.from(li[0].children).forEach(x => x.style.display = x.style.display === 'block' ? 'none' : 'block')
    li[0].firstChild.style.display = 'inline-block'
  }
  li[1].addEventListener('click', showDesc2)
  function showDesc2() {
    Array.from(li[1].children).forEach(x => x.style.display = x.style.display === 'block' ? 'none' : 'block')
    li[1].firstChild.style.display = 'inline-block'
  }
  li[2].addEventListener('click', showDesc3)
  function showDesc3() {
    Array.from(li[2].children).forEach(x => x.style.display = x.style.display === 'block' ? 'none' : 'block')
    li[2].firstChild.style.display = 'inline-block'
  }
  li[3].addEventListener('click', showDesc4)
  function showDesc4() {
    Array.from(li[3].children).forEach(x => x.style.display = x.style.display === 'block' ? 'none' : 'block')
    li[3].firstChild.style.display = 'inline-block'
  }
  li[4].addEventListener('click', showDesc5)
  function showDesc5() {
    Array.from(li[4].children).forEach(x => x.style.display = x.style.display === 'block' ? 'none' : 'block')
    li[4].firstChild.style.display = 'inline-block'
  }


  function onBlur(){
    document.querySelector('.filter_buttons2').classList.add('blurred')
    document.querySelector('.nav').classList.add('blurred')
  }

  function offBlur(){
    document.querySelector('.filter_buttons2').classList.remove('blurred')
    document.querySelector('.nav').classList.remove('blurred')
  }