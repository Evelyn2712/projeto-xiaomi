import style from "../Conteudo2/conteudo2.module.css"
import img1 from "../../assets/img/img1.jpg"
import img2 from "../../assets/img/img2.jpg"
import img3 from "../../assets/img/img3.jpg"

const Conteudo2 = () => {
  return (
    <section className={style.produtos}>

   <div className={style.produto}>

     <div className={style.text1}>
      <h2>Redmi Pad SE</h2>
      <p className={style.textinho}>Simplesmente divertido</p>
      <a className={style.buttons} href="#">Saiba mais</a>
     </div>
     <div className={style.img1}>
        <img src={img1}></img>
     </div>

    </div>


    <div className={style.produto}>

     <div className={style.text1}>
      <h2>Redmi Watch 4</h2>
      <p className={style.textinho}>Mais para ver, muito para amar</p>
      <a className={style.buttons} href="#">Saiba mais</a>
     </div>
     <div className={style.img2}>
      <img src={img2}></img>
     </div>

    </div>


    <div className={style.produto}>

     <div className={style.text1}>
      <h2>Redmi Buds 5</h2>
      <p className={style.textinho}>Nada além do seu ritmo</p>
      <a className={style.buttons} href="#">Saiba mais</a>
     </div>
     <div className={style.img3}>
      <img src={img3}></img>
     </div>

    </div>
    </section>
  )
}

export default Conteudo2;