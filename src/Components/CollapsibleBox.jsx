
import React from 'react';
import Collapsible from 'react-collapsible';
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";


export default function CollapsibleBox({ children, heading, headingBold = false, content, type='faq', last = false }) {
  let weight = 400;
  if (headingBold) {
    weight = 600;
  }
  const style = {
    cursor: 'pointer',
    fontWeight: weight,
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0',
  }


  let lineStyle = {
    width: 100 + '%',
    height: '0px',
    border: '0.5px solid #C4C4C4',
    opacity: 1,
    marginTop: '0',
    margin: (type == 'faq') ? '20px 0px' : '10px 0',
  }

  let contentStyle = (type === 'faq') ? ' mt-[10px] text-[#464143] text-[14px] [@media(min-width:1920px)]:text-[18px] font-normal pr-[20px]' : ' mt-[10px] text-[#464143] text-[14px] [@media(min-width:1920px)]:text-[18px] font-normal ';

  return (
    <>
      <Collapsible
        trigger={[heading, <HiOutlineChevronDown style={{ flexShrink: 0, color: '#005CFF', width: '18px', height: '18px' }} />]}
        triggerWhenOpen={[heading, <HiOutlineChevronUp style={{ flexShrink: 0, color: '#005CFF', width: '18px', height: '18px' }} />]}
        triggerStyle={style}
      >
        <div className={contentStyle}>{content}{children}</div>
      </Collapsible >

      {/* line */}

      {last ? <div className='mb-1'></div> : <div style={lineStyle}></div>}

    </>
  );
}