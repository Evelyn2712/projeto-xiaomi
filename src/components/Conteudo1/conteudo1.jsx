import style from "../Conteudo1/conteudo1.module.css";
import Imagem1 from "../../assets/img/imagem1.png";

const Conteudo1 = () => {
  return (
    <section className={style.main1}>
      <div className={style.main1Wrapper}>
        <div className={style.text1}>
          <h1>Boas-vindas ao site oficial da Xiaomi Brasil</h1>
          <p id={style.p1}>
            Encontre os mais recentes telefones Xiaomi e Redmi, pulseiras
            Xiaomi, dispositivos Smart Home etc.
          </p>
        </div>
        <div className={style.imagem1}>
          <img src={Imagem1}></img>
        </div>
      </div>
    </section>
  );
};

export default Conteudo1;
