import integradashdark from "../../img/integradashdark.png";
import "./style.css";

function SplashScreen() {
  return (
    <main>
      <section className="SplashScreen">
        <div className="integradesh_logo">
          <img
            className="integradashdark"
            src={integradashdark}
            alt="Logo da Instegradash Fundo Claro"
          />
        </div>
      </section>
    </main>
  )
}
export default SplashScreen

