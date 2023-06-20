import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



const emojiDictionary = {
  "😊": "smiling",
  "🤦‍♀️": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
};

 var emojis= Object.keys(emojiDictionary)

function App() {
  const [meaning, setMeaning] = useState("")


const emojiChangeHandler=(e)=>{
const userInput = e.target.value;

var meaning = emojiDictionary[userInput];

if (meaning === undefined) {
  meaning = "we dont have this in our database";
}
setMeaning(meaning);

console.log(meaning);
};


const emojiClicked=(emoji)=>{
  var meaning=emojiDictionary[emoji]
  setMeaning(meaning)
}


  return (
    <>
      <div>
        <h1>inside outt!</h1>
<input  className='input'
onChange={emojiChangeHandler}/>
<h2>{meaning}</h2>
<h3>Emojis we know</h3>
{emojis.map(emoji=>{
  return(
    <span onClick={()=>emojiClicked(emoji)}
    key={emoji}
    style={{fontSize:"2rem", padding:"0.5rem"}}
    >{emoji}</span>
  )
})}
      </div>
    </>
  )
}

export default App
