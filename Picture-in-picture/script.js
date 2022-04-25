const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//Prompt the user to select media stream, pass to video element
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        //catch error here
        console.log('Whoops, error here:', error);
    }
 };
   // Give yourself a pat on the back for debugging this on your own! 
button.addEventListener('click', async () => {
    // Disable the button on click
    button.disabled = true;
    // Start picture in picture
    await videoElement.requestPictureInPicture();
    // Reset the button
    button.diabled = false;
});
 
 // On Load
selectMediaStream();



