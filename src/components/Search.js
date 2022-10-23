// React
import { useEffect, useState, useRef } from 'react';

// Packages
import { AiOutlineSearch } from 'react-icons/ai';
import { HiOutlineX } from 'react-icons/hi';

import styled from 'styled-components';

export default function Search() {
  const [keyword, setKeyword] = useState('');
  const [iconView, setIconView] = useState(false);
  const [focused, setFocused] = useState(false);

  const keywordRef = useRef();

  const onSearchIconHandle = () => {
    setFocused(true);
    if(keyword !== '') setIconView(true);
    keywordRef.current.focus();
  };

  const onDeleteHandle = () => {
    setKeyword('');
    setIconView(false);
  };

  const onViewHandle = (e) => {
    if(focused) {
      setIconView(true);
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

  useEffect(() => {
    if (keyword !== '') {
      setIconView(true);
    }
  }, [keyword]);

  return (
    <Container focused={focused}>
      <div className='search__div--container'>
        <AiOutlineSearch
          className='search__svg--icon'
          color='#4d4d4d'
          onClick={() => onSearchIconHandle()}
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
              onClick={() => onDeleteHandle()}
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

export const Container = styled.div`
  width: 24rem;
  height: auto;
  .search__div--container {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: ${(props) =>
      props.focused ? '1px solid rgb(89, 148, 244)' : '1px solid #cecece'};
    border-radius: 5px;
    :hover {
      border: 1px solid rgb(89, 148, 244);
    }
    .search__svg--icon {
      font-size: ${(props) => props.theme.fontSize.xl};
    }
    .search__div--box {
      width: 20rem;
      height: auto;
      position: relative;
      .search__input--box--text {
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(-50%);
        width: 100%;
        font-size: ${(props) => props.theme.fontSize.base};
        line-height: ${(props) => props.theme.lineHeight.base};
        padding: 0 30px 0 5px;
        border: none;
      }
      .search__div--box--icon {
        position: absolute;
        top: 0;
        right: 5px;
        transform: translateY(-50%);
        width: auto;
        height: auto;
        font-size: ${(props) => props.theme.fontSize.xl};
        cursor: pointer;
        .search__svg--box--icon {
          color: rgb(89, 148, 244);
        }
      }
    }
  }
`;
