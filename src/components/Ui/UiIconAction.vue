<template>
  <div 
    class="ui-icon-action"
    :class="{ _border: isBorder }"
  >
    <icon-basket 
      v-if="type === 'cart'"
      :color="color"
      :active="active"
    />
    <icon-heart 
      v-else-if="type === 'favorite'"
      :color="color"
      :active="active"
    />
    <icon-share 
      v-else-if="type === 'share'"
      :color="color"
      :active="active"
    />
    <icon-compare 
      v-else
      :color="color"
      :active="active"
    />    
    <span 
      v-if="title"
      class="ui-icon-action__title"
    >
      {{ title }}
    </span>
  </div>
</template>

<script>
import IconBasket from '@/components/Ui/icons/IconBasket.vue'
import IconHeart from '@/components/Ui/icons/IconHeart.vue'
import IconCompare from '@/components/Ui/icons/IconCompare.vue'
import IconShare from '@/components/Ui/icons/IconShare.vue'


  export default {
    name: 'UiIconAction',
    components: {
      IconBasket,
      IconHeart,
      IconCompare,
      IconShare
    },    
    props: { 
      color: {
        type: String,
        default: 'black'
      },
      title: {
        type: String,
        default: ''
      },
      isBorder: {
        type: Boolean,
        default: true
      },
      active: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        validation: (value) => ['cart', 'favorite', 'compare', 'share'].includes(value),
        default: 'cart'
      }      
    }
  }
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.ui-icon-action { 
  display: inline-flex; 
  border-radius: 40px;
  border: 1px solid transparent;
  padding: 9px;
  align-items: center;
  justify-content: center;
  transition: background-color ease-out .2s, border-color ease-out .2s;
  cursor: pointer;

  &:hover {
    background-color: $grey-1;
    border-color: $grey-1 !important;
  }  
  &._border {
    border-color: $grey-2;
  }

  &__title {
    margin-left: 10px;
    font-weight: 600;
    font-size: 14px;
    line-height: 1;
  }
}
</style>
