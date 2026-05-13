export default function loadMenu() {
    const content = document.getElementById('content');

    const h1 = document.createElement('h1');
    h1.textContent = 'Menu';

    const p = document.createElement('p');
    p.textContent = 'Our menu features a variety of delicious dishes inspired by traditional recipes. From savory appetizers to mouthwatering main courses and delectable desserts, we have something for everyone. Explore our menu and discover your new favorite dish!';

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    function createMenuSection(title, itemsArray) {
        const section = document.createElement('section');
        section.classList.add('menu-section');

        const heading = document.createElement('h2');
        heading.textContent = title;

        const table = document.createElement('table');

        itemsArray.forEach(item => {
            const row = document.createElement('tr');

            const name = document.createElement('td');
            name.textContent = item.name;

            const description = document.createElement('td');
            description.textContent = item.description;

            const price = document.createElement('td');
            price.textContent = item.price;

            row.append(name, description, price);
            table.appendChild(row);
        });

        section.append(heading, table);
        return section;
    }

    const appetizers = createMenuSection('Dim Sum', [
        { name: 'Shu Mai', description: 'Steamed pork and shrimp dumplings', price: '¥600' },
        { name: 'Shrimp Dumplings', description: 'Fresh shrimp dumplings', price: '¥600' },
        { name: 'Cha Siu Buns', description: 'Soft pork buns', price: '¥600' },
    ]);

    const mains = createMenuSection('Main Courses', [
        { name: 'Kung Pao Chicken', description: 'Spicy stir-fried chicken', price: '¥1200' },
        { name: 'Sesame Chicken', description: 'Crispy chicken with sesame sauce', price: '¥1200' },
        { name: 'Pan Fried Noodles', description: 'Stir-fried noodles with vegetables', price: '¥1000' },
    ]);

    const desserts = createMenuSection('Desserts', [
        { name: 'Mango Pudding', description: 'Creamy mango pudding', price: '¥500' },
        { name: 'Sweet Tofu', description: 'Soft tofu with sweet syrup', price: '¥500' },
        { name: 'Egg Tart', description: 'Flaky pastry with egg custard', price: '¥500' },
    ]);

    menuContainer.append(appetizers, mains, desserts);

    content.append(h1, p, menuContainer);
}