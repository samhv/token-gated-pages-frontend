export function BackButton({ onClick }: {
    onClick: () => unknown
}) {
    return (
        <button onClick={onClick} className="flex items-center justify-center w-10 h-10 border-2 border-black hover:opacity-70 active:opacity-80 rounded-full transition duration-100 ease-in-out">
            <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path fill="currentColor" d="M12 20l-8-8 8-8 1.41 1.41L6.83 11H20v2H6.83l6.58 6.59L12 20z"></path>
            </svg>
        </button>
    )
}