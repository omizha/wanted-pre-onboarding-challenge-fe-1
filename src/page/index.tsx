import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Auth from './Auth';
import Home from './Home';

const Page = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Page;
