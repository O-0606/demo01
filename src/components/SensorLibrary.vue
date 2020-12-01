<template>
  <div class="q-pa-md">
    <q-toolbar class="text-white" style="width:1365px;height:20px;">
      <img src="../assets/bg4.png" width="100%" height="100%" />
    </q-toolbar>
    <q-layout class="shadow-4" style="width:1340px;margin-left:0.9%;">
      <br />
      <br />
      <q-field
        outlined
        dense
        stack-label
        style="width:20%;height:10px;margin-right:10px;float:right"
      >
        <template v-slot:control>
          <div>当前库版本：SSC_20200429_1857</div>
        </template>
      </q-field>
      <q-input
        square
        outlined
        v-model="text"
        placeholder="输入传感器设备、型号、厂商等关键字搜索"
        dense
        style="width:70%;height:10px;margin-left:1%;float:left;"
      >
        <template v-slot:append>
          <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
          <q-icon name="search" />
        </template>
      </q-input>
      <div style="width:1340px;height:930px;margin-top:3%; border:1px solid #CCCCCC;">
        <!--左边-->
        <div style="width:230px ;height:650px;float:left;margin-left:1%; margin-top:2%">
          <q-input
            square
            outlined
            v-model="text"
            placeholder="输入传感器类型搜索"
            dense
            style="width:100%;height:10px;"
          >
            <template v-slot:append>
              <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
              <q-icon name="search" />
            </template>
          </q-input>

          <q-scroll-area style="height: 871px;width:100%;border:1px solid #CCCCCC; margin-top:9%">
            <q-list dense padding>
              <q-item
                clickable
                v-ripple
                :active="link === '所有'"
                @click="link = '所有'"
                active-class="my-menu-link"
              >
                <q-item-section>所有（1637）</q-item-section>
              </q-item>

              <q-item
                clickable
                v-ripple
                :active="link === '窗帘控制器'"
                @click="link = '窗帘控制器'"
                active-class="my-menu-link"
              >
                <q-item-section>窗帘控制器</q-item-section>
              </q-item>

              <q-item
                clickable
                v-ripple
                :active="link === '投影仪'"
                @click="link = '投影仪'"
                active-class="my-menu-link"
              >
                <q-item-section>投影仪</q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>投影仪</q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>风扇</q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>液位传感器</q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>温湿度传感器</q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>市电监控模块</q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>开关</q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>发电机</q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>水表</q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>光强度传感器</q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>火灾监测传感器</q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>空调</q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>一体机</q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>插座</q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>智能井盖</q-item-section>
              </q-item>
            </q-list>
          </q-scroll-area>
        </div>
        <!--右边-->
        <div
          style="width:80% ;
          height:38px;
          float:right;
          margin-top:1%;
          margin-right:10px;
          border:1px solid #CCCCCC;
          text-align:left;
          line-height:38px"
        >
          <p
            style="width:80px ;
          height:36px;
          float:left;
          color: #4169E1;
          background: #F0F8FF;
          text-align:center;
          line-height:38px"
          >品牌筛选：</p>
          <q-btn-toggle
            v-model="selected"
            toggle-color="white"
            toggle-text-color="blue-8"
            dense
            unelevated
            spread
            stretch
            @click="toTurn"
            style="width:75% ;
            height:38px;
            float:left;"
            :options="[
           {label: '艾默生', value: 'one' },
           {label: '科士达', value: 'two'},
           {label: '科华', value: 'three'},
           {label: '施耐德', value: 'four'},
           {label: '华为', value: 'five' },
           {label: '易事特', value: 'six'},
           {label: '信锐', value: 'seven'},
           {label: '硕天', value: 'eight'},
           {label: '中达电通', value: 'nine' },
           {label: '台达', value: 'ten'},
           {label: '艾亚特', value: 'eleven'}
           ]"
          />
        </div>
        <div style="width:75% ;height:38px;float:left;margin-top:1%;margin-left:15px; ">
          <q-btn
            label="所有"
            unelevated
            style="width:80px ;height:38px;float:left; color: #4169E1; margin-right:15px; background: #F0F8FF; border:1px solid #CCCCCC;"
          />
          <q-btn
            label="已添加"
            unelevated
            style="width:80px ; height:38px;float:left; color: black; margin-right:15px; background: white; border:1px solid #CCCCCC;"
          />
          <q-btn
            label="未添加"
            unelevated
            style="width:80px ;height:38px;float:left; color: black; background: white;  border:1px solid #CCCCCC; "
          />
        </div>
        <q-scroll-area style="width:80% ;float:left;height:750px;margin-left:15px;">
          <div id="cards">
            <!--卡片-->
            <q-card flat bordered class="my-card" v-for=" n in 8 " :key="n.label" :value="n.value">
              <q-card-section>
                <div class="text-h6 text-center">10A入墙插座</div>
                <div style="width:100%;position: relative;margin-top:15%;" class="bg-black">
                  <img
                    src="../assets/card1.png"
                    style="position: absolute; left: 50%; transform: translate(-50%, -50%);"
                  />
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none" style="margin-top:10%;">
                <strong class="text-grey-7" style="word-spacing:24px">型&nbsp; 号</strong>
                <strong
                  class="text-grey-9 text-body2"
                  style="word-spacing:10px"
                >&nbsp;SI-MA-SSO-M1-10A-Z</strong>
                <br />
                <strong class="text-grey-7" style="word-spacing:24px">厂&nbsp; 商</strong>
                <strong class="text-grey-9 text-body2" style="word-spacing:10px">&nbsp;信锐</strong>
                <br />
                <strong class="text-grey-7" style="word-spacing:10px">接入方式</strong>
                <strong class="text-grey-9 text-body2" style="word-spacing:10px">&nbsp;zigbee</strong>
                <br />
                <strong class="text-grey-7" style="word-spacing:10px">供电方式</strong>
                <strong class="text-grey-9 text-body2" style="word-spacing:10px">&nbsp;AC110~240V</strong>
                <br />
                <br />
                <strong
                  class="text-grey-7 text-body2"
                  style="word-spacing:10px;
                       color: $black-default;
                       line-height: 15px;
                       text-align: left;
                       height: 30px;
                       text-overflow: ellipsis;
                       display: -webkit-box;
                       -webkit-line-clamp: 2;
                       -webkit-box-orient: vertical;
                       overflow: hidden;"
                >SI-MA-SSO-M1-10A-Z是一款基于标准ZHA协议设计的10A入墙插座。</strong>
                <br />
                <div style="width:100%;position: relative;margin-top:15%;">
                  <q-btn
                    label="已添加"
                    unelevated
                    style="width:80px ;
                         height:38px;
                         position: absolute;
                         left: 50%;
                         transform: translate(-50%, -50%);
                         color: white;
                         background: #6495ED;
                         border:1px solid #CCCCCC;"
                  />
                  <br />
                </div>
              </q-card-section>
            </q-card>
          </div>
        </q-scroll-area>
        <div
          style="width:81.8% ;
                  position:absolute;
                  bottom:0;
                  height:50px;
                  float:left;
                  text-align:center;
                  line-height:50px;
                  margin-left:18.1%;
                  border:1px solid #CCCCCC;"
        >
          <q-btn-dropdown
            color="white"
            class="text-black"
            label="8条/每页"
            dense
            unelevated
            style="margin-top:8px;
           width:90px;
           margin-left:10px;
           float:left;
           border:1px solid #CCCCCC;"
          >
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>8条/每页</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>16条/每页</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>24条/每页</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>共5条
          <q-pagination
            v-model="current"
            style="float:right;margin-top:8px;"
            :max="5"
            :input="true"
            color="black"
            :boundary-numbers="true"
          ></q-pagination>
        </div>
      </div>
    </q-layout>
  </div>
</template>
<script>

export default {
  el: '#cards',
  data () {
    return {
      link: '所有',
      drawer: false,
      miniState: true,
      drawerLeft: false,
      current: 3,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
  methods: {
    onItemClick () {
      // console.log('Clicked on an Item')
    }
  }
}
</script>
<style lang="sass" scoped>
.my-menu-link
  color: #4169E1
  background: #F0F8FF
.my-card
  width: 100%
  max-width: 257px
  float: left
  margin-right: 10px
  color: black
  margin-top: 20px
</style>
