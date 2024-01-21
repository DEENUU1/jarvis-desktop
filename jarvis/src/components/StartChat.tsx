'use client';

import {Button} from "@nextui-org/react";
import {useState} from "react";
import { useRouter } from 'next/navigation'


export default function NewChat() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [sessionId, setSessionId] = useState<string>('');
    const router = useRouter();

    const handleClick = async () => {
        setIsLoading(true);

        try{
            const response = await fetch("http://16.171.185.186" + "/chat", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json'
                }
            });

            if (response.ok){
                const data = await response.json();
                setSessionId(data?.session_id);
                router.push(`/${sessionId}`)
                console.log("new chat created");
            } else {
                console.log("cant create new chat")
            }
        } catch (error) {
            console.log(error);
        } finally {
            router.push(`/${sessionId}`)
            setIsLoading(false);
        }
    }

    return (
            <div>
                <Button onClick={handleClick} isLoading={isLoading}>{isLoading ? 'Loading...' : 'Start Chat'}</Button>
            </div>
    )
}