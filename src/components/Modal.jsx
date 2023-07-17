function Modal( { imgs, i, left, right } ) {
  return (

<div className="modal fade" id="GalleryModal" tabindex="-1" aria-labelledby="GalleryModal" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">      
      <div className="modal-body">
       <img src={imgs[i].src} alt={imgs[i].src} style={{width: "100%", height:"300px"}} />
      </div>
      <div className="modal-footer">

        <button type="button" className="btn btn-danger" onClick={() => left()}>Left</button>
        <button type="button" className="btn btn-warning" onClick={() => right()}>Right</button>


      </div>
    </div>
  </div>
</div>

  );
}

export default Modal;