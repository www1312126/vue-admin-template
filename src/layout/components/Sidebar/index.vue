<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'
import Layout from '@/layout'
import Dashboard from '@/views/dashboard'
import axios from 'axios'

export default {
  components: { SidebarItem, Logo },
  mounted() {
    axios({
      url: 'http://localhost/admin/v1/menus/page',
      data: {}
    }).then(response => {
      const menuList = response.data.data
      const newRouters = []
      for (let i = 0; i < menuList.length; i++) {
        const menu = menuList[i]
        const router = {
          path: menu.url,
          meta: { title: menu.name, icon: menu.icon }
        }
        const children = menu.children
        const routerChilren = []
        for (let j = 0; j < children.length; j++) {
          routerChilren.push({
            path: children[j].url,
            meta: { title: children[j].name, icon: children[j].icon }
          })
        }
        router.children = routerChilren
        newRouters.push(router)
      }
      this.$store.dispatch('app/setMenuList', newRouters)
    }).catch(error => {
    })
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      return this.$store.getters.menuList
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
