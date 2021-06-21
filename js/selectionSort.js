let selectionSort = () => {
    return new Promise(async (resolve) => {
        for(let i = 0; i < arr_size; i++){
            let min_i = i;
            let j = i + 1;
            while(j < arr_size){ 
                await changeCompBarBgCol(min_i, j);
                if(arr[j] < arr[min_i]){
                    min_i = j;
                }
                j++;
                $(".bar").removeClass("bg-red");
            }
            await swap(i, min_i);
            $(".bar")[i].classList.remove("bg-blue");
            $(".bar")[i].classList.add("bg-green");
        }
        resolve();
    });
}
