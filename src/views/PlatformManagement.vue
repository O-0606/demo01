<template>
  <q-page class="flex flex-center">
         <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="500"
        bordered
        content-class="bg-white"
      >
        <q-scroll-area class="fit bg-grey-4" >
          <q-list dense padding style="margin-top:20px">
            <q-item>
            <q-item-label class="text-grey-8" ><q-icon name="inbox" size="25px"/>设备库</q-item-label>
            </q-item>
            <q-item
            style="height:15px"
            clickable
            :to="'/index/platformManagement/sensorLibrary'"
            :active="link === '传感器库'"
            @click="link = '传感器库'"
            active-class="my-menu-link"
            >
            <q-icon size="25px"/>
              <q-item-section >
                传感器库
              </q-item-section>
            </q-item>

            <q-item
            clickable
            :to="'/index/platformManagement/indexEdit'"
            :active="link === '红外码库'"
            @click="link = '红外码库'"
            active-class="my-menu-link">
            <q-icon size="25px"/>
              <q-item-section>
                红外码库
              </q-item-section>
            </q-item>

            <q-item
            clickable
            :to="'/index/platformManagement/indexList'"
            :active="link === '433射频模板'"
            @click="link = '433射频模板'"
            active-class="my-menu-link">
            <q-icon size="25px"/>
              <q-item-section>
                433射频模板
              </q-item-section>
            </q-item>

            <q-item>
            <q-item-label  class="text-grey-8"><q-icon name="star" size="25px"/>数据工厂</q-item-label>
            </q-item>
            <q-item
            clickable
            :active="link === '插件管理'"
            @click="link = '插件管理'"
            active-class="my-menu-link">
            <q-icon size="25px"/>
              <q-item-section>
                插件管理
              </q-item-section>
            </q-item>

            <q-item>
            <q-item-label  class="text-grey-8"><q-icon name="send" size="25px"/>平台设置</q-item-label>
            </q-item>
            <q-item
            clickable
            :active="link === '安全选项'"
            @click="link = '安全选项'"
            active-class="my-menu-link">
            <q-icon size="25px"/>
              <q-item-section>
                安全选项
              </q-item-section>
            </q-item>
            <q-item
            clickable
            :active="link === '微信公众号'"
            @click="link = '微信公众号'"
            active-class="my-menu-link">
            <q-icon size="25px"/>
              <q-item-section>
                微信公众号
              </q-item-section>
            </q-item>
                        <q-item
            clickable
            :active="link === '设备寻址配置'"
            @click="link = '设备寻址配置'"
            active-class="my-menu-link">
            <q-icon size="25px"/>
              <q-item-section>
                设备寻址配置
              </q-item-section>
            </q-item>
            <q-item
            clickable
            :active="link === '个性化设置'"
            @click="link = '个性化设置'"
            active-class="my-menu-link">
            <q-icon size="25px"/>
              <q-item-section>
                个性化设置
              </q-item-section>
            </q-item>
            <q-item
            clickable
            :active="link === '第三方服务'"
            @click="link = '第三方服务'"
            active-class="my-menu-link">
            <q-icon size="25px"/>
              <q-item-section>
                第三方服务
              </q-item-section>
            </q-item>
            <q-item
            clickable
            :active="link === '第三方服务平台认证'"
            @click="link = '第三方服务平台认证'"
            active-class="my-menu-link">
            <q-icon size="25px"/>
              <q-item-section>
                第三方服务平台认证
              </q-item-section>
            </q-item>
            <q-item
            clickable
            :active="link === '服务器端口映射'"
            @click="link = '服务器端口映射务'"
            active-class="my-menu-link">
            <q-icon size="25px"/>
              <q-item-section>
                服务器端口映射
              </q-item-section>
            </q-item>
            <q-item
            clickable
            :active="link === '云管家登录'"
            @click="link = '云管家登录'"
            active-class="my-menu-link">
            <q-icon size="25px"/>
              <q-item-section>
                云管家登录
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <router-view/>
      </q-page-container>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      link: 'inbox',
      drawer: false,
      miniState: true,
      drawerLeft: false
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
  background: white
</style>
