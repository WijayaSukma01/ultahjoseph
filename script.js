document.addEventListener("DOMContentLoaded", (event) => {
  const audio = document.getElementById("birthday-audio");

  // Coba untuk memutar audio setelah halaman dimuat
  audio
    .play()
    .then(() => {
      audio.muted = false; // Hapus mute setelah pemutaran dimulai
    })
    .catch((error) => {
      console.log("Playback failed:", error);

      // Alternatif jika pemutaran awal gagal, coba mulai pemutaran setelah klik
      document.body.addEventListener("click", () => {
        if (audio.paused) {
          audio
            .play()
            .then(() => {
              audio.muted = false; // Hapus mute setelah pemutaran dimulai
            })
            .catch((error) => {
              console.log("Playback failed:", error);
            });
        }
      });
    });
});
