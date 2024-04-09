import Link from "next/link"
import { Logo } from "@/components/Logo";
import styles from './page.module.css'
import { Footer } from "@/components/Footer";

export default function () {
    return (
    
    <div className={styles.main}>
        <Logo/>
        <div>ZDJĘCIE makijażu albo coś</div>
            <div className={styles.navigation}>
                <Link href='/o-mnie'>O mnie</Link>
                <Link href='/galeria-prac'>Galeria prac</Link>
                <Link href='/oferta-cennik'>Oferta | Cennik</Link>
                <Link href='/zanim-dasz-sobie'>Zanim dasz sobie zrobić makijaż permanentny</Link>
                <Link href='/zarezerwuj-wizyte'>Zarezerwuj wizytę</Link>
            </div>

        <Footer/>    
    </div>
    );
};
