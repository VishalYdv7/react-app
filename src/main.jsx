import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import CarouselPage from './pages/CarouselPage.jsx'
import Browse from './pages/Browse.jsx'
import Selection from './pages/MovieSelection.jsx'
import NotFound from './pages/NotFound.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
	<StrictMode>
	<BrowserRouter>
		<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/browse" element={<Browse />} />
		<Route path='/carousel' element={<CarouselPage />}/>
		<Route path="/selection" element={<Selection />} />
		<Route path="*" element={<NotFound />} />
		</Routes>
	</BrowserRouter>
	</StrictMode>,
)
