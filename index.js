const _tabs = document.querySelectorAll('[tab-info]');
const _navs = document.querySelectorAll('[data-nav]');
const _contentTab = document.getElementsByClassName('active');
const _contentNav = document.getElementsByClassName('nav-active');

const toggleContentTab = function () {
  if (!this.classList.contains('active')) {
    Array.from(_contentTab).forEach((item) => {
      item.classList.remove('active');
    });

    this.classList.add('active');

    let currentTab = this.getAttribute('tab-info'),
      _tabContent = document.getElementById(currentTab);
    _tabContent.classList.add('active');
  }
};

const toggleContentNav = function () {
  if (!this.classList.contains('active')) {
    Array.from(_contentNav).forEach((item) => {
      item.classList.remove('nav-active');
    });

    this.classList.add('nav-active');

    let currentNav = this.getAttribute('data-nav'),
      _navContent = document.getElementById(currentNav);
    _navContent.classList.add('nav-active');
  }
};

Array.from(_tabs).forEach((item) => {
  item.addEventListener('click', toggleContentTab);
});

Array.from(_navs).forEach((item) => {
  item.addEventListener('click', toggleContentNav);
});

// hitung luas & keliling
const formLuasSegitiga = document.getElementById('form-luas-segitiga');
const formKelilingSegitiga = document.getElementById('form-keliling-segitiga');
const formLuasJajarGenjang = document.getElementById('form-luas-jajar-genjang');
const formKelilingJajarGenjang = document.getElementById("form-keliling-jajar-genjang");
const resetButton = document.getElementById('reset-button');

// luas segitiga
formLuasSegitiga.addEventListener('submit', function (e) {
    e.preventDefault();
    const alasSegitiga = document.getElementById('alas-segitiga').value;
    const tinggiSegitiga = document.getElementById('tinggi-segitiga').value;

    if (alasSegitiga === '' || tinggiSegitiga === '') {
        alert('Masukkan nilai alas dan tinggi');
        return;
    }

    if (isNaN(alasSegitiga) || isNaN(tinggiSegitiga)) {
        alert('Masukkan angka');
        return;
    }

    const luasSegitiga = (parseInt(alasSegitiga) * parseInt(tinggiSegitiga)) / 2;
    document.getElementById('hasil-luas-segitiga').innerHTML = `
        <span>L = 1/2 x a x t</span>
        <span>L = 1/2 x ${alasSegitiga} x ${tinggiSegitiga}</span>
        <span>L = ${luasSegitiga}</span>
    `;
});
formLuasSegitiga.addEventListener('reset', function (e) {
    document.getElementById('hasil-luas-segitiga').innerHTML = '';
});

// keliling segitiga
formKelilingSegitiga.addEventListener('submit', function (e) {
    e.preventDefault();
    const sisi1Segitiga = document.getElementById('sisi-a-segitiga').value;
    const sisi2Segitiga = document.getElementById('sisi-b-segitiga').value;
    const sisi3Segitiga = document.getElementById('sisi-c-segitiga').value;

    if (sisi1Segitiga === '' || sisi2Segitiga === '' || sisi3Segitiga === '') {
        alert('Masukkan nilai sisi');
        return;
    }

    if (isNaN(sisi1Segitiga) || isNaN(sisi2Segitiga) || isNaN(sisi3Segitiga)) {
        alert('Masukkan angka');
        return;
    }

    const kelilingSegitiga = parseInt(sisi1Segitiga) + parseInt(sisi2Segitiga) + parseInt(sisi3Segitiga);
    document.getElementById('hasil-keliling-segitiga').innerHTML = `
        <span>K = a + b + c</span>
        <span>K = ${sisi1Segitiga} + ${sisi2Segitiga} + ${sisi3Segitiga}</span>
        <span>K = ${kelilingSegitiga}</span>
    `;
});
formKelilingSegitiga.addEventListener('reset', function (e) {
    document.getElementById('hasil-keliling-segitiga').innerHTML = '';
});

// luas jajar genjang
formLuasJajarGenjang.addEventListener('submit', function (e) {
    e.preventDefault();
    const alasJajarGenjang = document.getElementById('alas-jajar-genjang').value;
    const tinggiJajarGenjang = document.getElementById('tinggi-jajar-genjang').value;

    if (alasJajarGenjang === '' || tinggiJajarGenjang === '') {
        alert('Masukkan nilai alas dan tinggi');
        return;
    }

    if (isNaN(alasJajarGenjang) || isNaN(tinggiJajarGenjang)) {
        alert('Masukkan angka');
        return;
    }

    const luasJajarGenjang = parseInt(alasJajarGenjang) * parseInt(tinggiJajarGenjang);
    document.getElementById('hasil-luas-jargen').innerHTML = `
        <span>L = a x t</span>
        <span>L = ${alasJajarGenjang} x ${tinggiJajarGenjang}</span>
        <span>L = ${luasJajarGenjang}</span>
    `;
});
formLuasJajarGenjang.addEventListener('reset', function (e) {
    document.getElementById('hasil-luas-jargen').innerHTML = '';
});

// keliling jajar genjang
formKelilingJajarGenjang.addEventListener('submit', function (e) {
    e.preventDefault();
    const sisiAJajarGenjang = document.getElementById('sisi-1-jajarGenjang').value;
    const sisiBJajarGenjang = document.getElementById('sisi-2-jajarGenjang').value;

    if (sisiAJajarGenjang === '' || sisiBJajarGenjang === '') {
        alert('Masukkan nilai sisi');
        return;
    }

    if (isNaN(sisiAJajarGenjang) || isNaN(sisiBJajarGenjang)) {
        alert('Masukkan angka');
        return;
    }

    const kelilingJajarGenjang = 2 * (parseInt(sisiAJajarGenjang) + parseInt(sisiBJajarGenjang));
    document.getElementById('hasil-keliling-jargen').innerHTML = `
        <span>K = 2 x (a + b)</span>
        <span>K = 2 x (${sisiAJajarGenjang} + ${sisiBJajarGenjang})</span>
        <span>K = ${kelilingJajarGenjang}</span>
    `;
});
formKelilingJajarGenjang.addEventListener('reset', function (e) {
    document.getElementById('hasil-keliling-jargen').innerHTML = '';
});