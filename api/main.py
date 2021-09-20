from fastapi import FastAPI
import uvicorn

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "this is root"}


@app.get("/posts")
async def posts():
    return {"message": "get all posts here."}


@app.post("/post")
async def post():
    return {"message": "post here"}


@app.post("/favorite")
async def favorite():
    return {"message": "this is favorite"}


if __name__ == '__main__':
    uvicorn.run(app=app)