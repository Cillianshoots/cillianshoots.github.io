import "./SubLanding.css";

const SubLanding = ({ src, prefix }) => {
  return (
    <div className="sub-landing-container">
      <img
        className="sub-landing-image"
        src={`${src.large}`}
        srcSet={`${src.small} 500w, ${src.medium} 1000w, ${src.large} 1500w`}
      ></img>
      <div className="sub-landing-options">
        <a
          href={`/${prefix}/gallery`}
          className="sub-landing-option sub-landing-option-gallery"
        >
          Gallery
          <span className="material-symbols-outlined">chevron_right</span>
        </a>
        <a
          href={`/${prefix}/gallery`}
          className="sub-landing-option sub-landing-option-film"
        >
          Film
          <span className="material-symbols-outlined">chevron_right</span>
        </a>
        <a
          href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3n97m2C4fymKE1aIMQ6IXXlrJuynVZ0tVddNd6rcvD4SaxNCR_QeEGBUfAkgT4BrwcFx9jXUGB?gv=true"
          className="sub-landing-option sub-landing-option-book"
        >
          Book Now
        </a>
      </div>
    </div>
  );
};

export default SubLanding;
