import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './content/ThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

//Tạo fake comment
function emitComment(id) {
  setInterval(()=>{
    window.dispatchEvent(
      new CustomEvent( `lesson-${id}`,{
        detail: `Nội dung của bài học ${id}`
      })
    )
  }, 2000)

  return () => {
    clearInterval()
  }
}

emitComment(1)
emitComment(2)
emitComment(3)
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
