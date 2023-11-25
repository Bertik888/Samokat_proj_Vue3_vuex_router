<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-3">
          <h4 class="footer__subtitle">Каталог товаров</h4>
          <ul class="footer__list list-unstyled">
            <li><a href="#">Электросамокаты</a></li>
            <li><a href="#">Электроскутеры</a></li>
            <li><a href="#">Электровелосипеды</a></li>
            <li><a href="#">Электросамокаты</a></li>
          </ul>          
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <h4 class="footer__subtitle">Покупателям</h4>
          <ul class="footer__list list-unstyled">
            <li><a href="#">Сервисный центр</a></li>
            <li><a href="#">Доставка и оплата</a></li>
            <li><a href="#">Рассрочка</a></li>
            <li><a href="#">Блог</a></li>
            <li><a href="#">Сотрудничество</a></li>
            <li><a href="#">Контакты</a></li>
            <li><a href="#">Акции</a></li>
          </ul>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <h4 class="footer__subtitle">Контакты</h4>
          <ul class="footer__list list-unstyled">
            <li>Call-центр</li>
            <li>+7 (800) 505-54-61</li>
            <li>Пн-Вс 10:00 - 20:00</li>
            <li>Сервисный центр</li>
            <li>+7 (499) 350-76-92</li>
            <li>Пн-Вс 10:00 - 20:00</li>            
          </ul>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <h4 class="footer__subtitle">Адреса магазинов</h4>
          <ul class="footer__list list-unstyled">
            <li>в Москве ул. Ткацкая, 5 стр. 16</li>
            <li>+7 (499) 406 15 87;</li>
            <li>в Санкт-Петербурге ул. Фрунзе, 2</li>
            <li>+7 (499) 406 15 87;</li>
            <li>в Краснодаре ул. Восточно-Кругликовская, 86</li>
            <li>+ 7 (800) 505 54 61</li>
          </ul>
        </div>
        
      </div>

      <hr class="footer__line">

      <div class="row">
        <div class="col-12 col-lg-6 p-3 d-flex align-items-center">
          <img 
            src="@/assets/images/logo.svg" 
            alt="logo"
            class="general-logo"         
          >    
          <img 
            src="@/assets/images/icons_svg/google_play.svg"
            alt="google_play"
            class="footer__shop cursor-pointer ms-auto me-2"
            
          >
          <img 
            src="@/assets/images/icons_svg/app_store.svg" 
            alt="app_store"
            class="footer__shop cursor-pointer"
          >
        </div>
        <div class="col-12 col-lg-6 p-3 d-flex align-items-center justify-content-end">
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="#4B729F" 
            xmlns="http://www.w3.org/2000/svg"
            class="cursor-pointer me-3"
          >
            <path id="Vector" d="M16.5958 10.856C16.2725 10.4477 16.365 10.266 16.5958 9.90102C16.6 9.89685 19.2692 6.20852 19.5442 4.95768L19.5458 4.95685C19.6825 4.50102 19.5458 4.16602 18.885 4.16602H16.6983C16.1417 4.16602 15.885 4.45352 15.7475 4.77518C15.7475 4.77518 14.6342 7.44018 13.0592 9.16768C12.5508 9.66685 12.3158 9.82685 12.0383 9.82685C11.9017 9.82685 11.6892 9.66685 11.6892 9.21102V4.95685C11.6892 4.41018 11.5333 4.16602 11.0725 4.16602H7.63417C7.285 4.16602 7.0775 4.42102 7.0775 4.65852C7.0775 5.17685 7.865 5.29602 7.94667 6.75435V9.91852C7.94667 10.6118 7.82083 10.7393 7.54167 10.7393C6.79833 10.7393 4.99417 8.06352 3.925 5.00102C3.70917 4.40685 3.49833 4.16685 2.9375 4.16685H0.75C0.125833 4.16685 0 4.45435 0 4.77602C0 5.34435 0.743333 8.17018 3.45667 11.9035C5.265 14.4518 7.81167 15.8327 10.1283 15.8327C11.5208 15.8327 11.6908 15.526 11.6908 14.9985C11.6908 12.5635 11.565 12.3335 12.2625 12.3335C12.5858 12.3335 13.1425 12.4935 14.4425 13.7227C15.9283 15.1802 16.1725 15.8327 17.0042 15.8327H19.1908C19.8142 15.8327 20.13 15.526 19.9483 14.921C19.5325 13.6485 16.7225 11.031 16.5958 10.856Z"/>
          </svg>

          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            class="cursor-pointer me-3"
          >
            <path id="Vector" d="M13.75 0H6.25C2.79875 0 0 2.79875 0 6.25V13.75C0 17.2013 2.79875 20 6.25 20H13.75C17.2013 20 20 17.2013 20 13.75V6.25C20 2.79875 17.2013 0 13.75 0ZM18.125 13.75C18.125 16.1625 16.1625 18.125 13.75 18.125H6.25C3.8375 18.125 1.875 16.1625 1.875 13.75V6.25C1.875 3.8375 3.8375 1.875 6.25 1.875H13.75C16.1625 1.875 18.125 3.8375 18.125 6.25V13.75Z" fill="url(#paint0_linear_469_6701)"/>
            <path id="Vector_2" d="M10 5C7.23875 5 5 7.23875 5 10C5 12.7613 7.23875 15 10 15C12.7613 15 15 12.7613 15 10C15 7.23875 12.7613 5 10 5ZM10 13.125C8.2775 13.125 6.875 11.7225 6.875 10C6.875 8.27625 8.2775 6.875 10 6.875C11.7225 6.875 13.125 8.27625 13.125 10C13.125 11.7225 11.7225 13.125 10 13.125Z" fill="url(#paint1_linear_469_6701)"/>
            <path id="Vector_3" d="M15.3747 5.29148C15.7427 5.29148 16.041 4.99319 16.041 4.62523C16.041 4.25727 15.7427 3.95898 15.3747 3.95898C15.0068 3.95898 14.7085 4.25727 14.7085 4.62523C14.7085 4.99319 15.0068 5.29148 15.3747 5.29148Z" fill="url(#paint2_linear_469_6701)"/>
            <defs>
              <linearGradient id="paint0_linear_469_6701" x1="1.83081" y1="18.1693" x2="18.1692" y2="1.83069" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FFC107"/>
              <stop offset="0.507" stop-color="#F44336"/>
              <stop offset="0.99" stop-color="#9C27B0"/>
              </linearGradient>
              <linearGradient id="paint1_linear_469_6701" x1="6.46456" y1="13.5354" x2="13.5354" y2="6.46456" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FFC107"/>
              <stop offset="0.507" stop-color="#F44336"/>
              <stop offset="0.99" stop-color="#9C27B0"/>
              </linearGradient>
              <linearGradient id="paint2_linear_469_6701" x1="14.9037" y1="5.09642" x2="15.8458" y2="4.15417" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FFC107"/>
              <stop offset="0.507" stop-color="#F44336"/>
              <stop offset="0.99" stop-color="#9C27B0"/>
              </linearGradient>
            </defs>
          </svg>

          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="#E53935" 
            xmlns="http://www.w3.org/2000/svg"
            class="cursor-pointer me-3"
          >
            <path id="Vector" d="M0.435184 14.8959C0.843517 16.3442 2.09268 16.6092 2.17602 16.6601C4.23185 17.2201 15.7552 17.2217 17.8419 16.6601C19.271 16.2467 19.5335 14.9792 19.5827 14.8959C20.1269 12.0009 20.1627 8.22673 19.5577 4.94173L19.5827 5.10506C19.1744 3.65673 17.9252 3.39173 17.8419 3.3409C15.8135 2.79006 4.26018 2.76923 2.17602 3.3409C0.746851 3.75506 0.484351 5.02173 0.435184 5.10506C-0.147316 8.14756 -0.176483 11.6384 0.435184 14.8959ZM8.00685 13.0434V6.9659L13.2285 10.0092L8.00685 13.0434Z" />
          </svg>

          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="#039BE5" 
            xmlns="http://www.w3.org/2000/svg"
            class="cursor-pointer"
          >
            <path id="Vector" d="M7.84716 12.6505L7.51633 17.3039C7.98966 17.3039 8.19466 17.1005 8.4405 16.8564L10.6597 14.7355L15.258 18.103C16.1013 18.573 16.6955 18.3255 16.923 17.3272L19.9413 3.18385L19.9422 3.18302C20.2097 1.93635 19.4913 1.44885 18.6697 1.75469L0.927993 8.54719C-0.28284 9.01719 -0.264507 9.69219 0.72216 9.99802L5.25799 11.4089L15.7938 4.81635C16.2897 4.48802 16.7405 4.66969 16.3697 4.99802L7.84716 12.6505Z"/>
          </svg>

        </div>
      </div>

      <hr class="footer__line">

      <div class="footer__info">
        <a href="#" class="me-5">Реквизиты</a>
        <a href="#">Политика конфиденциальности</a>
      </div>
    </div>
  </div>  
</template>

<script>
  export default {
    name: 'FooterBlock'
  }
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.footer {

  &__subtitle {
    font-size: 18px;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 16px;
  }
  
  &__line {
    opacity: 0.15;
    background: #5D6C7B;
    margin-top: 20px;
  }

  &__list {
    color: $grey;
    font-size: 14px;
    line-height: normal;    

    li {
      margin-top: 16px;
    }

    a {    
      text-decoration: none;
      transition: all .3s;
      color: $black-1;

      &:hover {
        color: $purple;
      }
    }
  }

  &__shop {
    height: 48px;

    @media (max-width: $break_md) {
      height: 30px;
    }
  }

  &__info {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 16px;

    a {
      text-decoration: none;
      color: $grey;
      font-size: 12px;
      font-weight: 400;
      line-height: normal;
      transition: ease-in .2s;

      &:hover {
        color: $purple;
      }
    }
  }
}
</style>
