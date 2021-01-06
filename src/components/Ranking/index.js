import React, { useState, useEffect } from 'react'
import { ReloadOutlined } from '@ant-design/icons'
import { numToChart } from '../../utils/index'
import './index.css'
import '../../assets/animate.css'

const Ranking = props => {
  let [num, setNum] = useState(0)
  let [currentItem, setCurrentItem] = useState('-1')
  let list = JSON.parse(JSON.stringify(props.lists))
  const maxNum = list.length / props.topNum
  let lists = list.slice(num * props.topNum, props.topNum * (num + 1))
  useEffect(() => {
    lists = list.slice(num * props.topNum, props.topNum * (num + 1))
  }, [num])
  return (
    <div>
      {list.length > 0 && (
        <ul style={{ width: props.width || '40%' }}>
          <div
            className={'ranking_container'}
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            {props.show &&
              props.lists.length > props.topNum &&
              Boolean(props.topNum) && (
                <span
                  className="ranking_more"
                  onClick={() => {
                    if (num >= maxNum - 1) {
                      setNum(0)
                    } else {
                      setNum(++num)
                    }
                  }}
                >
                  <ReloadOutlined style={{ marginRight: '10px' }} />
                  更多
                </span>
              )}
          </div>
          {lists.map((item, index) => {
            return (
              <li
                index={index}
                key={index}
                className={'ranking_box'}
                style={{
                  display: index + 1 <= props.topNum ? 'display' : 'none',
                  width: '100%',
                }}
              >
                <div className="ranking_leftContent">
                  <span
                    className={'ranking_number'}
                    style={{
                      ...props?.rankingNumberStyle,
                    }}
                    number={item.number}
                  >
                    {item.number}
                  </span>
                  <span
                    className={
                      index == currentItem
                        ? 'ranking_content animated infinite pulse'
                        : 'ranking_content'
                    }
                    index={index}
                    style={{
                      ...props?.rankingContentStyle,
                    }}
                  >
                    <a
                      onMouseOver={e => {
                        setCurrentItem(e.target.getAttribute('index'))
                      }}
                      onMouseLeave={() => {
                        setCurrentItem(-1)
                      }}
                      title={item.title}
                      index={index}
                      href={item.path}
                      style={{
                        ...props?.rankingTitleStyle,
                      }}
                    >
                      {item.title}
                    </a>
                  </span>
                  {item?.iconText && (
                    <span
                      style={{
                        lineHeight: '14px',
                        marginLeft: '5px',
                        background: item.iconBg || '#FF455B',
                        color: '#fff',
                        borderRadius: '4px',
                        fontWeight: 200,
                        padding: '1px 2px',
                        fontSize: '12px',
                      }}
                      className="ranking_iconText"
                    >
                      {item.iconText}
                    </span>
                  )}
                  {item.iconImg && (
                    <img src={item.iconImg} className="rank_iconImg" />
                  )}
                </div>
                <div
                  className={'ranking_clickNumber'}
                  style={{
                    ...props?.rankingClickNumberStyle,
                  }}
                >
                  {numToChart(item.clickNum)}
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default Ranking
