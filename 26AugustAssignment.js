(function(){
    function newArryPrevNext( arr1,n) {
        
        if (n <= 1) 
            return; 
        let pre_elem = arr1[0]; 
        arr1[0] = arr1[0] * arr1[1]; 
        for (let i=1; i<n-1; i++) { 
            let cur_elem = arr1[i]; 
            arr1[i] = pre_elem * arr1[i+1]; 
            pre_elem = cur_elem; 
        } 
        arr1[n-1] = pre_elem * arr1[n-1]; 
        return arr1
} 
let arr1=[1,2,3,4,5,6];
let n = arr1.length
document.write("original Array ==> "+arr1);
document.write("<br>");
document.write("Previous Number and Next Number Multipication ==> "+newArryPrevNext(arr1));


})();