import { ArrowIcon } from "../ArrowIcon"

export function BackButton({ onClick }: {
    onClick: () => unknown
}) {
    return (
        <button onClick={onClick} className="rotate-180 flex items-center justify-center w-10 h-10 border-2 border-black hover:opacity-70 active:opacity-80 rounded-full transition duration-100 ease-in-out">
            <ArrowIcon className="w-6 h-6" />
        </button>
    )
}