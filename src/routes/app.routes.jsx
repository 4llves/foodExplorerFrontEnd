import { Route, Routes } from 'react-router-dom';

import { Dish } from '../pages/Dish';
import { Home } from '../pages/Home';
import { NewDish } from '../pages/NewDish';
// import { Profile } from '../pages/Profile';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/createdish" element={<NewDish />} />
      <Route path="/dish/:id" element={<Dish />} />
      {/* <Route path="/profile" element={<Profile />} /> */}
    </Routes>
  );
}
