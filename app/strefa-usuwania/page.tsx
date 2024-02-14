import Link from "next/link"
import { Logo } from "@/components/Logo";
import styles from './page.module.css'
import { Footer } from "@/components/Footer";

export default function () {
    return (
    
    <div className={styles.main}>
        <Logo/>
        <div>ZDJĘCIE USUWWANIA CZY CZEGOŚ TAM</div>
            <div className={styles.navigation}>
                <Link href='/przed-po-galeria'>Przed i po | Galeria efektów</Link>
                <Link href='/oferta-cennik'>Oferta | Cennik</Link>
                <Link href='/dlaczego-kiedy'>Dlaczego i kiedy warto usunąć makijaż | tatuaż</Link>
                <Link href='/zarezerwuj-wizyte'>Zarezerwuj wizytę</Link>
            </div>
            
        <Footer/>    
    </div>
    );
};