"use client"
import React, { useEffect, useState } from 'react'
import NotificationCard from '../card/notification'
import { INotification } from '@/lib/type'

async function getNotification() {
    try {
        const res = await fetch("http://localhost:3000/api/notification", {
            method: "GET",
            cache: "no-cache"
        }).then(res => res.json())
        return res
    } catch (error) {
        console.log(error)
    }
}
const NotificationBoard = () => {
    const [notification, setNotification] = useState<INotification[]>([])
    useEffect(() => {
        async function get() {
            setNotification(await getNotification() ?? [])
        }
        get()
    }, [])
    return (
        <div className='w-full h-full pb-[3rem] bg-green-200 p-5'>
            {notification.map((not, key) => (
                <NotificationCard />
            ))}
            {notification.length === 0 && (
                <div className='text-sm flex w-full'>You do not have any notification</div>
            )}
        </div>

    )
}

export default NotificationBoard