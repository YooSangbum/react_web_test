import ProductCard from './ProductCard';

function MainTopList(props) {
  let list = props.list.filter((a) => a.category === 'top');

  return (
    <section className="mw">
      <div className="main_sec2">
        <p>Shop The Latest</p>
        <button className="viewAll">View All</button>
      </div>
      <div className="list_wrap">
        <ProductCard list={list} />
      </div>
    </section>
  );
}
export default MainTopList;
