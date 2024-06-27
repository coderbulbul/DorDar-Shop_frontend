const BkashError = () => {
  const searchData = new URLSearchParams(window.location.search);
  const message = searchData.get("message");

  return <div>Payment Status: {message}</div>;
};

export default BkashError;
