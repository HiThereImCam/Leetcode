/* Given a builtins array w/ dot seperated strings, create an autocomplete function
 * that takes in a dot seperated string and returns a list of suggestions that that string matches
 *
 *
 */

/**
 * @function autocomplete
 * @param {String} term: dot notation string
 * @return {Array} list of suggestions
 */

const builtins = [
  "crypto.sha256",
  "io.jwt.decode",
  "io.jwt.encode",
  "io.jwt.encodes",
  "split",
  "sprintf",
];

class TreeNode {
  constructor(value) {
    this.word = value;
    this.children = {};
    this.isEndOfWord = false;
  }

  markAsLeafNode() {
    return (this.isEndOfWord = true);
  }

  unmarkAsLeafNode() {
    return (this.isEndOfWord = false);
  }
}

class Tree {
  constructor() {
    this.root = new TreeNode("");
  }

  separateWords(builtins) {
    return builtins.map((library) => library.split("."));
  }

  // O(mn) operation where n is length of arr and m is length of array of words in string
  insert(builtins) {
    let builtinLibrary = this.separateWords(builtins);

    for (let i = 0; i < builtinLibrary.length; i++) {
      let currentNode = this.root;
      for (let j = 0; j < builtinLibrary[i].length; j++) {
        let word = builtinLibrary[i][j];
        if (currentNode.children[word] === undefined) {
          currentNode.children[word] = new TreeNode(word);
        }
        if (j === builtinLibrary[i].length - 1) {
          currentNode.children[word].markAsLeafNode();
        }
        currentNode = currentNode.children[word]; // move down to child node
      }
    }
  }

  search(phrase) {
    if (phrase.length === 0) return [];

    let dotFlag = false;
    if (phrase[phrase.length - 1] === ".") {
      dotFlag = true;
    }

    phrase = phrase.toLowerCase();
    let phraseList = phrase.split(".");

    console.log("phraseList: ", phraseList);
    let childrenList = [];
    let currentNode = this.root; // root ->

    for (
      let phaseListIndex = 0;
      phaseListIndex < phraseList.length;
      phaseListIndex++
    ) {
      let currentChildren = Object.keys(currentNode.children); // [crypto, io, split, sprintf]

      let currentWord = phraseList[phaseListIndex];
      let endOfArray = phraseList.length - 1;

      for (
        let currentChildrenIndex = 0;
        currentChildrenIndex < currentChildren.length;
        currentChildrenIndex++
      ) {
        // check if current word is equal to current child
        let currentChild = currentChildren[currentChildrenIndex];

        // cry => [crypto]
        // io.jwt.enc => [encode, encodes]
        if (
          currentChild.includes(currentWord) &&
          currentWord != currentChild &&
          phaseListIndex === endOfArray
        ) {
          childrenList.push(currentChild);
        }

        // io => []
        // io.jwt. => [decode, encode, encodes]
        if (currentWord === currentChild && phaseListIndex === endOfArray) {
          if (dotFlag) {
            childrenList.push(currentNode.children[currentChild].children);
          } else {
            return [];
          }
        }

        // if on io and phrase is io.jwt. it updates currentNode
        if (currentWord == currentChild && phaseListIndex !== endOfArray) {
          currentNode = currentNode.children[currentChild]; // update to child node
        }
      }
    }

    return childrenList.length > 0 ? childrenList : [];
  }
}

let trie = new Tree();

trie.insert(builtins);

// let searchedWord = trie.search("cry"); pass
// let searchedWord = trie.search("crypto.sha"); pass
// let searchedWord = trie.search("io."); pass
// let searchedWord = trie.search("io.jwt.enc"); pass
// let searchedWord = trie.search("test");
let searchedWord = trie.search("io.jwt.");

// let searchedWord = trie.search("io.jwt"); pass

// console.log(trie);
console.log(searchedWord);

/*
    1.) split phrase on dot
            - if no dot, will return array of word
    2.) iterate through list of phrases and compare against current node
            - 


    I need an indicator that checks if last value in phrase is a dot
        - true
            then we know to return all children
        
*/

/*

    Idea:
    1.) iterate through all of the elements in the array
        - for each string, .split() on "."
            returns ["crypto", "sha256"]

    {
        "io": {
            "jwt": {
                "encode": true // indicating last word in string
                "encodes": true // indicating last word in string
                "decode": true // indicating last word in string
            }
        }
    }

    
*/

// const autcomplete = (term) => {
//   let map = new Map();
// };
/*
Examples
    term: cry           return: [crypto]
    term: crypto        return: []
    term: io.           return: [jwt]
    term: io.jwt.       return: [decode, encode, encodes] 
    term: io.jwt.enc    return: [encode, encodes]
 */

/*
    Things learned:

    1.) {} vs Map
            - Map allows you to grab keys in an iterator object
                - to see the value
                    let nodeIter = currentNode.children[word].keys() 
                    
                    because a order of insertion matters in a Map we would have to use
                    the .next and .value functions

                    nodeIter.next().value() returns crypto

            - {} allows you to grab all keys via Object.keys

*/

/*


            if(currentWord === currentChild && phaseListIndex === endOfArray && dotFlag !== true){
                return []
            }
            if (
              currentWord === currentChild &&
              phaseListIndex === endOfArray &&
              dotFlag === true
            ) {
              return currentNode.children[currentChild].children;
            }



*/
