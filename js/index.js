let htmlTeamplate_work = `
<div class="Auto_saleforce none">
        <button type="button" class="btn_Erorr">
            Erorr
            <div class="btn_Erorr_wrap none">
                <div type="button" class="btn_Erorr_1">Erorr 1</div>
                <div type="button" class="btn_Erorr_2">Erorr 2</div>   
                <div type="button" class="btn_Erorr_3">Erorr 3</div>               
            </div>
        </button>
</div>
`

let htmlONOFF = `
    <button type="button" class="btn_ONOFF"></button>
`

var erorr = `
    <div class="long-shopee-react-toast none">
        <div class="shopee-react-toast">
            <div>
                <div class="shopee-react-toast-notice">
                    <div class="shopee-react-toast-notice-content">
                        <div class="shopee-react-toast-body" style="max-width: 600px; flex-direction: column;">
                                <div>
                                    <i class="shopee-react-toast-icon shopee-react-toast-icon--error shopee-react-icon seller-icon-round-close-s shopee-seller-iconfont"></i>
                                    <span class="shopee-react-toast-content">EntryPoint is not in config</span>
                                </div>
                                <input type="text" class="IN_erorr none"/> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`
var erorr2 = `
    <svg viewBox="0 0 16 16" class="error___1_j9o">
        <path d="M8 16A8 8 0 118 0a8 8 0 010 16zm.8-7V4H7.3v5h1.5zm0 3v-1.5H7.3V12h1.5z"></path>
    </svg>
`
// lắng nghe keybroad
//document.addEventListener("keydown", function (event) {console.log(event)}, false)

window.onload = function () {

    Authenticato(1)
        .then((datass) => {
            return Authenticato(2, datass)
        })
        .then((e) => {
            console.log(e);
            if (e === true) {
                var S_order = document.URL.toString().search('cs.shopee.vn/portal/info/')
                var S_inhouse = document.URL.toString().search('cs.shopee.vn/portal/inhouse/')
                console.log(
                    'S_order: ', S_order,
                    'S_inhouse: ', S_inhouse
                )

                START(S_inhouse, S_order)

            } else {
                console.log('Người dùng chưa đăng ký');
            }
        })
}

function Authenticato(params, datass) {
    return new Promise((resolve, reject) => {
        if (params === 1) {
            Get_Email_Request()
                .then((datas) => {
                    //console.log(datas);
                    datas.shift()
                    //console.log(datas);
                    resolve(datas)
                })
        }
        if (params === 2) {
            Get_Email_current()
                .then((Email_current) => {
                    //console.log('Email_current: ', Email_current)
                    //console.log('datass: ', datass)
                    var result = datass.includes(Email_current)
                    resolve(result)
                })
        }
    })
}

function Get_Email_Request() {
    return new Promise(function (resolve, reject) {
        Get_data_gdoc_col('A')
            .then((datas) => {
                resolve(datas)
            })
    })
}

function Get_Email_current() {
    return new Promise(function (resolve, reject) {
        var objValue = { value: "Gửi đi tin nhắn để lấy TabID_work" }

        chrome.runtime.sendMessage(objValue, (e) => {
            var tabID = e.Work_ID
            var Email = e.Email

            // console.group('Nhận phản hồi từ tin nhắn gửi đi: ', objValue)
            // console.log('Work_ID: ', tabID)
            // console.log('Email: ', Email)
            // console.groupEnd()

            resolve(Email)
        })

        // console.group('Gửi đi')
        // console.log('gửi đi: ', objValue)
        // console.groupEnd()
    })
}

function Get_data_gdoc_col(col) {
    return new Promise((resolve, reject) => {
        //https://docs.google.com/spreadsheets/d/149lCWT_uSoAYQpmoj4xPXvknxtGLG5whmskeIHEJA6s/edit#gid=0
        const sheetID = '149lCWT_uSoAYQpmoj4xPXvknxtGLG5whmskeIHEJA6s'
        const sheetName = 'Request_email'
        const url = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?&sheet=${sheetName}`

        var row = []
        var col_ID

        fetch(url)
            .then(res => res.text())
            .then(rep => {
                const data = JSON.parse(rep.substr(47).slice(0, -2))
                // console.log(data);
                // console.log(data.table.cols);
                // console.log(data.table.rows);

                var obj_cols = data.table.cols
                for (var prop_cols in obj_cols) {
                    var obj2_cols = obj_cols[prop_cols]
                    // console.group(prop_cols)
                    // console.log('obj_cols.' + prop_cols + '=' + obj_cols[prop_cols])
                    // console.log('ID: ', obj2_cols.id);
                    // console.log('value: ', obj2_cols.label);
                    // console.groupEnd()
                    if (obj2_cols.id === col) {
                        row = [...row, obj2_cols.label.trim()]
                        //console.log(row)

                        col_ID = prop_cols
                        //console.log('col_ID: ', col_ID);
                    }
                }

                var obj_rows = data.table.rows
                for (var prop_rows in obj_rows) {
                    if (obj_rows[prop_rows].c[col_ID] !== null) {
                        //console.log('prop_rows.' + prop_rows + '=' + obj_rows[prop_rows])   
                        //console.log('nè: ', obj_rows[prop_rows].c[col_ID].v)
                        row = [...row, obj_rows[prop_rows].c[col_ID].v.trim()]
                    }
                }
                resolve(row)
            })
    })
}

function START(S_inhouse, S_order) {
    //word
    if (S_inhouse != -1 && S_order == -1) {
        const body = document.querySelector('body')
        const HTML = document.querySelector('HTML')


        if (body !== null) {
            body.insertAdjacentHTML("afterend", htmlTeamplate_work += erorr)
        } else {
            console.log('Không tìm thấy body');
        }

        //Ẩn Hiện ===============================================================

        var Ele_Auto_saleforce = document.querySelector('.Auto_saleforce')

        document.addEventListener("keydown", function (event) {
            //xem đang nhấn phím gì
            //console.log(event);
            if (event.altKey && event.code === 'KeyO') {
                Ele_Auto_saleforce.classList.toggle("none")
            }
        })


        //=======================================================================

        //lắng nghe IN_erorr=======================================================================
        var el_erorr_value = document.querySelector('.shopee-react-toast-content')
        var el_erorr_body = document.querySelector('.shopee-react-toast-body')
        var el_IN_erorr = document.querySelector('.IN_erorr')

        el_erorr_body.onclick = (e) => {
            e.stopPropagation()

            switch (el_IN_erorr.classList.length) {
                case 1:
                    el_IN_erorr.classList.add("none")
                    el_erorr_value.innerHTML = el_IN_erorr.value
                    break;

                case 2:
                    el_IN_erorr.classList.remove("none")
                    el_IN_erorr.focus()
                    break;

                default:
                    break;
            }
        }

        el_IN_erorr.onkeydown = (e) => {
            if (e.keyCode === 13) {
                el_IN_erorr.classList.add("none")
                el_erorr_value.innerHTML = el_IN_erorr.value
            }
        }

        el_IN_erorr.onclick = (e) => {
            e.stopPropagation()
        }

        //=======================================================================


        const element_work = document.querySelector('.Auto_saleforce')
        const element_btn_Erorr = Array.from(element_work.querySelectorAll('button[class="btn_Erorr"]')[0].children[0].children)
        const Item_word = Array.from(element_work.children)



        if (Item_word !== null) {
            Item_word.forEach((e) => {
                switch (e.classList[0]) {

                    case 'btn_Erorr':
                        e.onclick = (event) => {
                            event.stopPropagation()
                            active(Item_word, e)
                            console.log(e.children[0]);
                            e.children[0].classList.toggle("none")
                        }
                        break;

                    default:
                        console.log('Item_word: không có ', e)
                        break
                }
            });
        } else {
            console.log('Không tìm thấy Item_word')
        }


        if (element_btn_Erorr !== null) {
            element_btn_Erorr.forEach((e) => {
                switch (e.classList[0]) {
                    case 'btn_Erorr_1':
                        e.onclick = (event) => {
                            event.stopPropagation()
                            active(element_btn_Erorr, e)
                            Erorr(1)
                        }
                        keyalt(e, 'KeyL')
                        break;

                    case 'btn_Erorr_2':
                        e.onclick = (event) => {
                            event.stopPropagation()
                            active(element_btn_Erorr, e)
                            Erorr(2)
                        }
                        //keyalt(e, 'KeyL')
                        break;

                    case 'btn_Erorr_3':
                        e.onclick = (event) => {
                            event.stopPropagation()
                            active(element_btn_Erorr, e)
                            Erorr(3)
                        }
                    default:
                        console.log('không được element_btn_Erorr');
                        break;
                }
            })
        } else {
            console.log('Không tìm thấy element_btn_Erorr')
        }





        function Erorr(params) {
            switch (params) {
                case 1:
                    var el_erorr_container = document.querySelector('.long-shopee-react-toast')
                    el_erorr_container.classList.toggle("none")
                    break;

                case 2:
                    Array.from(document.querySelector('#workstation').children[0].children).forEach(e1 => {
                        console.log(Object.keys(e1.attributes).length);
                        if (Object.keys(e1.attributes).length === 2) {
                            var chat_wrapper = e1.children[0].children[1].children[0].children[0].children
                            console.log('chat_wrapper: ', chat_wrapper);
                            Array.from(chat_wrapper).forEach((e2) => {
                                if (e2.classList.value.slice(0, 16) === 'chat_message_box') {
                                    var chat_wrapper_items = e2.children[0].children[0].children[0].children[0].children[0].children[0].children
                                    console.log('chat_wrapper_items: ', chat_wrapper_items);
                                    Array.from(chat_wrapper_items).forEach((e3) => {
                                        e3.innerHTML = ''
                                    })
                                }
                            })
                        }
                    });
                    break;

                case 3:
                    Array.from(document.querySelector('#workstation').children[0].children).forEach(e1 => {
                        console.log(Object.keys(e1.attributes).length);
                        if (Object.keys(e1.attributes).length === 2) {
                            var chat_wrapper = e1.children[0].children[1].children[0].children[0].children
                            console.log('chat_wrapper: ', chat_wrapper);
                            Array.from(chat_wrapper).forEach((e2) => {
                                if (e2.classList.value.slice(0, 16) === 'chat_message_box') {
                                    var chat_wrapper_items = e2.children[0].children[0].children[0].children[0].children[0].children[0].children
                                    console.log('chat_wrapper_items: ', chat_wrapper_items);
                                    Array.from(chat_wrapper_items).forEach((e3) => {

                                        if (e3.children.length !== 0) {
                                            var chat_wrapper_item = e3.children[0].children[0].children[0]

                                            if (chat_wrapper_item.classList[1].slice(0, 14) === 'message_myself') {
                                                //console.log(chat_wrapper_item)
                                                chat_wrapper_item.insertAdjacentHTML("afterbegin", erorr2);
                                            }
                                        }

                                    })
                                }
                            })
                        }
                    });
                    break;

                default:
                    break;
            }

        }

        function Test2(params) {

            chrome.identity.getProfileUserInfo(
                function (info) { console.log(info.email) }
            )
            // var Item_L1
            // Array.from(document.querySelector('#workstation').children[0].children).forEach(e => {
            //     console.log(Object.keys(e.attributes).length);
            //     if (Object.keys(e.attributes).length === 2) {
            //         var id = e.attributes.id.value.substr(44, 11)

            //         console.log(workstation);

            //         if (id === 'case-detail') {
            //             console.log('thông tin');
            //             var list_item_case_detail = e.children[0].children[0].children[0].children[0].children[0].children[0].children[2].children[0].children[1].children[0].children[1].children[0].children[0].children[1].children[0].children
            //             Item_L1 = Find_Item(list_item_case_detail, 'Chủ sở hữu Case').children[1].children[0].children[0].children[0].textContent
            //             console.log(Item_L1)
            //         }

            //         if (id === 'agentchat?s') {
            //             console.log('chat');
            //             var list_item_chat = e.children[0].children[0].children[0].children[0].children[2].children[0].children[1].children[1].children[0].children[0].children[0].children[0].children[1].children[0].children
            //             console.log(list_item_chat);

            //         }

            //         if (id === 'case/create') {
            //             console.log('tạo case')
            //             var list_item_case_create = e.children[0].children[0].children[0].children[0].children[0].children[1].children[0].children[0].children[0].children[0].children[1].children[0].children
            //             console.log(list_item_case_create);

            //         }
            //     }

            // });

            // //Sheet 1
            // //Deployment ID: AKfycbzOId6DbP3PCv3K244bUevQd-BWhWmji3OgePqW_-mxsdCd8-R74_mEYZSy4f3bcgQq
            // //https://script.google.com/macros/s/AKfycbzOId6DbP3PCv3K244bUevQd-BWhWmji3OgePqW_-mxsdCd8-R74_mEYZSy4f3bcgQq/exec

            // //Sheet 2
            // //https://script.google.com/macros/s/AKfycbxyZGcTyOHc5ZomUIGw1c4SGxJj6kCfgtAWhuiLk-jrzPhwEHh0sVrGeNiBK8FYh2f2/exec
            // //Deployment ID: AKfycbxyZGcTyOHc5ZomUIGw1c4SGxJj6kCfgtAWhuiLk-jrzPhwEHh0sVrGeNiBK8FYh2f2

            // //?field_1=123&field_2=456
            // var col1 = 'field_1'
            // var col2 = 'Hello'
            // var data1 = Item_L1
            // console.log(typeof data1, data1);
            // var data2 = 'vulebaolong'
            // var URL = 'https://script.google.com/macros/s/AKfycbzl_uHeypPnuSkSbMAeR10Gy6wfOPLsBGQ70fDfxTtI7tPa9-jMDA13QSnce_ve5KIn/exec'
            // var URL_result = `${URL}?${col1}=${data1}&${col2}=${data2}`
            // fetch(URL_result, {
            //     method: "GET",
            //     dataType: "json",
            // })
            //     .then((response) => {                    
            //         if (!response.ok) {
            //             throw Error(response.statusText)
            //         }
            //         // read the response as json
            //         console.log(response);
            //         return response.json()
            //     })
            //     .then( (responseAsJson) => {
            //         // do logic with JSON
            //         console.log(responseAsJson)
            //     })
            //     .catch( (error) => {
            //         console.log('Error nè: \n', error)
            //     })
        }

        function active(params, elementAdd) {
            params.forEach((e) => {
                e.classList.remove('active')
                elementAdd.classList.add('active')
            })
        }

        function keyalt(e, key) {

            document.addEventListener("keydown", function (event) {
                //xem đang nhấn phím gì
                //console.log(event);
                if (event.altKey && event.code === key) {
                    e.click()
                }

            }, false)
        }


    }
}

