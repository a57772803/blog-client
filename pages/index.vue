<template>
  <div class="mt-6 dark:bg-gray-900">
    <div class="max-w-screen-lg mx-auto md:flex dark:bg-gray-900">
      <div class="p-2 md:w-1/3 md:flex md:justify-center">
        <AuthorCard />
      </div>
      <div class="px-8 md:w-2/3">
        <AuthorIntro></AuthorIntro>
        <Expertise></Expertise>
        <TimeLine></TimeLine>
        {{ Data }}
        {{ $store.state.todos.list }}
        {{ $store.state.counter }}

      </div>
    </div>
  </div>

</template>

<script>
import siteMetaInfo from "@/data/sitemetainfo";
import { mapMutations } from 'Vuex';
export default {
  data() {
    return {
      siteMetaInfo: siteMetaInfo,
      Data: ""
    };
  },
  mounted() {
    //this.$axios.$get("user.json").then((res) => { this.Data = res });
    this.$api.login.getlogin2("123");
    this.$api.login.getlogin("123");
    this.$store.commit("todos/add", 10);
    this.$store.commit("increment", 200);
    this.$store.dispatch("fetchCounter", 600);

    //this.$api();
  },
  methods: {
    async getTempGameList() {
      const mockData = await this.$axios.$get("user.json").then((res) => { this.Data = res });
      console.log("mockData", mockData);
      console.log("Data", JSON.parse(JSON.stringify(this.Data)))

    }
  },

  head: {
    title: siteMetaInfo.title,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: siteMetaInfo.description,
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

};

</script>

<style>

</style>
