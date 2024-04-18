export default function Aside({ children, Heading = 'h2', ...props }) {
    return <aside {...props}>
        <Heading></Heading>
        {children}
    </aside>
}