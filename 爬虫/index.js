const request = require('request')
const fs = require("fs")
const PATH = require("path")

function m({ word, num, path }) {
    if (!word) return;
    num = parseInt(num);
    let i = 0;
    while (num > 0) {
        req({
            word,
            pn: i * 60,
            rn: Math.min(num, 60),
            path
        });
        i++;
        num -= 60;
    }
}

function req({ word, pn, rn, path }) {
    request({
        url: `https://image.baidu.com/search/acjson?tn=resultjson_com&logid=11538561755429478235&ipn=rj&ct=201326592&is=&fp=result&fr=&word=${encodeURI(word)}&queryWord=${encodeURI(word)}&cl=2&lm=-1&ie=utf-8&oe=utf-8&adpicid=&st=&z=&ic=&hd=&latest=&copyright=&s=&se=&tab=&width=&height=&face=&istype=&qc=&nc=1&expermode=&nojc=&isAsync=&pn=${pn}&rn=${rn}&gsm=366&1658848883621=`,
        "headers": {
            "accept": "text/plain, */*; q=0.01",
            "accept-language": "zh-CN,zh;q=0.9",
            "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest",
            "cookie": "BDIMGISLOGIN=0; winWH=%5E6_1369x739; BDqhfp=%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%26%26NaN-1undefined%26%2622848%26%2638; __yjs_duid=1_ab2a90ff090e4fcdfe4f527ae64c6bb41645103495206; PSTM=1647770385; BIDUPSID=93111BF94D8724939439AE061FC5B382; H_WISE_SIDS=110085_127969_184716_188741_189755_190619_194085_196427_197242_197711_198271_199022_199176_199570_201193_201535_201704_202651_203190_203310_203316_203519_204032_204122_204779_204864_205168_205239_205485_205568_206007_206277_206516_206728_206750_206905_206911_207007_207234_207265_207473_207589_207616_207739_207830_207864_207888_208054_208225_208268_208312_208557_208562_208686_208721_208757_208771_208772_208779_209116_209131_209148_209345_209484_209487_209493_209512_209519_209568_209611_209631_209674_209707_209749_209811_209876; BDUSS=W1zNWgyfnNaSFFyflo1ZEFjdE9uNG13aGRRTXpXbHgxMjBLYktqdlRZNDRpWHhpRUFBQUFBJCQAAAAAAAAAAAEAAAA9zRd8sbG8q9DHSUhYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADj8VGI4~FRiN; BDUSS_BFESS=W1zNWgyfnNaSFFyflo1ZEFjdE9uNG13aGRRTXpXbHgxMjBLYktqdlRZNDRpWHhpRUFBQUFBJCQAAAAAAAAAAAEAAAA9zRd8sbG8q9DHSUhYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADj8VGI4~FRiN; cleanHistoryStatus=0; BAIDUID=F41796A5538EE0AE109EE1B898BA462D:FG=1; BDSFRCVID=yUPOJeC6297DM57D6H6sMB7tVydq273TH6f3PuRP4BRzHA_YHOtQEG0PSf8g0KubwZDDogKK0eOTHk_F_2uxOjjg8UtVJeC6EG0Ptf8g0f5; H_BDCLCKID_SF=tJu8oCLafCK3H48k-4QEbbQH-UnLq5QG22OZ04n-ah02D-_9jfOK3JcBXtKf-PvWyJIq_brm3UTdsq76Wh35K5tTQP6rLtJJy6R4KKJxbp7fSnrDqt5dDU-ThUJiB5O-Ban7BM7IXKohJh7FM4tW3J0ZyxomtfQxtNRJ0DnjtpChbC_4ejL-jjc0eU5eetjK2CntsJOOaCvAfljOy4oWK441DMvHqTQR-HT8Wl6PJ-bsjUFGj6J_3M04X-o9-hvT-54e2p3FBUQjfMTxQft20b0gbbJX0DraBn7x2n7jWhk2eq72y-RrQlRX5q79atTMfNTJ-qcH0KQpsIJM5-DWbT8IjHCHJjFDJJI8_Cv5b-0_qR7v5-bShnLOqxby26n7QTT9aJ5y-J7nhbR4e5oUKlL-htcGtb332aLt_D38QpbZ8h5m-67_2-4U0MFfBl52bN5jKl0MLPbceM3kQCcDX5t1XMnMBMPj5mOnanv73fAKftnOM46JehL3346-35543bRTLnLy5KJYMDFmD50Kj6bBDaRBb-3--K5MWD_8Kb7VbpC95MnkbfJBDRKL0Ub92eP824DMBl_bfbng3l7UQ5L7yajK2M6uaT6CQh64-RoYe-jzyM5pQT8r0fDOK5OibmjKhxOMab3vOIJNXpO1MIuzBN5thURB2DkO-4bCWJ5TMl5jDh3Mb6ksDMDtqjtjJJAOoKPbf-3bfTuw2-rhq4tehHR8LlO9WDTm_D_XJhbYMD3ejxA-KUuYjpOph43DtJke-pPK5DOmffoMjM5C2xkFBnr7Wb3I3mkjbUODfn02OP5P5p6UQ-4syP4jKxRnWI3dKfA-b4ncjRcTehoM3xI8LNj405OTbIFO0KJDJCcjqR8Zj60ajjQP; H_BDCLCKID_SF_BFESS=tJu8oCLafCK3H48k-4QEbbQH-UnLq5QG22OZ04n-ah02D-_9jfOK3JcBXtKf-PvWyJIq_brm3UTdsq76Wh35K5tTQP6rLtJJy6R4KKJxbp7fSnrDqt5dDU-ThUJiB5O-Ban7BM7IXKohJh7FM4tW3J0ZyxomtfQxtNRJ0DnjtpChbC_4ejL-jjc0eU5eetjK2CntsJOOaCvAfljOy4oWK441DMvHqTQR-HT8Wl6PJ-bsjUFGj6J_3M04X-o9-hvT-54e2p3FBUQjfMTxQft20b0gbbJX0DraBn7x2n7jWhk2eq72y-RrQlRX5q79atTMfNTJ-qcH0KQpsIJM5-DWbT8IjHCHJjFDJJI8_Cv5b-0_qR7v5-bShnLOqxby26n7QTT9aJ5y-J7nhbR4e5oUKlL-htcGtb332aLt_D38QpbZ8h5m-67_2-4U0MFfBl52bN5jKl0MLPbceM3kQCcDX5t1XMnMBMPj5mOnanv73fAKftnOM46JehL3346-35543bRTLnLy5KJYMDFmD50Kj6bBDaRBb-3--K5MWD_8Kb7VbpC95MnkbfJBDRKL0Ub92eP824DMBl_bfbng3l7UQ5L7yajK2M6uaT6CQh64-RoYe-jzyM5pQT8r0fDOK5OibmjKhxOMab3vOIJNXpO1MIuzBN5thURB2DkO-4bCWJ5TMl5jDh3Mb6ksDMDtqjtjJJAOoKPbf-3bfTuw2-rhq4tehHR8LlO9WDTm_D_XJhbYMD3ejxA-KUuYjpOph43DtJke-pPK5DOmffoMjM5C2xkFBnr7Wb3I3mkjbUODfn02OP5P5p6UQ-4syP4jKxRnWI3dKfA-b4ncjRcTehoM3xI8LNj405OTbIFO0KJDJCcjqR8Zj60ajjQP; H_PS_PSSID=36543_36466_36822_36454_36414_36165_36872_36745_26350; BAIDUID_BFESS=F41796A5538EE0AE109EE1B898BA462D:FG=1; BDSFRCVID_BFESS=yUPOJeC6297DM57D6H6sMB7tVydq273TH6f3PuRP4BRzHA_YHOtQEG0PSf8g0KubwZDDogKK0eOTHk_F_2uxOjjg8UtVJeC6EG0Ptf8g0f5; delPer=0; PSINO=3; BDRCVFR[dG2JNJb_ajR]=mk3SLVN4HKm; BDRCVFR[-pGxjrCMryR]=mk3SLVN4HKm; indexPageSugList=%5B%22%E8%BF%AA%E4%B8%BD%E7%83%AD%22%2C%22%E8%BF%AA%E4%B8%BD%E7%83%ADhttps%3A%2F%2Fimage.baidu.com%2Fsearch%2Findex%3Ftn%3Dbaiduimage%26ps%3D1%26ct%3D201326592%26lm%3D-1%26cl%3D2%26nc%3D1%26ie%3Dutf-8%26dyTabStr%3DMCwzLDEsNiw0LDUsNywyLDgsOQ%253D%253D%26word%3D%25E8%25BF%25AA%25E4%25B8%25BD%25E7%2583%25AD%25E5%25B7%25B4%22%2C%22%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%22%2C%22%E4%BD%8E%E7%A2%B3%22%2C%22png%E9%80%8F%E6%98%8E%E5%9B%BE%E7%89%87%22%2C%22%E7%AB%99%E9%85%B7%22%2C%222k%E5%B1%8F%22%2C%22%E4%BC%A0%E6%84%9F%E5%99%A8%22%2C%22%E5%95%86%E5%93%81%E8%83%8C%E6%99%AF%22%5D; BDRCVFR[tox4WRQ4-Km]=mk3SLVN4HKm; BDRCVFR[X_XKQks0S63]=mk3SLVN4HKm; firstShowTip=1; BDRCVFR[Q5XHKaSBNfR]=mk3SLVN4HKm",
            "Referer": "https://image.baidu.com/search/index?tn=baiduimage&ps=1&ct=201326592&lm=-1&cl=2&nc=1&ie=utf-8&dyTabStr=MCwzLDEsNiw0LDUsNywyLDgsOQ%3D%3D&word=%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "method": "GET"
    }, (err, res, body) => {
        if (err) return;
        let { data } = JSON.parse(body);
        data.forEach((item, i) => {
            let url = item.hoverURL
            if (!url) return;
            let imgName = (Math.ceil(Math.random() * 100000 + i)).toString(16)
            request(url, err => {})
                .pipe(fs.createWriteStream(PATH.join(path, imgName + '.jpg')))
        })
    });

}
module.exports = m