import Files from "@/components/FileList"

export default async function FilesPage() {
    return (
        <>
            <section className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <Files/>
                </div>
            </section>
        </>
    );
}