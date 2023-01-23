<template>
  <div>
    <header class="pt-16 pb-9 sm:pb-16 sm:text-center">
      <h1 class="mb-4 text-8xl sm:text-4xl tracking-tight text-slate-800 font-extrabold dark:text-slate-200">
        Blog
      </h1>
      <p class="text-lg text-slate-700 dark:text-slate-400">
        All the latest Tailwind CSS news, straight from the&nbsp;team.
      </p>
    </header>
    {{ articles }}
    {{ articles.title }}
    <div class="space-y-16 mx-auto max-w-7xl">
      <blog-item v-for="article in articles" :key="article.article_id" :title="article.title"
        :description="article.content" :date=Date() :slug="article.article_id"></blog-item>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: ""
    }
  }
  ,
  methods: {
    getArticle(author) {
      this.$api.article.getArticles(author)
        .then((res) => {
          console.log(res.data);
          this.articles = JSON.parse(res.data);
        });
      console.log(this.articles, "article");

    }
  },
  computed: {
    author() {
      return this.$store.state.tag.author;
    }
  },
  created() {
    this.getArticle(this.author);

  },
  head: {
    title: "Md Solaiman | Blogs",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Its Solaiman's Pen and Paper to write ",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
};
</script>

<style>

</style>
