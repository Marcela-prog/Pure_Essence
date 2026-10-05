const menuButton = document.querySelector("#menuButton");
const nav = document.querySelector("#nav");
const cartCount = document.querySelector("#cartCount");
const toast = document.querySelector("#toast");
const contactForm = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");

const cart = [];
const cartPanel = document.querySelector("#cartPanel");
const cartItems = document.querySelector("#cartItems");
const emptyCart = document.querySelector("#emptyCart");

document.querySelector("#cartButton").addEventListener("click", () => {
  cartPanel.classList.add("open");
  renderCart();
});

document.querySelector("#closeCart").addEventListener("click", () => {
  cartPanel.classList.remove("open");
});

document.querySelectorAll(".add-button").forEach((button) => {
  button.addEventListener("click", () => {
    cart.push(button.dataset.product);
    cartCount.textContent = cart.length;
    renderCart();
    toast.textContent = `${button.dataset.product} foi adicionado ao carrinho!`;
    toast.classList.add("show");

    setTimeout(() => toast.classList.remove("show"), 2500);
  });
});

function renderCart() {
  cartItems.innerHTML = "";
  emptyCart.hidden = cart.length > 0;

  cart.forEach((produto, index) => {
    const item = document.createElement("li");
    item.innerHTML = `
      <span>${produto}</span>
      <button type="button" data-index="${index}">Excluir</button>
    `;
    cartItems.appendChild(item);
  });
}

cartItems.addEventListener("click", (event) => {
  if (!event.target.matches("button")) return;

  cart.splice(Number(event.target.dataset.index), 1);
  cartCount.textContent = cart.length;
  renderCart();
});

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll(".add-button").forEach((button) => {
  button.addEventListener("click", () => {
    cart += 1;
    cartCount.textContent = cart;
    toast.textContent = `${button.dataset.product} foi adicionado ao carrinho!`;
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 2500);
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent = "Mensagem enviada! Em breve entraremos em contato.";
  contactForm.reset();
});
