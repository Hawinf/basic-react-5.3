import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import Body from './components/Body';

const App = () => {
  const [data, setData] = useState('Hawin');
  const [login, setLogin] = useState(true);
  const [compName, setCompName] = useState('SungSung');
  const [product, setProduct] = useState([
    {
      no: 1,
      name: 'Milk',
      price: '30.000',
    },
    {
      no: 2,
      name: 'Soft Drink',
      price: '20.000',
    },
  ]);

  const handleLogin = () => {
    setLogin(!login)
  }

  return (
    <div>
      <Header 
          data={data} 
          login={login} 
          compName={compName} 
          handleLogin={handleLogin} 
      />
      <h1>This is app page</h1>
      <Body product={product} />
    </div>
  )
}

export default App;
