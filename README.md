# Mistrry Home Solution

## Project Description

Mistrry Home Solution is a modern home services discovery, booking, and management platform built with Python, Django, Django REST Framework, and PostgreSQL. It allows customers to explore upcoming home projects, browse certified home services across multiple categories (construction, renovation, carpentry, plumbing, electrical, and appliance repair), book verified master technicians, and request custom quotations with milestone escrow protection.

The platform includes verified customer self-service dashboards, a dedicated provider/partner management workspace for tracking jobs, schedule calendars, and submitted estimates, and an enterprise admin analytics panel for platform-wide operations, bookings, provider verifications, revisit warranty audits, and financial reporting.

## Features

- **User Registration & Authentication** — Seamless sign-up and login experience with role-based access control (Customer, Service Provider, and Admin), profile management, and secure session handling.
- **Service Discovery & Interactive Exploration** — Explore services across multiple categories with instant category filters, transparent pricing breakdowns, verified pro badges, and comprehensive service detail pages.
- **Booking & Quotations Pipeline** — Direct booking experience with milestone-based escrow tracking, customized quotation submission, and real-time status updates.
- **Provider & Partner Workspace** — Comprehensive partner dashboard for master technicians to review job requests, submit custom bids, track earnings, and manage appointment schedules.
- **Enterprise Admin Dashboard** — Centralized admin hub to oversee customer bookings, provider onboarding, revisit warranty claims, platform payouts, and catalog pricing.

## Windows

```powershell
# 1. Clone the repository
git clone https://github.com/ravi-1820/Mistrry_Home-Sollution.git
cd Mistrry_Home-Sollution

# 2. Create virtual environment
python -m venv venv

# 3. Activate virtual environment
venv\Scripts\activate

# 4. Install dependencies
pip install -r requirements.txt

# 5. Configure environment variables (.env)
cp .env.example .env

# 6. Run database migrations
python manage.py makemigrations
python manage.py migrate

# 7. Start Django development server
python manage.py runserver
```

Open `http://127.0.0.1:8000/` in your browser.

## macOS / Linux

```bash
# 1. Clone the repository
git clone https://github.com/ravi-1820/Mistrry_Home-Sollution.git
cd Mistrry_Home-Sollution

# 2. Create virtual environment
python3 -m venv venv

# 3. Activate virtual environment
source venv/bin/activate

# 4. Install dependencies
pip install -r requirements.txt

# 5. Configure environment variables (.env)
cp .env.example .env

# 6. Run database migrations
python3 manage.py makemigrations
python3 manage.py migrate

# 7. Start Django development server
python3 manage.py runserver
```

Open `http://127.0.0.1:8000/` in your browser.

## Credentials:-

- **Username:** `admin`
- **Email:** `admin@mistrry.com`
- **Password:** `admin123`

## Verification Endpoints

- **Customer Website (Home):** `http://127.0.0.1:8000/`
- **Services Directory:** `http://127.0.0.1:8000/services/`
- **Service Details:** `http://127.0.0.1:8000/service-detail/`
- **Projects Showcase:** `http://127.0.0.1:8000/projects/`
- **Customer Dashboard:** `http://127.0.0.1:8000/customer/dashboard/`
- **Provider Portal:** `http://127.0.0.1:8000/provider/dashboard/`
- **Enterprise Admin Dashboard:** `http://127.0.0.1:8000/admin-panel/dashboard/`
- **Django Built-in Admin:** `http://127.0.0.1:8000/admin/`
- **DRF API Endpoint:** `http://127.0.0.1:8000/api/v1/test/`

## Screenshots

### 1. Customer Home Page & Services Discovery
Portal switcher, hero banner with technician discovery, instant search capsule, categorized service badges, and live pro radar carousel.

### 2. Provider Partner Workspace
Real-time earnings tracker, active job requests, quotation submission modal, appointment schedule calendar, and performance metrics.

### 3. Enterprise Admin Management & Analytics
Platform gross merchandise value (GMV), booking pipeline, verified partner directory, warranty revisit claims, and system configuration.
