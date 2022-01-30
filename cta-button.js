let triggerSection = document.querySelector('#second-section');
let menuCtaButton = document.querySelector('#menu-cta-button');

window.addEventListener('scroll', function () {
    let distanceData = Math.round(triggerSection.getBoundingClientRect().y);
    if (distanceData < 0) {
        menuCtaButton.classList.remove('main-page-specific-button');
    } else {
        menuCtaButton.classList.add('main-page-specific-button');
    }
})