function toggleSeason(seasonNumber) {
    var seasonDiv = document.getElementById('season' + seasonNumber);
    if (seasonDiv.style.display === 'block') {
        seasonDiv.style.animation = 'fadeOut 0.6s ease-in-out';
        setTimeout(function () {
            seasonDiv.style.display = 'none';
            seasonDiv.style.animation = '';
        }, 500);
    } else {
        seasonDiv.style.display = 'block';
        seasonDiv.style.animation = 'fadeIn 0.6s ease-in-out';
    }
}

function showNotification() {
    var notification = document.getElementById('notification');
    notification.style.display = 'block';
    setTimeout(function () {
        notification.style.animation = 'fadeOut 0.6s ease-in-out';
        setTimeout(function () {
            notification.style.display = 'none';
            notification.style.animation = '';
        }, 400);
    }, 3000);
}