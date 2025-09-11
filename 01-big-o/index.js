let count = 9;

function iterrateThis(count) {
    for (let i = 1; i <= count; i++) {
        console.log(" ".repeat(count - i) + "#".repeat(2 * i - 1));
    }
}

iterrateThis(count);
