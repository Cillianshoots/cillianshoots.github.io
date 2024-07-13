import "./Header.css";

function Header({ prefix }) {
  return (
    <div className="header">
      <h2>
        <a href="/">Cillian Doyle Photography</a>
      </h2>
      <div className="navigation">
        <a href="/">Home</a>
        <span>&#183;</span>
        <a href={`/${prefix}/gallery`}>Gallery</a>
        <span>&#183;</span>
        <a href={`/${prefix}/film`}>Film</a>
        <span>&#183;</span>
        <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3n97m2C4fymKE1aIMQ6IXXlrJuynVZ0tVddNd6rcvD4SaxNCR_QeEGBUfAkgT4BrwcFx9jXUGB?gv=true">
          Bookings
        </a>
      </div>
    </div>
  );
}

export default Header;
