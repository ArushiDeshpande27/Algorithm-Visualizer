
function runScheduling(){

    let algo = document.getElementById("algorithm").value;

    if(algo === "fcfs"){
        runFCFS();
    }
    else if(algo === "rr"){
        runRoundRobin();
    }
}


// First Come First Serve
function runFCFS(){

    let input = document.getElementById("burst").value;

    let bursts = input.split(",").map(Number);

    let gantt = document.getElementById("gantt");
    gantt.innerHTML = "";

    bursts.forEach((time, index) => {

        let block = document.createElement("div");

        block.classList.add("process");

        block.style.width = (time * 40) + "px";

        block.innerText = "P" + (index + 1);

        gantt.appendChild(block);
    });

}


// Round Robin Scheduling
function runRoundRobin(){

    let input = document.getElementById("burst").value;
    let quantum = parseInt(document.getElementById("quantum").value);

    let bursts = input.split(",").map(Number);

    let gantt = document.getElementById("gantt");
    gantt.innerHTML = "";

    let queue = bursts.map((time, i) => ({
        name: "P" + (i + 1),
        burst: time
    }));

    while(queue.some(p => p.burst > 0)){

        for(let p of queue){

            if(p.burst > 0){

                let runTime = Math.min(p.burst, quantum);

                let block = document.createElement("div");

                block.classList.add("process");

                block.style.width = (runTime * 40) + "px";

                block.innerText = p.name;

                gantt.appendChild(block);

                p.burst -= runTime;
            }
        }

    }

}
