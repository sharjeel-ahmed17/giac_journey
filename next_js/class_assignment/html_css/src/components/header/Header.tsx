import Link from "next/link";


export default function Header() {
    return (
        <header>
            <div>
                <p className="logo">sharjeel ahmed</p>
            </div>
            <div>

                <nav>
                    <ul>
                        <li><Link href='#'>Home</Link></li>
                        <li><Link href='#contact'>contact</Link></li>
                        <li><Link href='#portfolio'>portfolio</Link></li>
                        <li><Link href='#skills'>skills</Link></li>
                    </ul>
                </nav>
            </div>
            {/* button */}
            <div>
                <button className="header-btn">hire me</button>

            </div>
        </header>
    )
}
