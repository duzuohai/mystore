<template>
  <div>
    <!-- <h1>{{ $store.state.count }}</h1>
    <button @click="ad">++</button>
    <h2>大于65分的成绩：{{ $store.getters.filterscore }}</h2>
    <p>符合条件的共{{ $store.getters.scorelenght }}个</p> -->
    <!-- 头部 -->
    <!-- <div class="btn-group" role="group" aria-label="...">
      <button type="button" class="btn btn-default">Left</button>
      <button type="button" class="btn btn-default">Middle</button>
      <button type="button" class="btn btn-default">Right</button>
    </div>
    <div id="login"></div> -->
    <!-- 内容 -->
    <!-- <div class="container">
      <div class="login_bg">
        <form action="">
          <div class="input-group input-group-lg">
            <input
              type="text"
              class="form-control"
              placeholder="请输入用户名"
              aria-describedby="sizing-addon1"
            />
          </div> -->
    <!-- <div>
            <span class="label label-default">Default</span>
            <button type="button" class="btn btn-success">
              （成功）Success
            </button>
          </div> -->
    <!-- <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="请输入密码"
              aria-describedby="sizing-addon2"
            />
          </div> -->
    <!-- </form> -->
    <!-- </div> -->
    <!-- </div> -->
    <!-- 底部 -->
    <!-- <div class="footor">
      Copyright &copy; 2016~123<br />
      技术支持：烟台润森软件科技有限公司<br />
      电话：15854501727
    </div> -->
    <!-- rodio -->
    <label for="man">
      <input type="radio" value="男" name="sex" id="man" v-model="sex" />男
    </label>
    <label for="women">
      <input type="radio" value="女" name="sex" id="women" v-model="sex" />女
    </label>
    <h1>你选择的性别是：{{ sex }}</h1>
    <!-- checkbox -->
    <label for="agree">
      <input type="checkbox" id="agree" v-model="isAgree" />同意协议
      <h1>你选择的性别是：{{ isAgree }}</h1>
    </label>
    <!-- checkbox复选框 -->
    <input type="checkbox" value="NBA" v-model="hibbies" />NBA
    <input type="checkbox" value="FootBall" v-model="hibbies" />FootBall
    <input type="checkbox" value="ball" v-model="hibbies" />ball
    <input type="checkbox" value="WNBA" v-model="hibbies" />WNBA
    <h1>你选择的爱好是：{{ hibbies }}</h1>
    <!-- select -->
    <select name="" id="" v-model="sports" multiple>
      <option value="NBA">NBA</option>
      <option value="WNBA">WNBA</option>
      <option value="CBA">CBA</option>
      <option value="WCBA">WCBA</option>
    </select>
    <h1>你选择的爱好是：{{ sports }}</h1>
    <label for="ite" v-for="item in sportList">
      <input type="checkbox" id="ite" :value="item" v-model="sports" />{{
        item
      }}
    </label>
    <ul class="nav nav-tabs">
      <li role="presentation" class="active"><a href="#">Home</a></li>
      <li role="presentation"><a href="#">Profile</a></li>
      <li role="presentation"><a href="#">Messages</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '123',
      sex: '女',
      isAgree: true,
      hibbies: [],
      sport: 'NBA',
      sports: [],
      sportList: ['WNBA', 'NBA', 'CBA', 'WCBA', 'BALL']
    }
  },
  methods: {
    ad () {
      this.$store.commit('add')
    }
  }
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
