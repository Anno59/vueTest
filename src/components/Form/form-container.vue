<template>
  <el-form :validate-on-rule-change="false" v-bind="$attrs" :model="model" :rules="rules">
    <el-form-item :prop="item.prop" :label="item.label" v-for="(item, index) in optionsA" :key="index">
      <component v-bind="item.attrs" v-model="model[item.prop]" :is="`el-${item.type}`"></component>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: ["optionsA"],
  data: function () {
    return {
      model: {},
      rules: {}
    };
  },
  mounted() {
    let model = {}, rules = {}
    this.optionsA.map(function(item){
      model[item.prop] = item.value
      rules[item.prop] = item.rules
    })

    this.model = model;
    this.rules = rules;
  }
};
</script>
