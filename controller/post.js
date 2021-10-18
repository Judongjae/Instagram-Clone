const Post = require('../models/post');

//포스트 저장
const posting = async (req, res) => {
  const postingData = req.body;
  const [useDate] = new Date().toISOString().split('T');

  const createPosting = new Post({
    ...postingData,
    postingImgUrl: req.file.location,
    postingDel: false,
    postingDate: useDate,
  });
  try {
    const newPosting = await createPosting.save();
    res.status(201).json(newPosting);
  } catch (error) {
    console.error(error);
    res.status(400).json({ msg: '게시글 작성 실패' });
  }
};

const postList = async (req, res) => {
  try {
    const getAllPosts = await Post.find().sort({ _id: -1 });
    res.status(200).json(getAllPosts);
  } catch (error) {
    res.status(400).json({ msg: '게시글을 불러오지 못했습니다' });
  }
};

const postDetail = async (req, res) => {
  const { postID } = req.params;
  try {
    const detailPost = await Post.findById(postID);
    res.status(200).json(detailPost);
  } catch (error) {
    res.status(400).json({ msg: '상세 게시글을 불러오지 못했습니다' });
  }
};

const postModify = async (req, res) => {
  const { PostID, postingTitle, postingComment, postingTag } = req.body;
  try {
    await Post.findOneAndUpdate(
      { _id: PostID },
      { postingTitle, postingComment, postingTag }
    );
    res.status(200).json({ msg: '수정에 성공했습니다' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ msg: '수정에 실패했습니다' });
  }
};
const postDelete = async (req, res) => {
  const { PostID } = req.body;
  try {
    await Post.findOneAndUpdate({ _id: PostID }, { postingDel: true });
    res.sendStatus(200);
  } catch (error) {
    res.status(400).json({ msg: '삭제 실패' });
  }
};

module.exports = { posting, postList, postDetail, postModify, postDelete };
