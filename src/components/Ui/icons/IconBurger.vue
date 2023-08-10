<template>
  <div class="icon-burger">

    <div class="container">
      <nav>
        <transition-group name="fade" mode="out-in" tag="i">
          <i
            v-if="!show"
            @click="show = !show"
            key="menu"
            class="bi bi-list"
          >menu</i>
          <i 
            v-else
            @click="show = !show"
            key="close"
            class="bi bi-x-square"
            >close</i>
        </transition-group>

        <transition-group name="fade" tag="li">
          <ul v-if="show">
            <li v-for="item in items">{{ item.title }}</li>
          </ul>
        </transition-group>
      </nav>

    </div>

  </div>
</template>

<script>

  export default {
    name: 'IconBurger',
    props: {
      items: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        show: false
      }
    }
  }
</script>

<style lang="scss">
@import '@/assets/css/variables.scss';

.icon-burger {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  // background-color: aquamarine;
}

nav {
  background-color: $grey-1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 70px;
}

ul {
  align-self: flex-start;
  background: $grey-1;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 60px;
  width: 100%;
}

li {
  font-weight: 600;
  font-size: 14px;
  color: $black-1;
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 40px;
  justify-content: center;
  list-style-type: none;
  text-transform: uppercase;
  transition: all .3s ease;
}

li:hover {
  color: $purple;
}

.list-enter-active,
.list-leave-active {
  transition: opacity .3s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

</style>
