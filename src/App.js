import Burger from './Burger/Burger';
import rootReducer from './Redux/Reducer/rootReducer';

function App() {
  return (
    <div className="App">
      <rootReducer/>
      <Burger/>
    </div>
  );
}

export default App;
