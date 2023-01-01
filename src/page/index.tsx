import { Navigate, Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

const Page = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/" element={<Home></Home>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Page;
