import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../screens/Main/App.js'
import InfoDetail from '../screens/Info/InfoDetail.js'
import BonusDetail from '../screens/Bonus/BonusDetail.js'
import AccountDetail from '../screens/Account/AccountDetail.js'
import AvaibilityDetail from '../screens/Avaibility/AvaibilityDetail.js'

function Router() {
    return <BrowserRouter>
        <Routes>

            <Route element={<App />} path="/fines-shop-webapp.io/" />
            <Route element={<InfoDetail />} path="/fines-shop-webapp.io/infodetail" />
            <Route element={<BonusDetail />} path="/fines-shop-webapp.io/bonusdetail" />
            <Route element={<AccountDetail />} path="/fines-shop-webapp.io/accountdetail" />
            <Route element={<AvaibilityDetail />} path="/fines-shop-webapp.io/avaibilitydetail" />
            <Route path="*" element={<div>Not found</div>} />

        </Routes>
    </BrowserRouter>
}

export default Router