import React from "react";
import { withRouter } from "react-router-dom";
import { Button, Form, Input, Row, Col, Modal } from "reactstrap";
const ProfilePage = (props) => {
  const [scrollingLongContent, setScrollingLongContent] = React.useState(true);
  return (
    <>
      <Modal
        isOpen={scrollingLongContent}
        toggle={() => setScrollingLongContent(false)}
      >
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLongTitle">
            Modal title
          </h5>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => setScrollingLongContent(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
          <h3 style={{ textAlign: "center", marginBottom: "10px" }}>
            Unesite Lekove koje koristite
          </h3>
          <div className="row">
            <div className="col-md-7">
              <Input type="text" placeholder="Naziv"></Input>
            </div>
            <div className="col-md-4">
              <Input type="text" placeholder="Vreme"></Input>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7">
              <Input type="text" placeholder="Naziv"></Input>
            </div>
            <div className="col-md-4">
              <Input type="text" placeholder="Vreme"></Input>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7">
              <Input type="text" placeholder="Naziv"></Input>
            </div>
            <div className="col-md-4">
              <Input type="text" placeholder="Vreme"></Input>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7">
              <Input type="text" placeholder="Naziv"></Input>
            </div>
            <div className="col-md-4">
              <Input type="text" placeholder="Vreme"></Input>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7">
              <Input type="text" placeholder="Naziv"></Input>
            </div>
            <div className="col-md-4">
              <Input type="text" placeholder="Vreme"></Input>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginBottom: "20px" }}>
          <div className="col">
            <Input
              type="textarea"
              placeholder="opisite trenutnu terapiju"
            ></Input>
          </div>
        </div>
        <div className="modal-footer">
          <div className="left-side">
            <Button
              className="btn-link"
              color="default"
              data-dismiss="modal"
              type="button"
              onClick={() => setScrollingLongContent(false)}
            >
              Sacuvaj
            </Button>
          </div>
          <div className="divider" />
        </div>
      </Modal>
      <div className="page container-fluid">
        <div className="row rowHeightProfile">
          <div
            className="col-md-3 b-10 "
            style={{ backgroundColor: "red" }}
            onClick={() => props.history.push("/ishrana")}
          >
            <h1 className="profileHeader">Ishrana</h1>
          </div>
          <div
            className="col-md-3 b-10 "
            style={{ backgroundColor: "green" }}
            onClick={() => props.history.push("/lekovi")}
          >
            <h1 className="profileHeader">Lekovi</h1>
          </div>
          <div
            className="col-md-3 b-10 "
            style={{ backgroundColor: "blue" }}
            onClick={() => props.history.push("/nutricionizam")}
          >
            <h1 className="profileHeader">Nutricionista</h1>
          </div>
          <div
            className="col-md-3 b-10 "
            style={{ backgroundColor: "orange" }}
            onClick={() => props.history.push("/tehnicka")}
          >
            <h1 className="profileHeader">Tehnicka Podrska</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(ProfilePage);
