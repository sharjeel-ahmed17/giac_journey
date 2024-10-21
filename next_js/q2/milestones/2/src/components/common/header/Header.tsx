import Link from "next/link"

export default function Header() {
    return (
        <header>
            <div>logo</div>
            <nav>
                <ul className="flex gap-4">
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/about'>about</Link></li>
                    <li><Link href='/contact'>contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}
