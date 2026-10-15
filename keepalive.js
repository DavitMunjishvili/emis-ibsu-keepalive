// EMIS only treats `mousemove` on `document` as activity (loginTimeout = 300 s).
// Fire a synthetic one periodically so the idle timer never reaches the limit.
(() => {
  const INTERVAL_MS = 30 * 1000;

  const tick = () => {
    document.dispatchEvent(new MouseEvent("mousemove", { bubbles: true }));
    try {
      if (localStorage.getItem("lastActiveAt") !== null) {
        localStorage.setItem("lastActiveAt", String(Math.round(Date.now() / 1000)));
      }
    } catch (_) {}
  };

  setInterval(tick, INTERVAL_MS);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) tick();
  });
})();
