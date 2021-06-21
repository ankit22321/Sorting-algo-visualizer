let mergeSort = (l = 0, r = arr_size -1) => {
    return new Promise(async (resolve) => {
        if(l < r){
            let mid = Math.floor((l + r) / 2);
            await mergeSort(l, mid);
            await mergeSort(mid+1, r);
            await merge(l, mid, r);
        }
        resolve();
    });
}
let merge = (l, mid, r) => {
    return new Promise(async (resolve) => {
        let k = l;
        let p = l;
        let q = mid+1;
        $(".bar").slice(l, r+1).removeClass("bg-green");
        while(p <= mid && q <= r){
            await changeCompBarBgCol(p, q);
            arr[k] = tempArr[p] <= tempArr[q] ? tempArr[p++] : tempArr[q++];
            $(".bar")[k].style.height = calculateHeight(arr[k]);
            $(".bar").removeClass("bg-red");
            $(".bar")[k].classList.add("bg-green");
            k++;
        }
        while(p <= mid){
            arr[k] = tempArr[p++];
            $(".bar")[k].style.height = calculateHeight(arr[k]);
            $(".bar")[k].classList.add("bg-green");
            k++;
        }
        while(q <= r){
            arr[k] = tempArr[q++];
            $(".bar")[k].style.height = calculateHeight(arr[k]);
            $(".bar")[k].classList.add("bg-green");
            k++;
        }
        tempArr = arr.slice();
        setTimeout(() => {
            resolve();
        }, delay);
    });
}