let speed = 100;
function changeSpeed(value){
    speed = value;
}
// Generate random array
function generateArray() {

    const container = document.getElementById("array-container");
    container.innerHTML = "";

    for(let i = 0; i < 20; i++){

        let value = Math.floor(Math.random() * 200) + 20;

        let bar = document.createElement("div");
        bar.classList.add("bar");

        bar.style.height = value + "px";
        bar.innerText = value;

        container.appendChild(bar);
    }
}


// Decide which algorithm to run
function startSorting(){

    let algo = document.getElementById("algorithm").value;

    if(algo === "bubble"){
        bubbleSort();
    }
    else if(algo === "selection"){
        selectionSort();
    }
    else if(algo === "insertion"){
        insertionSort();
    }

}


// Bubble Sort
async function bubbleSort(){

    let bars = document.getElementsByClassName("bar");

    for(let i = 0; i < bars.length; i++){

        for(let j = 0; j < bars.length - i - 1; j++){

            bars[j].style.backgroundColor = "red";
            bars[j+1].style.backgroundColor = "red";

            await new Promise(resolve => setTimeout(resolve, speed));

            let height1 = parseInt(bars[j].style.height);
            let height2 = parseInt(bars[j+1].style.height);

            if(height1 > height2){

                let tempHeight = bars[j].style.height;
                let tempText = bars[j].innerText;

                bars[j].style.height = bars[j+1].style.height;
                bars[j].innerText = bars[j+1].innerText;

                bars[j+1].style.height = tempHeight;
                bars[j+1].innerText = tempText;
            }

            bars[j].style.backgroundColor = "teal";
            bars[j+1].style.backgroundColor = "teal";
        }
    }

    for(let bar of bars){
        bar.style.backgroundColor = "green";
    }
}


// Selection Sort
async function selectionSort(){

    let bars = document.getElementsByClassName("bar");

    for(let i = 0; i < bars.length; i++){

        let min = i;

        bars[i].style.backgroundColor = "blue";

        for(let j = i+1; j < bars.length; j++){

            bars[j].style.backgroundColor = "red";

            await new Promise(resolve => setTimeout(resolve, speed));

            let height1 = parseInt(bars[j].style.height);
            let height2 = parseInt(bars[min].style.height);

            if(height1 < height2){
                min = j;
            }

            bars[j].style.backgroundColor = "teal";
        }

        let tempHeight = bars[i].style.height;
        let tempText = bars[i].innerText;

        bars[i].style.height = bars[min].style.height;
        bars[i].innerText = bars[min].innerText;

        bars[min].style.height = tempHeight;
        bars[min].innerText = tempText;

        bars[i].style.backgroundColor = "green";
    }
}


// Insertion Sort
async function insertionSort(){

    let bars = document.getElementsByClassName("bar");

    for(let i = 1; i < bars.length; i++){

        let keyHeight = bars[i].style.height;
        let keyText = bars[i].innerText;

        let j = i - 1;

        bars[i].style.backgroundColor = "red";

        await new Promise(resolve => setTimeout(resolve, speed));

        while(j >= 0 && parseInt(bars[j].style.height) > parseInt(keyHeight)){

            bars[j+1].style.height = bars[j].style.height;
            bars[j+1].innerText = bars[j].innerText;

            j--;

            await new Promise(resolve => setTimeout(resolve,100));
        }

        bars[j+1].style.height = keyHeight;
        bars[j+1].innerText = keyText;

        bars[i].style.backgroundColor = "teal";
    }

    for(let bar of bars){
        bar.style.backgroundColor = "green";
    }
}


// Show algorithm info
function showAlgorithmInfo(){

    let algo = document.getElementById("algorithm").value;
    let info = document.getElementById("algo-info");

    if(algo === "bubble"){
        info.innerHTML = `
        <h3>Bubble Sort</h3>
        <p><b>Best Case:</b> O(n)</p>
        <p><b>Average Case:</b> O(n²)</p>
        <p><b>Worst Case:</b> O(n²)</p>
        <p><b>Space Complexity:</b> O(1)</p>
        <p>Method: Repeatedly compares adjacent elements and swaps them if they are in the wrong order.</p>
        `;
    }

    else if(algo === "selection"){
        info.innerHTML = `
        <h3>Selection Sort</h3>
        <p><b>Best Case:</b> O(n²)</p>
        <p><b>Average Case:</b> O(n²)</p>
        <p><b>Worst Case:</b> O(n²)</p>
        <p><b>Space Complexity:</b> O(1)</p>
        <p>Method: Finds the minimum element from the unsorted part and places it at the beginning.</p>
        `;
    }

    else if(algo === "insertion"){
        info.innerHTML = `
        <h3>Insertion Sort</h3>
        <p><b>Best Case:</b> O(n)</p>
        <p><b>Average Case:</b> O(n²)</p>
        <p><b>Worst Case:</b> O(n²)</p>
        <p><b>Space Complexity:</b> O(1)</p>
        <p>Method: Builds the sorted array one element at a time by inserting elements into their correct position.</p>
        `;
    }

}