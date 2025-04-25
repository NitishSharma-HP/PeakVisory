import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import EasyUpload from './components/easyupload/home/EasyUpload'
import PeakAdvisory from './components/peakadvisory/home/PeakAdvisory'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='easyupload' element={<EasyUpload />} />
        <Route path='peakadvisory' element={<PeakAdvisory />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
