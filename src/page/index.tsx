import { Navigate, Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

const Page = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/:id" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Page;
