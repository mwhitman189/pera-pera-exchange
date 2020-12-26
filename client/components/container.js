export default function Container({ children }) {
    return (
        <>
            <div className="container">{children}</div>

            <style jsx>{`
                padding: 10px;
            `}
            </style>
        </>
    )
}
