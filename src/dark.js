document.addEventListener('DOMContentLoaded', () => {
  // بررسی و تنظیم تم اولیه
  if (!localStorage.getItem('SiteSettings')) {
    localStorage.setItem('SiteSettings', JSON.stringify({ theme: 'light' }));
  }
  const siteSettings = JSON.parse(localStorage.getItem('SiteSettings'));
  document
    .querySelector('html')
    .classList.toggle('dark', siteSettings.theme === 'dark');

  // تنظیم دکمه‌ها بر اساس تم فعلی
  const themeLightButton = document.getElementById('theme-light');
  const themeDarkButton = document.getElementById('theme-dark');
  if (siteSettings.theme === 'light') {
    themeLightButton.style.display = 'none';
    themeDarkButton.style.display = 'block';
  } else {
    themeLightButton.style.display = 'block';
    themeDarkButton.style.display = 'none';
  }

  // افزودن رویداد کلیک به دکمه‌ها
  themeLightButton.addEventListener('click', () => {
    document.querySelector('html').classList.remove('dark');
    localStorage.setItem('SiteSettings', JSON.stringify({ theme: 'light' }));
    themeLightButton.style.display = 'none';
    themeDarkButton.style.display = 'block';
  });

  themeDarkButton.addEventListener('click', () => {
    document.querySelector('html').classList.add('dark');
    localStorage.setItem('SiteSettings', JSON.stringify({ theme: 'dark' }));
    themeLightButton.style.display = 'block';
    themeDarkButton.style.display = 'none';
  });
});
