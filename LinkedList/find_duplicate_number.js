// what I originally had

/*
    nums = [1,3,4,2,2]
    
    iterate through nums
        - for each num create a node
        - node will have access to prev and next (?)
    
    have a runner node that iterates through linked list and finds the correct pos 
    to insert current node
*/

const Node = (val) => {
  this.val = null || val;
  this.prev = null;
  this.next = null;
};

var findDuplicate = function (nums) {
  const head = new Node(0);
  let runner = head;
  let tail = head.next;

  for (let i = 0; i < nums.length; i++) {
    let currNode = new Node(nums[i]);
  }
};

/*
    nums [1, 3. 4. 2. 2]

    slow = 0
    fast = 0

    slow = nums[slow]
         = 1
         = nums[1]
         = 3
         = nums[3]
         = 2
         = nums[2]
         = 4

    fast = nums[nums[fast]]
         = nums[1]
         = 3
        = nums[nums[3]]
        = nums[2]
        = 4
        = nums[nums[4]]
        = nums[2]
        = 4
        = nums[nums[4]]
        = nums[2]
        = 4

        breaks


    


    first loop finds the end of the cycle
    second loop finds the beginning of the cycle



*/

// actual sol
function findDuplicateSOL(nums) {
  let slow = 0;
  let fast = 0;

  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];
    if (slow == fast) {
      break;
    }
  }

  let slow2 = 0;

  while (true) {
    slow = nums[slow];
    slow2 = nums[slow2];
    if (slow == slow2) {
      break;
    }
  }

  return slow;
}
