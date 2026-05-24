import json
import os

# Caminhos dos arquivos (ficarão na raiz da pasta backend)
DB_POSTS = "posts.json"
DB_INFO = "info.json"


def get_channel_info():
    """Busca informações do canal para o Header do site"""

    if not os.path.exists(DB_INFO):
        return {
            "name": "oTalDoTroia",
            "social": {
                "twitch": "https://twitch.tv/otaldotroia",
                "youtube": "https://youtube.com/@otaldotroia",
                "instagram": "https://instagram.com/otaldotroia"
            }
        }

    with open(DB_INFO, "r", encoding="utf-8") as f:
        return json.load(f)


def get_all_posts():
    """Retorna a lista de posts do blog"""

    if not os.path.exists(DB_POSTS):
        return []

    with open(DB_POSTS, "r", encoding="utf-8") as f:
        try:
            return json.load(f)
        except:
            return []


def save_post(post_data):
    """Salva uma nova postagem"""

    posts = get_all_posts()

    post_data["id"] = len(posts) + 1

    posts.insert(0, post_data)

    with open(DB_POSTS, "w", encoding="utf-8") as f:
        json.dump(posts, f, indent=4, ensure_ascii=False)

    return post_data