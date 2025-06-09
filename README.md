# 🌱 Freezy - L'app contro lo spreco alimentare

**Freezy** è un'applicazione **full stack** sviluppata come progetto finale del corso *Epicode Full Stack Developer*, con l'obiettivo di **ridurre lo spreco alimentare** attraverso una gestione intelligente degli alimenti presenti nel frigorifero.

---

## 🎯 Funzionalità principali

- ✅ Aggiunta dei prodotti in frigo con data di scadenza
- 🔔 Notifiche visive per i prodotti in scadenza
- 🍽️ Suggerimento di ricette in base agli ingredienti disponibili
- 📚 Visualizzazione della lista completa delle ricette salvate nel database
- 🧑‍💼 Area Admin per:
  - Creazione / modifica / eliminazione di alimenti
  - Gestione delle ricette (incluse immagini, preparazione, allergeni)
- 🎮 Mini-gioco educativo (opzionale) per sensibilizzare sul tema dello spreco
- 📅 Visualizzazione ordinata delle ricette suggerite e dei prodotti in ordine di scadenza

---

## 🔐 Autenticazione e Accesso

> ⚠️ **Importante:** Per accedere all'applicazione è **obbligatorio registrarsi**.

Le rotte sono **protette da autenticazione JWT**, quindi:
- Al primo accesso crea un utente tramite la pagina di registrazione
- Accedi con le tue credenziali per navigare tra le sezioni utente
- Solo gli utenti con ruolo `ADMIN` possono accedere alla sezione Admin

---

## 💻 Stack Tecnologico

### Frontend
- ⚛️ React
- 📦 Redux Toolkit
- 🚦 React Router DOM
- 💅 Bootstrap & React-Bootstrap

### Backend
- ☕ Java + Spring Boot
- 🔐 JWT Authentication
- 🧭 Swagger API Docs
- 📸 Upload immagini su Cloudinary
- 🗄️ PostgreSQL

---

## 🔧 Come eseguire il progetto

### 1. Clona il repository

```bash
git clone https://github.com/DavidechiarelliUx/freezy-be
