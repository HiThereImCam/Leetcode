const binarySearch = (arr, target) => {
    let left = 0 
    let right = arr.length - 1
  
    while(left <= right){
      let mid = Math.floor((right - left) / 2)
      if(arr[mid] === target){
        return true
      }else if(arr[mid] > target){
        // look left and update right
        right = mid - 1
      }else{
        left = mid + 1
      }
    }
  
    return false 
  }