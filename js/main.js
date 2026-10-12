// Shared: background decoration + photo slots
(function () {
  var STAR = 'M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 9.2l7.1-.6z';
  var stars = [
    ['6%','14%',22,'#B49BEB',0],['18%','72%',16,'#F2C94C',.6],['30%','8%',14,'#4FB6A8',1.2],
    ['44%','88%',18,'#B49BEB',.3],['62%','12%',20,'#F2C94C',.9],['78%','30%',14,'#F2A0B5',1.6],
    ['88%','62%',22,'#B49BEB',.4],['12%','40%',12,'#F2A0B5',2],['70%','80%',16,'#4FB6A8',.8],
    ['94%','10%',14,'#F2C94C',1.8]
  ];
  var html = '<svg class="blob tl" width="360" height="300" viewBox="0 0 360 300"><path d="M0 0H360C340 30 316 48 280 58C236 70 220 104 182 128C140 154 120 196 76 232C48 254 24 280 0 300Z" fill="#C9B8F0"/><path d="M0 0H300C282 22 262 36 232 44C196 54 182 80 150 100C116 122 98 156 62 186C40 204 20 224 0 240Z" fill="#B49BEB" opacity=".55"/></svg>'
    + '<svg class="blob br" width="380" height="300" viewBox="0 0 380 300"><path d="M380 300H0C26 274 54 262 92 254C140 244 160 210 200 186C244 160 262 120 306 86C336 64 356 34 380 0Z" fill="#C9B8F0"/></svg>';
  stars.forEach(function (s) {
    html += '<svg class="star" style="left:' + s[0] + ';top:' + s[1] + ';animation-delay:' + s[4] + 's" width="' + s[2] + '" height="' + s[2] + '" viewBox="0 0 24 24"><path d="' + STAR + '" fill="' + s[3] + '"/></svg>';
  });
  var deco = document.createElement('div');
  deco.className = 'deco';
  deco.setAttribute('aria-hidden', 'true');
  deco.innerHTML = html;
  document.body.prepend(deco);

  // Photo slots: <div class="photo" data-src="assets/x.jpg">label</div>
  document.querySelectorAll('.photo[data-src]').forEach(function (slot) {
    var img = new Image();
    img.alt = slot.getAttribute('data-alt') || '';
    img.onload = function () { slot.appendChild(img); slot.classList.add('has-img'); };
    img.src = slot.getAttribute('data-src');
  });
})();
