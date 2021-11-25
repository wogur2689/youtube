import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Subscription from './pages/Subscription';

function App() {
  return (
      <Routes>
        <Route path="/" exact={true} element={<Home/>} />
        <Route path="/Explore" element={<Explore/>} />
        <Route path="/Subscription" element={<Subscription/>} />
      </Routes>
  );
}

export default App;