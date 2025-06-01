var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click",function(){
    sidenav.style.left=0
})

closenav.addEventListener("click",function(){
    sidenav.style.left="-50%"
})




const occasionCheckboxes = document.querySelectorAll('.occasion-filter');
const colorCheckboxes = document.querySelectorAll('.color-filter');
const products = document.querySelectorAll('.product-card');

function filterProducts() {
    const selectedOccasions = Array.from(occasionCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    const selectedColors = Array.from(colorCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    products.forEach(product => {
        const occasion = product.dataset.occasion;
        const color = product.dataset.color;

        const matchOccasion = selectedOccasions.length === 0 || selectedOccasions.includes(occasion);
        const matchColor = selectedColors.length === 0 || selectedColors.includes(color);

        if (matchOccasion && matchColor) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Event listeners
occasionCheckboxes.forEach(cb => {
    cb.addEventListener('change', filterProducts);
});

colorCheckboxes.forEach(cb => {
    cb.addEventListener('change', filterProducts);
});

// Initial call
filterProducts();