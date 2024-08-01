function Alert() {
  return (
    <div>
      <dialog id="my_modal_1" className="text-black modal">
        <div className="modal-box">
          <p className="py-4">Isi dulu bos</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Alert;
