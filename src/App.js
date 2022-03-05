import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Films from './components/films';
import FilmDetails from './components/films/Details';
import People from './components/people';
import PersonDetails from './components/people/Details';
import Planet from './components/planets';
import PlanetDetails from './components/planets/Details';
import Species from './components/species';
import SpeciecesDetails from './components/species/Details';
import StarShips from './components/starships';
import StarShipsDetails from './components/starships/Details';
import Tabs from './components/tabs';
import Vehicles from './components/vehicles';
import VehiclesDetails from './components/vehicles/Details';

const App = () => {
  return (
    <BrowserRouter>
      <Tabs />
      <Routes>
        <Route path='/people' element={<People />} />
        <Route path='/people/:id' element={<PersonDetails />} />
        <Route path='/planets' element={<Planet />} />
        <Route path='/planets/:id' element={<PlanetDetails />} />
        <Route path='/films' element={<Films />} />
        <Route path='/films/:id' element={<FilmDetails />} />
        <Route path='/species' element={<Species />} />
        <Route path='/species/:id' element={<SpeciecesDetails />} />
        <Route path='/starships' element={<StarShips />} />
        <Route path='/starships/:id' element={<StarShipsDetails />} />
        <Route path='/vehicles' element={<Vehicles />} />
        <Route path='/vehicles/:id' element={<VehiclesDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
