import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../screens/Main/App.js'

function Router() {
    return <BrowserRouter>
        <Routes>

        <Route element={<App />} path='/' />
        <Route path='*' element={<div> Not found </div>} />

        </Routes>
    </BrowserRouter>
}

export default Router