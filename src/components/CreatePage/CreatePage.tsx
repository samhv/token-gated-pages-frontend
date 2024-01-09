import { BackButton } from "../BackButton"
import { ROUTES, useRoute } from "../RouteProvider"

export function CreatePage() {
    const { setRoute } = useRoute()
    return (
        <div>
            <BackButton onClick={
                () => setRoute({
                page: ROUTES.INDEX_PAGES,
                params: {}
                })
            } />
            <h1 className="text-3xl lg:text-4xl mt-5 mb-0.5">
                Create a Page
            </h1>
            <p className="max-w-[800px] opacity-70">The title will be public, but the description will be secret and only accessible by holders of the collection.</p>
            <p className="mt-5 opacity-70">Public title</p>
            <input type="text" className="mt-0.5 block border border-black h-10 px-5 rounded-md text-base w-full md:w-[380px]" placeholder="Where is the One Piece?" />
            <p className="mt-5 opacity-70">Secret text</p>
            <textarea className="mt-0.5 block border border-black h-28 px-5 py-3 rounded-md text-base w-full md:w-[460px]" placeholder="Well, you can find it in..." />
            <div className="flex flex-col items-start">
                <button onClick={() => setRoute({
                    page: ROUTES.CREATE_PAGE,
                    params: {},
                })} className="mt-5 border-2 border-black hover:opacity-70 active:opacity-80 transition px-4 py-2 rounded-md transition duration-100 ease-in-out">
                    Create
                </button>
            </div>
        </div>
    )
}
