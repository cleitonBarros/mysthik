import { ArrowUp } from "@phosphor-icons/react";
import * as S from "./style";

export function Footer() {
  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  return (
    <S.Container>
      <S.Contact id="contato">
        <hgroup>
          <h2 className="text">Contato</h2>
          <p className="paragraph">
            Entre em contato para sanar alguma duvida que apareceu ou outros
            motivos
          </p>
        </hgroup>
        <form>
          <button className="button" type="button">
            Whatapp
          </button>
        </form>
      </S.Contact>
      <S.Copyright>
        Feito por 🌼  
        <a
          href="https://github.com/cleitonBarros"
          target="_blank"
          rel="noreferrer"
        >
           Cleiton Barros
        </a>
        <div onClick={scrollToTop} className="scroll-to-top">
          <ArrowUp size={24} color="#000" />
        </div>
      </S.Copyright>
    </S.Container>
  );
}
