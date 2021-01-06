import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Mark from '../../../components/markdown'

function DajiBox(props) {
  const { getPackageInfo, getDownload } = props
  const [ok, setOk] = useState(false)
  useEffect(() => {
    Promise.all([getDownload('daji'),getPackageInfo('daji') ])
    .then(res => {
      setOk(true)
    })
  }, [])
  const init = params => {
    setOk(false)
    Promise.all([getDownload('daji'),getPackageInfo(params) ])
    .then(res => {
      setOk(true)
    })
  }
  return <div>{ok && <Mark init={init} />}</div>
}

export default connect(
  ({ app, npm }) => ({ ...app, ...npm }),
  ({ app, npm }) => ({ ...app, ...npm })
)(DajiBox)
