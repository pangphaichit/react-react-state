import "./App.css";
import { useState } from "react";

function App() {
  const [greetingMessage, setgreetingMessage] = useState("")
  const handleSawadeeClick = () => {
    setgreetingMessage("สวัสดี!")
  }

  const handleHiClick = () => {
    setgreetingMessage("Hi!")
  }

  const handleNihaoClick = () => {
    setgreetingMessage("你好!")
  }

  return (
    <div className="App">
      <div className="greeting-container"> {greetingMessage ? greetingMessage : "Greeting Message"} </div>
      <div className="buttons">
        <button onClick={handleSawadeeClick}>สวัสดี!</button>
        <button onClick={handleHiClick}>Hi!</button>
        <button onClick={handleNihaoClick}>你好!</button>
      </div>
    </div>
  );
}

export default App;
