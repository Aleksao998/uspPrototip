import React from "react";
import { Button, Form, Input, Row, Col, Modal } from "reactstrap";
import YouTube from "react-youtube";
const SubscribePage = (props) => {
  const [liveDemo, setLiveDemo] = React.useState(false);
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const onReady = (event) => {
    event.target.pauseVideo();
  };
  return (
    <>
      <Modal isOpen={liveDemo} toggle={() => setLiveDemo(false)}>
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLiveLabel">
            Modal title
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
          <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onReady} />;
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
      <div className="page">
        <div className="checkoutPage">
          <div className="checkout container" style={{ marginBottom: "40px" }}>
            <div className="row">
              <div className="col-md-8" style={{ backgroundColor: "white" }}>
                <div style={{ textAlign: "center" }}>
                  <h3>Naruci Proizvod</h3>
                  <p>
                    U koliko zelite da pocnete da koristite nas proizvod unesite
                    vase podatke i na kucnu adresu ce vam stici uputvstvo
                  </p>
                  <div
                    style={{
                      width: "100%",
                      textAlign: "center",
                      marginTop: "30px",
                    }}
                    className="row"
                  >
                    <div className="col-md-2"></div>
                    <div className="col-md-4">
                      <Button color="info"> Glasovno Uputstvo</Button>
                    </div>
                    <div className="col-md-4">
                      <Button color="danger" onClick={() => setLiveDemo(true)}>
                        {" "}
                        Video Uputstvo
                      </Button>
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: "40px" }}>
                  <h5>Potrebne Informacije</h5>
                </div>
                <form style={{ marginTop: "30px" }}>
                  <div className="form-row">
                    <Col className="marginBottomColCheckOut">
                      <Input type="text" placeholder="Ime" name="name" />
                    </Col>
                    <Col>
                      <Input
                        type="text"
                        placeholder="Prezime"
                        required="true"
                        name="lastName"
                      />
                    </Col>
                  </div>
                  <div className="form-row">
                    <Col md="5" className="marginBottomColCheckOut">
                      <Input type="text" placeholder="Adresa" name="address" />
                    </Col>
                    <Col md="5" className="marginBottomColCheckOut">
                      <Input type="text" placeholder="Grad" name="city" />
                    </Col>
                    <Col md="2">
                      <Input
                        type="text"
                        placeholder="Postanski kod"
                        name="postCode"
                      />
                    </Col>
                  </div>

                  <div className="form-row">
                    <Col md="9" className="marginBottomColCheckOut">
                      <Input
                        type="text"
                        placeholder="Broj telefona"
                        name="phoneNumber"
                      />
                    </Col>
                  </div>
                  <div className="form-row">
                    <Col>
                      <Button block className="form-submit" color="success">
                        {" "}
                        Buy{" "}
                      </Button>
                    </Col>
                  </div>
                </form>
              </div>
              <div className="col-md-4" style={{ backgroundColor: "#f7fbff" }}>
                <div style={{ textAlign: "center" }}>
                  <h4 className="borderBottomCart">Ukupno</h4>
                </div>
                <div style={{ marginTop: "50px" }} className="borderBottomCart">
                  <h5 className="bolderChartText">
                    Ukupna cena:
                    <span style={{ fontWeight: "300", float: "right" }}></span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscribePage;
