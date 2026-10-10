# Mistry Home Solution

Mistry Home Solution is a modern home services platform.

## Technology Stack

- **Backend:** Python, Django, Django REST Framework
- **Database:** PostgreSQL
- **Frontend:** Django Templates, HTML5, CSS3, Bootstrap 5, Vanilla JavaScript
- **API:** Django REST Framework (`/api/v1/`)
- **Environment & Tools:** Git, python-dotenv, Virtual Environment (`venv`)

---

## Setup & Installation Instructions (Windows)

### 1. Create Virtual Environment
```powershell
python -m venv venv
```

### 2. Activate Virtual Environment
```powershell
venv\Scripts\activate
```

### 3. Install Requirements
```powershell
pip install -r requirements.txt
```

### 4. Configure Environment Variables (`.env`)
Copy `.env.example` to `.env` and fill in your database credentials and secret key:
```powershell
cp .env.example .env
```
Ensure the following variables are defined in `.env`:
```env
SECRET_KEY=your-secret-key-here
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1

DB_NAME=mistry_home_solution
DB_USER=postgres
DB_PASSWORD=your_postgres_password
DB_HOST=localhost
DB_PORT=5432
```

### 5. Create PostgreSQL Database
Make sure PostgreSQL service is running and create the database:
```sql
CREATE DATABASE mistry_home_solution;
```

### 6. Run Database Migrations
```powershell
python manage.py makemigrations
python manage.py migrate
```

### 7. (Optional) Create Superuser
To create an administrative user for the Django admin panel:
```powershell
python manage.py createsuperuser
```

### 8. Start Development Server
```powershell
python manage.py runserver
```

---

## Verification Endpoints

- **Homepage (Setup Verification):** `http://127.0.0.1:8000/`
- **DRF API Test Endpoint:** `http://127.0.0.1:8000/api/v1/test/`
- **Admin Panel:** `http://127.0.0.1:8000/admin/`
