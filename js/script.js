// گرفتن همه آیتم‌ها
const items = document.querySelectorAll('.item');

// محتوای هر آیتم
const itemContents = [
  "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  "Based on the consultation, we will conduct thorough research and develop a comprehensive marketing strategy tailored to your business.",
  "We will implement the marketing strategy across various channels, including digital, social media, and traditional marketing.",
  "We continuously monitor campaign performance and optimize strategies for better results and ROI.",
  "Regular reporting and clear communication keep you informed about progress and achievements.",
  "We continually assess and improve strategies to ensure long-term success and growth."
];


items.forEach((item, index) => {

  if (!item.querySelector('.item-par')) {
    const itemLine = document.createElement('div');
    itemLine.className = 'item-line';
    
    const itemPar = document.createElement('p');
    itemPar.className = 'item-par';
    itemPar.textContent = itemContents[index] || '';
    
    item.appendChild(itemLine);
    item.appendChild(itemPar);
  }
  

  item.addEventListener('click', function(e) {
    e.stopPropagation();
    
    if (e.target.classList.contains('item-icon')) {
      const icon = e.target;
      const itemLine = this.querySelector('.item-line');
      const itemPar = this.querySelector('.item-par');
      
      if (this.classList.contains('item-closed')) {

        this.classList.remove('item-closed');
        if (itemLine) itemLine.style.display = 'block';
        if (itemPar) itemPar.style.display = 'block';
        icon.classList.remove('bi-plus');
        icon.classList.add('bi-dash');
      } else {
        this.classList.add('item-closed');
        if (itemLine) itemLine.style.display = 'none';
        if (itemPar) itemPar.style.display = 'none';
        icon.classList.remove('bi-dash');
        icon.classList.add('bi-plus');
      }
    }
  });
});

document.addEventListener('click', function() {
  items.forEach(item => {
    if (!item.classList.contains('item-closed')) {
      const icon = item.querySelector('.item-icon');
      const itemLine = item.querySelector('.item-line');
      const itemPar = item.querySelector('.item-par');
      
      item.classList.add('item-closed');
      if (itemLine) itemLine.style.display = 'none';
      if (itemPar) itemPar.style.display = 'none';
      if (icon) {
        icon.classList.remove('bi-dash');
        icon.classList.add('bi-plus');
      }
    }
  });
});












