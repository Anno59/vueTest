<template>
  <h1>1</h1>
</template>

<script>
import Form from "../components/Form/form-container";
// import Table from "../components/Table/index";
export default {
  name: "App",
  data: function() {
    return {
      options: [
        {
          type: "input",
          label: "用户名",
          prop: "username",
          value: "",
          rules: [
            {
              required: true,
              message: "用户数据不能为空",
              trigger: "blur",
            },
            {
              min: 3,
              max: 5,
              message: "长度在 3 到 5 个字符",
              trigger: "blur",
            },
          ],
        },
        {
          type: "input",
          label: "密码",
          prop: "password",
          value: "",
          rules: [
            {
              required: true,
              message: "密码不能为空",
              trigger: "blur",
            },
            {
              min: 3,
              max: 5,
              message: "长度在 3 到 5 个字符",
              trigger: "blur",
            },
          ],
          attrs: {
            showPassword: true,
          },
        },
      ],
    };
  },
  components: {
    Form,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
