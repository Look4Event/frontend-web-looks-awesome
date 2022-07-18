import { Route, Routes, useLocation } from 'react-router-dom';

import HomePage from './pages/Home';
import HardFilterPage from './pages/HardFilter';
import EventDisplayGuestPage from './pages/EventDisplayGuest';
import FormLayout from './components/layouts/FormLayout';
import CreateAccountPage from './pages/CreateAccount';

function App() {
  const {pathname} = useLocation();
  console.log(pathname);

  if (pathname !== '/create-account') {
    return (
      <div>
        <FormLayout>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/create' element={<HardFilterPage />} />
            <Route exact path='/results' element={<EventDisplayGuestPage />} />
          </Routes>
        </FormLayout>
      </div>
    );
  } else {
      return (
      <div>
        <Routes>
          <Route exact path='/create-account' element={<CreateAccountPage />} />
        </Routes>
      </div>
      );
  } 
}

export default App;