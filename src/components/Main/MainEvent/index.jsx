import styled from 'styled-components';

function MainEvent(data) {
  return (
    <EventContainer>
      <ImgContainer>
        <EventImage src="https://dummyimage.com/300x200/dddddd/ffffff&text=sample" />
      </ImgContainer>
      <Detail>
        <p>{data.data.nickname}</p>
        <span>&nbsp;&middot; 언제 </span>
      </Detail>
      <Title>{data.data.title}</Title>
    </EventContainer>
  );
}
const EventContainer = styled.div`
  width: 265px;
  margin-right: 20px;
  &:nth-last-child(1) {
    margin-right: 0px;
  }
`;
const ImgContainer = styled.div`
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
`;
const EventImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;
const Detail = styled.div`
  display: flex;
  margin-bottom: 10px;
  font-size: 14px;
`;
const Title = styled.p`
  width: 265px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export default MainEvent;
