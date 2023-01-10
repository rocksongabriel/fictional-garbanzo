from fastapi import FastAPI, status
from .data import users
from .schemas import UserBase, User
import uuid

app = FastAPI()


@app.get("/users", response_model=list[User])
async def get_users():
    return users


@app.post("/users", status_code=status.HTTP_201_CREATED)
async def create_user(user: UserBase):
    _id = uuid.uuid4()
    new_user = User(id=str(_id), **user.dict())
    return new_user
