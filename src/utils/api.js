class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  // Получение информации польтзователя
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then((res) =>
      res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`),
    );
  }

  // Редактирование информации о пользователе
  setUserInfo(user) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(user),
    }).then((res) =>
      res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`),
    );
  }

  // Получение карточек с сервера
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then((res) =>
      res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`),
    );
  }

  // Добавление своей карточки
  addCustomCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.title,
        link: data.link,
      }),
    }).then((res) =>
      res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`),
    );
  }

  // Удаление своей карточки
  removeCard(card) {
    return fetch(`${this._baseUrl}/cards/${card}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) =>
      res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`),
    );
  }

  // Посатвить лайк
  addCardLike(card) {
    return fetch(`${this._baseUrl}/cards/likes/${card}`, {
      method: 'PUT',
      headers: this._headers,
    }).then((res) =>
      res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`),
    );
  }

  // Убрать лайк
  removeCardLike(card) {
    return fetch(`${this._baseUrl}/cards/likes/${card}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) =>
      res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`),
    );
  }

  changeCardLikeStatus(cardId, isLiked) {
    return isLiked ? this.removeCardLike(cardId) : this.addCardLike(cardId);
  }

  // Установить новый аватар
  setNewAvatar(user) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: user.avatar,
      }),
    }).then((res) =>
      res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`),
    );
  }
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-19',
  headers: {
    authorization: '0317c846-fa90-4414-9658-7dd1e3d83b45',
    'Content-Type': 'application/json',
  },
});

export default api;
