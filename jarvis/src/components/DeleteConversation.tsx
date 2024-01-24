'use client';

import {Button} from "@nextui-org/react";
import {useState} from "react";
import {useRouter} from "next/navigation";


export default function DeleteConversationButton({sessionId}: {sessionId: string}) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();

    const handleClick = async () => {
        setIsLoading(true);

        try{
            const response = await fetch("http://16.171.185.186" + `/chat/${sessionId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json'
                }
            });

            if (response.ok){
                console.log("Conversation deleted");
            } else {
                console.log("Can't delete conversation")
            }
        } catch (error) {
            console.log(error);
        } finally {
            router.refresh();
            setIsLoading(false);
        }
    }

    return (
        <div>
            <Button isIconOnly={true} onClick={handleClick} isLoading={isLoading}>X</Button>
        </div>
    )
}