document.addEventListener("DOMContentLoaded", function () {
    function addVideoHoverEffect(videoContainerId, videoId) {
        const videoContainer = document.getElementById(videoContainerId);
        const vimeoVideo = document.getElementById(videoId);

        let player;

        videoContainer.addEventListener("mouseenter", function () {
            playVideo();
        });

        videoContainer.addEventListener("mouseleave", function () {
            pauseVideo();
        });

        function playVideo() {
            if (!player) {
                player = new Vimeo.Player(vimeoVideo);
            }

            player.play().then(() => {
                videoContainer.classList.add("video-playing");
            });
        }

        function pauseVideo() {
            if (player) {
                player.pause().then(() => {
                    videoContainer.classList.remove("video-playing");
                });
            }
        }
    }
    addVideoHoverEffect("vid", "vimeoVideo");
    addVideoHoverEffect("vid-01", "vimeoVideo-01");
    addVideoHoverEffect("vid-02", "vimeoVideo-02");
    addVideoHoverEffect("vid-03", "vimeoVideo-03");
    addVideoHoverEffect("vid-04", "vimeoVideo-04");
});