import "./Landing.css";
import Corporate from "../../assets/images/corporate";
import Weddings from "../../assets/images/weddings";

function Landing() {
  const corporateSrc = Corporate[3];
  const weddingsSrc = Weddings[0];

  return (
    <div className="landing-container">
      <div className="landing-header">
        <div className="landing-title">Cillian Doyle Photography</div>
        <a
          href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3n97m2C4fymKE1aIMQ6IXXlrJuynVZ0tVddNd6rcvD4SaxNCR_QeEGBUfAkgT4BrwcFx9jXUGB?gv=true"
          className="landing-book-now"
        >
          Book Now
          <span className="material-symbols-outlined">chevron_right</span>
        </a>
      </div>
      <div className="landing-options">
        <div className="landing-option landing-option-stub"></div>
        <a
          className="landing-option"
          onClick={() => {
            window.location = "/weddings";
          }}
        >
          <img className="landing-image" src={weddingsSrc.large}></img>
          <div className="landing-option-title">Weddings</div>
        </a>
        <a
          className="landing-option"
          onClick={() => {
            window.location = "/corporate";
          }}
        >
          <img className="landing-image" src={corporateSrc.large}></img>
          <div className="landing-option-title">Corporate</div>
        </a>
        <div className="landing-option landing-option-stub"></div>
      </div>
    </div>
  );
}

export default Landing;
