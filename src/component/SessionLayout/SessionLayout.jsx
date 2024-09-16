import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authServise from '../../appwrite/auth'
import { login } from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'

const SessionLayout = ({ children }) => {
    const [loader, setLoader] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        authServise.getCurrentSession('current').then((session) => {
            if (session) {
                authServise.getCurrentUser().then((userData) => {
                    setLoader(false)
                    dispatch(login({ userData }))

                    // Check if there is a saved redirct path
                    const redirectPath = localStorage.getItem('redirectPath')
                    if (redirectPath) {
                        navigate(redirectPath)  // Redirect to the saved path
                        localStorage.removeItem('redirectPath')  // Clear the saved path
                    }
                })
            }
        })
    }, [dispatch, navigate])
    return loader ? <div>Loading...</div> : <>{children}</>
}

export default SessionLayout
