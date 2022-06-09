
import { Provider } from 'react-redux';
import './App.css';
import RoleList from './components/Roles/RoleList';
import { store } from './components/redux/store';


function App() {
  return (
    <Provider store={store}>
      <RoleList />
    </Provider>
  );
}

export default App;
