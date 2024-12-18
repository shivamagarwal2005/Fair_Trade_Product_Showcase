document.addEventListener('DOMContentLoaded', function() {
    const filter = document.getElementById('category-filter');
    const products = document.querySelectorAll('.product');

    filter.addEventListener('change', function() {
        const category = this.value;
        products.forEach(product => {
            if (category === 'all' || product.dataset.category === category) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});
