<template>
  <ul class="nav nav-tabs">
    <li
      v-for="item in items"
      :key="item.key"
      class="nav-item"      
    >
      <div
        class="nav-link cursor-pointer" 
        aria-current="page" 
        href="#"
        :class="{ 'active': item.key === modelValue }"
        @click="$emit('update:modelValue', item.key)"
      > {{ item.title }}
      </div>
    </li>
  </ul>  
</template>

<script>
  export default {
    name: 'Tabs',
    props: {
      items: {
        type: Array,
        default: () => ([])
      },
      modelValue: {
        type: String,
        default: ''
      }
    }
  }
</script>
