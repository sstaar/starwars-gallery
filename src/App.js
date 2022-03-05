import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import People from './components/people';
import Tabs from './components/tabs';
const App = () => {
  return (
    <BrowserRouter>
      <Tabs />
      <Routes>
        <Route path='/people' element={<People />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
