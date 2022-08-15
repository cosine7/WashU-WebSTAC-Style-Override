{
  chrome.runtime.sendMessage('insertCSS')
  function switchTheme(theme) {
    document.body.className = `theme-${theme}`;
  }
  
  switchTheme(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    switchTheme(e.matches ? 'dark' : 'light');
  });

  document.getElementById('Image1').parentElement.innerHTML = 'Washington University in St. Louis'
  document.getElementById('ShibLogin1_HyperLink1').textContent = 'Login'
  const homeLabel = document.createElement('label')
  document.getElementById('ImageButton1').after(homeLabel)
  homeLabel.htmlFor = 'ImageButton1'
  homeLabel.className = 'iconfont icon-home'
  homeLabel.id = 'homeLabel'
  document.getElementById('HyperLink1').innerHTML = '?'
  document.getElementsByClassName('MenuTD')[0].remove()
  document.querySelectorAll('#MenuTable>tbody>tr>td')[3].remove()
}