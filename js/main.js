let arr_size, delay, range, arr, tempArr, compareCount, sortAlgo = bubbleSort;
let generateArrPreStart= true;
let initialize = () => {
    return new Promise((resolve) => {
        arr_size = $("#arrSize").val();
        delay = $("#delay").val();
        range = 100, arr = [], compareCount = 0;
        generateArray();
        resolve();
    });
}
let assignDetails = (algoDetail) => {
    $("#algoName").html(algoDetail.name);
    $("#briefDetail p").html(algoDetail.brief);
    $("#pseudoDetail p").html(algoDetail.pseudo);
    $("#complexityDetail p").html(algoDetail.complexity);
}
let selectSortAlgo = () => {
    if("bubbleSort" === $("#sorting_algos").val()) {
        sortAlgo = bubbleSort;
        assignDetails(bubbleSortDetails);
    }
    else if("insertionSort" === $("#sorting_algos").val()) {
        sortAlgo = insertionSort;
        assignDetails(insertionSortDetails);
    }
    else if("selectionSort" === $("#sorting_algos").val()) {
        sortAlgo = selectionSort;
        assignDetails(selectionSortDetails);
    }
    else if("mergeSort" === $("#sorting_algos").val()) {
            sortAlgo = mergeSort;
            assignDetails(mergeSortDetails);
    }
}
let calculateHeight = z => (z * 100 / range) + "%";
let generateArray = () => {
    $(".bar").remove();
    for(let i = 1; i <= arr_size; i++){
        let num = Math.ceil(Math.random() * range);
        arr.push(num);
        let bar = document.createElement("div");
        bar.classList.add("bar", "bg-blue");
        bar.style.height = calculateHeight(num);
        bar.style.width = (0.9 * 100 / arr_size) + "%";
        $(".chart-container").append(bar);
        tempArr =arr.slice();
    }
}
let changeCompBarBgCol = (x, y) => {
    return new Promise((resolve) =>{
        $(".bar")[x].classList.add("bg-red");
        $(".bar")[y].classList.add("bg-red");
        setTimeout(() => {
            resolve();
        }, delay);
    });
}
let swap = (x, y) => {
    return new Promise((resolve) => {
        if(x != y){
            let temp = arr[x];
            arr[x] = arr[y];
            arr[y] = temp;
            $(".bar")[x].style.height = calculateHeight(arr[x]);
            $(".bar")[y].style.height = calculateHeight(arr[y]);
        }
        resolve();
    })
}
let sort = async () => {
    if(generateArrPreStart) {
        await initialize();
        generateArrPreStart = false;
    }
    $(".config").prop("disabled", true);
    console.log(arr);
    sortAlgo().then(() => {
        $(".config").prop("disabled", false);
        console.log(arr);
    });
    generateArrPreStart = true;
}

initialize().then(generateArray);
assignDetails(bubbleSortDetails);
$(document).on('input', '#delay', function() {
    $('#delay_label').html($(this).val()+" ms");
    delay = $(this).val();
});
$(document).on('input', '#arrSize', function() {
    $('#arr_size_label').html($(this).val());
    $(".bar").remove();
    arr=[];
    arr_size = $(this).val();
    generateArray();
    generateArrPreStart = false;
});