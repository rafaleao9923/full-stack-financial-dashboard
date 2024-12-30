from pydantic import BaseSettings

class Settings(BaseSettings):
    app_name: str = "Financial Dashboard API"
    debug: bool = False
    database_url: str = "postgresql://user:password@localhost:5432/financial_db"
    redis_url: str = "redis://localhost:6379"
    jwt_secret: str = "your-secret-key"
    jwt_algorithm: str = "HS256"
    access_token_expire_minutes: int = 30

    class Config:
        env_file = ".env"

settings = Settings()
