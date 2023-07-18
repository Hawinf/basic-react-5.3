import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useState } from 'react';

const App = () => {
  const [data, setData] = useState('Hawin');
  const [login, setLogin] = useState(false)

  return (
    <div>
      <Header data={data} login={login} />
      <h1>This is app page</h1>
    </div>
  )
}

export default App;
