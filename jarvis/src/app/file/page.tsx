import Files from "@/components/FileList";
import RunEmbeddingButton from "@/components/RunEmbedding";


export default async function FilesPage() {
    return (
        <>
            <section className="min-h-screen flex justify-center">
                <div className="text-center">
                    <RunEmbeddingButton/>
                    <Files/>
                </div>
            </section>
        </>
    );
}