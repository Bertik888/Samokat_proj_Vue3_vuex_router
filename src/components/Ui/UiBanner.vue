<template>
  <div
    :style="styleRoot"
    class="ui-banner"
  >
    <div 
      :style="styleWrapper"
      class="ui-banner__wrapper"
      :class="{ '_min-mode': minMode }"
    >
      <div class="container">
        <div class="row">
          <slot>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'UiBanner',
    props: {
      bg: {
        type: String, 
        default: '#EEE'
      },
      bgImage: {
        type: String,
        default: ''
      }, 
      bgPosition: {
        type: String,
        default: 'center right'
      },
      bgSize: {
        type: String,
        default: 'contain'
      },   

      minMode: {
        type: Boolean,
        default: false
      },
      bgImageUp: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      styleRoot() {
        if (!this.bgImageUp) {
          return {
            backgroundImage: `url(${this.bgImage})`,
            backgroundPosition: this.bgPosition,
            backgroundSize: this.bgSize
          }
        }
        return {
          background: this.bg
        }
      },
      styleWrapper() {
        if (this.bgImageUp) {
          return {
            backgroundImage: `url(${this.bgImage})`,
            backgroundPosition: this.bgPosition,
            backgroundSize: this.bgSize
          }
        }
        return {
          background: this.bg
        }
      }
    }
  }
</script>

<style lang="scss">
@import '@/assets/css/variables.scss';

.ui-banner { 
  border-radius: 10px;
  overflow: hidden;
  background-repeat: no-repeat !important;
  color: white;

  &__wrapper { 
    padding: 40px 0;
    min-height: 420px;
    background-repeat: no-repeat !important;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      padding: 20px 0;
      min-height: 210px;
    } 

    &._min-mode {
      padding: 75px 0;
      min-height: auto;

      @media (max-width: 768px) {
        padding: 40px 0;
      } 
    }
  }

  h2 {
    font-size: 35px;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 24px;
    }

  }

  p {
    margin: 0;
  }

}

</style>
