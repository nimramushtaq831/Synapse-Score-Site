 document.querySelectorAll("#roleMenu li").forEach(item => {
    item.addEventListener("click", () => {
      let target = item.getAttribute("data-url");
      if(target) {
        window.location.href = target; // Redirect to new page
      }
    });
  });