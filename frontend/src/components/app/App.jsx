import Header from '../header/header.jsx';
import Works from '../works/works';
import Footer from '../footer/footer.jsx';
import temp_data from "../../utils/data.js";

function App() {
  return (
   <div>
      <Header types={temp_data.typeOfWork}/>
      <Works works={temp_data.work}/>
      <Footer/>
   </div>
  );
}

export default App;
