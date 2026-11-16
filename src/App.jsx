import { Route, Routes } from 'react-router-dom';
import './App.css';
import SiteLayout from './components/SiteLayout.jsx';
import CertificatesPage from './pages/CertificatesPage.jsx';
import HomePage from './pages/HomePage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="certificates" element={<CertificatesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
