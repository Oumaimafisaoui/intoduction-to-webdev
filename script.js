var btn = document.querySelector("button");


btn.addEventListener("click", function()
{
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");

    var name = document.body.className;

    if(name === "light-theme")
    {
        btn.textContent = "Light"
    }
    else
    {
        btn.textContent = "Dark";
    }

});

