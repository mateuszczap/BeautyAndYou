import './style.css';

export function PriceItem(props: {name: string, price: number}) {
  return (
    <>
      <div className="container-price-item">
        <div>{props.name}</div>
        <div>{props.price}</div>
        <div className='container-booksy'>
            <img src='/booksy-logo.png'/>
            <span>Zapisz się</span>
        </div>
      </div>
    </>
  );
}
