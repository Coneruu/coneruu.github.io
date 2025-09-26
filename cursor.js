document.addEventListener('DOMContentLoaded', function () {
  const cursor = document.getElementById('custom-cursor');
  document.addEventListener('mousemove', function (e) {
    cursor.style.left = (e.clientX - 16) + 'px';
    cursor.style.top = (e.clientY - 16) + 'px';
  });
});
