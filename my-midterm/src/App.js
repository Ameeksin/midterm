//Ameek Singh
//301267849
//17/10/2023
import './App.css';
import AddProduct from './components/AddProduct/AddProduct';
import SignUpUser from './components/SignupUser/SignUpUser';


function App() {
  return (
    <div className="App">
      {<AddProduct/>}
      {<SignUpUser/>}

    </div>
  );
}

export default App;
