import { METHOD as METHODS } from "./method.js";
//一次性导入 重命名
import * as menthod1  from "./method.js";

import MA1 from "./a.js";

console.log(MA1);

console.log(menthod1);

const sun = ()=>{
    console.log('模块测试');
}

const hide = MA1.hide

export const show = MA1.show

export  {
    METHODS,
    sun
}

export default {
    hide
}