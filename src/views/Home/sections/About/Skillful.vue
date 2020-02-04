<template>
  <div class="skillful">
    <div class="skillful__title-wrapper">
      <SVGSkillTitleLeft />
      <h2 class="skillful__title">{{ title }}</h2>
      <SVGSkillTitleRight />
    </div>
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
import SVGSkillTitleLeft from '@/assets/images/home/skill_title_l.svg'
import SVGSkillTitleRight from '@/assets/images/home/skill_title_r.svg'

export default {
  name: 'Skillful',
  components: {
    SVGSkillTitleLeft,
    SVGSkillTitleRight
  },
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
  &__title-wrapper {
    position: relative;
    display: inline-block;
    margin-bottom: 40px;
    svg {
      position: absolute;
      bottom: 50%;
      transform: translateY(48%);
      &:first-child {
        left: -18px;
      }
      &:last-child {
        right: -41px;
      }
    }
  }
  &__skills {
    div {
      font-size: 24px;
      font-weight: bold;
      line-height: 1.6;
      margin-bottom: 24px;
      &:last-child {
        margin-bottom: 0;
      }
      &:hover {
        color: $red;
      }
    }
  }
}
</style>
