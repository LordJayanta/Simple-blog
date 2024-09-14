import React, { useEffect } from 'react'
import authServise from '../../appwrite/auth'
import { useState } from 'react'
import {Loader} from '../index'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AuthLayout = ({ children, authentication = true }) => {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        // if (authStatus === false) navigate('./login')
        // if(authentication && authStatus === false) navigate('./login')
        // if(authentication && authStatus !== true) navigate('./login')
        if (authentication && authStatus !== authentication) navigate('/login')
        else if(!authentication && authStatus !== authentication ) navigate('/')
        
        authServise.getCurrentSession().then((session) => {
            console.log(session)
        })

        setLoader(false)
    }, [authStatus, authentication, navigate])

    return loader ? <Loader /> : <>{children}</>
}

export default AuthLayout
