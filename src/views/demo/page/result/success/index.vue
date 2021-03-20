<template>
  <div class="m-5 result-success">
    <Result status="success" title="已确认接受译文" sub-title="请对本次译者的表现进行打分">
      <template #extra>
        <div class="rates">
          <a-rate :value="stars" class="star-rates" />
        </div>
        <a-button key="console" type="primary"> 返回列表 </a-button>
        <a-button key="buy"> 查看项目 </a-button>
        <a-button key="buy"> 打印 </a-button>
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
        <Step title="确认译文" />
        <template #description>
          <p>2021-03-20 20:09</p>
        </template>
        <Step title="评价译文" />
      </Steps>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Result, Steps, Descriptions } from 'ant-design-vue';
  export default defineComponent({
    components: {
      Result,
      Steps,
      Step: Steps.Step,
      Descriptions,
      DescriptionItem: Descriptions.Item,
    },
    setup() {
      const stars = ref<number>(4);
      return { stars };
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

  .rates {
    display: flex;
    margin-bottom: 20px;
  }

  .star-rates {
    margin: 0 auto;
  }
</style>
