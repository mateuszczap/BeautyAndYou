import { PriceItem } from '../PriceItem';
import './style.css';

export function Pricelist(props: {list: {name: string, price: number}[]}) {
  const priceListToRender = props.list.map(element => 
    <PriceItem name={element.name} price={element.price}/>
    )
  return (
    <div className='container-pricelist'>
      {priceListToRender}
    </div>
  );
}
