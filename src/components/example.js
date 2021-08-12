import React, { useEffect, useState } from 'react'
import { connect } from 'dva';

function Example(props) {
    const [count, setCount] = useState(12);

    useEffect(() => {
        console.log('effect');
        return () => {
            console.log('clean')
        }
    }, [count])

    function handleClick() {
        setCount(() => {
            return count + 1
        })
    }

    // 点击按钮时发现屏幕显示的值不发生变化，而且effect里面的函数也没有执行，所以进行的是浅比较，这点类似于pureComponent

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={handleClick}>
                Click me
            </button>
        </div>
    );
}

// Example
export default connect((state) => {
    return {
        num: state.stHook.num,
        list: state.stHook.list
    }
})(Example)