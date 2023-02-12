import { useState } from 'react'
import React from 'react';
import { create } from 'ipfs-http-client'
import {Buffer} from 'buffer'


const projectId = '2LaK8H9xm6CHlavgRcJ7C7rRUHI';
const projectSecret = 'd673ccb7f250ac6c95470b0725d8158f';
const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
const client = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  apiPath: '/api/v0',
  headers: {
    authorization: auth,
  }
})
function InfuraIPFSUpload(prop) {
  const [fileUrl, updateFileUrl] = useState('')
  async function onChange(e) {
    const file = e.target.files[0]
    try {
      const added = await client.add(file)
      const url = `https://infura-ipfs.io/ipfs/${added.path}`
      updateFileUrl(url)
      console.log(url)
      
    } catch (error) {
      console.log('Error uploading file: ', error)
    }  
  }
  return (
    <div className="InfuraIPFSUpload">
      <h1></h1>
      {prop.walletAddress}
      <input
        type="file"
        onChange={onChange}
      />
      {
        
        fileUrl && (
          <img src={fileUrl} width="1000px" /> 
        )
      }
      <p>{fileUrl}</p>
      
    </div>
  );
}
export default InfuraIPFSUpload