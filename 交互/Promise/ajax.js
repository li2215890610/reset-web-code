
import info, { sun as newSun, METHODS, show}  from "./b.js";

console.log(info);
console.log(METHODS);
show()

const BaseUrl = 'http://hmajax.itheima.net/api/'

function requestHttp({ url, method, requestHeader, data }) {
    
    //创建 Promise对象  pending（待定状态） 
    let axios = new Promise((resolve, reject) => {

        const xml = new XMLHttpRequest()

        // 指定 10 秒钟超时
        xml.timeout = 10 * 1000;

        if ((!METHODS[method] || METHODS[method] === 'GET') && data) {
            const queryStr = new URLSearchParams(data).toString()
            url = `${url}?${queryStr}`
        }

        xml.open(METHODS[method] || 'GET', url)

        //设置 HTTP 请求标头的值。必须在 open() 之后、send() 之前调用 setRequestHeader() 方法。
        if (requestHeader) {
            Object.keys(requestHeader).forEach((item) => {
                xml.setRequestHeader(item, requestHeader[item])
            })
        }

        xml.onreadystatechange = function (readyState) {
            //监听通信状态（readyState属性）的变化。
            /**
             * 0，表示 XMLHttpRequest 实例已经生成，但是实例的open()方法还没有被调用。
             * 1，表示open()方法已经调用，但是实例的send()方法还没有调用，仍然可以使用实例的setRequestHeader()方法，设定 HTTP 请求的头信息。
             * 2，表示实例的send()方法已经调用，并且服务器返回的头信息和状态码已经收到。
             * 3，表示正在接收服务器传来的数据体（body 部分）。这时，如果实例的responseType属性等于text或者空字符串，responseText属性就会包含已经收到的部分信息。
             * 4，表示服务器返回的数据已经完全接收，或者本次接收已经失败。
             * **/
            console.log('监听状态', xml.readyState);
            console.log('-------', readyState);
        };


        //监听接受结果
        xml.addEventListener('loadend', ({ currentTarget }) => {
            console.log(currentTarget);

            const { response, status } = currentTarget;

            if (Number(`${status}`.split("")[0]) === 4) {
                reject(new Error(xml.response))
            }
            const data = JSON.parse(response)

            if (status === 200 && status < 300 && data.list.length !== 0) {
                resolve({ code: 200, ...data })
            } else {
                debugger
                if (data.message) {
                    reject(new Error(data.message))

                }
                reject(new Error(xml.response))
            }
        })

        xml.ontimeout = function () {
            reject(new Error('The request for ' + url + ' timed out.'))
        };

        xml.onerror = function (e) {
            debugger
            reject(new Error(xml.response))
        };

        if (METHODS[method] === "POST") {
            console.log(data);
            debugger
            xml.send({ ...data })
        } else {
            xml.send()
        }

    })

    console.log(axios);

    return axios
}


function register(params) {

    return requestHttp({
        method: METHODS["POST"],
        url: `${BaseUrl}register`,
        requestHeader: {
            'Content-Type': 'application/json',
        },
        data: {
            username: "zhangsan",
            password: "zhangsan"
        }
    })
}

function renderHtml({ data = [], className = ''}) {
    let htmls = data;
    if (Array.isArray(data) && data.length > 0) {
        htmls = data.map((item, i) => {
            console.log(++i);
            return `<li>${i++}-------${item}</li>`
        }).join(" ")
    }
    document.querySelector('ul').innerHTML = htmls
}


function getCity({ url, data }) {

    return requestHttp({
        url: `${BaseUrl}${url}`
        , requestHeader: {
            'Content-Type': 'application/json',
        },
        data
    })
}


let slowFetch = new Promise(resolve => {
    setTimeout(resolve, 200, 'slow');
});

const promiseList = [slowFetch,];

export {
    requestHttp,
    renderHtml,
    getCity,
    BaseUrl,
    newSun,
    register,
    promiseList
}