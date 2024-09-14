import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authServise from '../../appwrite/auth'
import { login } from '../../store/authSlice'

const SessionLayout = ({ children }) => {
    const [loader, setLoader] = useState(true)
    const dispatch = useDispatch()
    useEffect(() => {
        authServise.getCurrentSession('current').then((session) => {
            if (session) {
                setLoader(false)
                dispatch(login({ session }))
            }
        })
    }, [])
    return loader ? <div>Loading...</div> :<>{children}</>
}

export default SessionLayout
