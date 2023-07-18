import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useState } from 'react';

const App = () => {
  const [data, setData] = useState('Hawin');
  const [login, setLogin] = useState(true);
  const [compName, setCompName] = useState('SungSung');

  const handleLogin = () => {
    setLogin(!login)
  }

  return (
    <div>
      <Header data={data} login={login} compName={compName} />
      <h1>This is app page</h1>
      <button onClick={handleLogin}>{login ? 'log out' : 'log in'}</button>
    </div>
  )
}

export default App;
