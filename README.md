# ProWeb Nigeria

Professional web design and development agency website.

## Project Structure

```
prowebnigeria/
├── frontend/     # Next.js website (deployed on Vercel)
├── backend/      # Django API & CMS (deployed on PythonAnywhere)
└── README.md
```

## Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev
```

Deployed at: https://prowebnigeria.ng

## Backend (Django)

```bash
cd backend
python -m venv venv
venv\Scripts\activate  # Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

Admin panel: https://[your-username].pythonanywhere.com/admin

## Deployment

- **Frontend**: Vercel (auto-deploys from `frontend/` folder)
- **Backend**: PythonAnywhere (manual deploy from `backend/` folder)
