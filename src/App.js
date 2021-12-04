//COMPONENTS AND PAGES
import Home from './pages/Home';
import Nav from './components/Nav';
//Styling
import GlobalStyles from './components/GlobalStyles';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/game/:id'} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
