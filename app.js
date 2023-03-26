Vue.createApp({
  data() {
    return {
      perspective: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
    };
  },
  computed: {
    box() {
      return {
        transform: `
          perspective(${this.perspective}px)
          rotateX(${this.rotateX}deg)
          rotateY(${this.rotateY}deg)
          rotateZ(${this.rotateZ}deg)
        `,
      };
    },
  },
  methods: {
    reset() {
      this.perspective = 100;
      this.rotateX = 0;
      this.rotateY = 0;
      this.rotateZ = 0;
    },
    async copy() {
      let text = `transform:${this.box.transform};`; // 获取css
      await navigator.clipboard.writeText(text); //navigator.clipboard.writeText它将包含有关用户浏览器的各种信息。

      alert("CSS Copied to Clipboard!");
    }, // 处理异步
  },
}).mount("#app");
