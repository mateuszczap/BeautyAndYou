import Link from "next/link"
import { Logo } from "@/components/Logo";
import styles from './page.module.css'
import { Footer } from "@/components/Footer";

export default function () {
    return (
    
    <div className={styles.main}>
        <Logo/>
        <div>ZDJĘCIE STREFA SZKOLEŃ</div>
            <div className={styles.navigation}>
                <Link href='/o-mnie'>O mnie</Link>
                <Link href='/oferta-cennik'>Oferta | Cennik</Link>
                <Link href='/kalendarz-szkolen'>Kalendarz szkoleń</Link>
                <Link href='/rezerwuj-szkolenie'>Rezerwuj szkolenie</Link>
            </div>
            
        <Footer/>    
    </div>
    );
};