import React from 'react';
import Login from './Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Signup';

function App() {
  return (
    <div>  
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/home" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  ); 
}

export default App;



// import React from 'react';
// import Login from './Login';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Signup from './Signup';

// function App() {
//   return (
//     // <div>
//     //   <Login />
//     // </div>
//     <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<Login />}></Route>
//       <Route path='/signup' element={<Signup />}></Route>
//     </Routes>
//     </BrowserRouter>
//   )
// }

// export default App;



// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Login />} />
//         <Route path='/signup' element={<Signup />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
