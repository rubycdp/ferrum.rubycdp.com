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
          class="skillful-skill"
          v-for="(skill, index) in skills"
          :key="index"
        >
          <a :href="skill.href" target="_blank">{{ skill.name }}</a>
        </div>
      </div>
      <div class="skillful__slides">
        <img src="@/assets/images/home/skill_02.png" alt="skill">
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
        {
          name: 'Navigation & finders',
          href: 'https://github.com/route/ferrum#navigation'
        },
        {
          name: 'Screenshots',
          href: 'https://github.com/route/ferrum#screenshots'
        },
        {
          name: 'Mouse & keyboard',
          href: 'https://github.com/route/ferrum#mouse'
        },
        {
          name: 'Network, cookies, headers',
          href: 'https://github.com/route/ferrum#network'
        },
        {
          name: 'JS, frames, dialogs',
          href: 'https://github.com/route/ferrum#javascript'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.skillful {
  padding-bottom: 242px;
  @include sm {
    padding-bottom: 120px;
  }
  &__title {
    @include sm {
      margin-bottom: 32px;
    }
  }
  &__title-wrapper {
    position: relative;
    display: inline-block;
    margin-bottom: 43px;
    @include sm {
      margin-bottom: 0;
    }
    svg {
      position: absolute;
      bottom: 50%;
      transform: translateY(48%);
      &:first-child {
        left: -18px;
        @include sm {
          transform: scale(0.6641) translate(0px, 75%);
        }
      }
      &:last-child {
        right: -41px;
        @include sm {
          transform: scale(0.6641) translate(-20px, 80%);
        }
      }
    }
  }
  &__skills {
    display: flex;
    @include xs {
      flex-wrap: wrap;
    }
  }
  &__triggers {
    display: flex;
    flex-direction: column;
    @include md {
      flex-shrink: 0;
      margin-right: 70px;
    }
    @include sm {
      flex-shrink: 0;
      margin-right: 25px;
    }
    @include xs {
      flex-direction: initial;
      overflow-x: auto;
      max-width: 100%;
      margin-left: -24px;
      margin-right: -24px;
      padding: 4px 16px;
      padding-bottom: 20px;
      margin-bottom: 28px;
    }
    .skillful-skill {
      position: relative;
      align-self: flex-start;
      font-size: 24px;
      font-weight: 500;
      line-height: 1.35;
      margin-bottom: 24px;
      cursor: pointer;
      transition: color .1s;
      a {
        color: $white;
        opacity: 1;
        transition: opacity .1s;
      }
      @include sm {
        font-size: 20px;
        margin-bottom: 16px;
        line-height: 1.2;
      }
      @include xs {
        margin-bottom: 0px;
        margin-right: 16px;
        white-space: nowrap;
        &:last-child {
          margin-right: 16px;
        }
      }
      &:last-child {
        margin-bottom: 0;
      }
      &:hover {
        a {
          opacity: .7;
        }
      }
      &_active {
        a {
          // color: $red;
          font-weight: bold;
        }
      }
    }
  }
  &__slides {
    margin-top: -68px;
    margin-left: auto;
    @include md {
      margin-top: 0;
    }
    @include xs {
      padding: 0 16px;
    }
  }
}
</style>
