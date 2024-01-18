


export async function getConversations(){
    const response = await fetch(process.env.API_URL + "/chat",{
        cache: "no-store"
    })

    return await response.json()
}


export async function getConversationMessages(id: string) {
    const response = await fetch(process.env.API_URL + `/chat/${id}`, {
        cache: "no-store"
    })
    return await response.json()
}