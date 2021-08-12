
const stHook = {
  namespace: 'stHook',
  state: { 
    num: 0,
    list: []
  },
  effects: {
    *getTablesList({ payload }, { call, put, select }) {
      console.log(333)

        if(payload.isSearchBtnHandle) {
          yield put({
            type: 'save',
            payload: {
              list: [
                {
                  key: '1',
                  name: '胡彦斌',
                  age: 32,
                  address: '西湖区湖底公园1号',
                },
              ]
            },
          });
        } else {
          console.log(2222)
          yield put({
            type: 'save',
            payload: {
                list: [
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
                ]
            },
          });
        }
        
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};

export default stHook;
