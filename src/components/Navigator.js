import styled from 'styled-components';
export default function Navigator({ text, setCtg, selected }) {
  const onClickHandle = () => {
    if (text.split(' ')[0] === 'A') {
      setCtg('a');
      window.sessionStorage.setItem('ctg', 'a');
    } else {
      setCtg('b');
      window.sessionStorage.setItem('ctg', 'b');
    }
  };
  return (
    <Container selected={selected} onClick={onClickHandle}>
      <span className='navigator__span--text'>{text}</span>
    </Container>
  );
}

export const Container = styled.div`
  width: 73px;
  height: auto;
  padding: 10.5px;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: rgb(243, 244, 246);
  }
  .navigator__span--text {
    font-size: ${(props) => props.theme.fontSize.base};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    line-height: ${(props) => props.theme.lineHeight.sm};
    color: ${(props) => (props.selected ? 'rgb(59, 130, 246)' : 'black')};
    :hover {
      color: rgb(142, 191, 245);
    }
  }
`;
