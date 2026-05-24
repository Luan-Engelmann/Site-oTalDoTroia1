from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

from .data import (
    get_channel_info,
    get_all_posts,
    save_post,
)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/v1/info")
async def info():
    return get_channel_info()


@app.get("/api/v1/posts")
async def posts():
    return get_all_posts()


@app.post("/api/v1/posts")
async def create_post(request: Request):
    # Pega o corpo da requisição e transforma em dicionário direto
    post_data = await request.json()

    return save_post(post_data)