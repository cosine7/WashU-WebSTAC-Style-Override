{
  chrome.runtime.sendMessage('insertCSS')
  function switchTheme(theme) {
    document.body.className = `theme-${theme}`;
  }
  
  switchTheme(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    switchTheme(e.matches ? 'dark' : 'light');
  });

  const logo = document.getElementById('Image1')
  logo.parentElement.textContent = 'Washington University in St. Louis'
  logo.remove()
}