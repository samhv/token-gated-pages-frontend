import { useEffect, useState } from "react"
import { ROUTES, useRoute } from "../RouteProvider"

export function ListOfPages() {
    const { setRoute } = useRoute()
    const [pages, setPages] = useState<Page[]>([])
    useEffect(() => {
        const loadPages = async () => {
            try {
                const response = await fetch('http://localhost:3000/pages', {
                    method: 'GET',
                });
        
                if (!response.ok || !response.body) {
                    throw new Error('Something went wrong');
                }

                const data = await response.json() as Page[]
                setPages(data)
            } catch (error) {
                console.error('Error creating page:', error);
            }
        }
        loadPages()
    }, [])

    if (!pages) {
        return <p className="mt-5 opacity-70">Loading content...</p>
    }

    return (
        pages.map((page: Page) => {
            return (
                <a onClick={() => setRoute({
                    page: ROUTES.SHOW_PAGE,
                    params: {
                        id: page.id,
                    }
                })}>
                    <div className="cursor-pointer mt-10 p-5 hover:shadow-sm border transition-shadow border-slate-500 hover:border-black rounded-lg">
                        <p className="font-semibold text-lg">{page.title}</p>
                        <p className="opacity-70">Collection: {page.collection_address}</p>
                        <p className="opacity-70">Created by {page.owner_address}</p>
                    </div>
                </a>
            )
        })
    )
}

type Page = {
    collection_address: string,
    id: number,
    owner_address: "0x1523dBef5608310FEa777d6E8898c5bed7EfD5C5",
    template: 0,
    title: "Collection example",
}
