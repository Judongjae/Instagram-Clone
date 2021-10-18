const express = require("express");
//이걸 왜 쓸까??
const {} = require("../controller/auth");
//필요한게 있을떄 적으면 될듯
const router = express.Router();
const comment = require("../controller/comment");

//댓글 추가 (로그인 권한 필요)
router.post("/replyPost", auth.isAuth, async (req, res) => {
  //auth.isauth를 알아보자///////////////////
  try {
    const postID = req.params.postID;
    const { replyComment, replyDate } = req.body;
    //const commentuid = uuid.v1이걸 알아보자////////////
    const replyNickname = req.user.userNickname;

    //DB에 댓글 추가
    await Comment.create({
      postID,
      replyNickname,
      replyComment,
      replyDate,
      replyDel,
    });

    res.status(201).json({
      success: true,
      msg: "성공적으로 댓글이 등록되었습니다.",
    });
  } catch (err) {
    console.log("댓글 추가 API 에러", err);
    res.status(500).json({
      success: false,
      msg: "댓글을 추가하는데 문제가 발생했습니다.",
    });
  }
});

//댓글 삭제 기능(로그인 권한 필요)
router.delete("/replyDelete", auth.isAuth, async (req, res) => {
  try {
    const { postID } = req.params;
    await Comment.deleteOne({ postID, commentID });
    //삭제
    res
      .status(200)
      .json({ success: true, msg: "성공적으로 댓글이 삭제되었습니다." });
  } catch (error) {
    console.log("댓글 삭제 기능 중 에러 발생: ", error);
    res.status(500).json({
      result: false,
      msg: "댓글을 삭제하는데 문제가 발생했습니다.",
    });
  }
});

module.exports = router;
