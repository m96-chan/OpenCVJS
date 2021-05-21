async function setupCamera(videoElement, width = 1280, height = 720) {
    videoElement.srcObject = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            width: width,
            height: height
        }
    });
    return new Promise((resolve) => {
        videoElement.onloadedmetadata = () => {
            videoElement.play();
            resolve();
        };
    });
}