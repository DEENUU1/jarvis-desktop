import UploadFile from "@/components/Upload";

export default function FileUpload() {
    return (
        <>
            <section className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <UploadFile/>
                </div>
            </section>
        </>
    );
}