// WITHOUT delegation — one listener per item, repeated work
document.querySelectorAll("#todo-list li").forEach(li => {
  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });
});