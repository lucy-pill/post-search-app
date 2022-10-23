// Packages
import { Routes, Route } from 'react-router-dom';

// Components
import Main from './pages/Main';
import Detail from './pages/Detail'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/:type/:id' element={<Detail />} />
    </Routes>
  );
}

export default App;
