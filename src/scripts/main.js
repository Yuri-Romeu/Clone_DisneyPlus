document.addEventListener('DOMContentLoaded', () => {
     const buttons = document.querySelectorAll('[data-tab-button]');
     const questions = document.querySelectorAll('[data-faq-question]');
     const heroSection = document.querySelector('.hero');
     const alturaHero = heroSection.clientHeight;

     window.addEventListener('scroll', () => {
          const posicaoAtual = window.scrollY;

          if (posicaoAtual < alturaHero) {
               ocultaElementosDoHeader();
          } else {
               exibeElementosDoHeader();
          }
     });

     // seção de atrações, programação das abas
     for (let i = 0; i < buttons.length; i++) {
          buttons[i].addEventListener('click', botao => {
               const abaAlvo = botao.target.dataset.tabButton;
               const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
               escondeTodasAbas();
               aba.classList.add('shows__list--is--active');
               removeBotaoAtivo();
               botao.target.classList.add('shows__tabs__button--is--active');
          });
     }

     //seção faq accordion
     for (let i = 0; i < questions.length; i++) {
          questions[i].addEventListener('click', abreOuFechaResposta);
     }
});

function ocultaElementosDoHeader() {
     const header = document.querySelector('header');
     header.classList.add('header--is-hidden');
}

function exibeElementosDoHeader() {
     const header = document.querySelector('header');
     header.classList.remove('header--is-hidden');
}

function removeBotaoAtivo() {
     const buttons = document.querySelectorAll('[data-tab-button]');
     for (let i = 0; i < buttons.length; i++) {
          buttons[i].classList.remove('shows__tabs__button--is--active');
     }
}

function escondeTodasAbas() {
     const tabsContainer = document.querySelectorAll('[data-tab-id]');

     for (let i = 0; i < tabsContainer.length; i++) {
          tabsContainer[i].classList.remove('shows__list--is--active');
     }
}

function abreOuFechaResposta(element) {
     const classe = 'faq__questions__item--is-open';
     const elementoPai = element.target.parentNode;
     elementoPai.classList.toggle(classe);
}
