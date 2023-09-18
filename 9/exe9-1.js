const listOfNeighbors = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
    ];

    for(let x = 0 ; x < listOfNeighbors.length ; x++){
        for(let y = 0 ; y < listOfNeighbors[x].length ; y++){
            console.log("Neighbor : " , listOfNeighbors[x][y]);
        }
    }