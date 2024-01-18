import Chat from "@/components/Chat"

interface PageParams {
    slug: string;
}

export default function Conversation({params}: {params: PageParams}) {
    const sessionId = params.slug;

    return (
        <>
        <Chat sessionId={sessionId} />
        </>
    );
}