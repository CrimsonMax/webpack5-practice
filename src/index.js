import generateJoke from './generateJoke.js'
import './styles/main.scss'
import smile from './assets/laughing.svg'

const smileImg = document.getElementById('laughtImg')
smileImg.src = smile

console.log(generateJoke())