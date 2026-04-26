const VIDEO_SRC = './media/intro.mp4';

/**
 * Fullscreen intro video shown on page load. Mounts a high-z-index overlay
 * so the rest of the game can boot underneath. Autoplay is muted (browser
 * policy); the user can tap anywhere or press Skip to dismiss early.
 */
export class IntroVideo {
  static play() {
    return new Promise(resolve => {
      const overlay = document.createElement('div');
      overlay.className = 'intro-overlay';
      overlay.innerHTML = `
        <video class="intro-video" playsinline muted autoplay preload="auto" webkit-playsinline>
          <source src="${VIDEO_SRC}" type="video/mp4">
        </video>
        <button class="intro-skip" type="button">Skip</button>
      `;
      document.body.appendChild(overlay);

      const video = overlay.querySelector('video');
      const skip = overlay.querySelector('.intro-skip');

      let done = false;
      const finish = () => {
        if (done) return;
        done = true;
        overlay.classList.add('intro-fade-out');
        setTimeout(() => {
          overlay.remove();
          resolve();
        }, 400);
      };

      video.addEventListener('ended', finish);
      video.addEventListener('error', finish);
      skip.addEventListener('click', (e) => { e.stopPropagation(); finish(); });
      overlay.addEventListener('click', finish);

      const p = video.play();
      if (p && typeof p.catch === 'function') {
        p.catch(() => finish());
      }
    });
  }
}
