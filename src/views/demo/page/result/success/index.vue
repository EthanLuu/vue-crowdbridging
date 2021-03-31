<template>
  <div class="m-5 result-success">
    <Result status="success" title="已确认接受译文" sub-title="请对本次译者的表现进行打分">
      <template #extra>
        <div class="icon-wrapper">
          <frown-outlined :style="{ color: preColor }" />
          <a-slider :min="0" :max="100" v-model:value="sliderValue" :tooltip-visible="true" />
          <smile-outlined :style="{ color: nextColor }" />
        </div>
        <a-button key="console" type="primary"> 返回列表 </a-button>
        <a-button key="buy"> 查看项目 </a-button>
        <a-button key="buy"> 评分 </a-button>
      </template>
    </Result>

    <div class="result-success__content">
      <Steps :current="3" progress-dot size="small">
        <Step title="发布任务">
          <template #description>
            <p>2021-03-10 12:32</p>
          </template>
        </Step>
        <Step title="提交译文">
          <template #description>
            <p>2021-03-20 18:40</p>
          </template>
        </Step>
        <Step title="确认译文">
          <template #description>
            <p>2021-03-20 20:09</p>
          </template>
        </Step>
        <Step title="评价译文" />
      </Steps>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, computed } from 'vue';
  import { Result, Steps, Descriptions, Slider } from 'ant-design-vue';
  import { FrownOutlined, SmileOutlined } from '@ant-design/icons-vue';
  export default defineComponent({
    components: {
      Result,
      Steps,
      Step: Steps.Step,
      Descriptions,
      DescriptionItem: Descriptions.Item,
      FrownOutlined,
      SmileOutlined,
      Slider,
    },
    setup() {
      const sliderValue = ref<number>(90);
      const min = ref<number>(0);
      const max = ref<number>(100);

      const preColor = computed(() => {
        const mid = +((max.value - min.value) / 2).toFixed(5);
        return sliderValue.value >= mid ? '' : 'rgba(0, 0, 0, .45)';
      });

      const nextColor = computed(() => {
        const mid = +((max.value - min.value) / 2).toFixed(5);
        return sliderValue.value >= mid ? 'rgba(0, 0, 0, .45)' : '';
      });

      return {
        sliderValue,
        min,
        max,
        preColor,
        nextColor,
      };
    },
  });
</script>
<style lang="less" scoped>
  .result-success {
    padding: 48px 32px;
    background: #fff;

    &__content {
      display: flex;
      padding: 24px 40px;
    }
  }

  .icon-wrapper {
    position: relative;
    margin: 0 auto;
  }

  .icon-wrapper .anticon {
    position: absolute;
    top: -2px;
    width: 16px;
    height: 16px;
    line-height: 1;
    color: rgba(0, 0, 0, 0.25);
  }

  .icon-wrapper .anticon:first-child {
    left: -13px;
  }

  .icon-wrapper .anticon:last-child {
    right: -13px;
  }

  .ant-result-content {
    background-color: #fff;
  }
</style>
