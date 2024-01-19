'use client'
import {useState} from 'react'
import {Button} from "@nextui-org/react";

export default function UploadFile(){
    const [file, setFile] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        setIsLoading(true)

        const formData = new FormData();


        if (file !== null && typeof file !== "string") {
            formData.append("uploaded_file", file);
        }

        try {
            const response = await fetch("http://16.171.185.186" + "/media/upload", {
                method: "POST",
                headers: {
                    accept: "application/json",
                    "Content-Type": "multipart/form-data",
                },
                body: formData,
            });
            if (response.ok) {
                console.log("File uploaded successfully");
            } else {
                console.log("File upload failed");
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <>
            <div>
                <h1 className="text-4xl font-bold mb-4">Upload file</h1>
            </div>

            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="uploadFile1"
                           className="text-center rounded w-full sm:w-[560px] min-h-[260px] py-4 px-4 flex flex-col items-center justify-center cursor-pointer border-2 mx-auto font-[sans-serif] m-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 mb-6 fill-gray-400" viewBox="0 0 24 24">
                            <path d="M22 13a1 1 0 0 0-1 1v4.213A2.79 2.79 0 0 1 18.213 21H5.787A2.79 2.79 0 0 1 3 18.213V14a1 1 0 0 0-2 0v4.213A4.792 4.792 0 0 0 5.787 23h12.426A4.792 4.792 0 0 0 23 18.213V14a1 1 0 0 0-1-1Z"/>
                            <path d="M6.707 8.707 11 4.414V17a1 1 0 0 0 2 0V4.414l4.293 4.293a1 1 0 0 0 1.414-1.414l-6-6a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 1.414 1.414Z"/>
                        </svg>
                        <p className="font-semibold text-sm">Drag & Drop or <span>Choose file</span> to upload</p>
                        <input type="file" id='uploadFile1' className="hidden"/>
                        <p className="text-xs text-gray-400 mt-2">.TXT, .PDF, .CSV, .JSON, .MD and .HTML are allowed</p>
                    </label>
                    <Button type="submit" color="primary" variant="bordered" className="sm:w-[560px] mx-auto" isLoading={isLoading}>{isLoading ? 'Uploading' : 'Upload'}</Button>
                </form>
            </div>
        </>
    )
}