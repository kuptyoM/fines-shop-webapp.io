import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../screens/Main/App.js'
import BasketDetail from '../screens/Basket/BasketDetail.js'
import BonusDetail from '../screens/Bonus/BonusDetail.js'
import AccountDetail from '../screens/Account/AccountDetail.js'
import AvaibilityDetail from '../screens/Avaibility/AvaibilityDetail.js'
import MyBonusDetail from '../screens/Account/MainInfoAccountDetail/MyBonusDetail/MyBonusDetail.js'
import MyOrdersDetail from '../screens/Account/MainInfoAccountDetail/MyOrdersDetail/MyOrdersDetail.js'
import MakeOrderDetail from '../screens/MakeOrder/MakeOrderDetail.js'
import ProductCardDetail from '../ProductCard/ProductCardDetail.js'
import MakeReceiverDetail from '../screens/ReceiversPage/MakeReceiverDetail.js'
import PurchaseScreen from '../screens/PurchaseScreen/PurchaseScreen.js'
import ReceiversPageDetail from '../screens/ReceiversPage/ReceiversPageDetail.js'
import AddItemsPage from '../screens/AdminPage/AddItemsPage.js'
import PaymentScreen from '../screens/PurchaseScreen/PaymentScreen.js'

function Router() {
    return <BrowserRouter>
        <Routes>

            <Route element={<App />} path="/fines-shop-webapp.io/" />
            <Route element={<BasketDetail />} path="/fines-shop-webapp.io/basketdetail" />
            <Route element={<BonusDetail />} path="/fines-shop-webapp.io/bonusdetail" />
            <Route element={<AccountDetail />} path="/fines-shop-webapp.io/accountdetail" />
            <Route element={<AvaibilityDetail />} path="/fines-shop-webapp.io/avaibilitydetail" />
            <Route element={<MyBonusDetail />} path='/fines-shop-webapp.io/accountdetail/mybonusdetail'/>
            <Route element={<MyOrdersDetail />} path='/fines-shop-webapp.io/accountdetail/myordersdetail'/>
            <Route element={<MakeOrderDetail />} path="/fines-shop-webapp.io/makeorderdetail" />
            <Route element={<ProductCardDetail />} path="/fines-shop-webapp.io/productdetail/:productId" />
            <Route element={<ReceiversPageDetail />} path="/fines-shop-webapp.io/receiverspagedetail" />
            <Route element={<MakeReceiverDetail />} path="/fines-shop-webapp.io/makereceiverdetail" />
            <Route element={<PurchaseScreen />} path="/fines-shop-webapp.io/purchasescreen" />
            <Route element={<AddItemsPage />} path="/fines-shop-webapp.io/admin/additemspage" />
            <Route element={<PaymentScreen />} path="/fines-shop-webapp.io/paymentscreen/:receiverId" />
            <Route path="*" element={<div>Not found</div>} />

        </Routes>
    </BrowserRouter>
}

export default Router