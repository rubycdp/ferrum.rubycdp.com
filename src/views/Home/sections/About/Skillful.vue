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
.skillful {
  &__skills {
    div {
      font-size: 24px;
      font-weight: bold;
      line-height: 1.6;
      &:hover {
        color: $red;
      }
    }
  }
}
</style>
