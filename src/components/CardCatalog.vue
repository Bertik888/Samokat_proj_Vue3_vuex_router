<template>
  <div 
    :style="{ backgroundImage: `url(${image})` }"
    class="card-catalog"
    @click="$emit('clickCatalog')"
  >
    <div class="card-catalog__text-block">
      <div>{{ title }}</div>
      <div>{{ subTitle }}</div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'CardCatalog',
    props: {      
      title: {
        type: String,
        default: ''
      },
      subTitle: {
        type: String,
        default: ''
      },      
      image: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss">
@import '@/assets/css/variables.scss';

.card-catalog {
  border-radius: 10px;
  overflow: hidden;
  background-repeat: no-repeat !important;
  background-position: center;
  background-size: cover;
  padding: 10px;
  display: flex;
  cursor: pointer;

  &:before {
    content: "";
    padding-top: 100%;
    float: left;
  }

  &__text-block {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.20);
    backdrop-filter: blur(5px);
    padding: 10px;    
    margin-top: auto;
    width: 100%;
    color: white;
    font-weight: 600;
    font-size: 14px;


    & > div:first-child {
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 18px;
      margin-bottom: 2px;      
    }
  }
}
</style>
