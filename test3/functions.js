function makeRequest()
{
    return new Promise( (resolve, reject) => {
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function ()
        {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
            {
                let response = JSON.parse(xmlHttp.responseText);
                resolve(response);
                //console.log(response);
            }
            else if (xmlHttp.readyState === 4 )
            {
                reject("wrong status code");
            }
        }
        xmlHttp.open("GET", "https://lukas.rip/jokes/", true);
        xmlHttp.send(null);
    })
}

async function joke()
{
    document.getElementById("setup").innerText = "";
    document.getElementById("punchline").innerText = "";
    response = await makeRequest();
    document.getElementById("setup").innerText = response.setup;
    setTimeout(() =>
    {
        document.getElementById("punchline").innerText = response.punchline;
    }, 2000);
}