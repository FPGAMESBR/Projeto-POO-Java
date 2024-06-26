import './app.css';
import HomePage from './pages/home/HomePage';
import YearPage from './pages/years/YearPage';
import DiscPage from './pages/disciplines/DiscPage';
import Register from './pages/student/register';
import Students from './pages/student/students';
import Grade from './pages/disciplines/grade';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/years" element={<YearPage />} />
        <Route path="/disc" element={<DiscPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/students" element={<Students />} />
        <Route path="/students/:serieAluno" element={<Students />} />
        <Route path="/grade/:subject" element={<Grade />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
