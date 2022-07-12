import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/Home';
import HardFilterPage from './pages/HardFilter';
import EventDisplayGuestPage from './pages/EventDisplayGuest';
import FormLayout from './components/layouts/FormLayout';

function App() {
  return (
    <div>
      <FormLayout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/create' element={<HardFilterPage />} />
          <Route path='/results' element={<EventDisplayGuestPage />} />
        </Routes>
      </FormLayout>
    </div>
  );
}

export default App;