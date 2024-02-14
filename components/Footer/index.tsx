import Link from "next/link"
import './style.css'

export function Footer () {
    return (
        <div className="main-container-footer">
            <Link href="/o-mnie">O mnie</Link>
            <img src="/facebook-icon.png" width={50}/>
            <img src="/instagram-icon.png" width={45}/>
            <img src="/messenger-icon.png" width={40}/>
            <Link href="/kontakt">Kontakt</Link>
        </div>
    )
}