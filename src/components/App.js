import { useState, useEffect } from 'react';
import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import ImagePopup from './ImagePopup.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import api from '../utils/api.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup';

function App() {
  //! Стейты и функции попапов
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  // Текст при загрузке
  const [isLoading, setLoading] = useState(false);

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard({
      ...selectedCard,
      link: card.link,
      name: card.name,
    });
    setImagePopupOpen(true);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setImagePopupOpen(false);
  }

  //! Стейт пользователя
  const [currentUser, setCurrentUser] = useState({
    name: '',
    about: '',
    avatar: '',
  });

  useEffect(() => {
    api
      .getUserInfo()
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((err) => console.log(err));
  }, []);

  // Обновление пользователя
  function handleUpdateUser(user) {
    setLoading(true);

    api
      .setUserInfo(user)
      .then(setCurrentUser)
      .then(closeAllPopups)
      .catch((err) => console.log(err))
      .finally(setTimeout(() => setLoading(false), 1500));
  }

  // Обновление аватара
  function handleUpdateAvatar(user) {
    setLoading(true);

    api
      .setNewAvatar(user)
      .then(setCurrentUser)
      .then(closeAllPopups)
      .catch((err) => console.log(err))
      .finally(setTimeout(() => setLoading(false), 1500));
  }

  //! Стейты и функции карточки
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => console.log(err));
  }, []);

  // Лайк
  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api
      .changeCardLikeStatus(card._id, isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        setCards(newCards);
      })
      .catch((err) => console.log(err));
  }

  // Удаление карточки
  function handleCardDelete(card) {
    api
      .removeCard(card._id)
      .then(() => {
        const newCards = cards.filter((c) => c._id !== card._id);
        setCards(newCards);
      })
      .catch((err) => console.log(err));
  }

  // Добавление новой карточки
  function handleAddPlace(data) {
    setLoading(true);

    api
      .addCustomCard(data)
      .then((newCard) => {
        setCards([newCard, ...cards]);
      })
      .then(closeAllPopups)
      .catch((err) => console.log(err))
      .finally(setTimeout(() => setLoading(false), 1500));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
        />
        <Footer />

        {/* Попап редактирования профиля */}
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          onLoading={isLoading}
        />

        {/* Попап добавления карточки */}
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlace}
          onLoading={isLoading}
        />

        {/* Попап редактирования аватара */}
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          onLoading={isLoading}
        />

        {/* Попап с картинкой*/}
        <ImagePopup
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
          card={selectedCard}
        />

        {/* Попап удаления карточки на будущее 
        <PopupWithForm name="remove" title="Вы уверены?" buttonText="Да" />
        */}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
