'use client'
import { useState, useEffect, useRef } from 'react'
const MAX_ENTRIES = 30

export function UseliveStata() {
  const [data, setData] = useState([])
  const intervalRef = useRef(null)

  const fetchData = async () => {
    try {
      await fetch('http://127.0.0.1:8000/dashboard/livevalues', {
        method: 'POST',
      })
      const res = await fetch('http://127.0.0.1:8000/dashboard/live')
      const json = await res.json()
      setData(json)
       setData((prevData) => {
      const newData = [...prevData, json]
      return newData.slice(-MAX_ENTRIES) 
    })
    } catch (err) {
      console.error('Failed to fetch:', err)
    }
  }

  const startFetching = () => {
    if (intervalRef.current) return
    intervalRef.current = setInterval(fetchData, 2000)
  }

  const stopFetching = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = null
  }

  useEffect(() => {
    return () => clearInterval(intervalRef.current)
  }, [])

  return { data, startFetching, stopFetching }
}
