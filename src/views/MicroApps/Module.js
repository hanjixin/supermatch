import React from 'react'
import { registerMicroApps, start } from 'qiankun'
import { KeepAlive } from 'react-keep-alive'

class Module extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const microModules = [
      {
        name: 'corgi',
        entry: `https://testcorgi.kaikeba.com`,
        container: '#kaikebaMFContainer',
        activeRule: '/micromodule/corgi',
      },
      {
        name: 'cybertron',
        entry: `https://testcorgicybertron.kaikeba.com`,
        container: '#kaikebaMFContainer',
        activeRule: '/micromodule/cybertron',
      },
    ];
    registerMicroApps(microModules || []);
    start() // { scope: { experimentalStyleIsolation: true } }
  }

  render() {
    return (
        // eslint-disable-next-line
      <KeepAlive name={systemName}>
        <div>
          {/* <div style={commonStyle}> */}
          {/*  {config.microModules.map((item, index) => { */}
          {/*    if (index === 0) { */}
          {/*      return selectedRule && selectedRule === item.activeRule ? ( */}
          {/*        <span */}
          {/*          style={{ ...spanStyle, ...spanStyleFirst, ...spanSelected }} */}
          {/*          key={item.activeRule} */}
          {/*        > */}
          {/*          {item.name} */}
          {/*        </span> */}
          {/*      ) : ( */}
          {/*        <span */}
          {/*          style={{ ...spanStyle, ...spanStyleFirst }} */}
          {/*          key={item.activeRule} */}
          {/*          onClick={this.link.bind(this, item.activeRule)} */}
          {/*        > */}
          {/*          {item.name} */}
          {/*        </span> */}
          {/*      ) */}
          {/*    } */}
          {/*    return selectedRule && selectedRule === item.activeRule ? ( */}
          {/*      <span */}
          {/*        style={{ ...spanStyle, ...spanSelected }} */}
          {/*        key={item.activeRule} */}
          {/*      > */}
          {/*        {item.name} */}
          {/*      </span> */}
          {/*    ) : ( */}
          {/*      <span */}
          {/*        style={spanStyle} */}
          {/*        key={item.activeRule} */}
          {/*        onClick={this.link.bind(this, item.activeRule)} */}
          {/*      > */}
          {/*        {item.name} */}
          {/*      </span> */}
          {/*    ) */}
          {/*  })} */}
          {/* </div> */}
          <div id="kaikebaMFContainer" ></div>
        </div>
      </KeepAlive>
    )
  }
}

export default Module
