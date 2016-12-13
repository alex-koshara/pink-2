var textarea = document.querySelector(".textarea");

textarea.addEventListener("keyup", textareaInput)

function textareaInput() {
  if(this.scrollTop > 0) {
    this.style.height = this.scrollHeight + 4 + "px";
  }
}
