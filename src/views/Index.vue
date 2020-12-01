<template>
  <div class="q-pa-md">
    <q-layout view="hHh Lpr lff" class="shadow-2 rounded-borders">
      <q-header elevated>
        <q-toolbar class="bg-blue-8" style="height: 60px">
          <q-avatar
           size="40px">
                  <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
                </q-avatar>
          <q-toolbar-title>Quasar</q-toolbar-title>
           <q-btn-toggle
          v-model="selected"
          toggle-color="white"
          toggle-text-color="blue-8"
          unelevated
          stretch
          @click="toTurn"
          style="width:45%"
          :options="[
           {label: '应用中心', value: 'one'},
           {label: '应用管理', value: 'two'},
          {label: '平台管理', value: 'three'},
          {label: '系统维护', value: 'four'}
           ]"
         />
            <q-avatar
           size="30px">
                  <img src="../assets/wenhao.png" />
          </q-avatar>
            <div class="q-pa-md">
           <q-avatar
           size="40px">
                  <img src="https://cdn.quasar.dev/img/avatar.png" />
                </q-avatar>
    <q-btn-dropdown style="color: white" label="user" flat >
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>
            <q-icon name="person" size="20px"/>
            编辑个人资料</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>退出</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
     <q-avatar
     size="30px">
                  <img src="../assets/power_button.png" />
     </q-avatar>
  </div>
        </q-toolbar>
      </q-header>
<router-view/>
    </q-layout>
  </div>
</template>
<script>
export default {
  data () {
    return {
      link: 'inbox',
      drawer: false,
      selected: 'one'
    }
  },
  methods: {
    onItemClick () {
      // console.log('Clicked on an Item')
    },
    toTurn () {
      if (this.selected.includes('one')) {
        this.$router.push('/index/applicationCenter').catch(err => {
          console.log('输出报错', err)
        })
      } else if (this.selected.includes('two')) {
        this.$router.push('/index/applicationManagement').catch(err => {
          console.log('输出报错', err)
        })
      } else if (this.selected.includes('three')) {
        this.$router.push('/index/platformManagement').catch(err => {
          console.log('输出报错', err)
        })
      } else {
        this.$router.push('/index/systemMaintenance').catch(err => {
          console.log('输出报错', err)
        })
      }
    }
  }

}
</script>
<style lang="sass" scoped>
.my-menu-link
  color: #4169E1
  background: #DCDCDC
</style>
