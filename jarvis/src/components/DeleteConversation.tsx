'use client';

import {Button} from "@nextui-org/react";
import {useState} from "react";


// @ts-ignore
export default function DeleteConversationButton({sessionId, onDelete}: {sessionId: string, onDelete: (sessionId: string) => void}) {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleClick = async () => {
        setIsLoading(true);

        try{
            const response = await fetch(process.env.API_URL + `/chat/${sessionId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json'
                }
            });

            if (response.ok){
                console.log("Conversation deleted");
                onDelete(sessionId);
            } else {
                console.log("Can't delete conversation")
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div>
            <Button isIconOnly={true} onClick={handleClick} isLoading={isLoading}>X</Button>
        </div>
    )
}