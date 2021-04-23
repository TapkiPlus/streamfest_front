import Vue from "vue";

Vue.mixin({
  mounted() {
    document.querySelectorAll(".split").forEach(button => {
      button.innerHTML =
        '<span><span class="letter">' +
        button.textContent
          .trim()
          .split("")
          .join('</span><span class="letter">') +
        "</span></span>";
    });
  }
});
