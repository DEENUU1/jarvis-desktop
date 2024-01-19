import {getFileList} from "@/lib/file";


export default async function Files(){
    const files = await getFileList()

    return (
        <>
            <table className="w-full text-sm text-left rtl:text-right table-auto">
                <thead className="text-xs">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Id
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Path
                    </th>
                </tr>
                </thead>
                <tbody>
                {files && (
                    files.map((file: any) => (
                        <tr key={file} className="border-b">
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                1
                            </th>
                            <td className="px-6 py-4">
                                {file}
                            </td>
                        </tr>
                    ))
                )}
                </tbody>
            </table>
        </>
    )
}

