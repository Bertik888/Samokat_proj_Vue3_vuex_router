<template>
  <nav class="top-menu">
    <ul class="top-menu__general">
      <li><a href="#">О компании</a></li>
      <li><a href="#">Доставка и оплата</a></li>
      <li><a href="#">Тест-драйв</a></li>
      <li><a href="#">Блог</a></li>
      <li><a href="#">Контакты</a></li>

      <li><a href="#">Акции</a>

        <i class="bi bi-caret-down-fill"></i>

             
      </li>

      
    </ul>

  </nav>
</template>

<script>





  export default {
    name: 'UiMenuTop',
    components: {
    }
  }
</script>

<style lang="scss">
@import '@/assets/css/variables.scss';

.top-menu {

  &__general {
    display: flex;
    justify-content: space-between;
    list-style: none;

    > li {
      > a {
        font-weight: 600;

        &:hover {
          color: $grey;
        }
      }
    }
  }

  a {
    display: inline-block;
    text-decoration: none;  
    color: black;
  }

  ul {
    padding-left: 0;
    background: $grey-3;
  }

  li {
    cursor: pointer;
  }

  li:hover > &__sub {
    visibility: visible;
    opacity: 1;
    transform: rotateX(0deg);
  }
  
}


</style>