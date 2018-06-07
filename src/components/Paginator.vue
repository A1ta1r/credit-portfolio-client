<template>
  <div class="form-group">
    <button class="btn btn-outline-primary" @click="prevPage" :value="value.page">Назад</button>
    <label>{{currentPage}} из {{pages}}</label>
    <button class="btn btn-outline-primary" @click="nextPage" :value="value.page">Вперед</button>
  </div>
</template>

<script>
export default {
  name: 'Paginator',
  data () {
    return {
      offset: 0
    }
  },
  props: {
    limit: Number,
    value: Object,
    length: Number
  },
  computed: {
    pages: function () {
      return Math.ceil(this.length / this.limit)
    },
    currentPage: function () {
      return this.value.offset / this.limit + 1
    }
  },
  methods: {
    nextPage: function () {
      let newOffset = this.value.offset + this.limit
      if (newOffset < this.length) {
        this.value.offset = newOffset
      }
      this.emitChange()
    },
    prevPage: function () {
      let newOffset = this.value.offset - this.limit
      if (newOffset >= 0) {
        this.value.offset = newOffset
      }
      this.emitChange()
    },
    emitChange: function () {
      this.$emit('input', {page: this.currentPage, limit: 12, offset: this.value.offset})
    }
  }
}
</script>

<style scoped>

</style>
