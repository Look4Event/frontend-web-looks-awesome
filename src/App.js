import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/Home';
import HardFilterPage from './pages/HardFilter';
import EventDisplayGuestPage from './pages/EventDisplayGuest';
import FormLayout from './components/layouts/FormLayout';
import EditSharePage from './pages/EditShare';
import ShareVote from './pages/ShareVote';
import ParticipantViewPage from './pages/ParticipantView';

function App() {
  return (
    <div>
      <FormLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<HardFilterPage />} />
          <Route path="/vote-invitation" element={<ShareVote />} />
          <Route path="/results" element={<EventDisplayGuestPage />} />
          <Route path="/edit-share" element={<EditSharePage />} />
          <Route path="/vote" element={<ParticipantViewPage />} />
        </Routes>
      </FormLayout>
    </div>
  );
}

export default App;