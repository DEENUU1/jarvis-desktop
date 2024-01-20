import UploadFile from "@/components/Upload";
import RunChatEmbeddingButton from "@/components/RunChatEmbedding";
import RunNotionEmbeddingButton from "@/components/RunNotionEmbedding";

export default function FileUpload() {
    return (
        <>
            <section className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="flex gap-2 items-center justify-center mb-5">
                        <RunChatEmbeddingButton/>
                        <RunNotionEmbeddingButton/>
                    </div>
                    <UploadFile/>
                </div>
            </section>
        </>
    );
}