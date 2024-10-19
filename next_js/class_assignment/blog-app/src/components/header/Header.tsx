import Link from "next/link";


export default function Header() {
    return (
        <header className="bg-gray-300 p-2 flex  justify-between">
            <div>
                <Link href='/'><p>master blog</p></Link>
            </div>
            <nav>
                <ul className="flex gap-2">
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/blog'>Blog</Link></li>
                </ul>
            </nav>
        </header>
    )
}
