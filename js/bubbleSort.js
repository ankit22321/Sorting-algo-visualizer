let bubbleSort = () => {
    return new Promise(async (resolve) => {
        for(let i = 0; i < arr_size; i++){
            for(let j =  1; j < arr_size - i; j++){ 
                await changeCompBarBgCol(j-1, j);
                if(arr[j-1] > arr[j]){
                    compareCount += 1;
                    await swap(j-1, j)
                }
                $(".bar").removeClass("bg-red");
            }
            $(".bar")[arr_size - i - 1].classList.remove("bg-blue");
            $(".bar")[arr_size - i - 1].classList.add("bg-green");
        }
        resolve();
    });
}
