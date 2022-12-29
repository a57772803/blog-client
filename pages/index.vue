<template>
  <div class="dark:bg-gray-900 mt-6">
    <div class="max-w-screen-lg md:flex mx-auto dark:bg-gray-900">
      <div class="md:w-1/3 p-2 md:flex md:justify-center">
        <AuthorCard />
      </div>
      <div class="md:w-2/3 px-8">
        <AuthorIntro></AuthorIntro>
        <Expertise></Expertise>
        <TimeLine></TimeLine>
        {{ Data }}
        
      </div>
    </div>
  </div>

</template>

<script>
import siteMetaInfo from "@/data/sitemetainfo";
export default {
  data() {
    return {
      siteMetaInfo: siteMetaInfo,
      Data:""
    };
  },
  mounted() {
    this.$axios.$get("user.json").then((res) => { this.Data=res });
   this.$api.login.getlogin2("123");
   this.$api.login.getlogin("123");
    //this.$api();
  },
  methods: {
    async getTempGameList() {
    const mockData = await this.$axios.$get("user.json").then((res) => { this.Data=res });
    console.log("mockData", mockData);
    console.log("Data",JSON.parse(JSON.stringify(this.Data)))

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

<style></style>
