<template>
  <div class="container">
    <p>{{ $t("message.hello") }}</p>
    <Button type="default" @click="changeHandler">change 中英版本</Button>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    changeHandler () {
      console.log(this.$i18n.locale)
      let current = this.$i18n.locale
      if (current === 'en') {
        this.$i18n.locale = 'ja'
      } else if (current === 'ja') {
        this.$i18n.locale = 'en'
      }
    }
  }
}
</script>
<style lang="less">

</style>
