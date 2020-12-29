export default function Container({ children }) {
    return (
        <>
            <div className="container">{children}</div>

            <style jsx>{`
                margin: 3rem;
            `}
            </style>
        </>
    )
}
