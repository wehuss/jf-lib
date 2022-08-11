<template>
  <div style="height:100vh">
    <v-table :config="config" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import VTable from "./components/v-table/index.vue";
import { TableConfig } from "./components/v-table/typings";
// console.log('zzzz',VTable);
const createData = () => {
  const data: TableConfig = {
    title:'test',
    card:false,
    table: {
      data: [],
      summary:true
    },
    columns: [],
  };
  const keys:string[]=[]
  new Array(5).fill(0).map((_, index) => {
    keys.push(`test${index}-1`,`test${index}-2`)
    data.columns.push(      {
        title: `test${index}`,
        dataIndex: `test${index}`,
        children: [
          {
            title: `test${index}-1`,
            dataIndex: `test${index}-1`,
            width:120,
            form:true
          },
          {
            title: `test${index}-2`,
            dataIndex: `test${index}-2`,
            width:120,
            form:true
          },
        ],
      },)
    // console.log("index", index);
    // data.table.data
  });
  keys.forEach(()=>{
    const obj:{[key:string]:number}={}
    keys.forEach(key=>{
      obj[key]=Math.floor(Math.random()*100)
    })
    data.table.data.push(obj)
  })
  return data
};

const config = ref<TableConfig>(createData());
setTimeout(()=>{
  // config.value.table.summary=true
  config.value.columns.push({
    dataIndex:'title',
    title:'zzz',
    form:{
      hiddenSearch:true
    }
  })
},100)
// setTimeout(() => {
//   config.value=createData()
//   // config.value = {
//   //   table: {
//   //     data: [
//   //       {
//   //         test: 1,
//   //         test2: 2,
//   //       },
//   //     ],
//   //   },
//   //   columns: [
//   //     {
//   //       title: "test1",
//   //       dataIndex: "test1",
//   //       children: [
//   //         {
//   //           title: "test",
//   //           dataIndex: "test",
//   //         },
//   //         {
//   //           title: "test2",
//   //           dataIndex: "test2",
//   //         },
//   //       ],
//   //     },
//   //   ],
//   // };
// }, 1000);
</script>

<style lang="scss" scoped></style>
