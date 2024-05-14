import style from "./conteudo3.module.css";
import video from "../../assets/img/global-en.mp4" 
import capa from "../../assets/img/capa-video.jpg"

const Conteudo3 = () => {
  return (
    <section className={style.section3}>
      <div className={style.video}>
        <video src={video}
        autoPlay muted loop
        width={500}
        height={400}
        poster={capa}
        >

        </video>
      </div>
      <div className={style.text2}>
        <h2>Xiaomi SU7: Design Exterior</h2>
        <p>Experimente o encanto natural entre montanhas e mares com o nosso novo carro - Xiaomi SU7.</p>
      </div>
    </section>
  );
};

export default Conteudo3;