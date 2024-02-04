export async function getConversations() {
    try {
        const response = await fetch(process.env.API_URL + "/chat", {
            cache: "no-store"
        })

        return await response.json()
    } catch {
        console.log("Can't fetch conversations")
    }

}
