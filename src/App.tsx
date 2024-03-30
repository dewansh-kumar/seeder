import './App.css'
import React, { useEffect, useState } from 'react'
import { CashAccelarationPage } from './pages/CashAccelarationPage'
import ReviewCashKick from './pages/ReviewCashKick'
import { ThemeProvider } from '@mui/material'
import theme from './themes'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NewCashKickPage from './pages/NewCashKick'
import { getAllPayments } from './Services/services'
import Dashboard from './pages/Dashboard'
const App = () => {
  const [data, setData] = useState([])
  const getPaymentData = async () => {
    const data = await getAllPayments()
    setData(data)
    console.log(data)
  }
  useEffect(() => {
    getPaymentData()
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          path="/"
          element={data.length === 0 ? <HomePage /> : <Dashboard />}
        />
        <Route path="/cashAcceleration" element={<CashAccelarationPage />} />
        <Route path="/newCashKick" element={<NewCashKickPage />} />
        <Route path="/reviewPage" element={<ReviewCashKick />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
