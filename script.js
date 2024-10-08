const bannerImage = document.getElementById('bannerImage');
const galleryThumbnails = document.getElementById('galleryThumbnails');

const products = [
      {
        category: "eletro",
        title: "GTX 1660 Super",
        image: "images/video.jpg",
        description: "Placa de Vídeo Galax NVIDIA GeForce GTX 1660 Super, Dual, 1-Click OC, 6GB, GDDR6, 192Bit (um ano de uso).",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20GPU.",
        price: "JÁ FOI",
        available: false
      },
      {
        category: "eletro",
        title: "Placa Mãe Biostar",
        image: "images/placa.jpg",
        description: "Placa Mãe Biostar B560MX-E PRO, Chipset B560, Intel LGA 1200, mATX, DDR4 (dois anos de uso).",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20MB.",
        price: "JÁ FOI",
        available: false
      },
      {
        category: "eletro",
        title: "Intel Core I5",
        image: "images/intel.jpg",
        description: "Processador Intel Core I5-10400F (dois anos de uso).",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20CPU",
        price: "JÁ FOI",
        available: false
      },
      {
        category: "eletro",
        title: "Memória 8GB",
        image: "images/crucial.jpg",
        description: "Memória DDR4 Crucial 8GB 2666MHZ (dois anos de uso).",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Crucial.",
        price: "R$ 0",
        available: true
      },
      {
        category: "eletro",
        title: "Memória 8GB",
        image: "images/corsair.jpg",
        description: "Memoria Corsair Vengeance LPX 8GB (1x8) DDR4 2666MHz Preta (três anos de uso).",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Corsair.",
        price: "R$ 0",
        available: true
      },
      {
        category: "eletro",
        title: "Fonte 600w",
        image: "images/fonte.jpg",
        description: "Fonte Cougar VTE 600 80 Plus Bronze (três anos de uso).",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20fonte.",
        price: "R$ 0",
        available: true
      },
      {
        category: "eletro",
        title: "Gabinete",
        image: "images/gabinete.jpg",
        description: "Gabinete xingling cansado, mas adesivado pra proteger da maresia e com 4 ventoinhas (2 DeepCool) - (dois anos de uso).",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20gabinete.",
        price: "R$ 0",
        available: true
      },
      {
        category: "ultimas",
        title: "Maquininha de espresso",
        image: "images/cafeteira.jpg",
        description: "Cafeteira Espresso Passione Preta Automática - TRES 3 Corações.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20cafeteira.",
        price: "R$ 0",
        available: true
      },
      {
        category: "ultimas",
        title: "Moedor de café",
        image: "images/moedor.jpg",
        description: "Moedor de Café Bodum (Dinamarca) 11160-01EURO-3 Preto 220v.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20moedor.",
        price: "R$ 0",
        available: true
      },
      {
        category: "ultimas",
        title: "Prensa francesa",
        image: "images/prensa.jpg",
        description: "Prensa francesa 2 xícaras para café Britt (Costa Rica).",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20prensa.",
        price: "JÁ FOI",
        available: false
      },
      {
        category: "cozinha",
        title: "Garrafa Térmica",
        image: "images/termicas.jpg",
        description: "Garrafa Térmica Invicta Vogue 750ml Verde",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20térmicas.",
        price: "R$ 0",
        available: true
      },
      {
        category: "ultimas",
        title: "Vaporeira (steamer)",
        image: "images/steamer.jpg",
        description: "Vaporeira Fontignac (steamer) 24 Cm - mais uma dos selinhos do pão de açúcar.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20refratário.",
        price: "JÁ FOI",
        available: false
      },
      {
        category: "cozinha",
        title: "Boleira Pequena",
        image: "images/boleirap.jpg",
        description: "Boleira Pequena Com Pé Cristal Bolinha 20cm Wolff Pearl.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20boleira%20pequena.",
        price: "R$ 0",
        available: true
      },
      {
        category: "cozinha",
        title: "Boleira Grande",
        image: "images/boleirag.jpg",
        description: "Boleira de vidro para bolo com pé.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20boleira%20grande.",
        price: "R$ 0",
        available: true
      },
      {
        category: "ultimas",
        title: "Lâmpada RGB Inteligente",
        image: "images/lampada.jpg",
        description: "Lâmpada Inteligente (2 unidadeds) I2go Wi-fi 10w Rgb Alexa E Google Cor da luz RGB e Branco.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20lâmpada.",
        price: "R$ 0",
        available: true
      },
      {
        category: "ultimas",
        title: "Mini-chapinha",
        image: "images/chapinha.jpg",
        description: "Mini Chapinha De Bolsa Portátil De Cabelo Bivolt Prancha.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20chapinha.",
        price: "R$ 0",
        available: true
      },
      {
        category: "diversos",
        title: "Lixeiras 3, 5 e 30 litros",
        image: "images/lixeiras.jpg",
        description: "Lixeiras em Inox Round Com Cesto Removível - Members Mark. Algumas marquinhas de oxidação. ",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20lixeiras.",
        price: "R$ 0",
        available: true
      },
      {
        category: "diversos",
        title: "Mop",
        image: "images/mop.jpg",
        description: "Esfregão Mop Twister Bt 1902 Noviça 6 Litros - Bettanin - Cinza / Verde.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20mop.",
        price: "JÁ FOI",
        available: false
      },
      {
        category: "diversos",
        title: "Comedouro Automático",
        image: "images/comedouro.jpg",
        description: "Comedouro Automático Smart para cães e gatos Kopek Kvs-200-7 Lt.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20comedouro%20automático.",
        price: "JÁ FOI",
        available: false
      },
      {
        category: "cozinha",
        title: "Refratário Redondo",
        image: "images/fontignac.jpg",
        description: "Refratário Redondo Fontignac - aquele mesmo dos selinhos do pão de açúcar.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20refratário.",
        price: "R$ 0",
        available: true
      },
      {
        category: "cozinha",
        title: "Cafeteira italiana",
        image: "images/cafeteiraitaliana.jpg",
        description: "Cafeteira Italiana em Inox 4 xícaras (200ml).",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20cafeteira%20italiana.",
        price: "R$ 0",
        available: true
      },
      {
        category: "cozinha",
        title: "Forma com Fundo Removível",
        image: "images/formaremovivel.jpg",
        description: "Forma Assadeira Redonda Com Fundo Removível - é essa, mas azul claro.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20forma%20de%20fundo%20removível.",
        price: "R$ 0",
        available: true
      },
      {
        category: "eletro",
        title: "Controle Universal",
        image: "images/controleuniversal.jpg",
        description: "Controle Universal Inteligente Infravermelho I2GO Home - Compatível com Alexa.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20controle.",
        price: "R$ 0",
        available: true
      },
      {
        category: "banner",
        title: "Nissan Kicks 2018",
        image: "images/carro0.jpg",
        description: "Nissan Kicks 1.6 SV CVT (Flex) 2018. Pack plus (banco de couro e seis airbags frontais e laterais). ",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20carro.",
        price: "R$ 0",
        available: true
      },
      {
        category: "diversos",
        title: "Ferro de passar",
        image: "images/ferro.jpg",
        description: "Ferro de Passar a Seco Black + Decker VFA Eco - Preto - Ferro de Passar a Seco.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20ferro.",
        price: "R$ 0",
        available: true
      },
      {
        category: "doacoes",
        title: "Copos simples",
        image: "images/copos.jpg",
        description: "Jogo Copos Lights Long Drink 410ml 5 (é, também quebrou um) Peças Nadir.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20copos.",
        price: "R$ 0",
        available: true
      },
      {
        category: "doacoes",
        title: "Um monte de tapaué",
        image: "images/tapaue.jpg",
        description: "Tem desse da foto, tem grande, tem diferente, tem de outras marcas, cores, etc...",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20tapaué.",
        price: "JÁ FOI",
        available: false
      },
      {
        category: "doacoes",
        title: "Pratos brancos",
        image: "images/pratosbrancos.jpg",
        description: "Aqueles do cotidiano mesmo, tem 2 fundos, 4 de sobremesa e 4 grandes (ainda tem 1 maior ainda, diferente de todos, que compramos errado).",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20pratos%20brancos.",
        price: "JÁ FOI",
        available: false
      },
      {
        category: "doacoes",
        title: "Marinex retangular e redondo",
        image: "images/marinex.jpg",
        description: "Duas assadeira retangulares 2,2L Média Marinex e um redondo, creio que 2,4L.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20marinex.",
        price: "JÁ FOI",
        available: false
      },
      {
        category: "doacoes",
        title: "Conjunto de facas",
        image: "images/facasverdes.jpg",
        description: "Conjunto de facas 6 peças Tramontina - a tesoura tá bem ruim, mas o resto tá ok.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20conjunto%20de%20facas.",
        price: "R$ 0",
        available: true
      },
      {
        category: "cozinha",
        title: "Leiteira",
        image: "images/leiteira.jpg",
        description: "Leiteira antiaderente preta simples 2,4l.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20leiteira.",
        price: "R$ 0",
        available: true
      },
      {
        category: "cozinha",
        title: "Ramequins",
        image: "images/ramekin.jpg",
        description: "Conjunto de 4 ramequins de porcelana com texturas.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20ramequins.",
        price: "JÁ FOI",
        available: false
      },
      {
        category: "cozinha",
        title: "Petisqueira",
        image: "images/petisqueira.jpg",
        description: "Petisqueira de madeira quadrada com 4 potes de porcelana.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20petisqueira.",
        price: "JÁ FOI",
        available: false
      },
      {
        category: "cozinha",
        title: "Talheres",
        image: "images/talheres.jpg",
        description: "Jogo Talher Madrid Aco Inox 20 peças da saudosa Etna.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20talheres.",
        price: "JÁ FOI",
        available: false
      },
      {
        category: "cozinha",
        title: "Conjunto de sobremesa",
        image: "images/sobremesa.jpg",
        description: "Conjunto de sobremesa de vidro floral com 7 peças que lembra casa de vó.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20conjunto%20de%20sobremesa.",
        price: "JÁ FOI",
        available: false
      },
      {
        category: "cozinha",
        title: "Sanduicheira",
        image: "images/tostex.jpg",
        description: "Grill Asteria Compact Mallory Grill multifunção, Luzes indicadoras de funcionamento, Alça com toque-frio. ",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20sanduicheira.",
        price: "R$ 0",
        available: true
      },
      {
        category: "cozinha",
        title: "Caneca Stanley",
        image: "images/stanley.jpg",
        description: "Stanley Caneca de cerveja clássica com abridor de garrafa, caneca e copo isolado de 680 ml, Hammertone Green.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20stanley.",
        price: "R$ 0",
        available: true
      },
      {
        category: "cozinha",
        title: "Garrafas Térmicas",
        image: "images/garrafas.jpg",
        description: "Garrafas Térmicas de Inox Takeya 24 ThermoFlask. Algumas marquinhas de uso, mas boas. ",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20garrafas.",
        price: "R$ 0",
        available: true
      },
      {
        category: "cozinha",
        title: "Fogão",
        image: "images/fogao.jpg",
        description: "Fogão 4 Bocas Electrolux 56SB - Acendimento Automático Branco.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20fogão.",
        price: "R$ 0",
        available: true
      },
      {
        category: "cozinha",
        title: "Fritadeira Elétrica Cadence",
        image: "images/airfry.jpg",
        description: "Fritadeira Elétrica sem Óleo Cadence 2.3L Perfect Fryer FRT531 com Timer Preta. Tá castigada, um botão faltando que dá pra comprar na web.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20airfryer.",
        price: "R$ 0",
        available: true
      },
      {
        category: "cozinha",
        title: "Mixer com utensílios",
        image: "images/mixer.jpg",
        description: "Mixer com Copo 400W 220V RI1366/04 Preto PHILIPS WALITA.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20mixer.",
        price: "R$ 0",
        available: true
      },
      {
        category: "cozinha",
        title: "Batedeira Planetária",
        image: "images/batedeira.jpg",
        description: "Batedeira Planetária Philco PHP500P Turbo 700W. ",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20batedeira.",
        price: "R$ 0",
        available: true
      },
      {
        category: "cozinha",
        title: "Panela de Pressão Elétrica",
        image: "images/panelaeletrica.jpg",
        description: "Panela de Pressão Elétrica 6L EOS Multicooker Digital Titanium EPP60DT 220V. ",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20panela%20elétrica.",
        price: "R$ 0",
        available: true
      },
      {
        category: "cozinha",
        title: "Filtro",
        image: "images/gelagua.jpg",
        description: "Purificador de Água Electrolux PE10X Bivolt Prata com Painel Easy Touch e 3 Temperaturas. Não está gelando",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20filtro.",
        price: "R$ 0",
        available: true
      },
      {
        category: "cozinha",
        title: "Taça pras visitas",
        image: "images/tacaazul.jpg",
        description: "Jogo de Taças de Vidro 330ml 11 Peças (uma quebrou, mas ainda serve um time) Haus - Bico de Jaca Empire. ",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20taças%20azuis.",
        price: "R$ 0",
        available: true
      },
      {
        category: "cozinha",
        title: "Taças de cristal",
        image: "images/tacacristal.jpg",
        description: "Taça Bohemia Roberta - Vinho Tinto 350ml - Jg 06pcs. Na caixa, nunca usamos.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20taças%20Bohemia.",
        price: "R$ 0",
        available: true
      },
      {
        category: "cozinha",
        title: "Chaleira elétrica",
        image: "images/chaleira.jpg",
        description: "Chaleira Elétrica Britânia 1l 220v Inox (com pontos de ferrugem).",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20chaleira.",
        price: "R$ 0",
        available: true
      },
      {
        category: "cozinha",
        title: "Panelas",
        image: "images/panelas.jpg",
        description: "Kirkland Signature (Costco) Hard Anodized Cookware.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20panelas.",
        price: "R$ 0",
        available: true
      },
      {
        category: "cozinha",
        title: "Aparelho de jantar",
        image: "images/pratoscorona.jpg",
        description: "Aparelho de jantar de cerâmica Elisa Corona 20 peças (originalmente, pq quebramos 2 fundos e 1 grande). ",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20pratos%20bonitinhos.",
        price: "JÁ FOI",
        available: false
      },
      {
        category: "cozinha",
        title: "Forma de pão",
        image: "images/formas.jpg",
        description: "Duas formas de pão antiaderente Vermont 26cm Grafite - Tramontina.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20forma%20de%20pão.",
        price: "JÁ FOI",
        available: false
      },
      {
        category: "cozinha",
        title: "Faca lacrada",
        image: "images/facaathus.jpg",
        description: "Faca para carne 8 polegadas Tramontina Athus. Nunca abrimos.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20faca%20Tramontina.",
        price: "JÁ FOI",
        available: false
      },
      {
        category: "cozinha",
        title: "Porta-mantimentos",
        image: "images/potesvidro.jpg",
        description: "Conjunto 3 Porta-mantimentos Redondo de Vidro com Tampa de Aço 1,7L/1,3L/880ml - Wolff.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20porta-mantimentos.",
        price: "JÁ FOI",
        available: false
      },
      {
        category: "moveis",
        title: "Sofá - 2,20m",
        image: "images/sofa.jpg",
        description: "Sofá três (ou quatro) lugares em estrutura metálica. Cansado e tá sujinho, mas estrutura muito boa e depois de uma lavadinha fica mais bonito.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20sofá.",
        price: "JÁ FOI",
        available: false
      },
      {
        category: "moveis",
        title: "Cadeiras (4 un)",
        image: "images/cadeira.jpg",
        description: "Quatro cadeiras Madri em madeira ded demolição, uma tem um conserto pequeno na parte de baixo do assento, imperceptível. :)",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20cadeiras.",
        price: "R$ 0",
        available: true
      },
      {
        category: "moveis",
        title: "Bancos (4 un)",
        image: "images/banco.jpg",
        description: "Conjunto 4 Banquetas Baixas Piratini 160 em Madeira Maciça Mel.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20bancos.",
        price: "R$ 0",
        available: true
      },
      {
        category: "moveis",
        title: "Banco ripado",
        image: "images/bancoripado.jpg",
        description: "Banco Ripado em Madeira de Pinus. O nosso está mais escuro por ter sido impermeabilizado.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20banco%20ripado.",
        price: "R$ 0",
        available: true
      },
      {
        category: "moveis",
        title: "Mesa",
        image: "images/mesa.jpg",
        description: "Mesa De Jantar Square Redonda Branco com várias manchinhas no tampo, vale pintar/envelopar.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20mesa.",
        price: "JÁ FOI",
        available: false
      },
      {
        category: "moveis",
        title: "Rack preto simples",
        image: "images/rackpreto.jpg",
        description: "Rack Retrô Goslar Fosco Preto 162 cm. A estrutura é bem simples e está com alguns arranhões e fitas laterais soltando.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20rack%20preto.",
        price: "JÁ FOI",
        available: false
      },
      {
        category: "moveis",
        title: "Buffet branco simples",
        image: "images/aparadorbranco.jpg",
        description: "Buffet Essen Branco 123 cm. A estrutura é bem simples e está com algumas marcas. ",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20buffet%20branco.",
        price: "JÁ FOI",
        available: false
      },
      {
        category: "eletro",
        title: "Roku",
        image: "images/roku.jpg",
        description: "Roku Express: Dispositivo de streaming para TV HD/Full HD compatível com Alexa, Siri e Google. Inclui Cabo HDMI Premium.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Roku.",
        price: "R$ 0",
        available: true
      },
      {
        category: "eletro",
        title: "Monitor 24'' 144hz",
        image: "images/monitor.jpg",
        description: "Monitor LG UltraGear 24GN600-24'' IPS Full HD, 144Hz, 1ms (GtG), AMD FreeSync, Ajuste de Inclinação.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20monitor.",
        price: "R$ 0",
        available: true
      },
      {
        category: "eletro",
        title: "Aspirador de Pó Robô",
        image: "images/robo.jpg",
        description: "Aspirador De Pó Robô Multilaser HO041 - Bivolt.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Aspirador%20robô.",
        price: "R$ 0",
        available: true
      },
      {
        category: "eletro",
        title: "Echo Dot 5ª geração",
        image: "images/alexa5.jpg",
        description: "Echo Dot 5ª geração | O Echo Dot com o melhor som já lançado | Azul.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Alexa%20azul.",
        price: "R$ 0",
        available: true
      },
      {
        category: "eletro",
        title: "Echo Dot 3ª geração",
        image: "images/alexa3.jpg",
        description: "Echo Dot 3ª geraçãoSmart Speaker Amazon | Cinza.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Alexa%20cinza.",
        price: "R$ 0",
        available: true
      },
      {
        category: "eletro",
        title: "Atari",
        image: "images/atari.jpg",
        description: "Atari Flashback com controles sem fio (o fio tá com uma emenda, mas funcionando, padrão VGA).",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Atari.",
        price: "R$ 0",
        available: true
      },
      {
        category: "eletro",
        title: "TV 32''",
        image: "images/tvlg.jpg",
        description: "Smart TV LED 32'' HD LG 32LQ621CBSB. Wi-Fi não tá funcionando.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20TV%2032.",
        price: "R$ 0",
        available: true
      },
      {
        category: "eletro",
        title: "TV 40''",
        image: "images/tv40.jpg",
        description: "TV Led Panasonic 40'' Smart Full HD 2 HDMI 1 USB 40DS600B. Não tão smart assim, antiga e seria bom uma revisão/limpeza interna.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20TV%2040.",
        price: "R$ 0",
        available: true
      },
      {
        category: "eletro",
        title: "Aspirador de Pó",
        image: "images/aspirador.jpg",
        description: "Aspirador De Pó e Água Electrolux Acqua Power AQP20.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Aspirador.",
        price: "R$ 0",
        available: true
      },
      {
        category: "eletro",
        title: "Lava e Seca",
        image: "images/lavaeseca.jpg",
        description: "Lava e Seca LG 8,5KG Direct Drive. A base está bem oxidada.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Lava%20e%20Seca.",
        price: "R$ 0",
        available: true
      },
      {
        category: "diversos",
        title: "Colchão Emma",
        image: "images/colchao.jpg",
        description: "Colchão Queen Emma Duo Comfort - 10 anos de garantia, conforto ortopédico dupla face - 158x198cm. Temos uma base box Ortobom antiguinha que pode ir de brinde.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20colchão.",
        price: "R$ 0",
        available: true
      },
      {
        category: "diversos",
        title: "Violão",
        image: "images/violao.jpg",
        description: "Violão Tagima Woodstock Acoustic TW-27 Grand Auditorium. Algumas marquinhas de oxidação. ",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20violão.",
        price: "R$ 0",
        available: true
      },
      {
        category: "diversos",
        title: "Painel Mural Magnetico",
        image: "images/painelmetal.jpg",
        description: "Painel de Metal para fotos/recados Magnetico 60 X 90. Algumas marcas de uso, mas bem conservado.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20painel.",
        price: "R$ 0",
        available: true
      },
      {
        category: "diversos",
        title: "Tábua de passar",
        image: "images/tabua.jpg",
        description: "Tábua de passar roupa grande Members Mark. Alguns pontos de oxidação.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20tábua.",
        price: "R$ 0",
        available: true
      },
      {
        category: "diversos",
        title: "Molduras",
        image: "images/molduras.jpg",
        description: "Molduras da Tok&Stok de diversas cores e tamanhos: A4, A3, carta, quadrado...",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20molduras.",
        price: "R$ 0",
        available: true
      },
      {
        category: "doacoes",
        title: "Liquidificador",
        image: "images/liquidificador.jpg",
        description: "Liquidificador Arno Faciclic Top Tampa Mod. Ln32 Preto. Cansado e o copinho tá quebrado, mas tem na shopee. ",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20liquidificador.",
        price: "R$ 0",
        available: true
      },
      {
        category: "doacoes",
        title: "Jogo de Tigelas",
        image: "images/tigelas.jpg",
        description: "Jogo de Tigelas de Vidro (3 Peças).",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20tigelas.",
        price: "R$ 0",
        available: true
      },
      {
        category: "doacoes",
        title: "Organizadores Metálicos",
        image: "images/metais.jpg",
        description: "Organizadores metálicos para armários.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20organizadores.",
        price: "R$ 0",
        available: true
      },
      {
        category: "doacoes",
        title: "Porta-rolos cromado",
        image: "images/portarolo.jpg",
        description: "Suporte para talheres e porta-rolos cromado com 1 barra e alguns ganchos. Tem pontinhos de ferrugem.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20porta-rolos.",
        price: "R$ 0",
        available: true
      },
      {
        category: "doacoes",
        title: "Bowl de aço inox",
        image: "images/bowl.jpg",
        description: "Pote Tramontina Freezinox Redondo Aço Inox Acabamento Fosco sem Tampa 20cm 2,2L. Cansado, arranhadinho, mas é ótimo.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20bowl.",
        price: "R$ 0",
        available: true
      },
      {
        category: "doacoes",
        title: "Bloco para facas",
        image: "images/portafacas.jpg",
        description: "Cepo De Facas Jamie Oliver - outro artigo dos famigerados selinhos do pão de açúcar.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20bloco%20de%20facas.",
        price: "R$ 0",
        available: true
      },
      {
        category: "doacoes",
        title: "Secador de Cabelos",
        image: "images/secador.jpg",
        description: "Secador de Cabelo Gama Lumina Nano Tourmaline 2200W Prata e Rosa. Faltando bicos e tampa traseira.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20secador.",
        price: "R$ 0",
        available: true
      },
      {
        category: "doacoes",
        title: "Caixa de transporte de Luna <3",
        image: "images/casinha.jpg",
        description: "Caixa de transporte para pet azul | grande.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20caixinha%20pet.",
        price: "R$ 0",
        available: true
      },
      {
        category: "doacoes",
        title: "Portãozinho Pet",
        image: "images/portao.jpg",
        description: "Grade para Porta - Portãozinho Pet em Aço Branco. Duas unidades bem desgastadas.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20caixinha%20pet.",
        price: "R$ 0",
        available: true
      },
      {
        category: "doacoes",
        title: "Vitrola",
        image: "images/vitrola.jpg",
        description: "Crosley CR8005D-BL Cruiser Deluxe Vintage 3-Speed Bluetooth Suitcase Vinyl Record Player Turntable, Blue. Muito enferrujada.",
        whatsappLink: "https://wa.me/+5561998747781?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20vitrola.",
        price: "R$ 0",
        available: true
      }
    // ... more products
  ];
  
 // Function to populate products in the HTML
function populateProducts(category) {
  const productGrid = document.querySelector(`#${category} .product-grid`);
  productGrid.innerHTML = ''; // Clear existing products

  // Sort products: available first
  const sortedProducts = products
    .filter(p => p.category === category)
    .sort((a, b) => (a.available === b.available ? 0 : a.available ? -1 : 1));

  sortedProducts.forEach(product => {
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');
    if (!product.available) {
      productItem.classList.add('unavailable'); // Add class for visual style
    }
    productItem.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <h4>${product.price}</h4>
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
  document.getElementById('popupPrice').textContent = product.price;
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
populateProducts('ultimas');
populateProducts('cozinha');
populateProducts('moveis');
populateProducts('eletro');
populateProducts('diversos');
populateProducts('doacoes');

// Banner
const nissanKicks = products.find(product => product.title === "Nissan Kicks 2018");

function displayBanner(product) {
  // Define as imagens do banner 
  const bannerImages = [
    "images/carro0.jpg",
    "images/carro1.jpg",
    "images/carro2.jpg",
    "images/carro3.jpg",
    "images/carro4.jpg",
    "images/carro5.jpg",
    "images/carro6.jpg",
    "images/carro7.jpg",
    "images/carro8.jpg",
    "images/carro9.jpg",
    "images/carro10.jpg",
    "images/carro11.jpg",
    "images/carro12.jpg",
    "images/carro13.jpg",
    "images/carro14.jpg",
    "images/carro15.jpg"
  ];

  // Exibe a primeira imagem inicialmente
  bannerImage.src = bannerImages[0];
  document.getElementById('bannerTitle').textContent = product.title;
  document.getElementById('bannerDescription').textContent = product.description;
  document.getElementById('bannerWhatsapp').href = product.whatsappLink;

  // Cria as miniaturas para o carrossel do banner
  bannerImages.forEach((image, index) => {
    const listItem = document.createElement('li');
    const imageElement = document.createElement('img');
    imageElement.src = image;
    imageElement.alt = product.title;
    imageElement.classList.add('banner-image');
    listItem.appendChild(imageElement);
    bannerImage.parentNode.appendChild(listItem); // Adiciona as miniaturas como irmãos da imagem principal
  });
}

displayBanner(nissanKicks);

let bannerSlideIndex = 0;

function slideBanner() {
  const images = document.querySelectorAll('.banner-image');
  bannerSlideIndex = (bannerSlideIndex + 1) % images.length;
  bannerImage.src = images[bannerSlideIndex].src;
}

setInterval(slideBanner, 5000); // Slide every 5 seconds

// Image Gallery Popup
let currentImageIndex = 0;
let galleryImages = []; // Declare a variável galleryImages fora do escopo da função openImageGallery

// Função para abrir a galeria de imagens
function openImageGallery() {
  galleryImages = Array.from(document.querySelectorAll('.banner-image')).map(img => img.src); // Atribui a galleryImages dentro da função

  // Limpa as miniaturas existentes
  galleryThumbnails.innerHTML = '';

  // Cria miniaturas para cada imagem do banner
  galleryImages.forEach((image, index) => {
    const listItem = document.createElement('li');
    const thumbnailElement = document.createElement('img');
    thumbnailElement.src = image;
    thumbnailElement.alt = `Thumbnail ${index + 1}`;
    thumbnailElement.addEventListener('click', () => {
      currentImageIndex = index;
      showGalleryImage(index);
    });
    listItem.appendChild(thumbnailElement);
    galleryThumbnails.appendChild(listItem);
  });

  // Exibe o popup da galeria de imagens
  document.getElementById('imageGalleryPopup').style.display = 'block';
  showGalleryImage(0); // Exibe a primeira imagem inicialmente
}

// Função para fechar o popup da galeria de imagens
function closeImageGalleryPopup() {
  document.getElementById('imageGalleryPopup').style.display = 'none';
}

// Função para exibir a imagem selecionada na galeria de imagens
function showGalleryImage(index) {
  const galleryImages = Array.from(document.querySelectorAll('.banner-image')).map(img => img.src);
  document.getElementById('galleryImage').src = galleryImages[index];
}

// Função para navegar para a imagem anterior
function previousImage() {
  currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
  showGalleryImage(currentImageIndex);
}

// Função para navegar para a próxima imagem
function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
  showGalleryImage(currentImageIndex);
}

// Event listener para as miniaturas da galeria de imagens
galleryThumbnails.addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG') {
    const thumbnails = Array.from(galleryThumbnails.querySelectorAll('img'));
    currentImageIndex = thumbnails.indexOf(event.target);
    showGalleryImage(currentImageIndex);
  }
});

// Event listeners for thumbnails
galleryThumbnails.addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG') {
    const thumbnails = Array.from(galleryThumbnails.querySelectorAll('img'));
    const selectedIndex = thumbnails.indexOf(event.target);
    showGalleryImage(selectedIndex);
  }
});

// Function to download an image
function downloadImage(imageUrl, imageName) {
  const link = document.createElement('a');
  link.href = imageUrl;
  link.download = imageName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Add event listener for the "Save Image" button in the popup
document.getElementById('popupDownload').addEventListener('click', () => {
  const imageUrl = document.getElementById('popupImage').src;
  const imageName = document.getElementById('popupTitle').textContent.replace(/\s+/g, '-').toLowerCase() + '.jpg';
  downloadImage(imageUrl, imageName);
});
