const containsDup = (nums) => {
  return !(new Set(nums).length === nums.length);
};

// pass nums array into Set (cannot contain duplicates) and compare lengths
