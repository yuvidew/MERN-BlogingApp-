import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useFetchData = (url) => {
    const [data , setData] = useState([])
    const [error , setError] = useState(false)

    const handleFetchData = async (url) => {
        try {
            const res = await axios.get(url)
            setData(res.data)
            console.log(res.data);
        } catch (error) {
            setError(true)
        }
    }

    useEffect(() => {
        handleFetchData(url)
    } , [url])

    return [data ,  error]
}

export default useFetchData