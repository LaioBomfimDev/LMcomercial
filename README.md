# LM Comercial - Site Institucional

Site moderno e responsivo para a LM Comercial, casa de material de construção em Camaçari-BA.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool moderna e rápida
- **TailwindCSS** - Framework CSS utilitário
- **JavaScript (ES6+)** - Linguagem de programação

## 🎨 Design e UX

### Paleta de Cores
- **Branco Pérola**: `#F8F6F0` (fundo principal)
- **Azul Escuro**: `#0A2342` (detalhes e botões principais)
- **Vermelho Escuro**: `#8B0000` (CTAs e destaques)

### Características
- Design limpo e moderno
- Tipografia grande e legível (público 40-60 anos)
- Botões grandes e acessíveis
- Alto contraste para melhor legibilidade
- Totalmente responsivo (mobile-first)

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Header.jsx          # Cabeçalho fixo com menu
│   ├── HeroSlider.jsx      # Carrossel promocional
│   ├── PromotionsServices.jsx # Promoções e serviços
│   ├── WhyChooseUs.jsx     # Seção "Por que escolher"
│   ├── AllProducts.jsx     # Catálogo de produtos
│   ├── LocationMap.jsx     # Mapa e localização
│   └── Footer.jsx          # Rodapé com contatos
├── assets/
│   └── images/             # Imagens do site
├── App.jsx                 # Componente principal
├── main.jsx               # Ponto de entrada
└── index.css              # Estilos globais
```

## 🖼️ Imagens Necessárias

### Slider Principal (Hero)
- `slideBarIMG1.png` - Produto em destaque 1
- `slideBarIMG2.png` - Produto em destaque 2
- `slideBarIMG3.png` - Produto em destaque 3

### Promoções (formato 1080x1350)
- `promocao1.png` - Promoção cimento
- `promocao2.png` - Kit ferramentas
- `promocao3.png` - Serviço entrega

### Institucional
- `why-choose-us.png` - Imagem da empresa

### Produtos (10 imagens)
- `IMGproduto1.png` até `IMGproduto10.png`

## ⚙️ Instalação e Execução

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos

1. **Clone ou baixe o projeto**
```bash
cd LMcomercial
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o projeto**
```bash
npm run dev
```

4. **Acesse no navegador**
```
http://localhost:5173
```

## 📱 Funcionalidades

### Header
- Menu fixo responsivo
- Logo da empresa
- Navegação suave entre seções
- Botão WhatsApp direto

### Slider Promocional
- Carrossel automático (5s)
- 3 slides com produtos em destaque
- Botões de navegação
- CTAs para WhatsApp

### Promoções e Serviços
- Grid responsivo (3 colunas desktop, 1 mobile)
- Cards com hover effects
- Integração WhatsApp por produto

### Catálogo de Produtos
- Slider horizontal
- 10 produtos organizados
- Botões de orçamento individuais

### Localização
- Mapa integrado do Google Maps
- Informações de contato completas
- Horário de funcionamento
- Botões de ação (direções, WhatsApp)

### Footer
- Informações completas da empresa
- Redes sociais com ícones grandes
- Links de contato funcionais

## 🔧 Personalização

### Alterar Informações da Empresa

1. **Número do WhatsApp**
   - Procure por `5571999999999` em todos os arquivos
   - Substitua pelo número real (formato: 55 + DDD + número)

2. **Endereço e Contatos**
   - Edite os componentes `LocationMap.jsx` e `Footer.jsx`
   - Atualize endereço, telefone e email

3. **Redes Sociais**
   - No `Footer.jsx`, atualize os links do Instagram e Facebook

4. **Produtos e Serviços**
   - Edite os arrays de dados nos componentes
   - Substitua nomes, descrições e preços

### Alterar Cores

No arquivo `tailwind.config.js`:
```javascript
colors: {
  'pearl-white': '#F8F6F0',  // Cor de fundo
  'dark-blue': '#0A2342',    // Azul principal
  'dark-red': '#8B0000',     // Vermelho destaque
}
```

### Adicionar/Remover Seções

1. Crie o componente na pasta `components/`
2. Importe e adicione no `App.jsx`
3. Atualize o menu no `Header.jsx` se necessário

## 📦 Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

## 🌐 Deploy

O projeto pode ser hospedado em:
- Vercel
- Netlify
- GitHub Pages
- Qualquer servidor web

## 📞 Suporte

Para dúvidas sobre o código ou personalização:
- Verifique os comentários no código
- Consulte a documentação do React e TailwindCSS
- Todos os componentes são bem documentados

## 📄 Licença

Este projeto foi desenvolvido especificamente para a LM Comercial.

---

**Desenvolvido com ❤️ para LM Comercial - Camaçari/BA**