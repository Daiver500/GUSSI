"use strict";

const forms = document.querySelectorAll("form");

const  message = {                         // объект с текстовыми сообщениями
  success: "Спасибо, форма отправлена",
  error: "Ошибка"
}

const postData = (form) => {
  const formSendingHandler = (evt) => {
    evt.preventDefault();
    const formData = new FormData(form);

    const object = {};
        formData.forEach(function(value, key) {  // ДЛЯ JSON  перебираем formData и формируем новый объект, так как JSON не примет formData другим образом
          object[key] = value;
      })

      const json = JSON.stringify(object);

    fetch("server.php", {
      method: "POST",
      headers: {
        "Content-type": "application/json "       //заголовки нужны для отправки JSON
      },
      body: json
    }).then(data => data.text())
      .then(data => {
      console.log(data);
      showThanksModal(message.success);
      body.style.overflow = "hidden";
    }).catch(() => {
      showThanksModal(message.error);
      body.style.overflow = "hidden";
    }).finally(() => {
      form.reset();
    })
  }
  form.addEventListener("submit", formSendingHandler);
  form.addEventListener("submit", window.main.closeModal);
}

forms.forEach((item) => {   // для каждой формы запускаем функцию postData и передаем в нее как аргумент форму
  postData(item);
});

const showThanksModal = (message) => {                                    // сюда передаем как аргумент сообщение пользователю из объекта message
  const thanksModal = document.createElement("div");                      // создаем новую начинку модального окна для сообщения пользователю
  thanksModal.classList.add("modal-success");
  thanksModal.innerHTML = `
  <div class="modal-success__inner">
  <div class="modal-success__title">
    <p class="modal-success__text">${message}</p>
  </div>
  <button class="modal-success__close" type="button" aria-label="Закрыть модальное окно">
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M0.146522 0.853553C-0.04874 0.658291 -0.04874 0.341709 0.146522 0.146447C0.341784 -0.0488155 0.658367 -0.0488156 0.853629 0.146447L8.27821 7.57103L15.7028 0.14645C15.8981 -0.0488124 16.2146 -0.0488125 16.4099 0.14645C16.6052 0.341712 16.6052 0.658294 16.4099 0.853556L8.98532 8.27814L16.41 15.7028C16.6052 15.8981 16.6052 16.2146 16.41 16.4099C16.2147 16.6052 15.8981 16.6052 15.7029 16.4099L8.27821 8.98525L0.853553 16.4099C0.658291 16.6052 0.341709 16.6052 0.146447 16.4099C-0.0488155 16.2146 -0.0488156 15.8981 0.146447 15.7028L7.57111 8.27814L0.146522 0.853553Z"
        fill="currentColor" />
    </svg>
  </button>
</div>
  `;
  document.querySelector(".page").prepend(thanksModal);            // добавляем в модальное окно новое наполнение
  setTimeout(() => {                                               // через определенное время удаляем сообщение пользователю и возвращаем обратно возможность вызвать и отправить форму
    thanksModal.remove();
    body.style.overflow = "visible";
  }, 5000)

  const modalSuccess = document.querySelector(".modal-success");
  const modalSuccessClose = modalSuccess.querySelector(".modal-success__close");

  const closeThanksModal = () => {
    thanksModal.remove();
    body.style.overflow = "visible";
  }

  const windowClickHandler = (evt) => {
    const target = evt.target;
    if (target === modalSuccess) {
      closeThanksModal();
    }
  }

  window.server = {
    closeThanksModal,
  }

  modalSuccessClose.addEventListener("click", closeThanksModal);
  document.addEventListener("keyup", window.main.escPressHandler);
  document.addEventListener("click", windowClickHandler);
}

