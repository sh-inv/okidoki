import Texteditor from './Texteditor';
import styled from 'styled-components';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

export default function WriteCommentSpace(props) {
  const {
    setLogin,
    login,
    name,
    comment,
    setShowEditor,
    setIWantWrite,
    setOpenComment,
    setCommentData,
  } = props;

  const [writecomment, setwritecomment] = useState();
  const params = useParams();
  const pageId = params.id;
  const navi = useNavigate();

  useEffect(() => {
    (name === '편집' || name === '편집의편집') &&
      setwritecomment(comment.content);
  }, []);

  const perMission = () => {
    navi(`/login`);
  };

  useEffect(() => {
    if (localStorage.getItem('login-token'))
      localStorage.getItem('login-token') !== null
        ? setLogin(true)
        : setLogin(false);
  });

  let body;
  if (name === '편집') {
    body = {
      comment_id: comment.comment_id,
      content: writecomment,
    };
  } else if (name === '편집의편집') {
    body = {
      comment_id: comment.comment_id,
      content: writecomment,
    };
  } else if (name === '대댓글작성') {
    body = {
      post_id: pageId,
      parent_id: comment.comment_id,
      content: writecomment,
    };
  } else if (name === '댓글작성') {
    body = {
      post_id: pageId,
      content: writecomment,
    };
  }

  const sendComment = () => {
    if (name === '댓글작성' || name === '대댓글작성') {
      axios
        .post(`http://localhost:8000/comment`, body, {
          headers: { authorization: localStorage.getItem('login-token') },
        })
        .then(res => setCommentData(res.data.postComment.reverse()));
      if (name === '대댓글작성') {
        setIWantWrite(false);
        setOpenComment(true);
      }
    } else if (name === '편집' || name === '편집의편집') {
      axios
        .patch(`http://localhost:8000/comment`, body, {
          headers: { authorization: localStorage.getItem('login-token') },
        })
        .then(res => setCommentData(res.data.postComment.reverse()));
      setShowEditor(false);
    }
    setwritecomment('');
  };

  const canCelButton = () => {
    name === '대댓글작성' && setIWantWrite(false);
    (name === '편집' || name === '편집의편집') && setShowEditor(false);
  };
  return (
    <>
      <Inputspace>
        <Profile>
          {localStorage.getItem('login-token') !== null ? (
            <ProfileImg src="https://cdn-icons-png.flaticon.com/512/2173/2173478.png" />
          ) : (
            <ProfileImg src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
          )}
        </Profile>
        {login ? (
          <TextEditorWrapper className="ql-snow">
            <Texteditor
              setwritecomment={setwritecomment}
              writecomment={writecomment}
            />
          </TextEditorWrapper>
        ) : (
          <Writeinput>
            댓글을 쓰려면
            <Loginbtton onClick={perMission}>로그인</Loginbtton>이 필요합니다.
          </Writeinput>
        )}
      </Inputspace>
      <Buttonspace>
        {name !== '댓글작성' && (
          <CancelButton onClick={canCelButton}>취소</CancelButton>
        )}
        {localStorage.getItem('login-token') !== null ? (
          <CommentButton onClick={sendComment}>댓글쓰기</CommentButton>
        ) : (
          <CommentButton2>댓글쓰기</CommentButton2>
        )}
      </Buttonspace>
    </>
  );
}

const TextEditorWrapper = styled.div`
  margin-left: 0px;
  width: 100%;
`;

const Writeinput = styled.div`
  margin-left: 0px;
  padding: 7px;
  font-size: 12px;
  width: 100%;
  height: 55px;
  border-radius: 5px;
  border: 1.5px solid lightgray;
`;

const Loginbtton = styled.button`
  color: blue;
  font-size: 12px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding-right: 0;
  text-decoration: underline;
`;

const Inputspace = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const Profile = styled.span`
  border-radius: 50%;
  padding-right: 8px;
  margin-right: 10px;
`;

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  opacity: 50%;
`;

const Buttonspace = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: end;
  width: 100%;
`;

const CommentButton2 = styled.button`
  background-color: #0090f9;
  opacity: 0.5;
  padding: 8px 30px;
  border-radius: 7px;
  border: none;
  color: white;
  cursor: pointer;
`;

const CommentButton = styled.button`
  background-color: #0090f9;
  opacity: 0.5;
  padding: 8px 30px;
  border-radius: 7px;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: rgb(13, 50, 83);
    transition: 0.3s;
  }
`;

const CancelButton = styled.button`
  background-color: white;
  border: 1px solid lightgray;
  padding: 8px 15px;
  border-radius: 7px;
  margin-right: 10px;
`;
