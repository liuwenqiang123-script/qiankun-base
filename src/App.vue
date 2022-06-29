<template>
  <div>
    <el-menu :router="true" mode="horizontal">
      <!-- 基座中可以放自己的路由 -->
      <el-menu-item index="/">Home</el-menu-item>
      <!-- 引用其他子应用 -->
      <el-menu-item index="/vue">vue应用</el-menu-item>
      <el-menu-item index="/react">react应用</el-menu-item>
      <el-menu-item index="/saas">saas应用</el-menu-item>
    </el-menu>
    <router-view />
    <div class="vue"></div>
    <div class="react"></div>
    <div class="saas"></div>
  </div>
</template>
