import { Pricelist } from "@/components/Pricelist";
import styles from './page.module.css'
import { Footer } from "@/components/Footer";

export default function () {
  return (
    <div className={styles.pricelist}>
      <Pricelist list={pricelist}/>
      <Footer/>
    </div>
  );
}
const pricelist = [
  {
      name: 'metoda pudrowa',
      price: 800,
  },
  {
      name: 'metoda 3D',
      price: 800,
  },
  {
      name: 'metoda mieszana',
      price: 800,
  },
  {
      name: 'kreski',
      price: 800,
  },
  {
      name: 'usta',
      price: 800,
  },
  {
      name: 'dopigmentowanie brwi',
      price: 800,
  },
  {
      name: 'dopigmentowanie ust',
      price: 800,
  },
  {
      name: 'piegi',
      price: 800,
  },
  {
      name: 'dopigmentowanie piegów',
      price: 800,
  },
  {
      name: 'usuwanie laser',
      price: 800,
  },
  
];
