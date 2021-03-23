// select window from keydown
window.addEventListener("keydown",function(e){
    // try consolelogginf if we click a key whats that after console logginf it
    // console.log(e)
    // so you get a object with a lot of keys and values so we only need is keyCode
    // console.log(e.keyCode)
    // grab the audio with data-key equal to the keycode you press
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`)
    // select a key thats associate with the key you click it
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`)
    // check what key you have selected
    // console.log(key)
    if (!audio){
        return //this stops the function to run all together if not any audio associated with the key
    }
    // rewind to start
    audio.currentTime = 0
    // plays the sound
    audio.play()
    key.classList.add('playing')
    console.log(key)
})

const removeTransition = function(e){
    if (e.propertyName !== 'transform') //skip if not a transform
      return
    this.classList.remove('playing')
  }

  //select every key on the page to listen on each one
  const keys = document.querySelectorAll('.key')
  console.log(keys)
  keys.forEach(function(key){
    key.addEventListener('transitionend', removeTransition)
  })

