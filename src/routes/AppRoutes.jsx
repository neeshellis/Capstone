
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AccommodationPage from '../pages/AccommodationPage'
import AdventuresPage from '../pages/Adventures'
import ReviewsPage from '../pages/ReviewsPage'
import ContactPage from '../pages/ContactPage'



export default function AppRoutes() {

    return (
        
        <Routes>
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/accommodation' element={<AccommodationPage/>}/>
            <Route path='/adventures' element={<AdventuresPage/>}/>
            <Route path='/reviews' element={<ReviewsPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
        </Routes>
            )
}