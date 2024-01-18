


export async function getConversations(){
    const response = await fetch(process.env.API_URL + "/chat",{
        cache: "no-store"
    })

    return await response.json()
}