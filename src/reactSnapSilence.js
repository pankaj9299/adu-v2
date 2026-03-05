const isReactSnap =
  typeof navigator !== "undefined" && /ReactSnap/i.test(navigator.userAgent);

if (isReactSnap) {
  const origLog = console.log;
  const origWarn = console.warn;
  const origError = console.error;

  function shouldHide(msg) {
    return (
      msg.includes("Unrecognized feature: 'clipboard-write'") ||
      msg.includes("Unrecognized feature: 'web-share'")
    );
  }

  console.log = (...args) => {
    const msg = String(args[0] || "");
    if (shouldHide(msg)) return;
    origLog(...args);
  };

  console.warn = (...args) => {
    const msg = String(args[0] || "");
    if (shouldHide(msg)) return;
    origWarn(...args);
  };

  console.error = (...args) => {
    const msg = String(args[0] || "");
    if (shouldHide(msg)) return;
    origError(...args);
  };
}