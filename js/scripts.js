
function socialOn(socialBtn) {
    const basePath = socialBtn.src.split('-')[0];
    socialBtn.src = basePath + '-white.png';
}

function socialOff(socialBtn) {
    const basePath = socialBtn.src.split('-')[0];
    socialBtn.src = basePath + '-black.png';
}