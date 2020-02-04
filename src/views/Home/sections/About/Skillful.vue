<template>
  <div class="skillful">
    <div class="skillful__title-wrapper">
      <SVGSkillTitleLeft />
      <h2 class="skillful__title">{{ title }}</h2>
      <SVGSkillTitleRight />
    </div>
    <div class="skillful__skills">
      <div
        :class="getSkillClassList(index)"
        v-for="(skill, index) in skills"
        :key="index"
        @click="setActiveSkillNumber(index)"
      >
        <span>{{ skill }}</span>
        <SVGUnderline />
      </div>
    </div>
  </div>
</template>

<script>
import SVGSkillTitleLeft from '@/assets/images/home/skill_title_l.svg'
import SVGSkillTitleRight from '@/assets/images/home/skill_title_r.svg'
import SVGUnderline from '@/assets/images/home/underline.svg'

export default {
  name: 'Skillful',
  components: {
    SVGSkillTitleLeft,
    SVGSkillTitleRight,
    SVGUnderline
  },
  data () {
    return {
      title: 'Skillful',
      skills: [
        'Navigation & finders', 'Screenshots', 'Mouse & keyboard',
        'Network, cookies, headers', 'JS, frames, dialogs'
      ],
      activeSkillNumber: 0
    }
  },
  methods: {
    /**
     * @param {number} index Skill number
     * @returns array
     */
    getSkillClassList (index) {
      return [
        'skillful-skill',
        index === this.activeSkillNumber ? 'skillful-skill_active' : ''
      ]
    },
    /**
     * @param {number} index Skill number
     * @returns void
     */
    setActiveSkillNumber (index) {
      this.activeSkillNumber = index
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
    display: flex;
    flex-direction: column;
    .skillful-skill {
      position: relative;
      align-self: flex-start;
      font-size: 24px;
      font-weight: bold;
      line-height: 1.6;
      margin-bottom: 24px;
      cursor: pointer;
      transition: color .1s;
      &:last-child {
        margin-bottom: 0;
      }
      &:hover {
        color: $red;
        svg {
          opacity: 1;
          transition: opacity .1s;
        }
      }
      svg {
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 100%;
        opacity: 0;
      }
      &_active {
        color: $red;
        svg {
          opacity: 1;
          transition: opacity .1s;
        }
      }
    }
  }
}
</style>
