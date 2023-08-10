<template>
  <div class="ui-card-badge">  
    <div class="ui-card-badge__image">
      <img :src="image" alt="image">
    </div>
    <div class="ui-card-badge__content">
      <div class="ui-card-badge__title">{{ title }}</div>
      <div 
        class="ui-card-badge__text-action"
        @click="$emit('clickBtn')"
      > 
        {{ textAction }}
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'UiCardBadge',
    props: {
      image: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      textAction: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss">
@import '@/assets/css/variables.scss';

.ui-card-badge {
  border-radius: 5px;
  overflow: hidden;
  background-color: $grey-1;
  padding: 10px 10px;
  display: flex;
  align-items: center;
  width: 280px;

  &__image {
    width: 56px;
    height: 71px;
    flex-shrink: 0;
    border-radius: 5px;
    overflow: hidden;
    margin-right: 20px;

    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-size: 12px;
    font-weight: 600;
    color: $black-1;
    line-height: normal;
  }

  &__text-action {
    margin-top: 6px;
    font-size: 12px;
    font-weight: 600;
    color: $purple;
    line-height: normal;
    cursor: pointer;
    transition: color .2s ease-in;

    &:hover {
      color: $purple-1;    
    }
  }
}
</style>
