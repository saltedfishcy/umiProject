import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Table } from 'antd';
import { connect } from 'dva';

const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];
  
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];

function StHook(props) {
    const [form] = Form.useForm();

    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);
    const [canSearch, setCanSearch] = useState(false);
    
    useEffect(() => {
        const { dispatch } = props;
        dispatch({
            type: 'stHook/getTablesList',
            payload: {}
        })
        setData(()=> {
            return props.list
        })
        console.log('count', count)
    }, [canSearch])


    const SearchHandle = () => {
        const { getFieldsValue } = form;
        let value = getFieldsValue(true);
        const { dispatch } = props;
        setCanSearch(()=> {
            return !canSearch
        })
    }


    const setCountHandle = () => {
        setCount(() => {
            return count + 1
        }) 
    }


    return (
        <div>
            
            <button onClick={() => setCountHandle()}>点击+1</button>
            <div>当前count：{count}</div>
            <Form
                name="customized_form_controls"
                layout="inline"
                form={form}
            >
                <Form.Item name="username">
                    <Input
                        type="text"
                        style={{ width: 100 }}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" onClick={() => SearchHandle()} >搜索</Button>
                </Form.Item>
            </Form>
            <Table columns={columns} dataSource={data} rowKey={(record => record.key)} />
        </div>
    )
}

// StHook
export default connect((state) => {
    return {
        num: state.stHook.num,
        list: state.stHook.list
    }
})(StHook)