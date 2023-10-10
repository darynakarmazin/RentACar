import { Vortex } from "react-loader-spinner";
import { LoaderDiv } from "./Loader.styled";

function Loader() {
  return (
    <LoaderDiv>
      <Vortex
        visible={true}
        height="120"
        width="120"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={[
          "#121417",
          "#3470ff",
          "rgba(18, 20, 23, 0.5)",
          "#121417",
          "#3470ff",
          "rgba(18, 20, 23, 0.5)",
        ]}
      />
    </LoaderDiv>
  );
}

export default Loader;
