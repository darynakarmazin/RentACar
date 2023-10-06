import { ButonLoadMore } from "./ButtonLoad.styled";

function ButtonLoad({ onFindMore }) {
  return (
    <ButonLoadMore onClick={onFindMore} type="button">
      Load more
    </ButonLoadMore>
  );
}

export default ButtonLoad;
