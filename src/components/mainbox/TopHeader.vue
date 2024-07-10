<template>
  <el-header>
    <div class="left">
      <el-icon @click="handleCollapsed"><Menu /></el-icon>
      <span style="margin-left: 10px">企业门户管理系统</span>
    </div>
    <div class="right">
      <span>欢迎 admin 回来</span>
      <el-dropdown>
        <el-icon :size="30" color="white"><User /></el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleCenter">个人中心</el-dropdown-item>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item @click="backlogin">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script setup>
import { useStore } from "vuex";
import { Menu, User } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
const store = useStore();
let router = useRouter();
const handleCollapsed = () => {
  store.commit("changeCollapsed");
};
// 跳转到首页
const handleCenter = () => {
  router.push({
    path: "/center",
  });
};

// 退出登录
const backlogin = () => {
  localStorage.removeItem("token");
  router.push({
    path: "/login",
  });
};
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #2d3a4b;
  color: white;
  width: 100%;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.left,
.right {
  display: flex;
}
.left {
  i {
    margin: auto;
    cursor: pointer;
  }
}
.right {
  .el-dropdown {
    margin: auto;
    margin-left: 15px;
    cursor: pointer;
  }
}
</style>
