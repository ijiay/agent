<script src="../main.js"></script>
<template>
  <div class="centerPage">
    <group>
      <div>
        <panel :list="list"></panel>
        <x-icon type="ios-arrow-right"></x-icon>
      </div>
      <div>
        <!--<x-switch :title="sex" v-model="showSex" class="switch"></x-switch>-->
        <cell :title="sex" :value="sexText" @click.native="showSexDialog" is-link></cell>
      </div>
      <cell-box is-link>
        cell-box long long long long long long long
      </cell-box>
    </group>
    <actionsheet
      v-model="showSex"
      :menus="menu"
      theme="android"
      @on-click-menu="click"
      @on-after-hide="log('after hide')"
      @on-after-show="log('after show')">
    </actionsheet>
    <group style="margin-top: 10px">
      <cell title="cell" value="hello" is-link></cell>
      <cell-box is-link>
        cell-box long long long long long long long
      </cell-box>
      <cell-box>
        cell-box hello world hello world hello world
      </cell-box>
      <cell title="cell" value="hello" is-link></cell>
    </group>
  </div>
</template>

<!--suppress VueDuplicateTag -->
<script>
  import EventBus from '../components/event'
  import {TransferDom, Actionsheet, Group, Panel, XSwitch, Toast, CellBox, Cell} from 'vux'
  export default {
    name: 'center',
    components: {
      Actionsheet,
      Group,
      Panel,
      XSwitch,
      Toast,
      CellBox,
      Cell
    },
    directives: {
      TransferDom
    },
    data () {
      return {
        showSex: false,
        sex: '性别',
        sexText: '',
        menu: {
          menu1: '男',
          menu2: '女',
          menu3: '保密'
        },
        list: [{
          src: 'http://media.xiaole365.com/resource/timg.jpeg',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '标题一',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: '/centerInfo'
        }]
      }
    },
    created () {
      this.getUserInfo()
    },
    methods: {
      getUserInfo () {
        this.$http.post(this.api.getUserInfo, {
          room_id: 0
        }).then(json => {
          if (+json.code === 0) {

          } else {
            EventBus.$emit('error', json.msg)
          }
        })
      },
      showSexDialog () {
        this.showSex = true
      },
      log (str) {
        // console.log(str)
      },
      click (key) {
        this.sexText = this.menu[key]
      }
    }
  }
</script>

<style lang="less">
  .centerPage {
    .weui-cells {
      margin-top: 0;
    }
    .weui-switch {
      /*opacity: 0;*/
    }
    /*.switch {*/
      /*position: absolute;*/
      /*right: 0;*/
      /*top: 0;*/
      /*padding: 0;*/
      /*opacity: 0;*/
    /*}*/
    .vux-x-switch.weui-cell_switch {
      /*padding: 0;*/
      /*opacity: 0;*/
    }
    .weui-panel:before,
    .weui-panel:after {
      border: none
    }
  }
</style>

<style lang="less" scoped>
  .centerPage {
    /*margin-top: 10px;*/
  }
</style>
