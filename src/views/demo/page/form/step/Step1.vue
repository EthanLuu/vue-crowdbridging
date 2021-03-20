<template>
  <div class="step1">
    <div class="step1-form">
      <BasicUpload
        :maxSize="20"
        :maxNumber="10"
        @change="handleChange"
        :api="uploadApi"
        class="my-5"
      />
      <BasicForm @register="register">
        <template #fac="{ model, field }"> </template>
      </BasicForm>
    </div>
    <a-divider />
    <h3>说明</h3>
    <p> 若指定译员等级，可以在一定程度上提高翻译质量，同时请考虑不同等级译员对翻译价格的要求。 </p>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form';
  import { step1Schemas } from './data';
  import { InboxOutlined } from '@ant-design/icons-vue';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { BasicUpload } from '/@/components/Upload';
  import { uploadApi } from '/@/api/sys/upload';
  import { Select, Input, Divider } from 'ant-design-vue';
  export default defineComponent({
    components: {
      BasicUpload,
      InboxOutlined,
      BasicForm,
      [Select.name]: Select,
      ASelectOption: Select.Option,
      [Input.name]: Input,
      [Input.Group.name]: Input.Group,
      [Divider.name]: Divider,
    },
    emits: ['next'],
    setup(_, { emit }) {
      const [register, { validate }] = useForm({
        labelWidth: 100,
        schemas: step1Schemas,
        actionColOptions: {
          span: 14,
        },
        showResetButton: false,
        submitButtonOptions: {
          text: '下一步',
        },
        submitFunc: customSubmitFunc,
      });
      async function customSubmitFunc() {
        try {
          const values = await validate();
          emit('next', values);
        } catch (error) {}
      }

      const { createMessage } = useMessage();
      return {
        register,
        handleChange: (list: string[]) => {
          createMessage.info(`已上传文件${JSON.stringify(list)}`);
        },
        uploadApi,
      };
    },
  });
</script>
<style lang="less" scoped>
  .step1 {
    &-form {
      width: 450px;
      margin: 0 auto;
    }

    h3 {
      margin: 0 0 12px;
      font-size: 16px;
      line-height: 32px;
      color: rgba(0, 0, 0, 0.45);
    }

    h4 {
      margin: 0 0 4px;
      font-size: 14px;
      line-height: 22px;
      color: rgba(0, 0, 0, 0.45);
    }

    p {
      color: rgba(0, 0, 0, 0.45);
    }
  }

  .pay-select {
    width: 20%;
  }

  .pay-input {
    width: 70%;
  }
</style>
