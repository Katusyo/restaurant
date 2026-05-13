import heroImage from './assets/restaurant.jpeg';

export default function loadHome() {
    const content = document.getElementById('content');

    const main = document.createElement('main');

    const hero = document.createElement('section');
    hero.classList.add('hero');

    const img = document.createElement('img');
    img.src = heroImage;
    img.alt = 'Restaurant Image';

    const h2 = document.createElement('h2');
    h2.textContent = 'You\'re in for a treat';

    const p = document.createElement('p');
    p.textContent = 'We serve delicious food and provide excellent service. Come and enjoy a great dining experience with us!';

    hero.append(img, h2, p);

    const features = document.createElement('section');
    features.classList.add('features');

    function createFeature (title, text) {
        const div = document.createElement('div');
        div.classList.add('feature');

        const h3 = document.createElement('h3');
        h3.textContent = title;

        const p = document.createElement('p');
        p.textContent = text;

        div.append(h3, p);
        return div;
    }

    features.append(
        createFeature('Traditional Recipes', 'Experience authentic flavors with our traditional recipes.'),
        createFeature('Authentic Experience', 'Immerse yourself in a dining experience that captures the essence of our cuisine.'),
        createFeature('Dedicated Service', 'Exceptional service and ensuring your satisfaction.'),
    );

    const hours = document.createElement('section');
    hours.classList.add('hours');

    const hoursTitle = document.createElement('h2');
    hoursTitle.textContent = '🕒 Hours of Operation';

    const table = document.createElement('table');

    table.innerHTML = `
    <tr>
    <td>Sunday</td>
    <td>10:00 AM - 10:00 PM</td>
    </tr>
    <tr>
    <td>Monday - Friday</td>
    <td>11:00 AM - 10:00 PM</td>
    </tr>
    <tr>
    <td>Saturday</td>
    <td>10:00 AM - 12:00 AM</td>
    </tr>
    `;

    hours.append(hoursTitle, table);

    const location = document.createElement('section');
    location.classList.add('location');

    const locationTitle = document.createElement('h2');
    locationTitle.textContent = '📍 Location';

    const address = document.createElement('p');
    address.textContent = '123 Shokudou Doori, Chinatown, Yokohama, Japan';

    location.append(locationTitle, address);

    main.append(hero, features, hours, location);
    content.appendChild(main);
}