const bubbleSortDetails = {
    name : "Bubble Sort",
    brief : `Bubble sort is a simple sorting algorithm. This sorting algorithm is comparison-based algorithm in which each 
    pair of adjacent elements is compared and the elements are swapped if they are not in order. This algorithm is not suitable 
    for large data sets as its average and worst case complexity are of Ο(n2) where n is the number of items.`,
    pseudo : `procedure bubbleSort( list : array of items )<br>
    &emsp;loop = list.count;<br>
    &emsp;for i = 0 to loop-1 do:<br>
    &emsp;&emsp;swapped = false<br>
    &emsp;&emsp;for j = 0 to loop-1 do:<br>
    &emsp;&emsp;&emsp;if list[j] > list[j+1] then<br>
    &emsp;&emsp;&emsp;/* swap them */<br>
    &emsp;&emsp;&emsp;swap( list[j], list[j+1] )<br>		 
    &emsp;&emsp;&emsp;swapped = true<br>
    &emsp;&emsp;end if<br>
    &emsp; end for<br>
    &emsp; if(not swapped) then<br>
    &emsp;&emsp; break<br>
    &emsp;end if<br>
    &emsp;end for<br>
    end procedure return list`,
    complexity : ""
}

const insertionSortDetails = {
    name : "Insertion Sort",
    brief : `This is an in-place comparison-based sorting algorithm. Here, a sub-list is maintained which is always sorted. 
    For example, the lower part of an array is maintained to be sorted. An element which is to be 'insert'ed in this sorted 
    sub-list, has to find its appropriate place and then it has to be inserted there. Hence the name, insertion sort. 
    The array is searched sequentially and unsorted items are moved and inserted into the sorted sub-list (in the same array). 
    This algorithm is not suitable for large data sets as its average and worst case complexity are of Ο(n2), where n is 
    the number of items.`,
    pseudo : `procedure insertionSort( A : array of items )<br>
    &emsp;int holePosition<br>
    &emsp;int valueToInsert<br>
    &emsp;for i = 1 to length(A) inclusive do:<br>
    &emsp;&emsp;   valueToInsert = A[i]<br>
    &emsp;&emsp;   holePosition = i<br>
    &emsp;&emsp;   while holePosition > 0 and A[holePosition-1] > valueToInsert do:<br>
    &emsp;&emsp;&emsp;      A[holePosition] = A[holePosition-1]<br>
    &emsp;&emsp;&emsp;      holePosition = holePosition -1<br>
    &emsp;&emsp;   end while<br>
    &emsp;&emsp;   A[holePosition] = valueToInsert<br>
    &emsp;end for<br>
 end procedure`,
    complexity : ""
}

const selectionSortDetails = {
    name : "Selection Sort",
    brief : `Selection sort is a simple sorting algorithm. This sorting algorithm is an in-place comparison-based algorithm in 
    which the list is divided into two parts, the sorted part at the left end and the unsorted part at the right end. 
    Initially, the sorted part is empty and the unsorted part is the entire list. The smallest element is selected 
    from the unsorted array and swapped with the leftmost element, and that element becomes a part of the sorted array. 
    This process continues moving unsorted array boundary by one element to the right. This algorithm is not suitable 
    for large data sets as its average and worst case complexities are of Ο(n2), where n is the number of items.`,
    pseudo : `procedure selection sort<br>
    &emsp;list  : array of items<br>
    &emsp;n     : size of list<br>
    &emsp;for i = 1 to n - 1<br>
    &emsp;&emsp;   min = i<br> 
    &emsp;&emsp;   for j = i+1 to n<br> 
    &emsp;&emsp;&emsp;      if list[j] < list[min] then<br>
    &emsp;&emsp;&emsp;&emsp;         min = j;<br>
    &emsp;&emsp;&emsp;     end if<br>
    &emsp;&emsp;   end for<br>
    &emsp;&emsp;   if indexMin != i  then<br>
    &emsp;&emsp;&emsp;       swap list[min] and list[i]<br>
    &emsp;&emsp;   end if<br>
    &emsp;end for<br>
 end procedure`,
    complexity : ""
}

const mergeSortDetails = {
    name : "Merge Sort",
    brief : `Merge sort is a sorting technique based on divide and conquer technique. With worst-case time complexity 
    being Ο(n log n), it is one of the most respected algorithms. Merge sort first divides the array into equal halves 
    and then combines them in a sorted manner.`,
    pseudo : `procedure mergesort( var a as array )<br>
    &emsp;if ( n == 1 ) return a<br>
    &emsp;var l1 as array = a[0] ... a[n/2]<br>
    &emsp;var l2 as array = a[n/2+1] ... a[n]<br>
    &emsp;l1 = mergesort( l1 )<br>
    &emsp;l2 = mergesort( l2 )<br>
    &emsp;return merge( l1, l2 )<br>
 end procedure<br><br>
 procedure merge( var a as array, var b as array )<br>
 &emsp;var c as array<br>
 &emsp;while ( a and b have elements )<br>
 &emsp;&emsp;if ( a[0] > b[0] )<br>
 &emsp;&emsp;&emsp;add b[0] to the end of c<br>
 &emsp;&emsp;&emsp;remove b[0] from b<br>
 &emsp;&emsp;else<br>
 &emsp;&emsp;&emsp;add a[0] to the end of c<br>
 &emsp;&emsp;&emsp;remove a[0] from a<br>
 &emsp;&emsp;end if<br>
 &emsp;end while<br>
 &emsp;while ( a has elements )<br>
 &emsp;&emsp;add a[0] to the end of c<br>
 &emsp;&emsp;remove a[0] from a<br>
 &emsp;end while<br>
 &emsp;while ( b has elements )<br>
 &emsp;&emsp;add b[0] to the end of c<br>
 &emsp;&emsp;remove b[0] from b<br>
 &emsp;end while<br>
 &emsp;return c<br>
 end procedure`,
    complexity : ""
}