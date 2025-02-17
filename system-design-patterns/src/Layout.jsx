export const Layout = ({ children }) => {
    return <>
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-900 text-white p-4">
                <h2 className="text-lg font-bold">Dashboard</h2>
                <ul className="mt-4 space-y-2">
                    <li><a href="/" className="block hover:text-blue-400">Home</a></li>
                    <li><a href="/about" className="block hover:text-blue-400">About</a></li>
                    <li><a href="/tasks" className="block hover:text-blue-400">Tasks</a></li>
                </ul>
            </aside>
            <div className="flex-1 flex flex-col">
                <nav className="bg-blue-600 text-white p-4 shadow-md">
                    <h1 className="text-xl font-semibold">My App</h1>
                </nav>
                <main className="flex-grow p-6 bg-gray-100">{children}</main>
                <footer className="bg-gray-800 text-white p-4 text-center">
                    &copy; {new Date().getFullYear()} My App
                </footer>
            </div>
        </div>
    </>
}