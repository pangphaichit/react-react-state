import "./App.css";
import { useState } from "react";
// เมื่อผู้ใช้งานเข้าหน้าเว็บไซต์ครั้งแรก หรือกดรีเฟรช ข้อความเริ่มต้นในกล่องสีเขียวฟ้าจะเป็น "Greeting Message"
// เมื่อผู้ใช้งานกดปุ่ม "สวัสดี!" ข้อความในกล่องสีเขียวฟ้า จะเปลี่ยนไปเป็นคำว่า "สวัสดี"
// เมื่อผู้ใช้งานกดปุ่ม "Hi!" ข้อความในกล่องสีเขียวฟ้า จะเปลี่ยนไปเป็นคำว่า "Hi!"
// เมื่อผู้ใช้งานกดปุ่ม "你好!" ข้อความในกล่องสีเขียวฟ้า จะเปลี่ยนไปเป็นคำว่า "你好!"

function App() {
  const [display, setDisplay] = useState("Greeting Message");
  const handleThaiClick = () => {
    setDisplay("สวัสดี!");
  };
  const handleEngClick = () => {
    setDisplay("Hi!");
  };
  const handleChineseClick = () => {
    setDisplay("你好!");
  };
  return (
    <div className="App">
      <div className="greeting-container">{display}</div>
      <div className="buttons">
        <button onClick={handleThaiClick}>สวัสดี!</button>
        <button onClick={handleEngClick}>Hi!</button>
        <button onClick={handleChineseClick}>你好!</button>
      </div>
    </div>
  );
}

export default App;
