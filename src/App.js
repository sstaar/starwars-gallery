import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import People from './components/people';
import PersonDetails from './components/people/Details';
import Planet from './components/planets';
import PlanetDetails from './components/planets/Details';
import Tabs from './components/tabs';

const App = () => {
  return (
    <BrowserRouter>
      <Tabs />
      <Routes>
        <Route path='/people' element={<People />} />
        <Route path='/people/:id' element={<PersonDetails />} />
        <Route path='/planets' element={<Planet />} />
        <Route path='/planets/:id' element={<PlanetDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
