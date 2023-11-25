<script>
  export default {
    methods: {
      formatPrice(value) {
        return (value + ' ₽').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
      }
    }
  }
</script>