<template>
  <div class="q-pa-md" >
    <q-table
      :data="data"
      :columns="columns"
      style="height: 650px"
      row-key="id"
      :filter="filter"
      no-data-label="暂无数据"
      :rows-per-page-options="[5,10,15,20]"
      table-header-class="bg-blue-8 text-white"
      rows-per-page-label="每页显示条数"
    >

     <template v-slot:top>
          <strong style="float:left;margin-left:10px;margin-right:10px;">设备名称</strong>
          <q-input
          outlined
          v-model="deviceName"
          dense
          style="width:200px;float:left;" />

          <strong style="float:left;margin-left:10px;margin-right:10px;">在线状态</strong>
          <q-select
          outlined
          v-model="status"
          :options="options"
          dense
          style="width:200px;float:left;margin-right:10px;" />

          <q-btn
          color="primary"
          dense
          label="查询"
          unelevated
          icon="search"
          style="float:left;height:37px;width:80px;margin-right:10px"/>
          <q-btn
          color="primary"
          dense
          label="重置"
          unelevated
          icon="navigation"
          @click="reset()"
          style="float:left;height:37px;width:80px;margin-right:10px"/>
          <q-btn
          color="primary"
          dense
          label="更新设备信息"
          unelevated
          icon="add"
          style="float:left;height:37px;width:180px"/>
     </template>

     <template v-slot:header-cell-select="props" >
        <q-th :props="props"  >
          <input type="checkbox" @click="selectAll"  :checked ="checked" style="zoom: 160%;"/>
        </q-th>
      </template>

    <template v-slot:body="props">
        <q-tr  :props="props">
          <q-td align="center" @dblclick="modify(props.row)">
            <input type="checkbox" style="zoom: 160%;"  v-model="selected" :value="props.row.name" dense  size="45px"/>
          </q-td>

          <q-td key="noteName" :props="props" @dblclick="modify(props.row)">
            {{ props.row.name }}
          </q-td>

          <q-td key="products" :props="props" @dblclick="modify(props.row)">
            {{ props.row.products }}
          </q-td>

          <q-td key="onlineStatus" :props="props" @dblclick="modify(props.row)">
            {{ props.row.onlineStatus }}
          </q-td>

      <!--弹框-->
      <q-dialog v-model="prompt" persistent :props="props">
      <q-card style="min-width: 50%;height:45%;">
        <q-card-section class="text-h6 text-white bg-blue-8" style="width:100%;height:60px;">
          <div>设备信息<q-icon name="close" style="float:right" @click="prompt = false"/></div>
        </q-card-section>
        <!--弹框滚动条-->
        <div>
          <q-scroll-area style="width:100% ; height:200px; border:1px solid #CCCCCC; margin-top:0px" >
            <q-card-section style="width:900px;height:40px;">
              <div style="width:90%;height:40px;margin-left:3%;">
              <div class="text-body1" style="width:12%;height:40px;float:left;text-align:left;line-height:40px;">
                备注名称：
              </div>
              <q-input outlined class="bg-grey-2" v-model="noteName" :dense="true" style="height:40px;float:left;margin-right:10px" disable />
              <div class="text-body1" style="width:100px;height:40px;float:left;text-align:left;line-height:40px;">
                所选名称：
              </div>
              <q-input outlined  disable class="bg-grey-2" v-model="products" :dense="true" style="height:40px;float:left"/>
              </div>
              <div style="width:90%;height:40px;margin-left:3%;margin-top:10px">
              <div class="text-body1" style="width:12%;height:40px;float:left;text-align:left;line-height:40px;">
                在线状态：
              </div>
              <q-input outlined  disable class="bg-grey-2" v-model="onlineStatus" :dense="true" style="height:40px;float:left"/>
              </div>
             </q-card-section>
          </q-scroll-area>
        </div>
        </q-card>
      </q-dialog>
    </q-tr>
      </template>
    </q-table>
    </div>
</template>
<script>
export default {
  watch: {
    selected (curVal) {
      if (this.selected !== undefined && this.selected.length > 0 && curVal.length === this.data.length) {
        this.checked = true
      } else {
        this.checked = false
      }
    }
  },
  methods: {
    // emulate fetching data from server
    // 全选
    selectAll (event) {
      if (!event.currentTarget.checked) {
        this.selected = []
      } else { // 实现全选
        this.selected = []
        this.data.forEach((item, i) => {
          this.selected.push(this.data[i].name)
        })
      }
    },
    // 重置
    reset () {
      this.deviceName = null
      this.status = null
    },
    modify (s) {
      this.prompt = true
      this.id = s.id
      this.noteName = s.name
      this.onlineStatus = s.onlineStatus
      this.products = s.products
    }
  },
  data () {
    return {
      status: '',
      checked: false,
      selected: [],
      dense: false,
      deviceName: '',
      filter: '',
      rowCount: 10,
      prompt: false,
      options: [
        '在线', '离线'
      ],
      columns: [
        { name: 'select', align: 'center' },
        { name: 'noteName', required: true, label: '备注名称', align: 'center', field: row => row.name },
        { name: 'products', align: 'center', label: '所属产品', field: 'products' },
        { name: 'onlineStatus', label: '在线状态', align: 'center', field: 'onlineStatus' }
      ],
      data: [
        {
          id: 1,
          name: '设备1',
          products: 159,
          onlineStatus: '在线'
        },
        {
          id: 2,
          name: '设备2',
          products: 237,
          onlineStatus: '在线'
        },
        {
          id: 3,
          name: '设备3',
          products: 262,
          onlineStatus: '在线'
        },
        {
          id: 4,
          name: '设备4',
          products: 305,
          onlineStatus: '在线'
        },
        {
          id: 5,
          name: '设备5',
          products: 356,
          onlineStatus: '在线'
        },
        {
          id: 6,
          name: '设备6',
          products: 375,
          onlineStatus: '在线'
        },
        {
          id: 7,
          name: '设备7',
          products: 392,
          onlineStatus: '在线'
        },
        {
          id: 8,
          name: '设备8',
          products: 408,
          onlineStatus: '离线'
        },
        {
          id: 9,
          name: '设备9',
          products: 452,
          onlineStatus: '离线'
        },
        {
          id: 10,
          name: '设备10',
          products: 518,
          onlineStatus: '离线'
        }
      ]
    }
  }
}
</script>
