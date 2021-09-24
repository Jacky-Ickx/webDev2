function inputOnChange(field)
{
    let value = field.value;
    field.value = parseInt(value);
    if (value < 0)
    {
        field.value = 0;
    }
    else if (value > 100)
    {
        field.value = 100;
    }
}

function generateDivs()
{
    console.log("henlo")
    let amount = document.getElementById("input").value;
    let container = document.getElementById("container");
    container.innerHTML = "";
    for (let i = 0; i < amount; i++)
    {
        console.log(i)
        let box = document.createElement("div");
        box.classList.add("numBox");
        box.innerHTML = i + 1;
        container.appendChild(box);
    }
}