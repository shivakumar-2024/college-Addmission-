import React from "react";

const Carousel = () => {
  

  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel"   >
    <div className="carousel-inner" style={{height:"40vh"}}  >
    <div className="carousel-inner" style={{ height: "40vh" }}>
  <div className="carousel-item active">
    <img
      src="https://images.pexels.com/photos/12064/pexels-photo-12064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      className="d-block w-100"
      alt="First slide"
    />
    <div className="carousel-caption" style={{ top: "0", transform: "translateY(0)" }}>
      <div style={{ fontSize: "80%", marginTop: "5rem" }}>
        <h4>SAMPLE UNIVERSITY</h4>
      </div>
      <p>Online College Admission</p>
    </div>
  </div>
</div>

        
        <div className="carousel-item active">
            <img src="https://images.pexels.com/photos/12064/pexels-photo-12064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="First slide"/>
            <div className="carousel-caption d-none d-md-block">
                <h5>SAMPLE UNIVERSITY</h5>
                <p>Online  College Admission.</p>
            </div>
        </div>
        <div className="carousel-item active">
            <img src="https://images.pexels.com/photos/12064/pexels-photo-12064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="First slide"/>
            <div className="carousel-caption d-none d-md-block">
                <h5>SAMPLE UNIVERSITY</h5>
                <p>Online  College Admission.</p>
            </div>
        </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
    </a>
</div>
  );
};

export default Carousel;

