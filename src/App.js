import './App.css';
import Header from './component/Header';
import Nation from './component/Nation';
import {BrowserRouter,  Route,  Routes} from 'react-router-dom'
import Filter from './component/Filter';
import Country from './component/Country';



function App() {
  
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Filter/>
    <Routes>
      <Route path='/' element={<Nation/>}></Route>
      <Route path='/:name' element={<Country/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
