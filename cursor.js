document.addEventListener('DOMContentLoaded', function () {
  const cursor = document.getElementById('custom-cursor');
  document.addEventListener('mousemove', function (e) {
    cursor.style.left = (e.clientX - 46) + 'px';
    cursor.style.top = (e.clientY - 46) + 'px';
  });
});
