// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import Header from './Components/Header';
// import Project from './Components/Project';
// import Login from './Components/Login';

// const App = () => {
//   return (
//     <Router>
//       {/* <Header /> */}
//       {/* <div style={{ marginTop: '64px' }}> Adjust margin to avoid overlap with fixed header */}
//         <Routes>
//           <Route path='/' element={<Login />} />
//           <Route path="/project" element={<Project />} />
//           {/* Add other routes here as needed */}
//         </Routes>
//       {/* </div> */}
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './Components/Header';
import ProjectConfiguration from './Pages/ProjectConfiguration/ProjectConfiguration';
import Login from './Components/Login';
import Project from './Components/Project';

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/Project" element={<ProjectConfiguration />} />
        <Route path='/project2' element={<Project />} />
        {/* Add other routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;

