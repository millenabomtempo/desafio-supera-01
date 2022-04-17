import GlobalStyles from './styles/global'
import { Header } from "./components/Header"
import { AllRoutes as Routes } from './routes'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './hooks/useCart'
import { ToastContainer } from 'react-toastify'

function App() {
   return (
     <BrowserRouter>
      <CartProvider>
        <GlobalStyles />
        <Header />
        <Routes />
        <ToastContainer autoClose={3000} />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
