import React from "react";
import { Input, Button } from "reactstrap";
import { withRouter } from "react-router-dom";
import song from "./Sound.mp3";
const LandingPage = (props) => {
  let audio = new Audio(song);

  const start = () => {
    var playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then((_) => {
          // Automatic playback started!
          // Show playing UI.
          console.log("audio played auto");
        })
        .catch((error) => {
          // Auto-play was prevented
          // Show paused UI.
          console.log("playback prevented");
        });
    }
  };
  return (
    <div className="page">
      <div className="container-fluid">
        <div className="row" style={{ minHeight: "90vh" }}>
          <div class="col-md-6 nopadding">
            <form action="#" className="formFront">
              <h1 style={{ margin: "0px", marginBottom: "30px" }}>Login</h1>

              <input type="email" placeholder="Korisnicko Ime" />
              <input
                type="password"
                placeholder="Šifra"
                style={{ marginBottom: "30px" }}
              />

              <Button
                color="primary"
                onClick={() => props.history.push("/profile")}
              >
                Prijavi se
              </Button>
            </form>
          </div>
          <div class="col-md-6 nopadding">
            <div class="overlay">
              <div class="overlay-panel">
                <h1
                  style={{
                    margin: "0px",
                    paddingTop: "20px",
                    paddingBottom: "20px",
                    textAlign: "center",
                  }}
                >
                  Dobrodošli
                </h1>
                <h3>Uputsvo: </h3>
                <p className="uputstvoTekst">
                  1. Idite na stranicu kupi Proizvod
                </p>
                <p className="uputstvoTekst">
                  2. Unesite sve potrebne podatke i narucite proizvod
                </p>
                <p className="uputstvoTekst">
                  3. Kada Vam proizvod stigne na kucnu adresu otvorite kovertu
                </p>
                <p className="uputstvoTekst">
                  4. U formu unesite podatke koje ste dobili i pristupite Vasem
                  Nalogu
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
                    <Button onClick={start}> Glasovno Uputstvo</Button>
                  </div>
                  <div className="col-md-4">
                    <Button>
                      <a href={"tel:+381621204030"}> Pozovi Call Centar</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(LandingPage);
