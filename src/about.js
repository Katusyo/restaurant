export default function loadAbout() {
    const content = document.getElementById('content');

    const h1 = document.createElement('h1');
    h1.textContent = 'About Us';

    const p = document.createElement('p');
    p.textContent = 'We are a family-owned restaurant dedicated to serving authentic and delicious cuisine. Our passion for food and commitment to quality has been the driving force behind our success. We take pride in using fresh ingredients and traditional recipes to create memorable dining experiences for our customers. Thank you for choosing us, and we look forward to serving you!';

    content.append(h1, p);
}