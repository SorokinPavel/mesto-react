class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  _getResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}cards`, {headers: this._headers})
      .then(res => {return this._getResponse(res);})
  }

  getUserInformation() {
    return fetch(`${this._baseUrl}users/me`, {
      headers: this._headers
    })
      .then(res => { return this._getResponse(res); })
  }

  putUserInformation(user) {
    return fetch(`${this._baseUrl}users/me`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({name: user.login, about: user.description})
    })
        .then(res => {return this._getResponse(res);})
  }

  addNewCard({name,link}) {
    return fetch(`${this._baseUrl}cards`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({name, link})
    })
      .then(res => {return this._getResponse(res);})
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}cards/${cardId}`, {
      headers: this._headers,
      method: 'DELETE',
    })
      .then(res => {return this._getResponse(res); })
  }
  cardLike(cardId) {
    return fetch(`${this._baseUrl}cards/${cardId}/likes`, {
      headers: this._headers,
      method: 'PUT',
    })
      .then(res => {return this._getResponse(res); })
  }

  cardDeleteLike(cardId) {
    return fetch(`${this._baseUrl}cards/${cardId}/likes`, {
      headers: this._headers,
      method: 'DELETE',
    })
      .then(res => {return this._getResponse(res); })
  }
  changeAvatar(profileAvatar) {
    return fetch(`${this._baseUrl}users/me/avatar`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({ avatar: profileAvatar.link })
    })
      .then(res => {return this._getResponse(res);})
  }
}

const apiConfig = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-63/',
  headers: {
    authorization: '61790f16-d60d-4c71-aea1-14b675a367af',
    'Content-Type': 'application/json'
  }
}

const api = new Api(apiConfig);

export default api;


