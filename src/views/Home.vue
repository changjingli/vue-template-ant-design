<template>
  <a-layout class="home" id="components-layout-demo-custom-trigger">
    <a-layout-sider :collapsible="true" :trigger="null" v-model="collapsed">
      <img alt="logo" class="logo" src="../assets/logo.png">

      <!-- side menu BEGIN -->
      <a-menu
        :defaultSelectedKeys="['project']"
        mode="inline"
        theme="dark">
        <template v-for="route in permission_routes">
          <template v-if="!route.hidden">
            <a-sub-menu :key="route.key" v-if="(route.children || []).length > 0">
              <span slot="title"><a-icon :type="route.meta.icon" v-if="route.meta.icon"/><span>{{ route.meta.title }}</span></span>

              <a-menu-item :key="child.key" v-for="child in route.children">
                <router-link :to="resolvePath(route.path, child.path)">{{ child.meta.title }}</router-link>
              </a-menu-item>
            </a-sub-menu>

            <a-menu-item :key="route.key" v-else>
              <router-link :to="route.path">
                <a-icon :type="route.meta.icon" v-if="route.meta.icon"/>
                <span>{{ route.meta.title }}</span>
              </router-link>
            </a-menu-item>
          </template>

        </template>
      </a-menu>
      <!-- side menu END -->
    </a-layout-sider>

    <a-layout>
      <a-layout-header class="header">
        <a-row justify="space-between" type="flex">
          <a-col>
            <a-icon
              :type="collapsed ? 'menu-unfold' : 'menu-fold'"
              @click="()=> collapsed = !collapsed"
              class="trigger"
            />

            <a-breadcrumb class="breadcrumb">
              <a-breadcrumb-item :key="index" v-for="(item, index) in breadcrumb">
                <a-icon :type="item.icon" v-if="item.icon"/>
                <span v-if="item.title">{{ item.title }}</span>
              </a-breadcrumb-item>
            </a-breadcrumb>
          </a-col>

          <a-col class="header-right">
            <span>欢迎您, 常敬礼</span>

            <a-icon type="calendar"/>
            <a-icon type="setting"/>
            <a-icon type="logout"/>
          </a-col>
        </a-row>
      </a-layout-header>

      <a-layout-content class="main-content">
        <router-view/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
  // @ is an alias to /src
  import path from 'path';
  import {mapGetters} from 'vuex';

  export default {
    name: 'Home',
    computed: {
      ...mapGetters([
        'permission_routes',
      ]),

      breadcrumb() {
        const matched = this.$route.matched;

        return [
          {
            icon: 'home',
          },

          ...matched.map(m => m.meta),
        ];
      },
    },
    data() {
      return {
        collapsed: false,
      };
    },
    methods: {
      resolvePath(basePath, routePath) {
        return path.resolve(basePath, routePath);
      },
    },
  };
</script>

<style lang="less" scoped>
  @import "../antd-variables";

  .home {
    height: 100vh;
  }

  .logo {
    margin: 0 auto;
    display: block;
    transform: rotateY(180deg) scale(.5);
  }

  .header {
    background-color: #fff;
    padding: 0 @padding-md;
  }

  .trigger {
    font-size: @icon-font-size;
  }

  .breadcrumb {
    display: inline-block;
    margin-left: @padding-lg;
    padding: @padding-xs @padding-sm;

    background-color: #f5f5f5;
    border-radius: @border-radius-base;
  }

  .header-right {
    font-size: @font-size-lg;
    display: grid;
    grid-template-columns: repeat(4, auto);
    align-items: center;
    grid-gap: @padding-md;
  }

  .main-content {
    margin: @padding-lg @padding-md;
    padding: @padding-lg;
    background: #fff;
  }
</style>
