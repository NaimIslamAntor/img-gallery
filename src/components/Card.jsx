


function Card({ src, index, setI }) {
  const setIndex = () => {
    setI(index)
  }
  return (
  	
  	<div className="col-lg-4 col-md-6 col-12 my-2" data-bs-toggle="modal" data-bs-target="#GalleryModal" onClick={() => setIndex()}>
  <img src={src} className="card-img-top" alt={src}/>
</div>

  );
}

export default Card;