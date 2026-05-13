export default function loadContact() {
    const content = document.getElementById('content');

    const h1 = document.createElement('h1');
    h1.textContent = 'Contact Us';

    const p = document.createElement('p');
    p.textContent = 'You can reach us at (123) 456-7890 or email us at vprestaurant@email.com';

    content.append(h1, p);
}