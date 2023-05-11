<template>
  <div class="q-pa-md">
    <q-table
      flat
      bordered
      title="Treats"
      :rows="datas"
      :columns="columns"
      row-key="name"
      color="amber"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import { List } from "../../services/product";

export default {
  components: {},

  setup() {
    const datas = ref([]);

    return {
      datas,
    };
  },

  methods: {
    async getDatas() {
      try {
        let response = await List();
        console.log(response);
        if (response) {
          this.datas = response.data.data.data;
        }
      } catch (error) {}
    },
  },

  mounted() {},
  created() {
    this.getDatas();
  },
};
</script>


