let topOffset = 20;
let notificationSpacing = 10;

function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

function resetTopOffset() {
    topOffset = 20;
}

window.addEventListener("message", function (event) {
    let data = event.data;
    if (data.action === 'showNotification') {
        let notification = document.createElement('div');
        notification.classList.add('notification');
        notification.style.backgroundColor = data.bgColor;
        let iconClasses = data.icon.split(' ');
        let icon = document.createElement('i');
        icon.classList.add('icon');
        for (let i = 0; i < iconClasses.length; i++) {
            icon.classList.add(iconClasses[i]);
        }
        let progressBar;
        if (data.colorIcon) {
            let iconColor = data.colorIcon;
            icon.style.color = iconColor;
            notification.style.borderColor = iconColor;
            progressBar = document.createElement('div');
            progressBar.classList.add('progress-bar');
            progressBar.style.backgroundColor = iconColor;
            notification.appendChild(progressBar);
        }
        notification.appendChild(icon);
        let title = document.createElement('div');
        title.classList.add('title');
        title.innerText = data.title;
        notification.appendChild(title);
        let message = document.createElement('div');
        message.classList.add('message');
        message.innerText = data.message;
        notification.appendChild(message);
        let time = document.createElement('div');
        time.classList.add('time');
        time.innerText = getCurrentTime();
        notification.appendChild(time);
        let container = document.getElementById('notificationContainer');
        container.appendChild(notification);
        let startTime = null;
        function animateProgress(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const progressWidth = 100 - Math.min(progress / data.duration * 100, 100);
            progressBar.style.width = `${progressWidth}%`;
            if (progress < data.duration) {
                requestAnimationFrame(animateProgress);
            }
        }
        requestAnimationFrame(animateProgress);
        let offsetY = 0;
        let notifications = document.querySelectorAll(`.notification[data-position="${data.position}"]`);
        if (notifications.length > 0) {
            let totalHeight = Array.from(notifications).reduce((acc, curr) => acc + curr.offsetHeight + notificationSpacing, 0);
            offsetY = totalHeight;
        }
        notification.setAttribute('data-position', data.position);
        let verticalPosition = topOffset + offsetY;
    
        switch (data.position) {
            case 'top-left':
                
                notification.style.top = `${verticalPosition}px`;
                notification.style.left = '20px';
                break;
            case 'top':
                let notificationRect = notification.getBoundingClientRect();
                notification.style.top = `${verticalPosition}px`;
                notification.style.left = `calc(50% - ${notificationRect.width / 2}px)`;
                break;
            case 'top-right':
                notification.style.top = `${verticalPosition}px`;
                notification.style.right = '20px';
                break;
            default:
                notification.style.top = `${verticalPosition}px`;
                notification.style.left = '50%';
                notification.style.transform = 'translateX(-50%)';
                break;
        }
    
        notification.classList.add('slideIn');
        setTimeout(() => {
            notification.classList.add('slideOut');
            setTimeout(() => {
                notification.remove();
                resetTopOffset();
                updateNotificationPositions(data.position);
            }, 500);
        }, data.duration);
    }
});

function updateNotificationPositions(position) {
    let notifications = document.querySelectorAll(`.notification[data-position="${position}"]`);
    let verticalPosition = topOffset;
    notifications.forEach((notification, index) => {
        let newVerticalPosition = verticalPosition + index * (notification.offsetHeight + notificationSpacing);
        notification.style.transition = 'top 0.5s ease-in-out';
        notification.style.top = `${newVerticalPosition}px`;
    });
}
