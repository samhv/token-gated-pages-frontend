import { useState, useEffect } from "react"
import { useSignMessage } from 'wagmi'
import { ROUTES, useRoute } from "../RouteProvider"
import { useAccount } from "wagmi"
import { ConnetWalletButton } from "../ConnetWalletButton"
import { BackButton } from "../BackButton"
import { API_URL } from "../../constans"

export function ShowPage() {
    const { signMessageAsync } = useSignMessage()
    const { route, setRoute } = useRoute()
    const { isConnected, address } = useAccount()
    const pageId = route.params.id
    const [page, setPage] = useState<Page>()
    const [error, setError] = useState<boolean>(false)
    const [signature, setSignature] = useState("")

    useEffect(() => {
        const loadPage = async () => {
            if (!signature || !address) {
                return
            }
            try {
                const queryParams = new URLSearchParams({
                    user_address: address,
                    signed_message: signature,
                }).toString();
                const response = await fetch(`${API_URL}/pages/${pageId}?${queryParams}`, {
                    method: 'GET',
                });
        
                if (!response.ok || !response.body) {
                    throw new Error('Something went wrong');
                }

                const data = await response.json() as Page
                setPage(data)
            } catch (error) {
                // TODO: error handling
                setError(true)
                console.error('Error creating page:', error);
            }
        }
        loadPage()
    }, [pageId, signature, address])
    
    const back = () => setRoute({
        page: ROUTES.INDEX_PAGES,
        params: {}
    })

    if (error) {
        return <div>
            <BackButton onClick={back} />
            <p className="mt-5">You don't hold an item from the collection needed.</p>
        </div>
    }

    if (!isConnected || !signature) {
        return (
            <div>
                <BackButton onClick={back} />
                <h1 className="text-3xl lg:text-4xl mb-1 mt-5">
                    Login and sign the message
                </h1>
                <p className="max-w-[800px] opacity-70 mb-5">In order to have access to the secret content, you must connect your wallet and sign the message to verify you own an item required.</p>
                { !isConnected
                    ? <ConnetWalletButton />
                    : (
                        <button
                            onClick={async () => {
                                const signature = await signMessageAsync({
                                    message: `Sign it to verify you have access to the collection #${pageId}`
                                })
                                setSignature(signature)
                            }}
                            className="border-2 border-black hover:opacity-70 active:opacity-80 transition px-4 py-2 rounded-md transition duration-100 ease-in-out"
                        >
                            Sign the message
                        </button>
                    )
                }
            </div>
        )
    }

    if (!page) {
        return (
            <div>
                <BackButton onClick={back} />
                <p className="mt-5 opacity-70 min-h-[min(320px, 100%)] min-w-[min(320px, 100%)] flex items-center justify-center">Loading content...</p>
            </div>
        )
    }

    return (
        <div className="break-words">
            <BackButton onClick={back} />
            <h1 className="font-semibold text-xl mt-5 lg:text-2xl">{page.title}</h1>
            <p className="opacity-70 text-sm sm:text-sm md:text-md lg:text-base mt-1">Collection: {page.collection_address}</p>
            <p className="opacity-70 text-sm sm:text-sm md:text-md lg:text-base mt-1">Created by {page.owner_address}</p>
            <p className="opacity-70 text-sm sm:text-sm md:text-md lg:text-base pt-5 mt-1">
                You have access to the secret content:
            </p>
            <div className="mt-1 p-5 border border-black rounded-md">
                <p className="opacity-70 text-sm sm:text-sm md:text-md lg:text-base">{page.description}</p>
            </div>
        </div>
    )
}

type Page = {
    collection_address: string,
    id: number,
    description: string,
    owner_address: string,
    template: number,
    title: string,
}
