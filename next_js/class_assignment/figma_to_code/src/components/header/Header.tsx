import Link from "next/link"


const Header = () => {
    return (
        <header>
            <nav>
                <ul className="flex justify-end gap-4 p-3">
                    <li><Link href='#work'>Works</Link></li>
                    <li><Link href='#blog'>Blog</Link></li>
                    <li><Link href='#contact'>Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
// background: #CFA6A61C;
