let htmlTeamplate_order = `
    <div class="Auto_saleforce_order">
        <button type="button" class="btnGet_Order">Get Order</button>           
    </div>
`
console.log('123123123123123');
window.onload = function () {

    const wrapper = document.querySelector('body')
        if (wrapper !== null) {
            wrapper.insertAdjacentHTML("afterend", htmlTeamplate_order);

        } else {
            console.log('Không tìm thấy wrapper');
        }

        const element_Btn_Order = document.querySelector('.btnGet_Order')
        element_Btn_Order.onclick = () => {
            var content = document.querySelector('#logistic-info').children[1].children[0].children[0].children[1].children[0].children
            Array.from(content).forEach(e => {
                Array.from(e.children).forEach(e => {
                    if (e.innerText === 'Shipping Tracking Number:') {
                        var infoOder = e.nextElementSibling.innerText

                        var tinnhan = { index: infoOder }
                        console.log('gửi đi: ', tinnhan);
                        chrome.runtime.sendMessage(tinnhan, (e) => { console.log(e.farewell) });
                        console.log(infoOder);
                    }
                })
            });
        }
        //=======================================================================
        chrome.runtime.onMessage.addListener(
            function (request, sender, sendResponse) {

                console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension",
                    request.data,
                    'nhận: ', request.background,
                    'tabID: ', request.tabID,
                    'url: ', request.pendingUrl,
                    'title: ', request.title,
                    'active: ', request.active,

                )
                sendResponse({ farewell: "goodbye" })
            }

        );
    
    
}
