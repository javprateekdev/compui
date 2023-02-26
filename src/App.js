import './App.css';
import Page from './Page';
import { Provider } from 'react-redux';
import store from './store/store';
import View from './View';
import Navbar from './Navbar';
function App() {
  return (
    <div className="App">
     <Navbar/>
      <Provider store={store}>
       <Page/>
       <View/>
     </Provider>
       
    </div>
  );
}

export default App;
