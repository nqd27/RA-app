import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import adminSlice from '../../../store/sclice/adminSlice'

const Statistical = (props) => {
    const storage = useSelector((state) => state.admin.Storage)

    console.log(storage)

    return (
        <>
            <div className="titles">
                <h1>{props.title}</h1>
            </div>
            <div className="render-data" style={{
                alignItems: 'center',
                justifyContent: 'center'
            }}>

            </div>
        </>
    )
}

export default Statistical