import { PriceItem } from '../PriceItem';
import './style.css';

export function Pricelist() {
  return (
    <div className='container-pricelist'>
      <PriceItem/>
      <PriceItem/>
      <PriceItem/>
      <PriceItem/>
    </div>
  );
}
