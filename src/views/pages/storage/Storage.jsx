import React, { useEffect, useState } from 'react'
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../../firebase/config';
import { async } from '@firebase/util';

const app = initializeApp(firebaseConfig)
const storage = getStorage(app)
const imageRef = ref(storage, 'product/anime')

const Storage = () => {
    
    const [url, setUrl] = useState()
    const [check, setCheck] = useState(false)
    useEffect(() => {
        getDownloadURL(imageRef)
            .then((url) => {
                // console.log(url)
                setUrl(url)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [check])

    console.log("URL: ", url)

    const handleImage = async () => {
        let fli = document.querySelector("#flie")
        console.log(fli.files[0])


        let refUpdate = ref(storage,'product/anime')

        let metadata = {
            contentType: 'image/jpg',
          };
        
        const uploadTask = await uploadBytes(refUpdate,fli.files[0],metadata)
          setCheck(!check)

        console.log(uploadTask)
    }

    return (
        <>
            <div>storage</div>
            <img style={{
                height: '100px',
                width: '100px'
            }} src={url} alt="" />
            <div>
                <label htmlFor="file">File</label><br />
                <input type="file" id='flie'/>
                <button onClick={handleImage}>Add</button>
            </div>
        </>
    )
}

export default Storage