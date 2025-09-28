
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AccommodationPage from '../pages/AccommodationPage'
import BookingPage from '../pages/BookingPage'
import ReviewsPage from '../pages/ReviewsPage'
import ActivitiesPage from '../pages/ActivitiesPage'
import ContactPage from '../pages/ContactPage'



export default function AppRoutes() {

    return (
        
        <Routes>
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/accommodation' element={<AccommodationPage/>}/>
            <Route path='/booking' element={<BookingPage/>}/>
            <Route path='/reviews' element={<ReviewsPage/>}/>
            <Route path='/activities' element={<ActivitiesPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
        </Routes>
            )
}