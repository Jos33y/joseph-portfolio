import './App.css';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import HomePage from "./pages";

function App() {
  return (
      <>
          <div className="App">
              <HomePage />
          </div>
          <ToastContainer />
      </>
  );
}

export default App;
