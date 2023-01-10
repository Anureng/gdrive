import axios from 'axios'
import React, { useState } from 'react'

function FileUpload({ contract, account, provider }) {
    const [file, setFile] = useState('')
    const [fileName, setFileName] = useState('no file specified')

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (file) {
            try {
                const formData = new Data();
                formData("file", file)

                const resFile = await axios({
                    method: "POST",
                    url: " https://api.pinata.cloud/pinning/pinFileToIPFS",
                    data: formData,
                    headers: {
                        pinata_api_key: 'fc6aed7a207df21771f4',
                        pinata_secret_api_key: '9df82d9341c5840d5c9bdcd68be2cbd3461bea1dd39a69e69aa19fad5edf4f65',
                    }
                })
            } catch (error) {
                alert(error.message)
            }
        }
    }

    const retrievFile = () => {

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='file-upload' className='bg-black cursor-pointer'>
                    Choose Image
                </label>
                <input disabled={!account} type="file" name='data' onChange={retrievFile} />
                <span>Image:{fileName}</span>
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default FileUpload