import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Subscription from './pages/Subscription';
import Assignment from './pages/Assignment';

function App() {
  return (
      <Routes>
        <Route path="/" exact={true} element={<Home/>} />
        <Route path="/Explore" element={<Explore/>} />
        <Route path="/Subscription" element={<Subscription/>} />
        <Route path="/Assignment" element={<Assignment/>} />
      </Routes>
  );
}

export default App;