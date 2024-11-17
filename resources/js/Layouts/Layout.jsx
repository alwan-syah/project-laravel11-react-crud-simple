import { Link } from "@inertiajs/react";

export default function Layout({ children })
{
    return (
        <>

            <header>
                <nav>
                    <Link className="nav-link" href="/">Home</Link>
                    <Link className="nav-link bg-green-700  hover:bg-green-500  hover:shodow-lg transition duration-300" href="/posts/create">Add Product</Link>
                </nav>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}