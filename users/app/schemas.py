from pydantic import BaseModel


class UserBase(BaseModel):
    first_name: str
    last_name: str
    email: str
    active: bool


class User(UserBase):
    id: str
