fetch("./data.json").then(
    function (response){
        return response.json()
    }.then(
        function (data){
            for (let index = 0; index < data.length; index++) {
                document.getElementById("test").innerHTML +=
                data[index].name + "=>" + data[i].rarity + "<br/>"
                
            }
        }
    )
)