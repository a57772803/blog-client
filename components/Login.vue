<template>
  <section class="h-screen">
    <div class="h-full px-6 text-gray-800">
      <div class="flex flex-wrap items-center justify-center h-full xl:justify-center lg:justify-between g-6">
        <div class="mb-12 grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 md:mb-0">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="w-full"
            alt="Sample image" />
        </div>
        <div class="mb-12 xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 md:mb-0">
          <form>
            <div class="flex flex-row items-center justify-center lg:justify-start">
            </div>
            <!-- Email input -->
            <div class="mb-6">
              <input type="text"
                class="block w-full px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlInput2" placeholder="Email address" v-model="loginInfo.username" />
            </div>

            <!-- Password input -->
            <div class="mb-6">
              <input type="password"
                class="block w-full px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlInput2" placeholder="Password" v-model="loginInfo.password" />
            </div>

            <div class="flex items-center justify-between mb-6">
              <div class="form-group form-check">
                <input type="checkbox"
                  class="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-sm appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                  id="exampleCheck2" />
                <label class="inline-block text-gray-800 form-check-label" for="exampleCheck2">Remember me</label>
              </div>
              <a href="#!" class="text-gray-800">Forgot password?</a>
            </div>

            <div class="text-center lg:text-left">
              <button type="button" @click="login"
                class="inline-block py-3 text-sm font-medium leading-snug text-white uppercase transition duration-150 ease-in-out bg-blue-600 rounded shadow-md px-7 hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">
                Login
              </button>
              <p class="pt-1 mt-2 mb-0 text-sm font-semibold">
                Don't have an account?
                <a href="#!"
                  class="text-red-600 transition duration-200 ease-in-out hover:text-red-700 focus:text-red-700">Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      loginInfo: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      let reqData = JSON.stringify(this.loginInfo);
      this.$api.login.userlogin(reqData)
        .then((res) => {
          this.$store.dispatch("user/userLogin", JSON.parse(res.data));
          this.$message({
            showClose: true,
            message: "登入成功",
            type: "success",
            duration: 100 * 8,

          });


        })
        .catch((err) => {
          this.$message({
            showClose: true,
            message: "登入失敗",
            type: "error",
            duration: 100 * 5,

          });
        });


    }
  },
};
</script>

<style>

</style>
