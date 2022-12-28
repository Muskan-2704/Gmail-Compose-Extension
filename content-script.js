(async () => {
    const src = chrome.runtime.getURL('js/mainAppmin.js');
    const contentScript = await import(src);
    await contentScript.app();
  })();