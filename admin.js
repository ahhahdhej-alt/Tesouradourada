/* =============================================
   TESOURA DOURADA - Admin Panel Script
   ============================================= */

const ADMIN_EMAIL = "tesouragolden@gmail.com";
const ADMIN_PASSWORD = "tesouragold";

const products = [
  { id: 1,  name: "Camiseta Premium Preta",    price: 129.90, category: "Camisetas",   gender: "Masculino", image: "images/camiseta-preta.jpg" },
  { id: 2,  name: "Camisa Social Branca",       price: 249.90, category: "Camisas",     gender: "Masculino", image: "images/camisa-branca.jpg" },
  { id: 3,  name: "Calça Chino Marinho",        price: 289.90, category: "Calças",      gender: "Masculino", image: "images/calca-chino.jpg" },
  { id: 4,  name: "Jaqueta Biker Preta",        price: 899.90, category: "Jaquetas",    gender: "Masculino", image: "images/jaqueta-couro.jpg" },
  { id: 5,  name: "Moletom Comfort Cinza",      price: 199.90, category: "Moletons",    gender: "Masculino", image: "images/moletom-cinza.jpg" },
  { id: 6,  name: "Calça Jeans Escura",         price: 259.90, category: "Calças",      gender: "Masculino", image: "images/calca-jeans.jpg" },
  { id: 7,  name: "Bomber Jacket Verde",        price: 459.90, category: "Jaquetas",    gender: "Masculino", image: "images/bomber-verde.jpg" },
  { id: 8,  name: "Polo Clássica Bege",         price: 179.90, category: "Camisas",     gender: "Masculino", image: "images/polo-bege.jpg" },
  { id: 9,  name: "Suéter V-Neck Borgonha",     price: 329.90, category: "Moletons",    gender: "Masculino", image: "images/sueter-borgonha.jpg" },
  { id: 10, name: "Blazer Slim Marinho",        price: 749.90, category: "Jaquetas",    gender: "Masculino", image: "images/blazer-marinho.jpg" },
  { id: 11, name: "Tênis Minimal Branco",       price: 399.90, category: "Calçados",    gender: "Masculino", image: "images/tenis-branco.jpg" },
  { id: 12, name: "Cinto Couro Marrom",         price: 189.90, category: "Acessórios",  gender: "Masculino", image: "images/cinto-marrom.jpg" },
  { id: 13, name: "Calça Social Chumbo",        price: 349.90, category: "Calças",      gender: "Masculino", image: "images/calca-social.jpg" },
  { id: 14, name: "Jogger Tech Preto",          price: 219.90, category: "Calças",      gender: "Masculino", image: "images/jogger-preto.jpg" },
  { id: 15, name: "Camisa Linho Azul",          price: 279.90, category: "Camisas",     gender: "Masculino", image: "images/camisa-linho.jpg" },
  { id: 16, name: "Bermuda Cargo Verde",        price: 199.90, category: "Bermudas",    gender: "Masculino", image: "images/bermuda-cargo.jpg" },
  { id: 17, name: "Camiseta Listrada Navy",     price: 149.90, category: "Camisetas",   gender: "Masculino", image: "images/camiseta-listrada.jpg" },
  { id: 18, name: "Sobretudo Clássico Preto",   price: 1299.90, category: "Jaquetas",   gender: "Masculino", image: "images/sobretudo-preto.jpg" },
  { id: 19, name: "Carteira Couro Preta",       price: 159.90, category: "Acessórios",  gender: "Masculino", image: "images/carteira-preta.jpg" },
  { id: 20, name: "Óculos Aviador Dourado",     price: 349.90, category: "Acessórios",  gender: "Masculino", image: "images/oculos-aviador.jpg" },
  { id: 21, name: "Vestido Midi Vermelho",      price: 389.90, category: "Vestidos",    gender: "Feminino",  image: "images/vestido-vermelho.jpg" },
  { id: 22, name: "Blusa Seda Branca",          price: 279.90, category: "Blusas",      gender: "Feminino",  image: "images/blusa-seda-branca.jpg" },
  { id: 23, name: "Calça Jeans Skinny",         price: 269.90, category: "Calças",      gender: "Feminino",  image: "images/calca-jeans-fem.jpg" },
  { id: 24, name: "Trench Coat Bege",           price: 799.90, category: "Casacos",     gender: "Feminino",  image: "images/trench-coat-bege.jpg" },
  { id: 25, name: "Saia Couro Preta",           price: 329.90, category: "Saias",       gender: "Feminino",  image: "images/saia-couro-preta.jpg" },
  { id: 26, name: "Scarpin Nude",               price: 359.90, category: "Calçados",    gender: "Feminino",  image: "images/scarpin-nude.jpg" },
  { id: 27, name: "Cropped Tricot Rosa",        price: 189.90, category: "Blusas",      gender: "Feminino",  image: "images/cropped-rosa.jpg" },
  { id: 28, name: "Pantalona Floral",           price: 299.90, category: "Calças",      gender: "Feminino",  image: "images/pantalona-floral.jpg" },
  { id: 29, name: "Bolsa Estruturada Preta",    price: 499.90, category: "Acessórios",  gender: "Feminino",  image: "images/bolsa-preta.jpg" },
  { id: 30, name: "Blazer Alfaiataria Marinho", price: 599.90, category: "Casacos",     gender: "Feminino",  image: "images/blazer-fem-marinho.jpg" },
];

// Generate mock data
function generateMockSales() {
  const names = ["Ana Silva", "Carlos Souza", "Maria Lima", "João Santos", "Fernanda Oliveira", "Pedro Costa", "Juliana Rocha", "Bruno Almeida", "Camila Ferreira", "Lucas Mendes"];
  const statuses = ["Concluído", "Concluído", "Concluído", "Pendente", "Enviado", "Concluído", "Enviado"];
  const sales = [];
  for (let i = 0; i < 50; i++) {
    const product = products[Math.floor(Math.random() * products.length)];
    const qty = Math.floor(Math.random() * 3) + 1;
    const daysAgo = Math.floor(Math.random() * 90);
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    sales.push({
      id: 1000 + i,
      product,
      qty,
      total: product.price * qty,
      client: names[Math.floor(Math.random() * names.length)],
      status: statuses[Math.floor(Math.random() * statuses.length)],
      date
    });
  }
  return sales.sort((a, b) => b.date - a.date);
}

function generateMockStock() {
  return products.map(p => ({
    ...p,
    stock: Math.floor(Math.random() * 60),
    maxStock: 60
  }));
}

const mockSales = generateMockSales();
const mockStock = generateMockStock();

// ===== LOGIN =====
function adminLogin() {
  const email = document.getElementById("adminEmail").value.trim();
  const password = document.getElementById("adminPassword").value.trim();
  const error = document.getElementById("loginError");

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    sessionStorage.setItem("td-admin", "true");
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("adminPanel").style.display = "flex";
    initDashboard();
  } else {
    error.textContent = "E-mail ou senha incorretos";
  }
}

function adminLogout() {
  sessionStorage.removeItem("td-admin");
  location.reload();
}

// Check session
if (sessionStorage.getItem("td-admin") === "true") {
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("adminPanel").style.display = "flex";
    initDashboard();
  });
}

// ===== NAVIGATION =====
function showSection(name, btn) {
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach(b => b.classList.remove("active"));
  document.getElementById("sec-" + name).classList.add("active");
  if (btn) btn.classList.add("active");

  if (name === "sales") renderSales();
  if (name === "inventory") renderInventory();

  // Close mobile sidebar
  document.querySelector(".sidebar").classList.remove("open");
  document.querySelector(".sidebar-overlay").classList.remove("open");
}

function toggleSidebar() {
  document.querySelector(".sidebar").classList.toggle("open");
  document.querySelector(".sidebar-overlay").classList.toggle("open");
}

// ===== DASHBOARD =====
function initDashboard() {
  const totalRevenue = mockSales.reduce((s, v) => s + v.total, 0);
  const totalOrders = mockSales.length;
  const uniqueClients = [...new Set(mockSales.map(s => s.client))].length;

  document.getElementById("statRevenue").textContent = "R$ " + formatPrice(totalRevenue);
  document.getElementById("statOrders").textContent = totalOrders;
  document.getElementById("statClients").textContent = uniqueClients;
  document.getElementById("statProducts").textContent = products.length;

  renderBarChart();
  renderRecentOrders();
}

function renderBarChart() {
  const days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  const dailyTotals = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dayStr = d.toDateString();
    const total = mockSales
      .filter(s => s.date.toDateString() === dayStr)
      .reduce((sum, s) => sum + s.total, 0);
    dailyTotals.push({ label: days[d.getDay()], total });
  }

  const maxVal = Math.max(...dailyTotals.map(d => d.total), 1);
  const chart = document.getElementById("barChart");
  chart.innerHTML = dailyTotals.map(d => {
    const h = Math.max((d.total / maxVal) * 160, 4);
    return `<div class="bar-wrap">
      <span class="bar-value">R$${Math.round(d.total)}</span>
      <div class="bar" style="height:${h}px"></div>
      <span class="bar-label">${d.label}</span>
    </div>`;
  }).join("");
}

function renderRecentOrders() {
  const tbody = document.getElementById("recentOrders");
  tbody.innerHTML = mockSales.slice(0, 10).map(s => {
    const statusClass = s.status === "Concluído" ? "badge-success" : s.status === "Enviado" ? "badge-info" : "badge-warning";
    return `<tr>
      <td>#${s.id}</td>
      <td>${s.client}</td>
      <td>R$ ${formatPrice(s.total)}</td>
      <td><span class="badge ${statusClass}">${s.status}</span></td>
      <td>${formatDate(s.date)}</td>
    </tr>`;
  }).join("");
}

// ===== SALES =====
function renderSales() {
  const period = parseInt(document.getElementById("salesPeriod").value);
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - period);

  const filtered = mockSales.filter(s => s.date >= cutoff);
  const totalSales = filtered.reduce((s, v) => s + v.total, 0);
  const avgTicket = filtered.length ? totalSales / filtered.length : 0;

  // Most sold product
  const counts = {};
  filtered.forEach(s => {
    counts[s.product.name] = (counts[s.product.name] || 0) + s.qty;
  });
  const topProduct = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];

  document.getElementById("salesTotal").textContent = "R$ " + formatPrice(totalSales);
  document.getElementById("salesAvg").textContent = "R$ " + formatPrice(avgTicket);
  document.getElementById("salesTop").textContent = topProduct ? topProduct[0] : "—";

  const tbody = document.getElementById("salesTable");
  tbody.innerHTML = filtered.map((s, i) => `<tr>
    <td>${i + 1}</td>
    <td>${s.product.name}</td>
    <td>${s.qty}</td>
    <td>R$ ${formatPrice(s.total)}</td>
    <td>${s.client}</td>
    <td>${formatDate(s.date)}</td>
  </tr>`).join("");
}

// ===== INVENTORY =====
function renderInventory() {
  const search = document.getElementById("inventorySearch").value.toLowerCase();
  const filter = document.getElementById("inventoryFilter").value;

  let items = mockStock.filter(p => p.name.toLowerCase().includes(search));

  if (filter === "low") items = items.filter(p => p.stock > 0 && p.stock <= 10);
  if (filter === "out") items = items.filter(p => p.stock === 0);

  const tbody = document.getElementById("inventoryTable");
  tbody.innerHTML = items.map(p => {
    const pct = (p.stock / p.maxStock) * 100;
    const color = p.stock === 0 ? "#e74c3c" : p.stock <= 10 ? "#f39c12" : "#2ecc71";
    const statusText = p.stock === 0 ? "Sem estoque" : p.stock <= 10 ? "Baixo" : "Normal";
    const badgeClass = p.stock === 0 ? "badge-danger" : p.stock <= 10 ? "badge-warning" : "badge-success";
    return `<tr>
      <td><img class="inv-img" src="${p.image}" alt="${p.name}"></td>
      <td>${p.name}</td>
      <td>${p.category}</td>
      <td>${p.gender}</td>
      <td>R$ ${formatPrice(p.price)}</td>
      <td>${p.stock} <div class="stock-bar"><div class="stock-fill" style="width:${pct}%;background:${color}"></div></div></td>
      <td><span class="badge ${badgeClass}">${statusText}</span></td>
    </tr>`;
  }).join("");
}

// ===== UTILS =====
function formatPrice(v) { return v.toFixed(2).replace(".", ","); }
function formatDate(d) { return d.toLocaleDateString("pt-BR"); }
