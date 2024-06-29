// Sample Product Data (replace with your actual data)
const products = [
    {
        category: "cozinha",
        title: "Sanduicheira",
        image: "images/tostex.jpg",
        description: "Grill Asteria Compact Mallory Grill multifunção, Luzes indicadoras de funcionamento, Alça com toque-frio. ",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20sanduicheira."
      },
      {
        category: "cozinha",
        title: "Maquininha de espresso",
        image: "images/cafeteira.jpg",
        description: "Cafeteira Espresso Passione Preta Automática - TRES 3 Corações.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20cafeteira."
      },
      {
        category: "cozinha",
        title: "Caneca Stanley",
        image: "images/stanley.jpg",
        description: "Stanley Caneca de cerveja clássica com abridor de garrafa, caneca e copo isolado de 680 ml, Hammertone Green.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20stanley."
      },
      {
        category: "moveis",
        title: "Cadeiras (4 un)",
        image: "images/cadeira.jpg",
        description: "Quatro cadeiras Madri em madeira ded demolição, uma tem um conserto pequeno na parte de baixo do assento, imperceptível. :)",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20cadeiras."
      },
      {
        category: "moveis",
        title: "Bancos (4 un)",
        image: "images/banco.jpg",
        description: "Conjunto 4 Banquetas Baixas Piratini 160 em Madeira Maciça Mel.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20bancos."
      },
      {
        category: "moveis",
        title: "Banco ripado",
        image: "images/bancoripado.jpg",
        description: "Banco Ripado em Madeira de Pinus. O nosso está mais escuro por ter sido impermeabilizado.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20banco%20ripado."
      },
      {
        category: "moveis",
        title: "Mesa",
        image: "images/mesa.jpg",
        description: "Mesa De Jantar Square Redonda Branco com várias manchinhas no tampo, vale pintar/envelopar.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20mesa."
      },
      {
        category: "moveis",
        title: "Rack preto simples",
        image: "images/rackpreto.jpg",
        description: "Rack Retrô Goslar Fosco Preto 162 cm. A estrutura é bem simples e está com alguns arranhões e fitas laterais soltando.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20rack%20preto."
      },
      {
        category: "moveis",
        title: "Buffet branco simples",
        image: "images/aparadorbranco.jpg",
        description: "Buffet Essen Branco 123 cm. A estrutura é bem simples e está com algumas marcas. ",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20buffet%20branco."
      },
      {
        category: "eletro",
        title: "Roku",
        image: "images/roku.jpg",
        description: "Roku Express: Dispositivo de streaming para TV HD/Full HD compatível com Alexa, Siri e Google. Inclui Cabo HDMI Premium.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Roku."
      },
      {
        category: "eletro",
        title: "Monitor 24'' 144hz",
        image: "images/monitor.jpg",
        description: "Monitor LG UltraGear 24GN600-24'' IPS Full HD, 144Hz, 1ms (GtG), AMD FreeSync, Ajuste de Inclinação.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20monitor."
      },
      {
        category: "eletro",
        title: "Echo Dot 5ª geração",
        image: "images/alexa5.jpg",
        description: "Echo Dot 5ª geração | O Echo Dot com o melhor som já lançado | Azul.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Alexa%20azul."
      },
      {
        category: "eletro",
        title: "Echo Dot 3ª geração",
        image: "images/alexa3.jpg",
        description: "Echo Dot 3ª geraçãoSmart Speaker Amazon | Cinza.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Alexa%20cinza."
      },
      {
        category: "eletro",
        title: "Aspirador De Pó Robô",
        image: "images/robo.jpg",
        description: "Aspirador De Pó Robô Multilaser HO041 - Bivolt",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Aspirador%20robô."
      },
      {
        category: "diversos",
        title: "Nissan Kicks 2018",
        image: "images/carro.jpg",
        description: "Nissan Kicks 1.6 SV CVT (Flex) 2018. Pack plus (banco de couro e seis airbags frontais e laterais). ",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20carro."
      },
      {
        category: "diversos",
        title: "Violão",
        image: "images/violao.jpg",
        description: "Violão Tagima Woodstock Acoustic TW-27 Grand Auditorium. Algumas marquinhas de oxidação. ",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20violão."
      },
      {
        category: "diversos",
        title: "Colchão Emma",
        image: "images/colchao.jpg",
        description: "Colchão Queen Emma Duo Comfort - 10 anos de garantia, conforto ortopédico dupla face -158x198cm.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20colchão."
      },
      {
        category: "diversos",
        title: "Lixeiras 3, 5 e 30 litros",
        image: "images/lixeiras.jpg",
        description: "Lixeiras em Inox Round Com Cesto Removível - Members Mark. Algumas marquinhas de oxidação. ",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20lixeiras."
      },
      {
        category: "diversos",
        title: "Painel Mural Magnetico",
        image: "images/painelmetal.jpg",
        description: "Painel de Metal para fotos/recados Magnetico 60 X 90. Algumas marcas de uso, mas bem conservado.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20painel."
      },
    // ... more products
  ];
  
  // Function to populate products in the HTML
  function populateProducts(category) {
    const productGrid = document.querySelector(`#${category} .product-grid`);
    productGrid.innerHTML = ''; // Clear existing products
  
    products.filter(p => p.category === category).forEach(product => {
      const productItem = document.createElement('div');
      productItem.classList.add('product-item');
      productItem.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
      `;
      productItem.addEventListener('click', () => {
        openPopup(product);
      });
      productGrid.appendChild(productItem);
    });
  }
  
  // Function to open the product popup
  function openPopup(product) {
    const popup = document.getElementById('productPopup');
    document.getElementById('popupImage').src = product.image;
    document.getElementById('popupTitle').textContent = product.title;
    document.getElementById('popupDescription').textContent = product.description;
    document.getElementById('popupWhatsapp').href = product.whatsappLink;
    popup.style.display = 'block'; // Show popup
  }
  
  // Function to close the popup
  function closePopup() {
    const popup = document.getElementById('productPopup');
    popup.style.display = 'none'; // Hide popup
  }
  
  // Populate products on page load
  populateProducts('cozinha');
  populateProducts('moveis');
  populateProducts('eletro');
  populateProducts('diversos');
  populateProducts('doacoes');