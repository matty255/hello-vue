<template>
  <v-app>
    <v-app-bar
      app
      color="yellow"
      class="darken-2"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" />
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Vue.js 배워보자!
          </v-list-item-title>
          <v-list-item-subtitle class="pt-3">
            할수 있다!
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

      data () {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'mdi-view-dashboard', to:'/hello-vue' },
          { title: '로그인', icon: 'mdi-view-dashboard', to:'/sign-in' },
          { title: '회원가입', icon: 'mdi-help-box', to:'/sign-up' },
          { title: 'Grid-system', icon: 'mdi-image', to:'/grid-system' }
          // { title: 'About', icon: 'mdi-help-box' },
        ],
        right: null,
      }
    },
  }
</script>
