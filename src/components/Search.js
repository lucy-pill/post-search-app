// React
import { useEffect, useState, useRef } from 'react';

// Zustand
import usePostStore from '../zustand';

// Packages
import { AiOutlineSearch } from 'react-icons/ai';
import { HiOutlineX } from 'react-icons/hi';

// Assets
import { Container } from '../assets/styles/components/Search.styled';

export default function Search() {
  const keyword = usePostStore((state) => state.keyword);
  const setKeyword = usePostStore((state) => state.setKeyword);

  const [iconView, setIconView] = useState(false);
  const [focused, setFocused] = useState(false);

  const keywordRef = useRef();

  const onSearchIconHandle = _ => {
    setFocused(true);
    if (keyword !== '') setIconView(true);
    keywordRef.current.focus();
  };

  const onDeleteHandle = (e) => {
    setKeyword('');
    setIconView(false);
  };

  const onViewHandle = (e) => {
    if (focused) {
      if (keyword !== '') {
        if (iconView === false) {
          setIconView(true);
        }
      } else {
        setIconView(false);
      }
    } else {
      if (e.type === 'mouseover' && keyword !== '') {
        setIconView(true);
      } else {
        setIconView(false);
      }
    }
  };

  const onFocusHandle = (e) => {
    if (e.type === 'focus') setFocused(true);
    else {
      setFocused(false);
      setIconView(false);
    }
  };

  useEffect(_ => {
    if (keyword !== '') {
      if (iconView === false) {
        setIconView(true);
      }
    } else {
      setIconView(false);
    }
  }, [keyword]);

  return (
    <Container focused={focused}>
      <div className='search__div--container'>
        <AiOutlineSearch
          className='search__svg--icon'
          color='#4d4d4d'
          onClick={onSearchIconHandle}
        />
        <div
          className='search__div--box'
          onMouseOver={(e) => onViewHandle(e)}
          onMouseOut={(e) => onViewHandle(e)}
        >
          <input
            className='search__input--box--text'
            type='text'
            value={keyword}
            placeholder='검색어를 입력하세요'
            onChange={(e) => setKeyword(e.target.value)}
            onFocus={(e) => onFocusHandle(e)}
            onBlur={(e) => onFocusHandle(e)}
            ref={keywordRef}
          />
          {iconView ? (
            <div
              className='search__div--box--icon'
              onMouseDown={(e) => onDeleteHandle(e)}
            >
              <HiOutlineX className='search__svg--box--icon' />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </Container>
  );
}
