<template>
  <div class="skillful">
    <div class="skillful__title-wrapper">
      <SVGSkillTitleLeft />
      <h2 class="skillful__title">{{ title }}</h2>
      <SVGSkillTitleRight />
    </div>
    <div class="skillful__skills">
      <div class="skillful__triggers">
        <div
          :class="getSkillClassList(index)"
          v-for="(skill, index) in skills"
          :key="index"
          @click="setActiveSkillNumber(index)"
        >
          <span>{{ skill.name }}</span>
          <SVGUnderline />
        </div>
      </div>
      <div class="skillful__slides">
        <img :src="activeSkillImagePath" alt="skill">
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
        {
          name: 'Navigation & finders',
          imgName: 'skill_02.png'
        },
        {
          name: 'Screenshots',
          imgName: 'skill_02.png'
        },
        {
          name: 'Mouse & keyboard',
          imgName: 'skill_02.png'
        },
        {
          name: 'Network, cookies, headers',
          imgName: 'skill_02.png'
        },
        {
          name: 'JS, frames, dialogs',
          imgName: 'skill_02.png'
        }
      ],
      activeSkillNumber: 0
    }
  },
  computed: {
    /**
     * @returns string
     */
    activeSkillImagePath () {
      const imgName = this.skills[this.activeSkillNumber].imgName
      return this.getImgUrl(imgName)
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
    },
    /**
     * Get dynamic image path
     * @param {string} imgPath
     * @returns string
     */
    getImgUrl (imgName) {
      return require('@/assets/images/home/' + imgName)
    }
  }
}
</script>

<style lang="scss" scoped>
.skillful {
  padding-bottom: 242px;
  @include md {
    padding-bottom: 120px;
  }
  &__title {
    @include md {
      margin-bottom: 32px;
    }
  }
  &__title-wrapper {
    position: relative;
    display: inline-block;
    margin-bottom: 43px;
    @include md {
      margin-bottom: 0;
    }
    svg {
      position: absolute;
      bottom: 50%;
      transform: translateY(48%);
      &:first-child {
        left: -18px;
        @include md {
          transform: scale(0.6641) translate(0px, 75%);
        }
      }
      &:last-child {
        right: -41px;
        @include md {
          transform: scale(0.6641) translate(-20px, 80%);
        }
      }
    }
  }
  &__skills {
    display: flex;
  }
  &__triggers {
    display: flex;
    flex-direction: column;
    @include lg {
      flex-shrink: 0;
      margin-right: 70px;
    }
    @include md {
      flex-shrink: 0;
      margin-right: 25px;
    }
    .skillful-skill {
      position: relative;
      align-self: flex-start;
      font-size: 24px;
      font-weight: bold;
      line-height: 1.35;
      margin-bottom: 24px;
      cursor: pointer;
      transition: color .1s;
      @include md {
        font-size: 20px;
        margin-bottom: 16px;
        line-height: 1.2;
      }
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
  &__slides {
    margin-top: -68px;
    margin-left: auto;
    @include lg {
      margin-top: 0;
    }
  }
}
</style>
