import Book from './modules/BookClass.js';
import { DateTime } from './modules/src/luxon.js';

Book.listBtn.forEach((btn, i) => {
  btn.onclick = () => {
    Book.listBtn.forEach((oldBtn) => {
      oldBtn.classList.remove('active');
    });
    btn.classList.add('active');
    Book.addActive.forEach((sec, index) => {
      if (i === index) {
        sec.classList.add('active');
      } else {
        sec.classList.remove('active');
      }
    });
  };
});

Book.formBtn.addEventListener('click', Book.addBooks);

const displayTime = () => {
  document.getElementById('date').innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  setInterval(displayTime, 1000);
};

displayTime();

Book.updateUi();