import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../screens/Main/App.js'
import InfoDetail from '../screens/Info/InfoDetail.js'

function Router() {
    return <BrowserRouter>
        <Routes>

        <Route element={<App />} path='/fines-shop-webapp.io' />
        <Route element={<InfoDetail />} path='/fines-shop-webapp.io/infodetail' />
        <Route path='*' element={<div> Not found </div>} />

        </Routes>
    </BrowserRouter>
}

export default Router