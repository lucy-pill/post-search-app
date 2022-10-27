// Zustand
import usePostStore from '../zustand/index';

// Assets
import { Container } from '../assets/styles/components/Category.styled';

export default function Category({ text, selected }) {
  const setCtg = usePostStore((state) => state.setCtg);

  const onClickHandle = _ => {
    if (text.split(' ')[0] === 'A') {
      setCtg('a');
    } else {
      setCtg('b');
    }
  };
  return (
    <Container selected={selected} onClick={onClickHandle}>
      <span className='category__span--text'>{text}</span>
    </Container>
  );
}
