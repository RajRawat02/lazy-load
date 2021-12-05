import { useSelector } from "react-redux";

const Spinner = () => {
  const showSpinner = useSelector((state) => state?.common?.showSpinner);
  return (
    <>
      {showSpinner ? (
        <div className="spinner-overlay">
          <div className="loader"></div>
        </div>
      ) : null}
    </>
  );
};

export default Spinner;
