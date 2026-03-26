/* =============================================
   TESOURA DOURADA - Script Principal
   E-commerce de Moda Premium
   ============================================= */

// ===== NÚMERO DO WHATSAPP (altere aqui) =====
const WHATSAPP_NUMBER = "5511999999999";

// ===== CATÁLOGO DE PRODUTOS =====
const products = [
  // --- MASCULINO ---
  { id: 1,  name: "Camiseta Premium Preta",    price: 129.90, category: "Camisetas",   gender: "Masculino", image: "images/camiseta-preta.jpg",    description: "Camiseta de algodão egípcio com caimento perfeito", sizeType: "roupa" },
  { id: 2,  name: "Camisa Social Branca",       price: 249.90, category: "Camisas",     gender: "Masculino", image: "images/camisa-branca.jpg",     description: "Camisa social slim fit em algodão premium", sizeType: "roupa" },
  { id: 3,  name: "Calça Chino Marinho",        price: 289.90, category: "Calças",      gender: "Masculino", image: "images/calca-chino.jpg",       description: "Calça chino slim em sarja premium", sizeType: "roupa" },
  { id: 4,  name: "Jaqueta Biker Preta",        price: 899.90, category: "Jaquetas",    gender: "Masculino", image: "images/jaqueta-couro.jpg",     description: "Jaqueta estilo biker em couro sintético premium", sizeType: "roupa" },
  { id: 5,  name: "Moletom Comfort Cinza",      price: 199.90, category: "Moletons",    gender: "Masculino", image: "images/moletom-cinza.jpg",     description: "Moletom com capuz em algodão fleece", sizeType: "roupa" },
  { id: 6,  name: "Calça Jeans Escura",         price: 259.90, category: "Calças",      gender: "Masculino", image: "images/calca-jeans.jpg",       description: "Jeans slim fit em denim premium escuro", sizeType: "roupa" },
  { id: 7,  name: "Bomber Jacket Verde",        price: 459.90, category: "Jaquetas",    gender: "Masculino", image: "images/bomber-verde.jpg",      description: "Jaqueta bomber em nylon com forro acolchoado", sizeType: "roupa" },
  { id: 8,  name: "Polo Clássica Bege",         price: 179.90, category: "Camisas",     gender: "Masculino", image: "images/polo-bege.jpg",         description: "Camisa polo em piquet de algodão pima", sizeType: "roupa" },
  { id: 9,  name: "Suéter V-Neck Borgonha",     price: 329.90, category: "Moletons",    gender: "Masculino", image: "images/sueter-borgonha.jpg",   description: "Suéter gola V em lã merino italiana", sizeType: "roupa" },
  { id: 10, name: "Blazer Slim Marinho",        price: 749.90, category: "Jaquetas",    gender: "Masculino", image: "images/blazer-marinho.jpg",    description: "Blazer estruturado em lã fria com forro acetinado", sizeType: "roupa" },
  { id: 11, name: "Tênis Minimal Branco",       price: 399.90, category: "Calçados",    gender: "Masculino", image: "images/tenis-branco.jpg",      description: "Tênis em couro legítimo com solado emborrachado", sizeType: "calcado" },
  { id: 12, name: "Cinto Couro Marrom",         price: 189.90, category: "Acessórios",  gender: "Masculino", image: "images/cinto-marrom.jpg",      description: "Cinto em couro legítimo com fivela dourada", sizeType: "none" },
  { id: 13, name: "Calça Social Chumbo",        price: 349.90, category: "Calças",      gender: "Masculino", image: "images/calca-social.jpg",      description: "Calça de alfaiataria slim em tecido tropical", sizeType: "roupa" },
  { id: 14, name: "Jogger Tech Preto",          price: 219.90, category: "Calças",      gender: "Masculino", image: "images/jogger-preto.jpg",      description: "Calça jogger em tecido tech com elastano", sizeType: "roupa" },
  { id: 15, name: "Camisa Linho Azul",          price: 279.90, category: "Camisas",     gender: "Masculino", image: "images/camisa-linho.jpg",      description: "Camisa manga curta em linho puro", sizeType: "roupa" },
  { id: 16, name: "Bermuda Cargo Verde",        price: 199.90, category: "Bermudas",    gender: "Masculino", image: "images/bermuda-cargo.jpg",     description: "Bermuda cargo em sarja com bolsos laterais", sizeType: "roupa" },
  { id: 17, name: "Camiseta Listrada Navy",     price: 149.90, category: "Camisetas",   gender: "Masculino", image: "images/camiseta-listrada.jpg", description: "Camiseta manga longa listrada em algodão", sizeType: "roupa" },
  { id: 18, name: "Sobretudo Clássico Preto",   price: 1299.90, category: "Jaquetas",   gender: "Masculino", image: "images/sobretudo-preto.jpg",   description: "Sobretudo longo em lã premium com corte italiano", sizeType: "roupa" },
  { id: 19, name: "Carteira Couro Preta",       price: 159.90, category: "Acessórios",  gender: "Masculino", image: "images/carteira-preta.jpg",    description: "Carteira bifold em couro legítimo com acabamento premium", sizeType: "none" },
  { id: 20, name: "Óculos Aviador Dourado",     price: 349.90, category: "Acessórios",  gender: "Masculino", image: "images/oculos-aviador.jpg",    description: "Óculos aviador com armação dourada e lentes polarizadas", sizeType: "none" },

  // --- FEMININO ---
  { id: 21, name: "Vestido Midi Vermelho",      price: 389.90, category: "Vestidos",    gender: "Feminino",  image: "images/vestido-vermelho.jpg",  description: "Vestido midi com decote V em crepe premium", sizeType: "roupa" },
  { id: 22, name: "Blusa Seda Branca",          price: 279.90, category: "Blusas",      gender: "Feminino",  image: "images/blusa-seda-branca.jpg", description: "Blusa de seda pura com acabamento acetinado", sizeType: "roupa" },
  { id: 23, name: "Calça Jeans Skinny",         price: 269.90, category: "Calças",      gender: "Feminino",  image: "images/calca-jeans-fem.jpg",   description: "Calça jeans cintura alta skinny em denim stretch", sizeType: "roupa" },
  { id: 24, name: "Trench Coat Bege",           price: 799.90, category: "Casacos",     gender: "Feminino",  image: "images/trench-coat-bege.jpg",  description: "Trench coat clássico com cinto em gabardine premium", sizeType: "roupa" },
  { id: 25, name: "Saia Couro Preta",           price: 329.90, category: "Saias",       gender: "Feminino",  image: "images/saia-couro-preta.jpg",  description: "Saia lápis em couro sintético com forro", sizeType: "roupa" },
  { id: 26, name: "Scarpin Nude",               price: 359.90, category: "Calçados",    gender: "Feminino",  image: "images/scarpin-nude.jpg",      description: "Scarpin bico fino em couro com salto 8cm", sizeType: "calcado" },
  { id: 27, name: "Cropped Tricot Rosa",        price: 189.90, category: "Blusas",      gender: "Feminino",  image: "images/cropped-rosa.jpg",      description: "Cropped em tricot canelado com manga longa", sizeType: "roupa" },
  { id: 28, name: "Pantalona Floral",           price: 299.90, category: "Calças",      gender: "Feminino",  image: "images/pantalona-floral.jpg",  description: "Calça pantalona em viscose com estampa floral", sizeType: "roupa" },
  { id: 29, name: "Bolsa Estruturada Preta",    price: 499.90, category: "Acessórios",  gender: "Feminino",  image: "images/bolsa-preta.jpg",       description: "Bolsa em couro legítimo com alça removível", sizeType: "none" },
  { id: 30, name: "Blazer Alfaiataria Marinho", price: 599.90, category: "Casacos",     gender: "Feminino",  image: "images/blazer-fem-marinho.jpg",description: "Blazer feminino slim em lã fria com forro acetinado", sizeType: "roupa" },
];

// ===== ESTADO DA APLICAÇÃO =====
let cart = JSON.parse(localStorage.getItem("td-cart") || "[]");
let currentUser = JSON.parse(localStorage.getItem("td-user") || "null");
let searchQuery = "";
let selectedCategory = "Todos";
let selectedGender = "Todos";
let isRegisterMode = false;

// ===== INICIALIZAÇÃO =====
document.addEventListener("DOMContentLoaded", () => {
  renderGenderFilter();
  renderCategories();
  renderProducts();
  updateCartBadge();
  updateUserArea();
});

// ===== FILTRO DE GÊNERO =====
function renderGenderFilter() {
  const container = document.getElementById("genderFilter");
  const genders = ["Todos", "Masculino", "Feminino"];
  container.innerHTML = genders.map(g =>
    `<button class="gender-btn ${g === selectedGender ? 'active' : ''}" onclick="selectGender('${g}')">${g}</button>`
  ).join("");
}

function selectGender(gender) {
  selectedGender = gender;
  selectedCategory = "Todos";
  renderGenderFilter();
  renderCategories();
  renderProducts();
}

// ===== FUNÇÕES DE PRODUTO =====
function getCategories() {
  let filtered = products;
  if (selectedGender !== "Todos") {
    filtered = products.filter(p => p.gender === selectedGender);
  }
  const cats = [...new Set(filtered.map(p => p.category))];
  return ["Todos", ...cats];
}

function renderCategories() {
  const container = document.getElementById("categories");
  const cats = getCategories();
  container.innerHTML = cats.map(cat =>
    `<button class="cat-btn ${cat === selectedCategory ? 'active' : ''}" onclick="selectCategory('${cat}')">${cat}</button>`
  ).join("");
}

function selectCategory(cat) {
  selectedCategory = cat;
  renderCategories();
  renderProducts();
}

function handleSearch(value) {
  searchQuery = value.toLowerCase();
  document.getElementById("searchDesktop").value = value;
  document.getElementById("searchMobile").value = value;
  renderProducts();
}

function renderProducts() {
  const grid = document.getElementById("productsGrid");
  const filtered = products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(searchQuery) || p.description.toLowerCase().includes(searchQuery);
    const matchCat = selectedCategory === "Todos" || p.category === selectedCategory;
    const matchGender = selectedGender === "Todos" || p.gender === selectedGender;
    return matchSearch && matchCat && matchGender;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '<p class="no-results">Nenhum produto encontrado.</p>';
    return;
  }

  grid.innerHTML = filtered.map((p, i) => `
    <div class="product-card" style="animation-delay:${i * 80}ms" onclick="openProductDetail(${p.id})">
      <div class="product-image-wrap">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <span class="product-gender-tag">${p.gender}</span>
      </div>
      <div class="product-info">
        <p class="product-category">${p.category}</p>
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${p.description}</p>
        <p class="product-price">R$ ${formatPrice(p.price)}</p>
      </div>
    </div>
  `).join("");
}

// ===== MODAL DE DETALHES DO PRODUTO =====
function openProductDetail(productId) {
  const p = products.find(prod => prod.id === productId);
  if (!p) return;

  let sizesHTML = "";
  if (p.sizeType === "roupa") {
    const sizes = ["P", "M", "G", "GG"];
    sizesHTML = `
      <div class="detail-sizes">
        <p class="detail-sizes-label">Tamanho:</p>
        <div class="size-options">
          ${sizes.map(s => `<button class="size-btn" onclick="selectSize(this, '${s}')">${s}</button>`).join("")}
        </div>
      </div>`;
  } else if (p.sizeType === "calcado") {
    const sizes = [];
    for (let n = 34; n <= 43; n++) sizes.push(n);
    sizesHTML = `
      <div class="detail-sizes">
        <p class="detail-sizes-label">Tamanho:</p>
        <div class="size-options shoe-sizes">
          ${sizes.map(s => `<button class="size-btn" onclick="selectSize(this, '${s}')">${s}</button>`).join("")}
        </div>
      </div>`;
  }

  const modal = document.getElementById("productDetailModal");
  document.getElementById("productDetailContent").innerHTML = `
    <div class="detail-image">
      <img src="${p.image}" alt="${p.name}">
    </div>
    <div class="detail-info">
      <span class="detail-gender-badge">${p.gender}</span>
      <p class="detail-category">${p.category}</p>
      <h2 class="detail-name">${p.name}</h2>
      <p class="detail-desc">${p.description}</p>
      <p class="detail-price">R$ ${formatPrice(p.price)}</p>
      ${sizesHTML}
      <p class="size-error" id="sizeError" style="display:none;">Selecione um tamanho</p>
      <button class="detail-add-btn" onclick="addToCartFromDetail(${p.id}, '${p.sizeType}')">🛍️ Adicionar ao Carrinho</button>
    </div>
  `;
  modal.classList.add("open");
}

function closeProductDetail() {
  document.getElementById("productDetailModal").classList.remove("open");
}

let selectedSizeValue = null;

function selectSize(btn, size) {
  document.querySelectorAll("#productDetailContent .size-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  selectedSizeValue = size;
  document.getElementById("sizeError").style.display = "none";
}

function addToCartFromDetail(productId, sizeType) {
  if (sizeType !== "none" && !selectedSizeValue) {
    document.getElementById("sizeError").style.display = "block";
    return;
  }
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const sizeLabel = selectedSizeValue ? ` (Tam: ${selectedSizeValue})` : "";
  addToCart(productId);
  selectedSizeValue = null;
  closeProductDetail();
  showToast(`${product.name}${sizeLabel} adicionado ao carrinho`);
}

// ===== FUNÇÕES DO CARRINHO =====
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }

  saveCart();
  updateCartBadge();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartBadge();
  renderCart();
}

function updateQuantity(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  saveCart();
  updateCartBadge();
  renderCart();
}

function saveCart() {
  localStorage.setItem("td-cart", JSON.stringify(cart));
}

function updateCartBadge() {
  const badge = document.getElementById("cartBadge");
  const total = cart.reduce((sum, item) => sum + item.quantity, 0);
  badge.textContent = total;
  badge.style.display = total > 0 ? "flex" : "none";
}

function getCartTotal() {
  return cart.reduce((sum, item) => {
    const product = products.find(p => p.id === item.id);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);
}

function openCart() {
  document.getElementById("cartOverlay").classList.add("open");
  document.getElementById("cartDrawer").classList.add("open");
  renderCart();
}

function closeCart() {
  document.getElementById("cartOverlay").classList.remove("open");
  document.getElementById("cartDrawer").classList.remove("open");
}

function renderCart() {
  const container = document.getElementById("cartItems");
  const footer = document.getElementById("cartFooter");

  if (cart.length === 0) {
    container.innerHTML = '<p class="cart-empty">Seu carrinho está vazio</p>';
    footer.style.display = "none";
    return;
  }

  footer.style.display = "block";
  document.getElementById("cartTotal").textContent = `R$ ${formatPrice(getCartTotal())}`;

  container.innerHTML = cart.map(item => {
    const p = products.find(prod => prod.id === item.id);
    if (!p) return "";
    return `
      <div class="cart-item">
        <img src="${p.image}" alt="${p.name}">
        <div class="cart-item-info">
          <p class="cart-item-name">${p.name}</p>
          <p class="cart-item-price">R$ ${formatPrice(p.price)}</p>
          <div class="cart-item-controls">
            <button class="qty-btn" onclick="updateQuantity(${p.id}, -1)">−</button>
            <span class="cart-item-qty">${item.quantity}</span>
            <button class="qty-btn" onclick="updateQuantity(${p.id}, 1)">+</button>
            <button class="remove-btn" onclick="removeFromCart(${p.id})">🗑️</button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function checkout() {
  if (cart.length === 0) return;

  const lines = cart.map(item => {
    const p = products.find(prod => prod.id === item.id);
    if (!p) return "";
    return `• ${item.quantity}x ${p.name} — R$ ${formatPrice(p.price * item.quantity)}`;
  });

  const total = getCartTotal();
  const userName = currentUser ? `\nCliente: ${currentUser.name} (${currentUser.email})` : "";

  const message = encodeURIComponent(
    `🛍️ *Pedido — Tesoura Dourada*\n\n${lines.join("\n")}\n\n*Total: R$ ${formatPrice(total)}*${userName}`
  );

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");

  cart = [];
  saveCart();
  updateCartBadge();
  closeCart();
}

// ===== AUTENTICAÇÃO =====
function openLogin() {
  isRegisterMode = false;
  updateAuthModal();
  document.getElementById("loginModal").classList.add("open");
}

function closeLogin() {
  document.getElementById("loginModal").classList.remove("open");
  clearForm();
}

function toggleAuthMode() {
  isRegisterMode = !isRegisterMode;
  updateAuthModal();
  clearForm();
}

function updateAuthModal() {
  document.getElementById("modalTitle").textContent = isRegisterMode ? "Criar Conta" : "Entrar";
  document.getElementById("authSubmitBtn").textContent = isRegisterMode ? "Cadastrar" : "Entrar";
  document.getElementById("nameGroup").style.display = isRegisterMode ? "block" : "none";
  document.getElementById("switchText").textContent = isRegisterMode ? "Já tem conta?" : "Não tem conta?";
  document.getElementById("switchBtn").textContent = isRegisterMode ? "Entrar" : "Cadastrar";
}

function submitAuth() {
  const name = document.getElementById("inputName").value.trim();
  const email = document.getElementById("inputEmail").value.trim();
  const password = document.getElementById("inputPassword").value.trim();

  if (isRegisterMode && !name) { showFormError("Preencha todos os campos"); return; }
  if (!email || !password) { showFormError("Preencha todos os campos"); return; }

  const accounts = JSON.parse(localStorage.getItem("td-accounts") || "{}");

  if (isRegisterMode) {
    if (accounts[email]) { showFormError("Este e-mail já está cadastrado"); return; }
    accounts[email] = { name, password };
    localStorage.setItem("td-accounts", JSON.stringify(accounts));
    currentUser = { name, email };
  } else {
    if (!accounts[email] || accounts[email].password !== password) { showFormError("E-mail ou senha incorretos"); return; }
    currentUser = { name: accounts[email].name, email };
  }

  localStorage.setItem("td-user", JSON.stringify(currentUser));
  updateUserArea();
  closeLogin();
  showToast(`Bem-vindo, ${currentUser.name}!`);
}

function logout() {
  currentUser = null;
  localStorage.removeItem("td-user");
  updateUserArea();
  showToast("Você saiu da sua conta");
}

function updateUserArea() {
  const area = document.getElementById("userArea");
  const isAdmin = currentUser && currentUser.email === "tesouragolden@gmail.com";
  if (currentUser) {
    area.innerHTML = `
      <span class="user-greeting desktop-only">Olá, <strong>${currentUser.name}</strong></span>
      ${isAdmin ? '<a href="admin.html" class="admin-link desktop-only" title="Painel Admin">⚙️</a>' : ''}
      <button onclick="logout()" class="desktop-only" title="Sair">🚪</button>
    `;
  } else {
    area.innerHTML = `<button onclick="openLogin()" class="desktop-only">👤 Entrar</button>`;
  }
}

// ===== UTILIDADES =====
function formatPrice(value) {
  return value.toFixed(2).replace(".", ",");
}

function showFormError(message) {
  const el = document.getElementById("formError");
  el.textContent = message;
  el.classList.add("visible");
}

function clearForm() {
  document.getElementById("inputName").value = "";
  document.getElementById("inputEmail").value = "";
  document.getElementById("inputPassword").value = "";
  document.getElementById("formError").classList.remove("visible");
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

function toggleMobileSearch() {
  document.getElementById("mobileSearch").classList.toggle("open");
}
