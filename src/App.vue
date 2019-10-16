<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider
      breakpoint="lg"
      collapsedWidth="80"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
      v-model="collapsed"
    >
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">

          <a-sub-menu key="sub1">
            <span slot="title"><a-icon type="user" /><font v-if="!collapsed">subnav 1</font></span>
            <a-menu-item key="1x"><router-link to="/">main</router-link></a-menu-item>
            <a-menu-item key="2x"><router-link to="/RouterParent">RouterParent</router-link></a-menu-item>
            <a-menu-item key="3x"><router-link to="/RouterParent/RouterChild">RouterChild</router-link></a-menu-item>
            <a-menu-item key="4x"><router-link to="/StateTest">StateTest</router-link></a-menu-item>
            <a-menu-item key="5x"><router-link to="/FormTest">FormTest</router-link></a-menu-item>

            <a-menu-item key="5x1"><router-link to="/AuditList">AuditList</router-link></a-menu-item>

            <a-menu-item key="6x"><router-link to="/StateTest/Cpmt03">Vuex</router-link></a-menu-item>
            <a-menu-item key="7x"><router-link to="/vuextest">Vuex</router-link></a-menu-item>
            <a-menu-item key="8x"><router-link to="/jsxtest">Jsx</router-link></a-menu-item>

          </a-sub-menu>
          <a-sub-menu key="sub2">
            <span slot="title"><a-icon type="laptop" /><font v-if="!collapsed">subnav 2</font></span>
            <a-menu-item key="5">option5</a-menu-item>
            <a-menu-item key="6">option6</a-menu-item>
            <a-menu-item key="7">option7</a-menu-item>
            <a-menu-item key="8">option8</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <span slot="title"><a-icon type="notification" /><font v-if="!collapsed">subnav 3</font></span>
            <a-menu-item key="9">option9</a-menu-item>
            <a-menu-item key="10">option10</a-menu-item>
            <a-menu-item key="11">option11</a-menu-item>
            <a-menu-item key="12">option12</a-menu-item>
          </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
      </a-layout-header>

      <a-breadcrumb style="margin: 16px 16px">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content :style="{ margin: '0px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <router-view/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  methods: {
    onCollapse (collapsed, type) {
      console.log(collapsed, type)
    },
    onBreakpoint (broken) {
      console.log(broken)
    }
  },
  data () {
    return {
      collapsed: false
    }
  }
}
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
}
</style>
