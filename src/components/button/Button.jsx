import { ButonLoadMore } from "./Button.styled";

function Button({ onFindMore }) {
  return (
    <ButonLoadMore onClick={onFindMore} type="button">
      Load more
    </ButonLoadMore>
  );
}

export default Button;
