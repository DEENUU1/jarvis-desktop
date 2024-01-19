'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import {Button} from "@nextui-org/react";


export default function FileDeleteButton({path}: {path: string}){
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleClick = async () => {
        setIsLoading(true);

        try{
            const response = await fetch("http://16.171.185.186" + `/media/file/${path}/`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json'
                }
            });

            if (response.ok){
                console.log("File deleted successfully");
            } else {
                console.log("Cant delete this file")
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
            router.refresh()
        }
    }


    return (
        <>
            <Button onClick={handleClick} isLoading={isLoading}>{isLoading ? 'Loading...' : 'Delete'}</Button>
        </>
    )


}