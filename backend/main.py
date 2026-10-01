from datetime import datetime, timezone

import requests
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


app = FastAPI(
    title="PropertyPilot Website API",
    description="Backend API for PropertyPilot website enquiries",
    version="1.0.0",
)


# ============================================================
# CORS
# ============================================================

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:5174",
        "http://127.0.0.1:5174",
        "http://localhost:5175",
        "http://127.0.0.1:5175",
        "http://localhost:5176",
        "http://127.0.0.1:5176",
        "http://localhost:5177",
        "http://127.0.0.1:5177",
        "http://localhost:5178",
        "http://127.0.0.1:5178",
        "http://localhost:5179",
        "http://127.0.0.1:5179",
        "http://localhost:5180",
        "http://127.0.0.1:5180",
        "http://localhost:5181",
        "http://127.0.0.1:5181",
        "http://localhost:5182",
        "http://127.0.0.1:5182",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ============================================================
# n8n WEBHOOK
# ============================================================

N8N_CONTACT_WEBHOOK = (
    "http://localhost:5678/webhook/propertypilot-contact"
)


# ============================================================
# DATA MODELS
# ============================================================

class ContactEnquiry(BaseModel):
    name: str
    email: str
    company: str
    service: str
    message: str


class DemoRequest(BaseModel):
    name: str
    email: str
    company: str
    business_type: str


# ============================================================
# BASIC ROUTES
# ============================================================

@app.get("/")
def root():
    return {
        "message": "PropertyPilot Website API is running"
    }


@app.get("/api/health")
def health():
    return {
        "status": "healthy",
        "service": "propertypilot-website-api",
        "timestamp": datetime.now(timezone.utc).isoformat(),
    }


# ============================================================
# CONTACT FORM
# ============================================================

@app.post("/api/contact")
def submit_contact(enquiry: ContactEnquiry):
    enquiry_data = enquiry.model_dump()

    print("\n========================================")
    print("CONTACT ENQUIRY RECEIVED")
    print("========================================")
    print(enquiry_data)

    try:
        n8n_response = requests.post(
            N8N_CONTACT_WEBHOOK,
            json=enquiry_data,
            timeout=10,
        )

        print("n8n response status:", n8n_response.status_code)

        if n8n_response.text:
            print("n8n response:")
            print(n8n_response.text)

        if not 200 <= n8n_response.status_code < 300:
            print("n8n returned an unsuccessful status.")

            return {
                "success": False,
                "message": (
                    "Enquiry received, but the automation "
                    "workflow returned an error."
                ),
                "automation_triggered": False,
                "data": enquiry_data,
            }

    except requests.RequestException as error:
        print("n8n connection error:")
        print(error)

        return {
            "success": False,
            "message": (
                "Enquiry received, but the automation "
                "workflow could not be reached."
            ),
            "automation_triggered": False,
            "data": enquiry_data,
        }

    print("PropertyPilot contact automation triggered successfully.")
    print("========================================\n")

    return {
        "success": True,
        "message": "Contact enquiry received",
        "automation_triggered": True,
        "data": enquiry_data,
    }


# ============================================================
# DEMO REQUEST
# ============================================================

@app.post("/api/demo")
def submit_demo(request: DemoRequest):
    demo_data = request.model_dump()

    print("\n========================================")
    print("DEMO REQUEST RECEIVED")
    print("========================================")
    print(demo_data)
    print("========================================\n")

    return {
        "success": True,
        "message": "Demo request received",
        "automation_triggered": False,
        "data": demo_data,
    }