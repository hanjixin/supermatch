import React from 'react'
import marked from 'marked'
import { Avatar, Tooltip } from 'antd'
import { connect } from 'react-redux'
import { howLongTime } from '../../utils/index'
import { color } from '../../consts/index'
import './index.css'

function Mark(props) {
  const { packageInfo, packageDownload, version } = props
  const download = {
    total: 0,
    today: 0,
    Tweek: 0,
    Tmonth: 0,
    lastDay: 0, 
    lastWeek: 0,
    lastMonth: 0,
  }
  packageDownload.downloads.map(item => (download.total += item.downloads))
  download.today =
    packageDownload.downloads[packageDownload.downloads.length - 1].downloads
  download.lastDay =
    packageDownload.downloads[packageDownload.downloads.length - 2].downloads
  const nowTime = new Date().getTime()
  packageDownload.downloads.map((item, index) => {
    const todayXq = new Date(
      packageDownload.downloads[packageDownload.downloads.length - 1].day
    ).getDay()
    const lastWeek = new Date(
      packageDownload.downloads[
        packageDownload.downloads.length - 1 - todayXq
      ].day
    ).getDay()
    if (
      index >= packageDownload.downloads.length - lastWeek - todayXq &&
      index < packageDownload.downloads.length - todayXq
    ) {
      download.lastWeek += item.downloads
    }
    if (index >= packageDownload.downloads.length - todayXq) {
      download.Tweek += item.downloads
    }
  })
  const month = packageDownload.downloads[
    packageDownload.downloads.length - 1
  ].day.split('-')[1]
  let lastMonth
  month === 1 ? (lastMonth = 12) : (lastMonth = month - 1)
  const year = packageDownload.downloads[
    packageDownload.downloads.length - 1
  ].day.split('-')[0]
  let lastyear
  month === 1 ? (lastyear = year - 1) : (lastyear = year)

  packageDownload.downloads.map((item, index) => {
    if (
      item.day.split('-')[1] == lastMonth &&
      item.day.split('-')[0] == lastyear
    ) {
      download.lastMonth += item.downloads
    }
  })
  packageDownload.downloads.map((item, index) => {
    if (item.day.split('-')[1] == month && item.day.split('-')[0] == year) {
      download.Tmonth += item.downloads
    }
  })
  let rendererMD = new marked.Renderer()
  marked.setOptions({
    renderer: rendererMD,
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
  })
  let htmlString = marked(packageInfo.readme)
  return (
    <div className="markdown">
      <div className="left_markdown">
        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
        <h2>Current Tags</h2>
        <p>
          {'version' in packageInfo ? (
            <>
              <span
                style={{
                  display: 'inline-block',
                  width: '60px',
                  marginRight: '10px',
                }}
              >
                {packageInfo.version}
              </span>{' '}
              ------------------------------------------------------------
              <span
                style={{
                  display: 'inline-block',
                  width: '140px',
                  marginLeft: '30px',
                }}
              >
                {howLongTime(
                  nowTime - version[`${packageInfo.version}`].publish_time
                )}
                )
              </span>
            </>
          ) : (
            <>
              <span
                style={{
                  display: 'inline-block',
                  width: '60px',
                  marginRight: '10px',
                }}
              >
                {packageInfo['dist-tags'].latest}
              </span>{' '}
              ------------------------------------------------------------
              <span
                style={{
                  display: 'inline-block',
                  width: '140px',
                  marginLeft: '30px',
                }}
              >
                latest(
                {howLongTime(
                  nowTime -
                    version[`${packageInfo['dist-tags'].latest}`].publish_time
                )}
                )
              </span>
            </>
          )}
        </p>
        <h2>{Object.keys(version).length} Versions</h2>
        <div>
          {Object.keys(version).map((item, index) => {
            return (
              <p key={item}>
                <span
                  style={{
                    display: 'inline-block',
                    width: '60px',
                    marginRight: '10px',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    props.init(`daji/${item}`)
                  }}
                >
                  {item}
                </span>{' '}
                ------------------------------------------------------------
                <span
                  style={{
                    display: 'inline-block',
                    width: '140px',
                    marginLeft: '30px',
                  }}
                >
                  {howLongTime(nowTime - version[item].publish_time)}
                </span>
              </p>
            )
          })}
        </div>
      </div>
      <div className="right_markdown">
        <div className="markdown_Maintainers">
          <h2>Maintainers({packageInfo.maintainers.length})</h2>
          <Avatar.Group style={{ paddingLeft: '20px' }}>
            {packageInfo.maintainers.map((item, index) => {
              return (
                <Tooltip key={item + index} title={item.name} placement="top">
                  <Avatar
                    style={{
                      backgroundColor:
                        index < 7 ? color[index] : color[index % 7],
                    }}
                  >
                    {item.name[0].toUpperCase()}
                  </Avatar>
                </Tooltip>
              )
            })}
          </Avatar.Group>
        </div>
        <div className="markdown_Maintainers">
          <h2>Downloads</h2>
          <div
            style={{
              paddingLeft: '20px',
            }}
          >
            <p>total: {download.total}</p>
            <p>today: {download.today}</p>
            <p>this week: {download.Tweek}</p>
            <p>this month: {download.Tmonth}</p>
            <p>last day: {download.lastDay}</p>
            <p>last week: {download.lastWeek}</p>
            <p>last month: {download.lastMonth}</p>
          </div>
        </div>
        <div className="markdown_Maintainers">
          <h2 style={{ paddingLeft: '20px' }}>Dependencies</h2>
          <div
            style={{
              paddingLeft: '20px',
            }}
          >
            {Object.keys(
              version[`${packageInfo['dist-tags'].latest}`].dependencies
            ).map((item, index) => {
              return (
                <p
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Tooltip key={item + index} title={item} placement="top">
                    <span
                      style={{
                        display: 'inline-block',
                        width: '100px',
                        marginRight: '10px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {item}
                    </span>
                  </Tooltip>
                  ---------------
                  <span
                    style={{
                      display: 'inline-block',
                      width: '60px',
                      marginLeft: '30px',
                    }}
                  >
                    {
                      version[`${packageInfo['dist-tags'].latest}`]
                        .dependencies[item]
                    }
                  </span>
                </p>
              )
            })}
          </div>
        </div>
        <div className="markdown_Maintainers">
          <h2 style={{ paddingLeft: '20px' }}>DevDependencies</h2>
          <div
            style={{
              paddingLeft: '20px',
            }}
          >
            {Object.keys(
              version[`${packageInfo['dist-tags'].latest}`].devDependencies
            ).map((item, index) => {
              return (
                <p
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Tooltip key={item + index} title={item} placement="top">
                    <span
                      style={{
                        display: 'inline-block',
                        width: '100px',
                        marginRight: '10px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {item}
                    </span>
                  </Tooltip>
                  ---------------
                  <span
                    style={{
                      display: 'inline-block',
                      width: '60px',
                      marginLeft: '30px',
                    }}
                  >
                    {
                      version[`${packageInfo['dist-tags'].latest}`]
                        .devDependencies[item]
                    }
                  </span>
                </p>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(
  ({ app, npm }) => ({ ...app, ...npm }),
  ({ app, npm }) => ({ ...app, ...npm })
)(Mark)
