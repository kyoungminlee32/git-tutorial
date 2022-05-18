
import './css/Reset.css';
import './css/Default.css';
import './css/common.css';
import './css/font.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Header from './Header';
import Lo10101 from './Lo10101';
import Lo10102 from './Lo10102';
import Re10101 from './product/Re10101';
import Re10102 from './product/Re_10102';
import Lo10201 from './product/Lo10201';
import Lo10202 from './product/Lo10202';
import Lo10301 from './product/Lo10301';

function AppMain() { 
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes> 
          <Route path="/zikiz/" element={<Lo10101 />}></Route>
          <Route path="/zikiz/Lo10102" element={<Lo10102 />}></Route>
          <Route path="/zikiz/product/Lo10201" element={<Lo10201 />}></Route>
          <Route path="/zikiz/product/Lo10202" element={<Lo10202 />}></Route>
          <Route path="/zikiz/product/Lo10301" element={<Lo10301 />}></Route>
          <Route path="/zikiz/product/Re10101" element={<Re10101 />}></Route>
          <Route path="/zikiz/product/Re_10102" element={<Re10102 />}></Route>
        </Routes> 
      </BrowserRouter>
    </div>
  );
}



export default AppMain;
