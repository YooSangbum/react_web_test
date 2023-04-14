import MainEvent from './MainEvent';
import MainTopList from './MainTopList';

function Main(props) {
  return (
    <>
      <MainEvent />
      <MainTopList list={props.list} />
    </>
  );
}
export default Main;
