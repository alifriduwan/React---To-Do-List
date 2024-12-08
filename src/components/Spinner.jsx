import { BeatLoader } from "react-spinners";

// eslint-disable-next-line react/prop-types
const Spinner = ({ loading }) => {
  return (
    <>
      <BeatLoader
        color="#3b82f6"
        size={20}
        cssOverride={{ margin: "48px", textAlign: "center" }}
        loading={loading}
      />
    </>
  );
};

export default Spinner;
