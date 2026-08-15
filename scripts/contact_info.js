const contactos = [
  {
    name: "Email",
    icon: "email.svg",
    data: "andres653000@gmail.com",
    href: "mailto:andres653000@gmail.com",
  },
  {
    name: "WhatsApp",
    icon: "whatsapp.svg",
    data: "3741111789",
    href: "https://wa.me/3741111789",
  },
  {
    name: "GitHub",
    icon: "github.svg",
    data: "@OsmarAndresLopezPineda",
    href: "https://github.com/OsmarAndresLopezPineda",
  },
  {
    name: "Linkedin",
    icon: "linkedin.svg",
    data: "@osmar-andres-lopez-pineda",
    href: "https://www.linkedin.com/in/osmar-andres-lopez-pineda/",
  },
];
const contactTemplate = document
  .querySelector("#contact__template")
  .content.querySelector(".card");
//---Funcion que usa la Templeate para crear una tarjeta---
function getCardElement(nameCard, iconCard, dataCard, hrefCard) {
  const cardElement = contactTemplate.cloneNode(true);
  const iconElement = cardElement.querySelector(".card__icon");
  const titleElement = cardElement.querySelector(".card__title");
  const dataElement = cardElement.querySelector(".card__data");
  const messageElement = cardElement.querySelector(".card__data-message");
  const linkElement = cardElement.querySelector(".card__link");
  //Asignamos los valores con los elementos de cada bloque.
  //Icono (Imagen)
  iconElement.src = `./images/icons/${iconCard}`;
  iconElement.alt = `${nameCard} Icon`;
  //Titulo
  const title = nameCard;
  titleElement.textContent = title;
  //Data
  dataElement.textContent = dataCard;
  //Link
  linkElement.href = hrefCard;
  //Agregamos la clase para que tenga color:
  cardElement.classList.add(`card--${nameCard.toLowerCase()}`);
  //Evento copiar en el portapapeles
  cardElement.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(dataCard);

      messageElement.textContent = `${title} copied to the clipboard`;
      messageElement.style.display = "block";

      setTimeout(() => {
        messageElement.style.display = "none";
      }, 2000);
    } catch (error) {
      messageElement.textContent = `Failed to copy ${title}`;
      messageElement.style.display = "block";
    }
  });
  return cardElement;
}
//Funcion que renderiza la tarjeta
function renderCard(nameCard, iconCard, dataCard, hrefCard, conteinerCard) {
  const renderCardElement = getCardElement(
    nameCard,
    iconCard,
    dataCard,
    hrefCard,
  );
  conteinerCard.prepend(renderCardElement);
}
//Funcion que implementa nuestra tarjeta en nuestro DOM
const contacts = document.querySelector(".contact");
contactos.forEach((contact) => {
  renderCard(contact.name, contact.icon, contact.data, contact.href, contacts);
});
