<template>
  <div class="row text-subtitle-1 lh-1">
    <div 
      v-for="(item, key) in options"
      :key="key"
      class="col-12 col-lg-6">
      <div class="d-flex border-bottom justify-content-between py-3">
        <div class="me-5">
          {{ item.name }}          
        </div>
        <div class="text-end">
          {{ item.value }} {{ item.unit }} 
        </div>
      </div>
    </div>
    <div class="text-subtitle-2 color-grey mt-3">
      *указаны максимально возможные характеристики, зависящие от веса райдера, рельефа местности, погодных условий и температуры окружающей среды
    </div>
  </div>
</template>

<script>

  export default {
    name: 'AboutSettingsProduct',
    props: {
      options: {
        type: Object,
        default: () => ({})
      }
    }
  }
</script>
