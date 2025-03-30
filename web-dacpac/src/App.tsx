import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './componets/footer/Footer'
import Header from './componets/header/Header'
import Adults from './componets/routes/adults/Adults'
import Main from './componets/routes/main/Main'

function App() {
  return (
    <div className='d-flex flex-column justify-content-between vh-100'>
      <div className="parent-container">
        <div className="main-container">
          <div className="child-container">
            <Header />
              <BrowserRouter>
                <Routes>
                    <Route index element={<Main />} />
                    <Route path="adultos" element={<Adults />} />
                    <Route path="*" element={<Main />} />
                </Routes>
              </BrowserRouter>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
