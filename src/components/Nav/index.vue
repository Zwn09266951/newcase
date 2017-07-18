<template lang="html">
  <nav class="nav">
    <router-link class="item" to="/home" tag="div">首页</router-link>
    <router-link class="item" to="/car" tag="div">租车</router-link>
    <router-link class="item" to="/server" tag="div">服务</router-link>
    <router-link class="item" to="/self" tag="div">我的</router-link>
  </nav>
</template>

<script>
import { API } from '@/API/map.js'
import axios from 'axios'

export default {
  data () {
    return {
      ip: API,
      map: {}
    }
  },
  created () {
    this._getmap()
  },
  methods: {
    _getmap: function () {
      const url = '/api/getMap'
      axios.get(url).then((res) => {
        console.log(res)
      }).catch((e) => {
        console.log(e)
      })
    }
  }

}
</script>

<style lang="scss">
.nav {
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 100px;
  line-height: 100px;
  border-top: 1px solid #ddd;
  .item {
    flex:1;
    cursor: pointer;
    &:hover {
      background: #ddd;
    }
  }
}
.router-link-active {
  background: #ddd;
}
</style>
