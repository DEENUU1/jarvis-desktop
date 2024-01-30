'use client';
import {useState} from "react";
import {Button} from "@nextui-org/react";
import {toast} from "react-toastify";


export default function RunNotion(){
    const [isLoadingEmbedding, setIsLoadingEmbedding] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleRunEmbedding = async () => {
        setIsLoadingEmbedding(true);

        try {
            const response = await fetch(process.env.API_URL + "/media/notion/embedding/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json'
                }
            });

            if (response.ok){
                toast.success("Run Notion embedding");
            } else {
                toast.warning("Can't run Notion embedding");
            }
        } catch (error){
            toast.error("Error while running Notion embedding. Please try again later.")
        } finally {
            setIsLoadingEmbedding(false);
        }
    }

    const handleRunLoading = async () => {
        setIsLoading(true);

        try {
            const response = await fetch(process.env.API_URL + "/media/notion/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json'
                }
            });

            if (response.ok){
                toast.success("Start loading Notion data");
            } else {
                toast.warning("Can't load Notion data");
            }
        } catch (error){
            toast.error("Error while running Notion data loader. Please try again later.")
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <div className="mt-5">
                <Button onClick={handleRunEmbedding}
                        isLoading={isLoadingEmbedding}>{isLoadingEmbedding ? 'Loading...' : 'Notion Embedding'}</Button>
            </div>
            <div className="mt-5">
                <Button onClick={handleRunLoading}
                        isLoading={isLoading}>{isLoading ? 'Loading...' : 'Sync Notion'}</Button>
            </div>
        </>
    )
}
