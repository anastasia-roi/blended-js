const word = prompt(`Enter word`);
if (word === null || word.trim() === "") {
    alert(`Canceled.`);
} else {
    const amount = word.length;
    if (amount % 2 == 0) {
        const firstIndex = amount / 2 - 1;
        const secondIndex = amount / 2 + 1;
        const subString = word.slice(firstIndex, secondIndex);
        alert(subString);

    } else {
        const firstIndex = (amount - 1) / 2;
        const secondIndex = firstIndex + 1;
        const subString = word.slice(firstIndex, secondIndex);
        alert(subString);
    }
}