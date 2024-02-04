'use client';
import {useState} from "react";
import {Button} from "@nextui-org/react";
import {toast} from "react-toastify";

export default function RunChatEmbeddingButton() {
    const [isLoading, setIsLoading] = useState(false);

    const handleRunEmbedding = async () => {
        setIsLoading(true);

        try {
            const response = await fetch(process.env.API_URL + "/media/chat/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json'
                }
            });

            if (response.ok) {
                toast.success("Run chat embedding");
            } else {
                toast.warning("Can't run chat embedding");
            }
        } catch (error) {
            toast.error("Error while running chat embedding. Please try again later.")
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <div className="mt-5">
                <Button onClick={handleRunEmbedding}
                        isLoading={isLoading}>{isLoading ? 'Loading...' : 'Sync Chats'}
                </Button>
            </div>
        </>
    )
}