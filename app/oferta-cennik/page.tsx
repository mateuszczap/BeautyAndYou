import { Pricelist } from "@/components/Pricelist";
import styles from './page.module.css'
import { Footer } from "@/components/Footer";

export default function () {
  return (
    <div className={styles.pricelist}>
      <Pricelist />
      <Footer/>
    </div>
  );
}
