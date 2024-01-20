'use client';
import {useState} from "react";
import {Button} from "@nextui-org/react";
import { useRouter } from 'next/navigation'


export default function RunNotionEmbeddingButton(){
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleRunEmbedding = async () => {
        setIsLoading(true);

        try {
            const response = await fetch("http://16.171.185.186" + "/media/notion/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json'
                }
            });

            if (response.ok){
                console.log("Embedding done");
            } else {
                console.log("Embedding failed");
            }
        } catch (error){
            console.log(error);
        } finally {
            setIsLoading(false);
            router.refresh();
        }


    }

    return (
        <>
            <div className="mt-5">
                <Button onClick={handleRunEmbedding} isLoading={isLoading}>{isLoading ? 'Loading...' : 'Sync Notion'}</Button>
            </div>
        </>
    )
}