import React from 'react'
import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return (
        <div>
            <p className='f3 white'>
                {'The Many Faced God detects faces. Give it a try.'}
            </p>
            <div className='center'>
                <div className='form center pa4 br-2 shadow-5'>
                    <input style={{backgroundColor : '#fffff'}}className='f4 pa2 w-70 center' type='text' />
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;