/**
 * Popover, contenedor
 * @type {HTMLElement}
 */
const html = `
      <div class="banner" id="banner-ouo" popover="manual" data-popover="ouo-refer">
          <header class="header-banner">
            <div class="btn-container">
              <button title="Close" class="btn-toggle" id="__close"><span class="spn-pop-ouo"></span></button>
            </div>
          </header>
          <section class="body-banner">
            <!-- Start of ouo.io banner code -->
            <a href="http://ouo.io/ref/hoidZ1Y5"><img class="img-banner" src="http://ouo.io/images/banners/r5.jpg" title="ouo.io - Make short links and earn the biggest money" /></a>
            <!-- End of ouo.io banner code -->
          </section>
      </div>`;

/**
 * Popover con imagen de ouo.io referral
 */
export default class PopOuo {
  /**
   * Popover elemento
   * @type {HTMLElement}
   */
  pop;
  constructor() {
    // Cargar contenido (popover)
    this.load();
    // Contenedor popover
    this.pop = document.querySelector('[data-popover="ouo-refer"]');
  }

  /**
   * Cargar configuraciones
   */
  load() {
    document.body.insertAdjacentHTML("beforeend", html);
    this.stylesLoad();
    this.listenClose();
  }

  /**
   * Cargar estilos al HTML
   */
  stylesLoad() {
    const tag_style = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/tutosrivegamerLQ/legendary-guacamole@main/javascript/popovers/pop-ouo.io/pop.css">`;
    document.head.insertAdjacentHTML("beforeend", tag_style);
  }

  listenClose() {
    const btn_close = document.querySelector("#__close");
    btn_close.addEventListener("click", (e) => {
      e.preventDefault();
      this.pop.hidePopover();
    });
  }
}

new PopOuo();
