<template>
  <div class="form-group">
    <button class="btn" @click="prevPage" :value="value">Назад</button>
    <label>{{currentPage}} из {{pages}}</label>
    <button class="btn" @click="nextPage" :value="value">Вперед</button>
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
    value: Number,
    length: Number
  },
  computed: {
    pages: function () {
      return Math.ceil(this.length / this.limit)
    },
    currentPage: function () {
      return this.offset / this.limit + 1
    }
  },
  methods: {
    nextPage: function () {
      let newOffset = this.offset + this.limit
      if (newOffset < this.length) {
        this.offset = newOffset
      }
      this.emitChange()
    },
    prevPage: function () {
      let newOffset = this.offset - this.limit
      if (newOffset >= 0) {
        this.offset = newOffset
      }
      this.emitChange()
    },
    emitChange: function () {
      this.$emit('input', this.currentPage)
    }
  },
  updated () {
    if (this.offset > this.length) {
      this.offset = 0
    }
  }
}
</script>

<style scoped>

</style>
