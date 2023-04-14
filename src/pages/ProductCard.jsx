import { Link } from 'react-router-dom';
function ProductCard(props) {
  let list = props.list;
  return (
    <>
      <div className="list_wrap">
        {list.map((a, i) => {
          return (
            <div className="list" key={i}>
              <div className="list_top">
                <p className="list_discount">{a.discount}%</p>
                <img src={`/img/${a.img}`} alt={a.title} />
                <Link to="/">ADD TO CART</Link>
              </div>
              <div className="list_bottom">
                <p className="list_title">{a.title}</p>
                <p className="list_price">{a.price}원</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProductCard;
