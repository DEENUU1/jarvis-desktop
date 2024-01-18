

interface PageParams {
    slug: string;
}

export default function Conversation({params}: {params: PageParams}) {
    const sessionId = params.slug;

    return (
        <><h1>{sessionId}</h1></>
    );
}