import { ROUTES, useRoute } from "../RouteProvider"

export function IndexPage() {
    const { setRoute } = useRoute()
    return (
        <div>
            <h1 className="text-3xl lg:text-4xl pb-1">
                NFT Gated Pages
            </h1>
            <p className="max-w-[800px]">Access-gating app that allows users to create pages exclusively accessible by owners of specific NFTs. Imagine a world where owning a digital asset can grant you access to exclusive content, tailored just for you!</p>
            <div className="flex flex-col items-center justify-center">
                <button onClick={() => setRoute({
                    page: ROUTES.CREATE_PAGE,
                    params: {},
                })} className="mt-10 border-2 border-black hover:opacity-70 active:opacity-80 transition px-4 py-2 rounded-md transition duration-100 ease-in-out">
                    Create Page
                </button>
                <a onClick={() => setRoute({
                    page: ROUTES.ABOUT,
                    params: {},
                })} className="hover:underline hover:opacity-70 hover:cursor-pointer mt-3">Go to Engineer Implementation</a>
            </div>
        </div>
    )
}
