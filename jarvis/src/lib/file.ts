

export async function getFileList(){
    const response = await fetch("http://16.171.185.186" + "/media/file", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    return await response.json()
}