import style from "../Footer/footer.module.css"

const Footer = () => {
  return (
    <footer>
      <div id={style.footer_content}>
        <div id={style.footer_content}>
          <div className={style.achei}>
          <h2 className={style.h2o}>Siga a Xiaomi</h2>
          <p className={style.pezinho}>Xiaomi Brasil Loja Oficial |<br></br> Smartphones e Produtos<br></br> Inteligentes.</p>

          <div id={style.footer_social_media}>
            <a href="#" className={style.footer_link} id={style.instagram}>
              <i class="fa-brands fa-instagram"></i>
            </a>

            <a href="#" className={style.footer_link} id={style.facebook}>
              <i class="fa-brands fa-facebook-f"></i>
            </a>

            <a href="#" className={style.footer_link} id={style.whatsapp}>
              <i class="fa-brands fa-whatsapp"></i>
            </a>
          </div>
          </div>
            <ul className={style.footer_list}>
              <li>
                <h3>Compre e saiba mais</h3>
              </li>
              <li>
                <a href="#" className={style.footer_link}>Todos os produtos</a>
              </li>
              <li>
                <a href="#" className={style.footer_link}>Xiaomi 12 Lite</a>
              </li>
              <li>
                <a href="#" className={style.footer_link}>POCO C40</a>
              </li>
            </ul>

            <ul className={style.footer_list}>
              <li>
                <h3>Sobre nós</h3>
              </li>
              <li>
                <a href="#" className={style.footer_link}>Xiaomi</a>
              </li>
              <li>
                <a href="#" className={style.footer_link}>Liderança</a>
              </li>
              <li>
                <a href="#" className={style.footer_link}>Política de Privacidade</a>
              </li>
            </ul>

            <div id={style.footer_subscribe}>
              <h3>Suporte</h3>

              <p>
              Vamos manter contato! 
              </p>

              <div id={style.imput_group}>
                <input type="email" id="email"></input>
                <button>
                   <i class="fa-regular fa-envelope"></i>
                </button>
              </div>
            </div>
        </div>
      </div>
      <div id={style.footer_copyright}>
      Copyright © 2010 - 2024 Xiaomi. Todos os direitos reservados
      </div>
    </footer>
  );
};
export default Footer;