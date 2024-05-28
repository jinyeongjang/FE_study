import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import { Outlet } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';

const Layout = () => (
  <>
    <Nav />
    <Outlet />
  </>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LoginPage />} />
        <Route path="main" element={<MainPage />} />
        <Route path=":movieId" element={<DetailPage />} />
        <Route path="search" element={<MainPage />} />
      </Route>
    </Routes>
  );
}

export default App;