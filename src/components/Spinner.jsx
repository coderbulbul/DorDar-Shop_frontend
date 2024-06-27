import FadeLoader from "react-spinners/FadeLoader";

const Spinner = () => {
  return (
    <div>
      <FadeLoader color="#6366f1" loading={true} />
    </div>
  );
};

export default Spinner;
