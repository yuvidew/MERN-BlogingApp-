import { useState } from 'react'
import { v4 } from 'uuid'
import {
    getDownloadURL, 
    getStorage, 
    ref, 
    uploadBytes} from 'firebase/storage'
import {app} from '../firebase'

const imgDb = getStorage(app)

const useImgUploader = () => {
    const [imgUrl , setImgUrl] = useState(null)
    const [isTrue , setIsTrue] = useState(false)
    
    const handelImgUploader = (img) => {
        setIsTrue(true)
        const imgs = ref(imgDb , `Img/${v4()}`)
        uploadBytes(imgs , img)
        .then(d => {
            getDownloadURL(d.ref)
            .then(url => {
                setImgUrl(url)
                setIsTrue(false)
            })
        })
    }

    return [imgUrl , handelImgUploader , isTrue]
}

export default useImgUploader