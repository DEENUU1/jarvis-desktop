'use client';

import {Button} from "@nextui-org/react";
import {useState} from "react";
import {useRouter} from 'next/navigation'
import {toast} from "react-toastify";


export default function NewChat() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [sessionId, setSessionId] = useState<string>('');
    const router = useRouter();

    const handleConversationCreate = async () => {
        setIsLoading(true);

        try {
            const response = await fetch(process.env.API_URL + "/chat", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json'
                }
            });

            if (response.ok) {
                const data = await response.json();
                setSessionId(data?.session_id);
                toast.success("New chat created")
            } else {
                toast.warning("Can't create new chat")
            }
        } catch (error) {
            toast.error("Error while creating new chat. Please try again later.")
        } finally {
            setIsLoading(false);
        }
    }

    const handleClick = async () => {

        await handleConversationCreate();
        router.push(`/chat/${sessionId}`);
    }

    return (
        <div>
            <Button onClick={handleClick} isLoading={isLoading}>{isLoading ? 'Loading...' : 'Start Chat'}</Button>
        </div>
    )
}