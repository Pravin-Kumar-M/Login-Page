
import Containers from './containers';
import Front from './containers/front';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StaffContainer from './containers/staffIndex';


function App() {

  return (

    < div className="App" >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Front />} />
          <Route path='/student-login' element={<Containers />} />
          <Route path='/staff-login' element={<StaffContainer />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
