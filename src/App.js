import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignUp from '../src/Components/SignUp.jsx';
import LogIn from '../src/Components/LogIn.jsx';
import Home from './Components/Home.jsx';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="login" element={<LogIn />} />
          <Route path="home" element={<Home />} />
        </Routes >
      </BrowserRouter >
    </div>
  );
}

export default App;
