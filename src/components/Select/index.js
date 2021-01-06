import React from 'react'
import { Select } from 'antd';
const options = [{ value: 'gold' }, { value: 'lime' }, { value: 'green' }, { value: 'cyan' }];

const KSelect = (props) => {
    return (
        <Select
            mode="multiple"
            showArrow
            tagRender={tagRender}
            defaultValue={['gold', 'cyan']}
            style={{ width: '100%' }}
            options={options}
        />
    )
}

export default KSelect