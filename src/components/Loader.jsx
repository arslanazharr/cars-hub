/* eslint-disable react/no-unknown-property */

const Loader = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
        integrity="sha512-PgQMlq+nqFLV4ylk1gwUOgm6CtIIXkKwaIHp/PAIWHzig/lKZSEGKEysh0TCVbHJXCLN7WetD8TFecIky75ZfQ=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />

      <div className="w-full h-full fixed top-0 left-0 bg-black opacity-75 z-50">
        <div className="flex justify-center items-center mt-[50vh]">
          <div className="fas fa-circle-notch fa-spin fa-5x text-[#242E69]"></div>
        </div>
      </div>
    </>
  );
};

export default Loader;
