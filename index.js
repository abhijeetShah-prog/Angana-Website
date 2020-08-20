
document.querySelector(".about").addEventListener("click", function(event)
{
  event.preventDefault();
  document.querySelector("#AboutMe").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

document.querySelector(".achievement").addEventListener("click", function(event)
{
  event.preventDefault();
  document.querySelector("#Achievements").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});
