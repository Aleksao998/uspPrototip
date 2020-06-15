import React, { useState } from "react";
import { Modal, Button } from "reactstrap";
import jaja from "./jaja.jpg";
import breksva from "./breksva.jpg";
import pile from "./pile.jpg";
import salata from "./salata.jpg";
import cezar from "./cezar.jpg";
import map from "./map.jpg";
const Ishrana = (props) => {
  const [liveDemo, setLiveDemo] = React.useState(false);
  const [Ishrana, setIshrana] = useState([
    {
      title: "Dorucak",
      img: jaja,
      duration: "45min",
      text: "Omlet 2 jajeta + 8 belanca + 3 kr int hleba + salata",
    },
    {
      title: "Uzina",
      img: breksva,
      duration: "55min",
      text: "3 breskve",
    },
    {
      title: "Rucak",
      img: pile,
      duration: "65min",
      text: "Piletina 400g + salata + chia",
    },
    {
      title: "Uzina 2",
      img: salata,
      duration: "35min",
      text: "Jogurt 500ml + salata",
    },
    {
      title: "Vecera",
      img: cezar,
      duration: "45min",
      text: "Cezar salata + chia semenke",
    },
  ]);
  return (
    <>
      <Modal isOpen={liveDemo} toggle={() => setLiveDemo(false)}>
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLiveLabel">
            Dorucak
          </h5>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => setLiveDemo(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
          <h3>Recept:</h3>
          <p>1.Slomite i izmesajte 2 cela jaja i 8 belanca</p>
          <p>2.Isprzite na ulju</p>
          <p>3.Dodajte hleb i salate</p>
          <Button color="info" style={{ marginBottom: "30px" }}>
            Auto uputstvo
          </Button>
          <Button color="danger" style={{ marginBottom: "30px" }}>
            Video uputstvo
          </Button>
          <h3>Gde da kupite:</h3>
          <p>1.Idea (jaja 120, hleb 80, salata 80)</p>
          <p>2.Shop and Go (jaja 130, hleb 70, salata 840)</p>
          <img width="100%" src={map}></img>
        </div>
        <div className="modal-footer">
          <div className="left-side">
            <Button
              className="btn-link"
              color="default"
              data-dismiss="modal"
              type="button"
              onClick={() => setLiveDemo(false)}
            >
              Never mind
            </Button>
          </div>
          <div className="divider" />
        </div>
      </Modal>
      <div className="page container-fluid">
        <div className="row" style={{ marginTop: "80px" }}>
          <div className="col" style={{ textAlign: "center" }}>
            <h2 style={{ textAlign: "center" }}>Dnevna ishrana</h2>
            <Button color="info" style={{ marginTop: "10px" }}>
              Glasovno
            </Button>
          </div>
        </div>
        <div class="row" style={{ marginTop: "100px" }}>
          <div className="col-md-1"></div>
          {Ishrana.map((item) => {
            return (
              <div class="col-md-2" style={{ marginBottom: "20px" }}>
                <div class="media-image">
                  <img
                    width="600px"
                    src={item.img}
                    alt="Image"
                    class="img-fluid"
                  />
                  <div class="media-image-body">
                    <h2>{item.title}</h2>
                    <p>Trajanje pripreme:{item.duration}</p>
                    <p>{item.text}</p>
                    <p className="text-center mt-3">
                      <a
                        onClick={() => setLiveDemo(true)}
                        class="btn btn-primary text-white px-4"
                      >
                        <span class="caption">Detaljno</span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Ishrana;
