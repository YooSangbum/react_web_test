import ProductCard from './ProductCard';

function Shop(props) {
  let list = props.list;

  return (
    <section className="shop mw">
      <p className="shopP">Shop The Latest</p>
      <div className="shop_wrap">
        <div className="sorting">
          <p>등록순</p>
          <p>낮은 가격</p>
          <p>높은 가격</p>
          <p>높은 할인율</p>
        </div>
        <div className="shoplist">{<ProductCard list={list} />}</div>
      </div>
    </section>
  );
}

export default Shop;
