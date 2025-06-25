"use client";

import config from "@/lib/config";

import { IKImage, ImageKitProvider, IKUpload, IKVideo } from "imagekitio-next";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import toast from "react-hot-toast";


const { 
    env: {
         imagekit: { publicKey, urlEndpoint },
        }, 
    } = config;


const authenticator = async () => {
  try {
    const response = await fetch(`${config.env.apiEndpoint}/api/imagekit`);
    if (!response.ok) {
      const errorText = await response.text();
       toast.success("Upload Successful");
            
      throw new Error(`Requset faild with status ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    const { signature, expire, token } = data;

    return { token, expire, signature}

  } catch (error: any) {
     throw new Error(`Authentication request failed: ${error.message}`);
  }

};
const ImageUpload = (
  {onFileChange} : { onFileChange: (filePath: string) => void; }
) => {
  const ikUploadRef = useRef(null);
  const [file, setFile] = useState<{ filePath: string } | null>(null);

  const onError = (error: any) => {
    console.log(error);

  }
  const onSuccess = (res: any) => {
    setFile(res);
    onFileChange(res.filePath);
    console.log(res);
    
  }


  return (
    <ImageKitProvider 
    publicKey={publicKey}
    urlEndpoint={urlEndpoint}
    authenticator={authenticator}
>
  <IKUpload 
  className="hidden" 
  ref={ikUploadRef} 
  onError={onError} 
  onSuccess={onSuccess}
  fileName="test-upload.png"
  />

  <Button onClick={(e) => {
    e.preventDefault();
    
    if (ikUploadRef.current) {
      // @ts-ignore
    ikUploadRef.current?.click();
    }
  }}>
    <p className="font-semibold"> Upload File </p> 
    {file && <p className="upload-filename">{file.filePath}</p>}
  </Button>

  {file && (
          <IKImage
            alt={file.filePath}
            path={file.filePath}
            width={400}
            height={300}
          />
      )}

        </ImageKitProvider>
  );
};

export default ImageUpload;
