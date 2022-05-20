// background.js
var data1;
let color = '#3aa757';
var Email
// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.sync.set({ color });
//   console.log(chrome.storage.sync);
// });

chrome.identity.getProfileUserInfo({'accountStatus': 'ANY'},(info) => {
  Email = info.email
  console.log(info);
  console.log('Email: ', Email)
})



chrome.runtime.onMessage.addListener(
  async function (request, sender, sendResponse) {

    if (sender.tab.url.toString().search('cs.shopee.vn/portal/inhouse/') != -1) {
      var Work_ID = sender.tab.id
      
      // console.group('Lắng nghe từ Word')
      // console.log('Tin nhắn từ Word', request.value);
      // console.log('Work_ID: ', Work_ID)
      // console.log('email: ', Email)
      // console.groupEnd()

      sendResponse({
        Work_ID,
        Email
      })
    }
  }

)





