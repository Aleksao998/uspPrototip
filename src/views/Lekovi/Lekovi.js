import React from "react";
import { Input, Button } from "reactstrap";
import { useAlert } from "react-alert";
import Agenda from "./Agenda";
const Lekovi = (props) => {
  const alert = useAlert();
  return (
    <div className="page container-fluid">
      <div className="row" style={{ paddingTop: "40px" }}>
        <div className="col-md-5">
          <div className="row">
            <div className="col-md-4">
              <Input type="text" placeholder="Naziv Leka"></Input>
            </div>
            <div className="col-md-4">
              <Input type="time" placeholder="Naziv Leka"></Input>
            </div>
            <div className="col-md-2">
              <Button color="primary">Dodaj lek</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{ paddingTop: "40px" }}>
        <div className="col-md-5">
          <Button
            color="Danger"
            onClick={() => {
              alert.show("Notifikacija za lek");
            }}
          >
            Notifikacija
          </Button>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Agenda />
        </div>
      </div>
    </div>
  );
};

export default Lekovi;
