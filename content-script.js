(async () => {
    const src = chrome.runtime.getURL('js/mainApp.js');
    const contentScript = await import(src);
    await contentScript.app();
  })();