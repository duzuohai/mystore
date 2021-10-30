<template>
  <div>
    <!-- 头部 -->
    <div class="btn-group" role="group" aria-label="...">
      <button type="button" class="btn btn-default">Left</button>
      <button type="button" class="btn btn-default">Middle</button>
      <button type="button" class="btn btn-default">Right</button>
    </div>
    <div id="login"></div>
    <!-- 内容 -->
    <div class="container">
      <div class="login_bg">
        <form action="">
          <div class="input-group input-group-lg">
            <input
              type="text"
              class="form-control"
              placeholder="请输入用户名"
              aria-describedby="sizing-addon1"
            />
          </div>
          <div>
            <span class="label label-default">Default</span>
            <button type="button" class="btn btn-success">
              （成功）Success
            </button>
          </div>
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="请输入密码"
              aria-describedby="sizing-addon2"
            />
          </div>
        </form>
      </div>
    </div>
    <!-- 底部 -->
    <div class="footor">
      Copyright &copy; 2016~123<br />
      技术支持：烟台润森软件科技有限公司<br />
      电话：15854501727
    </div>
  </div>
</template>

<script>
export default {
};
$(function () {
  $("#sea").click(function () {
    console.log("Welcome to zhengzhou");
  });
});
</script>
<style scoped>
#login {
  width: 100%;
  height: 100%;
  position: absolute;
  /* background: url("../assets/login/app_login_bg.png") no-repeat; */
  -webkit-background-size: 100%;
  background-size: 100%;
  top: 0;
  left: 0;
}
</style>
