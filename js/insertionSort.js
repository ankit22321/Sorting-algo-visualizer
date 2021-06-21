let insertionSort = () => {
    return new Promise(async (resolve) => {
        for(let i = 0; i < arr_size; i++){
            let key = arr[i];
            let j = i;
            while(j > 0 && arr[j-1] > arr[j]){
                await changeCompBarBgCol(j-1, j);
                arr[j] = arr[j-1];
                arr[j-1] = key;
                $(".bar")[j].style.height = calculateHeight(arr[j]);
                $(".bar")[j-1].style.height = calculateHeight(arr[j-1]);
                j--;
                $(".bar").removeClass("bg-red");
            }
            arr[j] = key;
            $(".bar")[j].style.height = calculateHeight(arr[j]);
            $(".bar")[i].classList.remove("bg-blue");
            $(".bar")[i].classList.add("bg-green");
        }
        resolve();
    });
}
