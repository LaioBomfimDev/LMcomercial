# 🚀 Instruções para Deploy - LM Comercial

## 📋 Pré-requisitos
- Conta no GitHub
- Conta no Vercel
- Git configurado localmente (✅ já feito)

## 🔗 Passo 1: Upload para GitHub

### Opção A: Via Interface Web do GitHub (Recomendado)
1. Acesse [github.com](https://github.com) e faça login
2. Clique em "New repository" (botão verde)
3. Configure o repositório:
   - **Repository name**: `lm-comercial`
   - **Description**: `Website LM Comercial - Materiais de Construção`
   - ✅ **Public** (para usar GitHub Pages gratuito)
   - ❌ **NÃO** marque "Add a README file"
   - ❌ **NÃO** marque "Add .gitignore"
   - ❌ **NÃO** marque "Choose a license"
4. Clique em "Create repository"

### Opção B: Conectar Repositório Local
Após criar o repositório no GitHub, execute estes comandos:

```bash
# Adicionar o repositório remoto (substitua SEU_USUARIO pelo seu username do GitHub)
git remote add origin https://github.com/SEU_USUARIO/lm-comercial.git

# Fazer push do código
git branch -M main
git push -u origin main
```

## 🌐 Passo 2: Deploy no Vercel

### Método 1: Via Interface Web (Mais Fácil)
1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Sign up" ou "Login"
3. **Conecte com sua conta GitHub**
4. Após login, clique em "New Project"
5. **Import** o repositório `lm-comercial`
6. Configure o projeto:
   - **Project Name**: `lm-comercial`
   - **Framework Preset**: `Vite`
   - **Root Directory**: `./` (padrão)
   - **Build Command**: `npm run build` (padrão)
   - **Output Directory**: `dist` (padrão)
7. Clique em "Deploy"

### Configurações Importantes no Vercel:
- ✅ **Build Command**: `npm run build`
- ✅ **Output Directory**: `dist`
- ✅ **Install Command**: `npm install`

## 📱 Passo 3: Configurar Domínio Personalizado (Opcional)
1. No painel do Vercel, vá em "Settings" > "Domains"
2. Adicione seu domínio personalizado
3. Configure os DNS conforme instruções do Vercel

## 🔄 Atualizações Futuras
Para atualizar o site:
1. Faça as mudanças no código
2. Execute:
   ```bash
   git add .
   git commit -m "Descrição da mudança"
   git push
   ```
3. O Vercel fará deploy automaticamente!

## 🎯 URLs Finais
Após o deploy:
- **GitHub**: `https://github.com/SEU_USUARIO/lm-comercial`
- **Vercel**: `https://lm-comercial.vercel.app` (ou domínio personalizado)

## ⚠️ Troubleshooting

### Se as imagens não aparecerem:
1. Verifique se estão na pasta `public/`
2. Confirme que o `vite.config.js` tem `base: '/lm-comercial/'`
3. Rebuild o projeto: `npm run build`

### Se o build falhar:
1. Verifique se todas as dependências estão instaladas
2. Execute `npm run build` localmente para testar
3. Verifique os logs de erro no Vercel

## 📞 Suporte
Se precisar de ajuda:
1. Verifique os logs no Vercel Dashboard
2. Consulte a documentação do Vercel
3. Entre em contato com suporte técnico

---

✅ **Status Atual do Projeto:**
- ✅ Código commitado no Git
- ✅ Imagens adicionadas
- ✅ Configuração de produção pronta
- 🔄 Aguardando upload para GitHub
- 🔄 Aguardando deploy no Vercel