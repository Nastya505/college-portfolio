import {Routes, Route, Link} from "react-router-dom";
import { Scrollbars } from 'rc-scrollbars';

import Homepage from "../../pages/Homepage/Homepage";
import Studentspage from "../../pages/Studentspage/Studentspage";
import Portfoliopage from "../../pages/Portfoliopage/Portfoliopage";
import Workpage from "../../pages/Workpage/Workpage";
import Layout from "../layout/layout";

function App() {
  return (
    <>
     <Scrollbars style={{ height: "100vh" }}>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="students" element={<Studentspage />} />
        <Route path="portfolio" element={<Portfoliopage />} />
        <Route path="work/:id" element={<Workpage />} />
        </Route>
      </Routes>
     </Scrollbars>
    </>
  );
}

export default App;
