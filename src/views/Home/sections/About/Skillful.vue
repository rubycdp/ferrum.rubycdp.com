<template>
  <div class="skillful">
    <h2 class="skillful__title">{{ title }}</h2>
    <div class="skillful__skills">
      <div
        v-for="(skill, key) in skills"
        :key="key"
      >
        {{ skill }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skillful',
  data () {
    return {
      title: 'Skillful',
      skills: [
        'Navigation & finders', 'Screenshots', 'Mouse & keyboard',
        'Network, cookies, headers', 'JS, frames, dialogs'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
