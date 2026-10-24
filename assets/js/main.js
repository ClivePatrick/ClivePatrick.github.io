// Play a panel's background video after hovering for a moment.
// On leave it fades out and restarts from the beginning next time.
const HOVER_DELAY_MS = 100;

const canHover = matchMedia("(hover: hover)").matches;
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

if (canHover && !reducedMotion) {
    document.querySelectorAll(".project__video").forEach((video) => {
        const panel = video.closest(".project");
        let timer;

        panel.addEventListener("mouseenter", () => {
            timer = setTimeout(() => {
                video.currentTime = 0;
                video.play().catch(() => {});
            }, HOVER_DELAY_MS);
        });

        panel.addEventListener("mouseleave", () => {
            clearTimeout(timer);
            video.pause();
            video.classList.remove("is-playing");
        });

        video.addEventListener("playing", () => video.classList.add("is-playing"));
    });
}
