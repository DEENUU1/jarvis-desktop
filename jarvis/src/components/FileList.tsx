import {getFileList} from "@/lib/file";
import Link from "next/link";
import FileDeleteButton from "@/components/FileDelete";

export default async function Files(){
    const files = await getFileList()

    return (
        <>
            <div className="mt-5">
                <Link href="/file/upload">Upload new files</Link>
            </div>
            {files.length !== 0 ? (
                <table className="w-full text-sm text-left rtl:text-right table-auto">
                    <thead className="text-xs">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Path
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {files && (
                        files.map((file: any, index: number) => (
                            <tr key={file} className="border-b">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                    {index + 1}
                                </th>
                                <td className="px-6 py-4">
                                    {file}
                                </td>
                                <td className="px-6 py-4">
                                    <FileDeleteButton path={file}/>
                                </td>
                            </tr>
                        ))
                    )}
                    </tbody>
                </table>
            ) : (
                <div className="mt-5">
                    <p>No files found</p>
                </div>
            )}
        </>
    )
}

