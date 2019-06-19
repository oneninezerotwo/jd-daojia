<template>
  <div>
    <header id="header" style="display:block;">
      <router-link to="./login">
        <span class="icon icon-goback index-back J_ping" report-eventid="MLoginRegister_Return"></span>
      </router-link>
      <span class="title_name">京东注册</span>
    </header>
    <section class="page">
      <div class="wrap regPage" v-show="wrap1">
        <div class="input-container">
          <label class="area-box">
            <span class="area_code" code="86">+86</span>
            <i class="area_icon"></i>
          </label>
          <input
            ref="input"
            type="tel"
            id="telphone"
            class="telphone acc-input txt-input J_ping"
            value
            placeholder="请输入手机号"
            report-eventid="MLoginRegister_PhoneInput"
            v-model="tel"
            @input="showClear()"
          >
          <i class="icon icon-clear" v-show="isShowClear" @click="clear()"></i>
        </div>
        <a
          href="javascript:;"
          id="index-btn"
          class="next-step btn J_ping"
          :class="{'btn-active': tel}"
          report-eventid="MLoginRegister_RegiaterNextOne"
          @click="Verifify"
        >下一步</a>
      </div>
    </section>
     <!-- 第二个下一步 -->
     <section class="page">
    <div class="wrap regPage wrap2" v-show="wrap2">
        <div class="tips-wrap">
            <span class="pre-span">请输入</span>
            <span class="mobile-span">{{mobile}}</span>
            <span class="suffix-span">收到的验证码：</span>
        </div>
        <div class="input-box">
            <div class="input-container">
                <input id="telCode" class="telCode acc-input txt-input J_ping" type="tel"
                 oninput="if(value.length>6) value=value.slice(0,6);" 
                 placeholder="请输入手机验证码" autocomplete="off" report-eventid="MLoginRegister_MsgInput" 
                 @input="showClear()" v-model="telCode">
                <i class="icon icon-clear" v-show="isShowClear" @click="clear()"></i>
            </div>
            <!-- 获取验证码 -->
            <button data-mescode="true" class="mesg-code J_ping"
            report-eventid="MLoginRegister_ReceiveMsgCheck" 
            data-eventid="MLoginRegister_ReReceiveMsgCheck"
            @click="getCode" v-show="is_dx_yz"
            >获取验证码</button>
              <button data-mescode="true" class="mesg-code J_ping"
            report-eventid="MLoginRegister_ReceiveMsgCheck" 
            data-eventid="MLoginRegister_ReReceiveMsgCheck"
            v-show="!is_dx_yz"
            >重新获取{{time}}s</button>
        </div>

        <a href="javascript:;" id="captcha-btn" class="next-step btn J_ping" 
         :class="{'btn-active':telCode}"
          @click="nextTwo"
        report-eventid="MLoginRegister_RegiaterNextTwo">下一步
        </a>
        <div class="question-box">
            <span class="issues">遇到问题？请</span>
            <a href="tel:950618" class="J_ping customer-service" report-eventid="MLoginRegister_ReceiveMsgHelp">联系客服</a>
        </div>

    </div>
</section>
 <!-- 第二个下一步结束 -->
 <!-- 设置登录密码 -->
 <section>
        <div class="psw-content"  v-show="isPwd">
           <div class="tips-wrap">
            <span class="pre-span">请设置</span>
            <span class="mobile-span"></span>
            <span class="suffix-span">登录密码</span>
        </div>
     <div class="input-container">
                <input id="password" type="password" 
                class="acc-input password txt-input J_ping" 
                placeholder="请输入密码" autocomplete="off" 
                report-eventid="MLoginRegister_Password" 
                v-model="psw"
                 @input="showClear()"
                >
                <i class="icon icon-clear" v-show="isShowClear" @click="clear"></i>
                <label class="label-checkbox J_ping" report-eventid="MLoginRegister_Plaintext">
                </label> 
      </div>
        <a href="javascript:;" id="captcha-btn" class="next-step btn J_ping" 
        report-eventid="MLoginRegister_RegiaterNextTwo" style="border-radius:0.25rem;"
         :class="{'btn-active':psw}"
        @click="register"
        >完成注册
        </a>
    </div>
 </section>
    <div class="toast-ui" v-show="isShowError">
      <span class="toast">{{errorTxt}}</span>
    </div>

    <!-- 隐私协议 -->
    <div class="pop-dialog" v-show="msgDialog" style="display:block;">
      <div class="pop-body">
        <div style="text-align: center">
          <img
            class="icon-warn"
            src="data:image/png;base64,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"
            alt
          >
        </div>
        <p class="pop-msg">我们将发送短信/语音验证码至：<br>{{tel}}</p>
        <div class="pop-btns" id="popBtns">
          <a href="javascript:;" class="btn-pop btn-cancel J_ping" id="popCancelBtn" @click="hide">取消</a>
          <a href="javascript:;" class="btn-pop btn-continue J_ping" @click="popContinue">确定</a>
        </div>
      </div>
    </div>
    <!-- 区号选择 -->
    <div class="drop"></div>
    <div class="area"></div>
    <!-- 隐私协议 -->
    <div class="agreement-dialog" style="display:block" ref="agree" v-if="isShow">
      <div class="agreement-body">
        <p class="agreement-title">注册协议及隐私政策</p>
        <div class="agreement-line clearfix"></div>
        <div class="agreement-content">
          <p>
            在您注册成为京东用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议，
            <span
              class="important-tip"
            >请您务必仔细阅读、充分理解协议中的条款内容后再点击同意（尤其是以粗体并下划线标识的条款，因为这些条款可能会明确您应履行的义务或对您的权利有所限制）：</span>
          </p>
          <p class="link-top">
            <a href="https://in.m.jd.com/help/app/register_info.html">《京东用户注册协议》</a>
          </p>
          <p class="link-content">
            <a href="https://in.m.jd.com/help/app/private_policy.html">《京东隐私政策》</a>
          </p>
          <p class="link-bottom">
            <a href="https://in.m.jd.com/help/app/order_sharing_info.html">《订单共享与安全》</a>
          </p>
          <p>
            <span
              class="important-tip"
            >【请您注意】如果您不同意上述协议或其中任何条款约定，请您停止注册。您停止注册后将仅可以浏览我们的商品信息但无法享受我们的产品或服务。如您按照注册流程提示填写信息、阅读并点击同意上述协议且完成全部注册流程后，即表示您已充分阅读、理解并接受协议的全部内容；并表明您也同意京东可以依据以上的隐私政策内容来处理您的个人信息。</span>如您对以上协议内容有任何疑问，您可随时与京东客服联系。
          </p>
        </div>
        <div class="agreement-btn-wrap">
          <p class="agreement-notice">
            <span>
              点击同意即表示您已阅读并同意
              <a href="https://in.m.jd.com/help/app/register_info.html">《京东用户注册协议》</a>与
              <a href="https://in.m.jd.com/help/app/private_policy.html">《京东隐私政策》</a>并将您的订单信息共享给为完成此订单所必须的第三方合作方。关于
              <a href="https://in.m.jd.com/help/app/order_sharing_info.html">《订单共享与安全》</a>
            </span>
          </p>
          <div class="agreement-btns">
            <router-link
              href="javascript:;"
              class="agreement-btn btn-cancel agreement-btn-cancel clearfix"
              to="/login"
            >不同意</router-link>
            <!-- <a href="javascript:;" class="agreement-btn btn-cancel agreement-btn-cancel clearfix">不同意</a> -->
            <a href="javascript:;" class="agreement-btn btn-complete clearfix" @click="agreeBtn">同意</a>
          </div>
        </div>
      </div>
    </div>
    <!--End 隐私协议-->
    <!-- 手机验证码 -->
    <div id="captcha_dom" class="click-smart-captcha" v-show="isShowcode" style="display:none;">
      <div id="captcha_drop" class="captcha_drop"></div>
      <div id="captcha">
        <div class="captcha_header">
          安全验证
          <div class="left-btn jcap_refresh" @click="createCode">
            <img class="icono-reset" src="//h5.360buyimg.com/jcap/img_20190409//refresh.png">
          </div>
        </div>
        <div class="captcha_body">
          <div class="big_img">
            <div class="img_loading">
              <div class="img_tips_wraper">
                <img id="img_tips">
                <p></p>
              </div>
            </div>
            <!-- 验证码 -->
            <div class="img_loading_refreshTips"></div>
                    <span>验证码</span>
                    <input type="text" v-model="picLyanzhengma" placeholder="请输入验证码" style="width:120px;height:30px;"/>
                    <input type="button" id="code" class="verification" value="78VI"
                       v-model="checkCode"  @click="createCode"/>
<!--                 </div> -->
            <!-- <img
              id="cs_img"
              src="data:image/jpg;base64,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"
            > -->
          </div>
        </div>
        <div class="captcha_footer">
          <span class="tip">
            <!-- <img
              id="tipImg"
              src="data:image/png;base64,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"
            > -->
          </span>
          <button class="sure_btn" @click="checkLpicma">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      tel: "", //号码输入框
      telCode:"",//手机验证码
      isShow: true,
      isShowClear: false, // 是否显示清除按钮
      isShowError:false, // 是否显示错误提示信息
      errorTxt: "", // 错误提示信息
      timer: null,
      isShowcode:false,// 是否显示验证码
      msgDialog:false,
      wrap1:true,
      wrap2:false,
      username: "",
      checkCode:"bvR5",
      picLyanzhengma:"",
      code:"",
      mobile:"",//手机号
      time:10,
      is_dx_yz:true,
      isPwd:false,//是否显示密码注册
      psw:"",//密码输入框
      yzcode:"",//短信随机码
      mcode:""
    };
  },
  created() {
    // 通知底部隐藏
    this.$store.state.isShowMfooter = false;
  },
  methods: {
    agreeBtn() {
      this.isShow = !this.isShow;
    },
    // input显示清除按钮
    showClear() {
      if (this.tel !== "" || this.telCode!=="" || this.psw!=="") {
        // console.log(this.tel, this.isShowClear);
        this.isShowClear = true;
      } else {
        this.isShowClear = false;
      }
    },
    // 清除input内容
    clear() {
      this.tel = "";
      this.telCode="";
      this.psw="";
      if (this.tel !== "" || this.telCode!=="" || this.psw!=="") {
        this.isShowClear = true;
      } else {
        this.isShowClear = false;
      }
    },
    hide(){
      this.msgDialog = false;
    },
    //是否显示验证码
    Verifify() {
      //  var _this = this
      const a = this.tel;
      if (this.tel === "") {
        // clearTimeout(timer);
        this.isShowError = false;
        this.errorTxt = "请输入手机号";
        //  var timer=setTimeout(()=>{
        //   this.isShowError=false;
        //  },2000)
        // console.log("输入手机号");
        return false;
      } else {
        let testTel = /^1[3456789]\d{9}$/.test(a);
        if (!testTel) {
          this.isShowError = true;
          this.errorTxt = "手机号码格式不正确";
          clearTimeout(timer);
          var timer = setTimeout(() => {
            this.isShowError = false;
          }, 2000);
          // console.log("手机号格式不正确");
          return false;
        } else {
          this.isShowError = false;
          localStorage.setItem("username", this.tel);
          this.isShowcode=true;
          // this.$router.push({ path: "login" });
          // console.log(this);
          return true;
        }
      }
    },
    // 图片验证码
     createCode(){
      this.code = "";
      this.checkCode = "vbC7";
      this.picLyanzhengma = "";
      var codeLength = 4;//验证码的长度 
      var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 
         'S','T','U','V','W','X','Y','Z');
      for(var i = 0; i < codeLength; i++) {
       var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35） 
       this.code += random[index];//根据索引取得随机数加到code上 
      } 
      this.checkCode = this.code;//把code值赋给验证码 
    },
//手机验证码
    getmobieCode(){
      this.mcode="";
      var codeLength=6;
      var random =new Array(0,1,2,3,4,5,6,7,8,9);
      for(var i=0;i<codeLength;i++){
         var index =Math.floor(Math.random()*9);
         this.mcode +=random[index];
      }
     this.yzcode=this.mcode;
     console.log("手机验证码"+this.yzcode);
    },
 // 验证所输入验证码是否一致，不区分大小写
 checkLpicma(){   
      this.picLyanzhengma.toUpperCase();//取得输入的验证码并转化为大写   
      if(this.picLyanzhengma == '') {
       alert('请输入验证码'); 
      }else if(this.picLyanzhengma.toUpperCase() != this.checkCode ) { 
        alert('验证码输入错误'); 
       this.createCode();//刷新验证码 
       this.picLyanzhengma = '';
      }else {
       //输入正确时 
        // alert('成功');
        this.isShowcode=false;
        this.msgDialog=true;
      } 
    },
    popContinue(){
      this.msgDialog=false;
        this.wrap1=!this.wrap1;
        this.wrap2=!this.wrap2;
          this.mobile=this.tel;
    },
    //获取手机验证
    getCode(){
      this.is_dx_yz=false
          let timer=setInterval(()=>{
            if ((this.time--) <= 0) {
              this.time = 60;
              this.is_dx_yz = true;
              clearInterval(timer);
            }
          },1000)
          // this.createCode();
          // console.log(this.checkCode);
          this.getmobieCode();

        // var a=this.checkCode;
        // console.log(a);
    },
    nextTwo(){
      // var a=localStorage.getItem("userInfo");
          var a =this.telCode;
          if(a==""){
            return false;
          }
          if(a==this.yzcode){
           console.log(this.yzcode);
            this.wrap2=false;
            this.isPwd=true;
          }else{
            this.isShowError=true;
            this.errorTxt="验证码错误"
             clearTimeout(timer);
          var timer = setTimeout(() => {
            this.isShowError = false;
          }, 2000);
            return false;
          }
          
    },
  register(){
     let flag = /^\w{6,18}$/.test(this.psw)
     if (!flag) {
          this.isShowError = true
          this.errorTxt = '密码不能少于6位'
           clearTimeout(timer);
          var timer = setTimeout(() => {
            this.isShowError = false;
          }, 2000);
          // return false
        } else {
          this.isShowError = false
          // localStorage.setItem("username", this.tel);
          localStorage.setItem("password", this.psw);
          this.$router.push({ path: "login" });
        }
  }

  }
});
</script>

<style lang="scss" scoped>
#code{
  height:30px;
}
.verification{
    border-radius: 12px;
    width:100px;
    letter-spacing:5px;
    margin-left: 50px;
    height: 40px;
    transform: translate(-15px,0);
}
@import "../assets/css/mreg.css";
@import "../assets/css/capt.css";
</style>
