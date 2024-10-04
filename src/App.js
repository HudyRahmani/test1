import './App.css'
import { useToggle } from './pages/useToggle';
function App() {

  const [isvisible , toggle] = useToggle()
  return (
    <div className={`App`}>
      
       <button onClick={toggle}>
        {toggle ? "hide" :"show"}
       </button>

       {isvisible &&
       <p>this is some text for test click on button to hide</p>
      }

    </div>
  ); 

}
export default App;