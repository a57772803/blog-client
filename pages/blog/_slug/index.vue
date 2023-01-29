<template>
  <div class="px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0 mt-10">
    <p class="text-center font-bold my-5 text-indigo-500">
      {{ formatDate(new Date()) }}
    </p>
    <h1 class="text-4xl text-gray-700 font-extrabold mb-10 text-center">
      {{ article.title }}
    </h1>
    <div class="flex items-center font-medium mt-6 sm:mx-3 justify-center">
      <img :src="siteMetadata.author_image" loading="lazy" alt=""
        class="mr-3 w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800" />
      <div>
        <div class="text-slate-900 dark:text-slate-200">
          {{ siteMetadata.author }}
        </div>
        <a target="_blank" :href="siteMetadata.twitter" class="text-sky-500 hover:text-sky-600 dark:text-sky-400">
          @{{ siteMetadata.twitter_user }}
        </a>
      </div>
    </div>
    <img class="mx-auto w-4/5 my-10 rounded-md drop-shadow-sm" :src="article.image" />

    <div class="mavonEditor">
      <mavon-editor :language="'zh-TW'" ref="md" :boxShadow="false" style="z-index:1;height:50vh"
        v-model="article.content" :subfield="false" :defaultOpen="'preview'" :editable="false" :toolbarsFlag="false" />
    </div>
    <div>{{ article.content }}</div>
    {{ content }}


  </div>
</template>
<script>
import Prism from "~/plugins/prism";
import siteMetaInfo from "@/data/sitemetainfo";
export default {
  data() {
    return {
      title: 0,
      siteMetadata: siteMetaInfo,
      article: {},
      //for mavon-editor
      content: "",
      toolbars: {
        bold: true, // 粗體
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: false, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true // 预览
      }
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
    getArticle(author, article_id) {
      this.$api.article.getArticleById(author, article_id)
        .then((res) => {
          console.log(res.data);
          this.article = JSON.parse(res.data);
        }).catch((error) => {
          this.$nuxt.error({ statusCode: 404, message: 'Post not found' })
          console.log("article error", error);
        })
      console.log(this.article, "article");

    }
  },
  computed: {
    article_id() {
      return this.$route.params.slug;
    },
    author() {
      return this.$store.state.tag.author;
    }
  },
  created() {
    this.getArticle(this.author, this.article_id);
    console.log(this.article_id, " this.article_id")
    console.log(this.$route.params.slug, "sluuug");
  },
  mounted() {
    console.log(this.article.content);
    Prism.highlightAll();
  },
  head() {
    //console.log(this.article.title);
    return {
      title: this.article.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.article.description,
        },
      ],
    };
  },
};
</script>
