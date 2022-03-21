import cors from "cors";
import express from "express";
import { userAuthRouter } from "./routers/userRouter";
import { eduRouter } from "./routers/educationRouter";
import { projectRouter } from "./routers/projectRouter";
import { awardRouter } from "./routers/awardRouter";
import { certificateRouter } from "./routers/certificateRouter"
import { errorMiddleware } from "./middlewares/errorMiddleware";
import bodyParser from "body-parser";

const app = express();

// CORS 에러 방지
app.use(cors());

//bodyParser.urlencoded() 등록으로 req.body로 받을 수 있게 됨.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// express 기본 제공 middleware
// express.json(): POST 등의 요청과 함께 오는 json형태의 데이터를 인식하고 핸들링할 수 있게 함.
// express.urlencoded: 주로 Form submit 에 의해 만들어지는 URL-Encoded 형태의 데이터를 인식하고 핸들링할 수 있게 함.
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

// 기본 페이지
app.get("/", (req, res) => {
  res.send("안녕하세요, 레이서 프로젝트 API 입니다.");
});

app.get("/myprofile", (req, res) => {
  res.sendFile(__dirname + '/app.html');
});

// router, service 구현 (userAuthRouter는 맨 위에 있어야 함.)
app.use(userAuthRouter);
// edu router service 구현
app.use(eduRouter);
// project router service 구현
app.use(projectRouter);
// award router service 구현
app.use(awardRouter)
//certificate Router Service 구현
app.use(certificateRouter)

// 순서 중요 (router 에서 next() 시 아래의 에러 핸들링  middleware로 전달됨)
app.use(errorMiddleware);

export { app };
