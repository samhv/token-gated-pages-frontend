import { useLayoutEffect, useState } from "react"
import { ROUTES, useRoute } from "../RouteProvider"
import { API_URL } from "../../constans"

export function ListOfPages() {
    const { setRoute } = useRoute()
    const [pages, setPages] = useState<Page[]>([])
    
    // Just to make the app less flashy I'll use useLayoutEffect.
    // In a real word app I'll just use useEffect and prevent flashing with cache and proper loading states
    useLayoutEffect(() => {
        const loadPages = async () => {
            try {
                const response = await fetch(`${API_URL}/pages`, {
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

    return <div className={!pages ? "flex min-h-[320px] mt-10 items-center justify-center" : ""}>
        {
            pages
                ? pages.map((page: Page) => {
                    return (
                        <a
                            key={page.id}
                            onClick={() => setRoute({
                                page: ROUTES.SHOW_PAGE,
                                params: {
                                    id: page.id,
                                }
                            })}
                        >
                            <div className="cursor-pointer mt-10 p-5 hover:shadow-sm border transition-shadow border-slate-500 hover:border-black rounded-lg">
                                <p className="font-semibold text-lg">{page.title}</p>
                                <p className="opacity-70">Collection: {page.collection_address}</p>
                                <p className="opacity-70">Created by {page.owner_address}</p>
                            </div>
                        </a>
                    )
                })
                : (
                    <p>Create the first page!</p>
                )
        }
    </div>
}

type Page = {
    collection_address: string,
    id: number,
    owner_address: string,
    template: number,
    title: string,
}
