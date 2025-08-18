# 📋 Guia de Instalação - LM Comercial

## ⚠️ Pré-requisitos Necessários

Antes de executar o projeto, você precisa instalar:

### 1. Node.js (Obrigatório)

**Download:** https://nodejs.org/

- Baixe a versão **LTS** (recomendada)
- Execute o instalador e siga as instruções
- **IMPORTANTE:** Marque a opção "Add to PATH" durante a instalação
- Reinicie o computador após a instalação

### 2. Verificar Instalação

Após instalar o Node.js, abra o **PowerShell** ou **Prompt de Comando** e execute:

```bash
node --version
npm --version
```

Deve aparecer as versões instaladas (ex: v18.17.0).

## 🚀 Executando o Projeto

### Passo 1: Abrir Terminal
- Abra o **PowerShell** como administrador
- Navegue até a pasta do projeto:
```bash
cd "C:\Users\simpres\Downloads\LMcomercial"
```

### Passo 2: Instalar Dependências
```bash
npm install
```

### Passo 3: Executar o Projeto
```bash
npm run dev
```

### Passo 4: Acessar o Site
- Abra o navegador
- Acesse: `http://localhost:5173`

## 🔧 Comandos Úteis

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Gerar build para produção
npm run build

# Visualizar build de produção
npm run preview

# Verificar erros de código
npm run lint
```

## 🖼️ Adicionando Imagens

1. Coloque suas imagens na pasta: `src/assets/images/`
2. Use os nomes especificados no arquivo `.gitkeep`
3. Formatos aceitos: PNG, JPG, JPEG
4. Tamanhos recomendados:
   - Slider: 1200x600px
   - Promoções: 1080x1350px (formato Instagram)
   - Produtos: 400x300px

## 📱 Personalizando Conteúdo

### Alterar Número do WhatsApp
1. Procure por `5571999999999` em todos os arquivos
2. Substitua pelo número real (formato: 55 + DDD + número)

### Alterar Informações da Empresa
- **Endereço:** Edite `LocationMap.jsx` e `Footer.jsx`
- **Produtos:** Edite os arrays nos componentes
- **Cores:** Modifique `tailwind.config.js`

## ❌ Problemas Comuns

### "npm não é reconhecido"
- **Solução:** Instale o Node.js e reinicie o computador

### "Erro ao instalar dependências"
- **Solução:** Execute como administrador
- Limpe o cache: `npm cache clean --force`

### "Porta 5173 em uso"
- **Solução:** O Vite escolherá automaticamente outra porta
- Ou pare outros serviços na porta 5173

### Imagens não aparecem
- **Solução:** Verifique se as imagens estão na pasta correta
- Confirme se os nomes dos arquivos estão exatos

## 📞 Suporte Técnico

Se encontrar dificuldades:
1. Verifique se o Node.js está instalado corretamente
2. Confirme se está na pasta correta do projeto
3. Execute os comandos como administrador
4. Consulte a documentação oficial do React/Vite

## 🌐 Deploy (Publicação)

Para publicar o site:

1. **Gere o build:**
```bash
npm run build
```

2. **Hospedagem gratuita:**
   - Vercel: https://vercel.com
   - Netlify: https://netlify.com
   - GitHub Pages

3. **Upload dos arquivos da pasta `dist/`**

---

**✅ Projeto pronto para uso após seguir estes passos!**