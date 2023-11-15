import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../screens/Main/App.js'
import InfoDetail from '../screens/Info/InfoDetail.js'
import BonusDetail from '../screens/Bonus/BonusDetail.js'
import AccountDetail from '../screens/Account/AccountDetail.js'
import AvaibilityDetail from '../screens/Avaibility/AvaibilityDetail.js'

function Router() {
    return <BrowserRouter basename="/fines-shop-webapp.io">
        <Routes>

            <Route element={<App />} path="/" />
            <Route element={<InfoDetail />} path="/infodetail" />
            <Route element={<BonusDetail />} path="/bonusdetail" />
            <Route element={<AccountDetail />} path="/accountdetail" />
            <Route element={<AvaibilityDetail />} path="/avaibilitydetail" />
            <Route path="*" element={<div>Not found</div>} />

        </Routes>
    </BrowserRouter>
}

export default Router