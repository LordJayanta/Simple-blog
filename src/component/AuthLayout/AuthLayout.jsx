import React, { useEffect } from 'react'
import { useState } from 'react'
import { Loader } from '../index'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AuthLayout = ({ children, authentication = true }) => {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        // Save the current path before redirecting
        if (authStatus !== authentication) {
            if (location.pathname !== '/login') localStorage.setItem('redirectPath', location.pathname)

            if (authentication) navigate('/login')
            else navigate('/')
        }


        setLoader(false)
    }, [authStatus, authentication, navigate])

    return loader ? <Loader /> : <>{children}</>
}

export default AuthLayout
