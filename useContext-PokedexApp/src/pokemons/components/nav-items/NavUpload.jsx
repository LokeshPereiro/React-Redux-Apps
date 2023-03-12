import { useMemo, useRef } from "react";
import { useForm } from "../../../hooks";

export const NavUpload = () => {
  const { displayName, power, date, onInputChange, formState } = useForm({
    displayName: "",
    power: "",
    date: "",
  });
  const fileInputRef = useRef();

  //   Date in string for our formState
  const dateInString = useMemo(() => {
    const currDate = new Date(date);
    return currDate.toUTCString();
  }, [date]);

  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-light"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <i>
          <b>
            <i className="fa-solid fa-cloud-arrow-up m-1" />
            Upload
          </b>
        </i>
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            {/* header */}
            <div className="bg-secondary">
              <h4 className="text-center p-3 m-0 text-white">
                Upload your fav pokemons
              </h4>
              <p>{dateInString}</p>
            </div>
            {/* body */}
            <form className="p-3">
              <div className="d-grid">
                <input
                  className="form-control mb-3"
                  type="text"
                  placeholder="Provide name"
                  name="displayName"
                  // value={displayName}
                  // onChange={onInputChange}
                />
                <input
                  className="form-control mb-3"
                  type="text"
                  placeholder="Any super power?"
                  name="power"
                  // value={power}
                  // onChange={onInputChange}
                />

                <input
                  onClick={() => fileInputRef.current.click()}
                  className="form-control mb-3"
                  type="file"
                />

                <div className="d-grid">
                  <button type="submit" className="btn btn-sm btn-success">
                    Upload
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
