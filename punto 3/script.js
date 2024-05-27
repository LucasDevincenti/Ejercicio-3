document.addEventListener('DOMContentLoaded', function() {
    const connectionStatus = document.getElementById('connection-status');
    const submitButton = document.getElementById('submit-button');
    const toast = document.getElementById('toast');
    const audio = document.querySelector('audio');
    const video = document.querySelector('video');

    function updateConnectionStatus() {
        if (navigator.onLine) {
            connectionStatus.innerText = 'Connection status: Online';
            submitButton.disabled = false;
            audio.play();
            video.play();
            toast.style.display = 'none';
            toast.innerHTML = '';
        } else {
            connectionStatus.innerText = 'Connection status: Offline';
            submitButton.disabled = true;
            audio.pause();
            video.pause();
            toast.style.display = 'block';
            toast.innerHTML = '<span class="offline-icon"></span> Connection lost';
        }
    }

    updateConnectionStatus();

    window.addEventListener('online', function() {
        updateConnectionStatus();
        toast.innerHTML = '<span class="online-icon"></span> Connection restored';
        setTimeout(function() {
            toast.style.display = 'none';
            toast.innerHTML = '';
        }, 3000);
    });

    window.addEventListener('offline', function() {
        updateConnectionStatus();
        toast.innerHTML = '<span class="offline-icon"></span> Connection lost';
        toast.style.display = 'block';
    });
});
