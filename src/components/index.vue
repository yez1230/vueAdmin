<template>
  <div>
    <div class="container">
      <div class="logo"><a href="/">后台管理系统</a></div>
      <div class="left_open">
          <i title="展开左侧栏" class="iconfont">&#xe699;</i>
      </div>
      <ul class="layui-nav left fast-add" lay-filter="">
        <li class="layui-nav-item">
          <a class="hrefCss">+新增</a>
          <dl class="layui-nav-child"> <!-- 二级菜单 -->
            <dd v-for="item in navSubMenus"><a class="hrefCss" @click="clickSubWindow(item.url,item.title)"><i class="iconfont">&#xe6a2;</i>{{item.title}}</a></dd>
          </dl>
        </li>
      </ul>
      <ul class="layui-nav right">
        <li class="layui-nav-item">
          <a href="javascript:;">admin</a>
          <dl class="layui-nav-child"> <!-- 二级菜单 -->
            <dd><a class="hrefCss" onclick="x_admin_show('个人信息','http://www.baidu.com')">个人信息</a></dd>
            <dd><a class="hrefCss" onclick="x_admin_show('切换帐号','http://www.baidu.com')">切换帐号</a></dd>
            <dd><a href="./">退出</a></dd>
          </dl>
        </li>
        <li class="layui-nav-item to-index"><a href="/">前台首页</a></li>
      </ul>
    </div>
    <!-- 顶部结束 -->
    <!-- 中部开始 -->
     <!-- 左侧菜单开始 -->
    <div class="left-nav" v-show="leftMenuStatu">
      <div id="side-nav">
        <ul id="nav">
          <li v-for="item in leftMenus">
            <a @click="clickMenu(item)">
              <i class="iconfont">{{item.icon}}</i>
              <cite>{{item.title}}</cite>
              <i class="iconfont nav_right" v-show="item.subMenus.length!=0">&#xe697;</i>
            </a>
            <ul class="sub-menu">
              <li v-for="subItem in item.subMenus">
                <a @click="clickSubMenu(subItem)">
                  <i class="iconfont">&#xe6a7;</i>
                  <cite>{{subItem.title}}</cite>
                </a>
              </li >
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <!-- <div class="x-slide_left"></div> -->
    <!-- 左侧菜单结束 -->
    <!-- 右侧主体开始 -->
    <div class="page-content">
      <div class="layui-tab tab">
        <ul class="layui-tab-title">
          <li v-for="(item,index) in menus" :class="{'layui-this': item.key}" @click="topMenuClick(index)">{{item.menuTitle}}
            <i class="layui-icon layui-unselect layui-tab-close" @click="clickDel(index)">ဆ</i>
          </li>
        </ul>
        <div class="layui-tab-content">
          <div class="layui-tab-item layui-show" style="overflow:auto;">
              <component @leftMenuStatus="showOrHide" v-bind:is="currentView"></component>
          </div>
        </div>
      </div>
    </div>
    <div class="page-content-bg"></div>
    <!-- 右侧主体结束 -->
    <!-- 中部结束 -->
    <!-- 底部开始 -->
    <div class="footer">
      <div class="copyright">{{msg}}</div>  
    </div>
  </div>
</template>

<script>

import welcome from './welcome'
import userLog from './userLog'
import customList from './customList'
import loginLog from './loginLog'
export default {
  name: 'index',
  data () {
    return {
      leftMenuStatu: true,
      leftMenus: [
        {
          title:'首页',
          icon: "",
          component:welcome,
          subMenus:[]
        },
        {
          title:'客户管理',
          icon: "",
          component:customList,
          subMenus:[]
        },
        {
          title:'日志查看',
          icon: "",
          subMenus:[{title:'登录日志',component:loginLog},{title:'操作日志',component:userLog}]
        }
      ],
      msg: 'Copyright © 2018 勤奋的懒人',
      currentView: welcome,  // 当前菜单对应的组件
      openMenus: ['首页'], // 记录打开了的菜单名称，用于寻找第几个菜单
      menus: [{key: true, component: welcome, menuTitle: '首页'}], // 打开了的菜单
      navSubMenus:[{url:'/welcome',title:'资讯'},{url:'/customList',title:'图片'},{url:'/welcome',title:'用户'}]
    }
  },
  components: {
  },
  methods: {
    showOrHide(status) {
      this.leftMenuStatu = status;
    },
    clickSubMenu: function (item) {
      let currentIndex = this.openMenus.indexOf(item.title);
      for (var i = 0; i < this.menus.length; i++) {
        this.menus[i].key = false;
      }
      if (currentIndex == -1) {
        this.openMenus.push(item.title);
        this.menus.push({key: true,menuTitle: item.title,component:item.component});
        this.currentView = item.component;
      } else {
        this.menus[currentIndex].key = true;
        this.currentView = item.component;
      }
    },
    clickMenu(item) {
      if (item.subMenus.length == 0) {
        let currentIndex = this.openMenus.indexOf(item.title);
        for (var i = 0; i < this.menus.length; i++) {
          this.menus[i].key = false;
        }
        if (currentIndex == -1) {
          this.openMenus.push(item.title);
          this.menus.push({key: true,menuTitle: item.title,component:item.component});
          this.currentView = item.component;
        } else {
          this.menus[currentIndex].key = true;
          this.currentView = item.component;
        }
      }
    },
    clickDel: function (index) {
      if (this.menus.length == 1) {
        layer.msg('您删除了最后一个选项卡，因此为您展示首页。');
        this.currentView = welcome;
      } else {
        if (this.menus[index].key) {
          if (index == 0) {
            this.currentView = this.menus[index+1].component;
            this.menus[index+1].key = true;
          } else {
            this.currentView = this.menus[index-1].component;
            this.menus[index-1].key = true;
          }
        }
      }
      this.menus.splice(index,1);
      this.openMenus.splice(index,1);
      event.stopPropagation();
    },
    topMenuClick: function (index) {
      for (var i = 0; i < this.menus.length; i++) {
        if (i == index) {
          this.menus[i].key = true;
          this.currentView = this.menus[i].component;
        } else {
          this.menus[i].key = false;
        }
      }
      event.stopPropagation();
    },
    clickSubWindow: function (url,title) {
      layer.open({
          type: 2,
          area: ['80%', '80%'],
          fix: false, //不固定
          maxmin: true,
          shadeClose: true,
          shade:0.4,
          title: title,
          content: url
      });
    }
  }
}
</script>

<style>
  .hrefCss{cursor: pointer;}
</style>

