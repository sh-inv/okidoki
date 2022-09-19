import MainBoardList from './MainBoardList';
import styled from 'styled-components';

function MainBoard() {
  const boardList = ['1', '2', '3', '4', '5'];
  return (
    <>
      <BoardList>
        <Title>
          <h3>타이틀</h3>
        </Title>

        {boardList.map(data => {
          return (
            <Border>
              {' '}
              <MainBoardList />{' '}
            </Border>
          );
        })}
      </BoardList>
    </>
  );
}
const Title = styled.div`
  padding: 20px 30px;
  border-radius: 10px;
  background: #f0f0f0;
`;
const BoardList = styled.div`
  flex: 1 1 40%;
  margin-bottom: 50px;
  &:nth-of-type(even) {
    margin-left: 40px;
  }
`;
const Border = styled.div`
  border-bottom: 1px solid #ddd;
  &:nth-last-of-type(1) {
    border: none;
  }
`;
export default MainBoard;
