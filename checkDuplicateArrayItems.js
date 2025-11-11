const arr1 = ['apple', 'banana', 'mango'];

const arr2 = ['grape', 'bnana', 'kiwi'];

const seenItems = {}
let hasDups = false;

for (let i = 0; i < arr1.length; i++) {
    seenItems[arr1[i]] = true;
}

for (let i = 0; i < arr2.length; i++) {
    if (seenItems[arr2[i]]) {
        console.log("Duplicate Items found: ", i)
        hasDups = true;
    }
}

console.log("It is", hasDups, "that there are Duplicate items")

// I have learnt that we create a hashmap ( which is a fast way for storage and lookup ) from the first array

// When creating the hashmap, we set all items to true (key: value) pairs

// We then loop opver the next array checking if they exist in the hashmap we created using truthy
