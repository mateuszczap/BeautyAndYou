import './style.css';

export function PriceItem() {
  return (
    <>
      <div className="container-price-item">
        <div>usługa</div>
        <div>cena</div>
        <div className='container-booksy'>
            <img src='/booksy-logo.png'/>
            <span>Zapisz się</span>
        </div>
      </div>
    </>
  );
}
