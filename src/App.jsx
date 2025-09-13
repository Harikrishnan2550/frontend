// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Home } from './screens';
// import Navbar from './components/Navbar';



// const App = () => (
//     <BrowserRouter>

//         <Routes>

//             <Route path="/" element={(<Navbar />)} />
//          </Routes>
//     </BrowserRouter>

// );

// export default App



import React from 'react'
import Layout from './components/Layout'

export default function App() {
  return (
    <div>
        <Layout/>
      
    </div>
  )
}
