// ── Sports carousel ──
(function () {
    const track = document.getElementById('carousel-sports');
    const cards = track.querySelectorAll('.card-sports');
    let current = 0;

    function goTo(n) {
        current = (n + cards.length) % cards.length;
        track.style.transform = `translateX(-${current * 100}%)`;
    }

    // Inject nav buttons into each card's actions bar
    cards.forEach(function (card) {
        const actionsBar = card.querySelector('.card-sports-actions');
        const nav = document.createElement('div');
        nav.className = 'sports-nav';
        nav.innerHTML = '<button class="sp-prev">&#10094;</button><button class="sp-next">&#10095;</button>';
        nav.querySelector('.sp-prev').addEventListener('click', function () { goTo(current - 1); });
        nav.querySelector('.sp-next').addEventListener('click', function () { goTo(current + 1); });
        actionsBar.appendChild(nav);
    });
})();

// ── Daily carousel ──
var dailyIndex = 0;

function moveSlide(dir) {
    var carousel = document.getElementById('carousel-daily');
    var cards = carousel.querySelectorAll('.card');
    dailyIndex = (dailyIndex + dir + cards.length) % cards.length;
    var cardWidth = cards[0].offsetWidth + 20; // 20 = gap
    carousel.style.transform = 'translateX(-' + (dailyIndex * cardWidth) + 'px)';
}