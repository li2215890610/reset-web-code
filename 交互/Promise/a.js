

const N1 = 10;
const N2 = 20;

const show = ()=>{
    console.log('show 方法');
}



//默认导出
export default {
    show,
    N1,
    N2,
    hide(){
        console.log('hide');
    }
}

/////---- 分割线 ------////
console.log('/////---- 分割线 ------////');
import "./c.js";

