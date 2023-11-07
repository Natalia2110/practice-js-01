

const listElement = document.getElementById('categories');

const itemElement = listElement.querySelectorAll('.item');
console.log(`Number of categories: ${itemElement.length}`);

itemElement.forEach(elem => {
    const firstElemChildText = elem.firstElementChild.textContent;
    const lastElemChildren = elem.lastElementChild.children;
    console.log(`Category: ${firstElemChildText}`);
    console.log(`Elements: ${lastElemChildren.length}`);
});

