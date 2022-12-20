import React from "react";
import { BounceLoader } from "react-spinners";
import { LoaderBox } from "./index.styled";

const Loader = () => {
  return (
    <LoaderBox>
      <BounceLoader color="#5a8dee" />
    </LoaderBox>
  );
};

export default Loader;
