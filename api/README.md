# Recuperação de senha
**Requisitos funcionais (RF)**
- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve recever um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha.
**Requisitos não-funcionais (RNF)**
- Utilizar Mailtrap para testar envios de e-mail em ambiente de desenvolvimento;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job).
**Regras de negócio (RN)**
- O link enviado por em-mail para resetar senha deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha.
# Atualização do perfil
**Requisitos funcionais (RF)**
- O usuário deve poder atualizar seus nome, email e senha.
**Regras de negócio (RN)**
- O usuário não pode alterar seu email para um email já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha.
# Painel do prestador
**Requisitos funcionais (RF)**
- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar todas as notificações não lidas.
**Requisitos não-funcionais (RNF)**
- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io
**Regras de negócio (RN)**
- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar.
# Agendamento de serviços
**Requisitos funcionais (RF)**
- O usuário deve poder listar todos prestadores de serviço cadastrado;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários de um prestador específico;
- O usuário deve poder realizar um novo agendamento com um prestador.
**Requisitos não-funcionais (RNF)**
- A listagem de prestadores deve ser armazenada em cache.
**Regras de negócio (RN)**
- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro às 8h, último às 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo próprio.

## A regra de negócio deve sempre estar relacionada com um requisito funcional