import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import State from "./State";
import Effect from "./Effect";
import Home from "./Home";
import Ref from "./Ref";
import Memo from "./Meno";
import Reducer from "./Reducer";
import UContenxt from "./UContext";
import ImperativeHandle from "./ImperativeHandle";

function App() {
  return(
    <div>

      <ul className="nav">
        <li className="nav-item">
          {/* <a className="nav-link" href="/home">Home</a> */}
          <Link to='/home' className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/state' className="nav-link">Uses for useState()</Link>
        </li>
        <li className="nav-item">
          <Link to='/effect' className="nav-link">Uses for useEffect()</Link>
        </li>
        <li className="nav-item">
        <Link to='/ref' className="nav-link">Uses for useRef()</Link>
        </li>
        <li className="nav-item">
        <Link to='/memo' className="nav-link">Uses for useMemo()</Link>
        </li>
        <li className="nav-item">
        <Link to='/reducer' className="nav-link">Uses for useReducer()</Link>
        </li>
        <li className="nav-item">
        <Link to='/context' className="nav-link">Uses for useContext()</Link>
        </li>
        <li className="nav-item">
        <Link to='/imperative-handle' className="nav-link">Uses for useImperativeHandle()</Link>
        </li>
      </ul>

     

      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/state" element={<State/>}/>
        <Route path="/effect" element={<Effect />} />
        <Route path="/ref" element={<Ref />} />
        <Route path="/memo" element={<Memo />} />
        <Route path="/reducer" element={<Reducer />} />
        <Route path="/context" element={<UContenxt />} />
        <Route path="/imperative-handle" element={<ImperativeHandle />} />
      </Routes>

    </div>
  )
}

export default App;
