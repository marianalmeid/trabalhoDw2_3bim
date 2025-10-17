WhatsHub – Agenda de Contatos com Integração de WhatsApp
WhatsHub é uma aplicação web que permite cadastrar, visualizar, editar e excluir contatos, além de gerar o link direto para conversar com cada contato no WhatsApp com apenas um clique.
Também possui integração com uma API de DDD, permitindo exibir automaticamente o estado de acordo com o número de telefone.
Funcionalidades Principais
- Cadastro de contato com nome e telefone
- Edição e exclusão de contatos
- Geração do link de conversa para WhatsApp
- Uso de LocalStorage para persistência dos dados
- Interface amigável e responsiva
- Consumo de API (DDD)
- Uso de JSX e React Hooks

Link da Aplicação Online
(coloca o link aqui)

Como Executar Localmente
1. Clonar o repositório
No terminal:

git clone https://github.com/marianalmeid/trabalhoDw2_3bim

cd projeto-react-whatshub

cd vite-project

2. Instalar dependências
npm install 

-React Icons 
npm install react-icons 

-Supabase
npm install @supabase/supabase-js

4.Configurar Supabase
A aplicação utiliza o Supabase para autenticação e/ou banco de dados (caso aplicável).

Crie um arquivo .env(proximo ao .gitignore)na raiz do projeto,  e digite:

VITE_SUPABASE_URL = https://villsulxyocbiigcrink.supabase.co
VITE_SUPABASE_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpbGxzdWx4eW9jYmlpZ2NyaW5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4OTQyNjYsImV4cCI6MjA3NDQ3MDI2Nn0.1202uLGFTX3otKSBfsnseRifWh8bWS8Lrqji6WPg280

5. Rodar o projeto
No terminal:

npm run dev 

Acesse o link localhost que ele vai gerar

Consumo de API (Funcionalidade Extra)
O que foi implementado?
Foi integrada uma API de DDD na agenda de contatos, que recebe o DDD do telefone do contato e retorna automaticamente o estado correspondente.
Exemplo:
Telefone: (11) 98888-7777 → SP

Por que isso é útil?
-Evita erros de digitação de localização
-Deixa o cadastro mais inteligente
-Adiciona uma camada extra de usabilidade e informação

Tecnologias Utilizadas
-React (JSX, Hooks)
- Supabase (opcional: login/autenticação/banco)
- API de DDD (Funcionalidade Extra)
- React Icons
- CSS