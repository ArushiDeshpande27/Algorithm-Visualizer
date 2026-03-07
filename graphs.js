async function runBFS(){

    let graph = {
        A: ["B","C"],
        B: ["D"],
        C: [],
        D: []
    };

    let visited = new Set();
    let queue = ["A"];
    let order = [];

    while(queue.length > 0){

        let node = queue.shift();

        if(!visited.has(node)){

            visited.add(node);
            order.push(node);

            let element = document.getElementById(node);

            element.style.background = "orange";

            await new Promise(r => setTimeout(r,800));

            element.style.background = "green";

            for(let neighbor of graph[node]){
                queue.push(neighbor);
            }
        }
    }

    document.getElementById("bfs-output").innerText =
    "Traversal Order: " + order.join(" → ");
}