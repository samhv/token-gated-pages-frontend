function Comment({ children }: {
    children: React.ReactNode
}) {
    return (
        <div className="pt-4">
            {children}
        </div>
    )
}

function CommentTitle({ children }: { children: React.ReactNode }) {
    return <h2 className="font-semibold lg:font-bold text-base">{children}</h2>
}

function CommentBody({ children }: { children: React.ReactNode }) {
    return <div className="opacity-70 pt-0.5 text-sm lg:text-base">{children}</div>
}

Comment.Title = CommentTitle
Comment.Body = CommentBody

export { Comment }