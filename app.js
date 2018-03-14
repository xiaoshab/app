var express = require('express');
var app = express();

app.post('/api/list',function(req,res){
	res.json({
		code:0,
		list:[{
                     "logger": {
                            "traceCapable": true,
                            "name": "com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId": 3760240,
                        "positionName": "销售运营管理岗",
                        "city": "北京",
                        "createTime": "今天 10:59",
                        "salary": "13k-15k",
                        "companyId": 65100,
                        "companyLogo": "image1/M00/34/EC/CgYXBlWaH46AETsNAAAGp-dsUFQ322.png",
                        "companyName": "北京新中新",
                        "companyFullName": "北京新中新华捷系统集成有限公司"
                    },
                    {
                        "logger": {
                            "traceCapable": true,
                            "name": "com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId": 3765293,
                        "positionName": "Android开发工程师",
                        "city": "上海",
                        "createTime": "今天 10:58",
                        "salary": "10k-15k",
                        "companyId": 24995,
                        "companyLogo": "image1/M00/00/33/CgYXBlTUXI-AC08_AACIkHlny3Y866.jpg",
                        "companyName": "泛微",
                        "companyFullName": "上海泛微网络科技股份有限公司"
                    },
                    {
                        "logger": {
                            "traceCapable": true,
                            "name": "com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId": 3765276,
                        "positionName": "运维工程师",
                        "city": "北京",
                        "createTime": "今天 10:58",
                        "salary": "11k-15k",
                        "companyId": 6692,
                        "companyLogo": "i/image/M00/60/BB/Cgp3O1f6CDyAE8_OAAB8NF5CFa4180.png",
                        "companyName": "海云数据",
                        "companyFullName": "天津大海云科技有限公司"
                    },
                    {
                        "logger": {
                            "traceCapable": true,
                            "name": "com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId": 3765291,
                        "positionName": "大数据开发工程师",
                        "city": "北京",
                        "createTime": "今天 10:58",
                        "salary": "15k-20k",
                        "companyId": 6692,
                        "companyLogo": "i/image/M00/60/BB/Cgp3O1f6CDyAE8_OAAB8NF5CFa4180.png",
                        "companyName": "海云数据",
                        "companyFullName": "天津大海云科技有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3852124,
                        "positionName":"UGC内容质检编辑实习生",
                        "city":"北京",
                        "createTime":"今天 13:36",
                        "salary":"2k-3k",
                        "companyId":62,
                        "companyLogo":"image1/M00/00/01/Cgo8PFTUV_OAH8cPAACZoNxm1EI176.jpg",
                        "companyName":"今日头条",
                        "companyFullName":"北京字节跳动科技有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3876890,
                        "positionName":"Java开发工程师",
                        "city":"北京",
                        "createTime":"今天 13:21",
                        "salary":"10k-15k",
                        "companyId":28362,
                        "companyLogo":"image1/M00/00/3E/CgYXBlTUXLyAJ9gFAABMZe-vDQA848.jpg",
                        "companyName":"北京海顿中科技术有限公司",
                        "companyFullName":"北京海顿中科技术有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3876835,
                        "positionName":"Hybrid APP开发工程师（混合模式移动应用）",
                        "city":"北京",
                        "createTime":"今天 13:21",
                        "salary":"10k-15k",
                        "companyId":28362,
                        "companyLogo":"image1/M00/00/3E/CgYXBlTUXLyAJ9gFAABMZe-vDQA848.jpg",
                        "companyName":"北京海顿中科技术有限公司",
                        "companyFullName":"北京海顿中科技术有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3872308,
                        "positionName":"天猫运营／店长",
                        "city":"北京",
                        "createTime":"今天 13:21",
                        "salary":"5K-8K",
                        "companyId":180718,
                        "companyLogo":"i/image/M00/02/8D/CgpEMljI0dyAFpWTAAAIIXxwRFA917.png",
                        "companyName":"北京路途科技有限公司",
                        "companyFullName":"北京路途科技有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3850363,
                        "positionName":"全栈工程师",
                        "city":"北京",
                        "createTime":"今天 13:21",
                        "salary":"16k-26k",
                        "companyId":35822,
                        "companyLogo":"image1/M00/00/55/Cgo8PFTUXSCAcdKrAAA9kw51HPI799.png",
                        "companyName":"GeneDock",
                        "companyFullName":"北京聚道科技有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3850673,
                        "positionName":"急招-商家后台产品经理",
                        "city":"北京",
                        "createTime":"今天 13:21",
                        "salary":"18k-30k",
                        "companyId":28882,
                        "companyLogo":"i/image/M00/68/61/CgqKkVgQaeGATKgNAACKWTy2-oc073.jpg",
                        "companyName":"北京新氧科技有限公司",
                        "companyFullName":"北京新氧科技有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3883278,
                        "positionName":"电话销售",
                        "city":"杭州",
                        "createTime":"今天 13:13",
                        "salary":"4k-8k",
                        "companyId":137135,
                        "companyLogo":"i/image/M00/4B/B2/Cgp3O1egOdyAYPL1AAAvsUoTAPQ078.png",
                        "companyName":"美诺瓦医疗",
                        "companyFullName":"杭州美诺瓦医疗科技股份有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3876123,
                        "positionName":"设计师助理-施工图方向",
                        "city":"深圳",
                        "createTime":"今天 13:11",
                        "salary":"4k-6k",
                        "companyId":204302,
                        "companyLogo":"i/image/M00/26/48/CgpEMlkZa8iAc_7HAAJdEJ0E33w586.jpg",
                        "companyName":"嘿装咻",
                        "companyFullName":"深圳市嘿装咻建筑装饰工程有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3876414,
                        "positionName":"设计师助理-物料方向",
                        "city":"深圳",
                        "createTime":"今天 13:11",
                        "salary":"3k-5k",
                        "companyId":204302,
                        "companyLogo":"i/image/M00/26/48/CgpEMlkZa8iAc_7HAAJdEJ0E33w586.jpg",
                        "companyName":"嘿装咻",
                        "companyFullName":"深圳市嘿装咻建筑装饰工程有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3881312,
                        "positionName":"销售经理",
                        "city":"北京",
                        "createTime":"今天 13:11",
                        "salary":"8k-10k",
                        "companyId":173625,
                        "companyLogo":"i/image/M00/A6/F2/CgqKkVitSWiANsogAAKizXinebk549.png",
                        "companyName":"天广汇通",
                        "companyFullName":"北京天广汇通科技有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3872049,
                        "positionName":"运维工程师",
                        "city":"成都",
                        "createTime":"今天 13:10",
                        "salary":"3k-5k",
                        "companyId":33725,
                        "companyLogo":"i/image/M00/54/B4/Cgp3O1fE6K6AQ5G8AAAQQwJoUFg491.jpg",
                        "companyName":"智爱科技",
                        "companyFullName":"四川智爱电子信息科技有限责任公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3881400,
                        "positionName":"SNG10-UI 视觉设计师",
                        "city":"深圳",
                        "createTime":"今天 13:06",
                        "salary":"15k-30k",
                        "companyId":451,
                        "companyLogo":"image1/M00/00/03/CgYXBlTUV_qALGv0AABEuOJDipU378.jpg",
                        "companyName":"腾讯",
                        "companyFullName":"腾讯科技(深圳)有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3877778,
                        "positionName":"销售代表",
                        "city":"南京",
                        "createTime":"今天 13:06",
                        "salary":"6k-8k",
                        "companyId":193357,
                        "companyLogo":"i/image/M00/1D/0A/CgpEMlkC5--AOtrhAAAL0LH7Uq8312.jpg",
                        "companyName":"车置宝",
                        "companyFullName":"江苏车置宝信息科技股份有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3879672,
                        "positionName":"新媒体运营主管",
                        "city":"北京",
                        "createTime":"今天 13:01",
                        "salary":"8k-10k",
                        "companyId":283088,
                        "companyLogo":"i/image2/M00/21/BB/CgotOVoTlx6AdzkuAAEidskrRpA187.jpg",
                        "companyName":"巍峰时代",
                        "companyFullName":"北京巍峰时代商贸有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3879799,
                        "positionName":"新媒体运营助理",
                        "city":"北京",
                        "createTime":"今天 13:01",
                        "salary":"6k-8k",
                        "companyId":283088,
                        "companyLogo":"i/image2/M00/21/BB/CgotOVoTlx6AdzkuAAEidskrRpA187.jpg",
                        "companyName":"巍峰时代",
                        "companyFullName":"北京巍峰时代商贸有限公司"
                    },{"logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3906922,
                        "positionName":"QA/QC主管/电销质检主管",
                        "city":"武汉",
                        "createTime":"今天 17:30",
                        "salary":"5k-8k",
                        "companyId":16213,
                        "companyLogo":"i/image2/M00/0E/04/CgotOVnkdU6AKZY1AAAO6nSt8-0026.png",
                        "companyName":"小鹿情感",
                        "companyFullName":"北京魅动力教育咨询有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3907126,
                        "positionName":"销售经理",
                        "city":"武汉",
                        "createTime":"今天 17:30",
                        "salary":"7k-14k",
                        "companyId":16213,
                        "companyLogo":"i/image2/M00/0E/04/CgotOVnkdU6AKZY1AAAO6nSt8-0026.png",
                        "companyName":"小鹿情感",
                        "companyFullName":"北京魅动力教育咨询有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3885706,
                        "positionName":"资深产品运营（SaaS）",
                        "city":"杭州",
                        "createTime":"今天 17:20",
                        "salary":"12k-20k",
                        "companyId":18655,
                        "companyLogo":"i/image/M00/48/18/Cgp3O1eRtMCASyPWAAArSkfFNEQ507.jpg",
                        "companyName":"大搜车",
                        "companyFullName":"杭州大搜车汽车服务有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3874522,
                        "positionName":"测试工程师（实习）",
                        "city":"上海",
                        "createTime":"今天 17:20",
                        "salary":"3k-5k",
                        "companyId":18655,
                        "companyLogo":"i/image/M00/48/18/Cgp3O1eRtMCASyPWAAArSkfFNEQ507.jpg",
                        "companyName":"大搜车",
                        "companyFullName":"杭州大搜车汽车服务有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3907959,
                        "positionName":"工程监理",
                        "city":"上海",
                        "createTime":"今天 17:18",
                        "salary":"10k-15k",
                        "companyId":1373,
                        "companyLogo":"image1/M00/10/5B/CgYXBlT-quOAC81GAABTRbCEyH0698.png",
                        "companyName":"喜马拉雅",
                        "companyFullName":"上海证大喜马拉雅网络科技有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3907978,
                        "positionName":"连锁店品牌策划经理",
                        "city":"上海",
                        "createTime":"今天 17:18",
                        "salary":"10k-15k",
                        "companyId":1373,
                        "companyLogo":"image1/M00/10/5B/CgYXBlT-quOAC81GAABTRbCEyH0698.png",
                        "companyName":"喜马拉雅",
                        "companyFullName":"上海证大喜马拉雅网络科技有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3872014,
                        "positionName":"抵押审核岗（终审）",
                        "city":"北京",
                        "createTime":"今天 17:16",
                        "salary":"8k-15k",
                        "companyId":16521,
                        "companyLogo":"i/image/M00/78/76/Cgp3O1g7wyWALOKSAABGSgM-HHQ295.png",
                        "companyName":"阳光产险信保事业部",
                        "companyFullName":"阳光保险集团股份有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3880205,
                        "positionName":"JAVA高级开发工程师",
                        "city":"上海",
                        "createTime":"今天 17:15",
                        "salary":"10k-20k",
                        "companyId":39772,
                        "companyLogo":"i/image/M00/36/34/Cgp3O1ddHG-ATRm-AACIP-Be6mM578.jpg",
                        "companyName":"凌志软件",
                        "companyFullName":"苏州工业园区凌志软件股份有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3882967,
                        "positionName":"招聘经理-00021",
                        "city":"北京",
                        "createTime":"今天 17:14",
                        "salary":"13k-15k",
                        "companyId":4502,
                        "companyLogo":"image1/M00/3D/79/CgYXBlW4esGALwfxAAA54wwdGP8713.jpg",
                        "companyName":"世纪鼎点",
                        "companyFullName":"北京世纪鼎点软件有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3879972,
                        "positionName":"Linux运维工程师",
                        "city":"北京",
                        "createTime":"今天 17:13",
                        "salary":"20k-30k",
                        "companyId":21194,
                        "companyLogo":"image1/M00/00/27/Cgo8PFTUWIeAZLdCAABH5_uYMBI958.jpg",
                        "companyName":"互动百科",
                        "companyFullName":"北京互动百科网络技术股份有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3882237,
                        "positionName":"Java 应用软件开发工程师",
                        "city":"西安",
                        "createTime":"今天 17:12",
                        "salary":"10k-20k",
                        "companyId":67300,
                        "companyLogo":"i/image/M00/99/BB/Cgp3O1ihGAGAKUgUAAG55-tWef418.jpeg",
                        "companyName":"ThoughtWorks",
                        "companyFullName":"思特沃克软件技术（成都）有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3883517,
                        "positionName":"IOS开发工程师",
                        "city":"西安",
                        "createTime":"今天 17:12",
                        "salary":"10k-20k",
                        "companyId":67300,
                        "companyLogo":"i/image/M00/99/BB/Cgp3O1ihGAGAKUgUAAG55-tWef418.jpeg",
                        "companyName":"ThoughtWorks",
                        "companyFullName":"思特沃克软件技术（成都）有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3880710,
                        "positionName":"web前端开发工程师",
                        "city":"北京",
                        "createTime":"今天 17:11",
                        "salary":"8k-16k",
                        "companyId":221399,
                        "companyLogo":"i/image/M00/41/81/CgpEMllUx0WAJaWkAAeD8J8BPKQ554.png",
                        "companyName":"智慧摩羯",
                        "companyFullName":"北京智慧摩羯数据科技有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3907142,
                        "positionName":"销售总监",
                        "city":"武汉",
                        "createTime":"今天 17:30",
                        "salary":"15k-20k",
                        "companyId":16213,
                        "companyLogo":"i/image2/M00/0E/04/CgotOVnkdU6AKZY1AAAO6nSt8-0026.png",
                        "companyName":"小鹿情感",
                        "companyFullName":"北京魅动力教育咨询有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3907403,
                        "positionName":"SEM推广",
                        "city":"武汉",
                        "createTime":"今天 17:30",
                        "salary":"4k-8k",
                        "companyId":16213,
                        "companyLogo":"i/image2/M00/0E/04/CgotOVnkdU6AKZY1AAAO6nSt8-0026.png",
                        "companyName":"小鹿情感",
                        "companyFullName":"北京魅动力教育咨询有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3877171,
                        "positionName":"SEO优化师",
                        "city":"杭州",
                        "createTime":"今天 17:20",
                        "salary":"10k-20k",
                        "companyId":18655,
                        "companyLogo":"i/image/M00/48/18/Cgp3O1eRtMCASyPWAAArSkfFNEQ507.jpg",
                        "companyName":"大搜车",
                        "companyFullName":"杭州大搜车汽车服务有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3885577,
                        "positionName":"资深产品运营（内容型）",
                        "city":"杭州",
                        "createTime":"今天 17:20",
                        "salary":"12k-20k",
                        "companyId":18655,
                        "companyLogo":"i/image/M00/48/18/Cgp3O1eRtMCASyPWAAArSkfFNEQ507.jpg",
                        "companyName":"大搜车",
                        "companyFullName":"杭州大搜车汽车服务有限公司"
                    },
                    {"logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3907126,
                        "positionName":"销售经理",
                        "city":"武汉",
                        "createTime":"今天 17:30",
                        "salary":"7k-14k",
                        "companyId":16213,
                        "companyLogo":"i/image2/M00/0E/04/CgotOVnkdU6AKZY1AAAO6nSt8-0026.png",
                        "companyName":"小鹿情感",
                        "companyFullName":"北京魅动力教育咨询有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3885706,
                        "positionName":"资深产品运营（SaaS）",
                        "city":"杭州",
                        "createTime":"今天 17:20",
                        "salary":"12k-20k",
                        "companyId":18655,
                        "companyLogo":"i/image/M00/48/18/Cgp3O1eRtMCASyPWAAArSkfFNEQ507.jpg",
                        "companyName":"大搜车",
                        "companyFullName":"杭州大搜车汽车服务有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3874522,
                        "positionName":"测试工程师（实习）",
                        "city":"上海",
                        "createTime":"今天 17:20",
                        "salary":"3k-5k",
                        "companyId":18655,
                        "companyLogo":"i/image/M00/48/18/Cgp3O1eRtMCASyPWAAArSkfFNEQ507.jpg",
                        "companyName":"大搜车",
                        "companyFullName":"杭州大搜车汽车服务有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3907959,
                        "positionName":"工程监理",
                        "city":"上海",
                        "createTime":"今天 17:18",
                        "salary":"10k-15k",
                        "companyId":1373,
                        "companyLogo":"image1/M00/10/5B/CgYXBlT-quOAC81GAABTRbCEyH0698.png",
                        "companyName":"喜马拉雅",
                        "companyFullName":"上海证大喜马拉雅网络科技有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3907978,
                        "positionName":"连锁店品牌策划经理",
                        "city":"上海",
                        "createTime":"今天 17:18",
                        "salary":"10k-15k",
                        "companyId":1373,
                        "companyLogo":"image1/M00/10/5B/CgYXBlT-quOAC81GAABTRbCEyH0698.png",
                        "companyName":"喜马拉雅",
                        "companyFullName":"上海证大喜马拉雅网络科技有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3872014,
                        "positionName":"抵押审核岗（终审）",
                        "city":"北京",
                        "createTime":"今天 17:16",
                        "salary":"8k-15k",
                        "companyId":16521,
                        "companyLogo":"i/image/M00/78/76/Cgp3O1g7wyWALOKSAABGSgM-HHQ295.png",
                        "companyName":"阳光产险信保事业部",
                        "companyFullName":"阳光保险集团股份有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3880205,
                        "positionName":"JAVA高级开发工程师",
                        "city":"上海",
                        "createTime":"今天 17:15",
                        "salary":"10k-20k",
                        "companyId":39772,
                        "companyLogo":"i/image/M00/36/34/Cgp3O1ddHG-ATRm-AACIP-Be6mM578.jpg",
                        "companyName":"凌志软件",
                        "companyFullName":"苏州工业园区凌志软件股份有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3882967,
                        "positionName":"招聘经理-00021",
                        "city":"北京",
                        "createTime":"今天 17:14",
                        "salary":"13k-15k",
                        "companyId":4502,
                        "companyLogo":"image1/M00/3D/79/CgYXBlW4esGALwfxAAA54wwdGP8713.jpg",
                        "companyName":"世纪鼎点",
                        "companyFullName":"北京世纪鼎点软件有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3879972,
                        "positionName":"Linux运维工程师",
                        "city":"北京",
                        "createTime":"今天 17:13",
                        "salary":"20k-30k",
                        "companyId":21194,
                        "companyLogo":"image1/M00/00/27/Cgo8PFTUWIeAZLdCAABH5_uYMBI958.jpg",
                        "companyName":"互动百科",
                        "companyFullName":"北京互动百科网络技术股份有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3882237,
                        "positionName":"Java 应用软件开发工程师",
                        "city":"西安",
                        "createTime":"今天 17:12",
                        "salary":"10k-20k",
                        "companyId":67300,
                        "companyLogo":"i/image/M00/99/BB/Cgp3O1ihGAGAKUgUAAG55-tWef418.jpeg",
                        "companyName":"ThoughtWorks",
                        "companyFullName":"思特沃克软件技术（成都）有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3883517,
                        "positionName":"IOS开发工程师",
                        "city":"西安",
                        "createTime":"今天 17:12",
                        "salary":"10k-20k",
                        "companyId":67300,
                        "companyLogo":"i/image/M00/99/BB/Cgp3O1ihGAGAKUgUAAG55-tWef418.jpeg",
                        "companyName":"ThoughtWorks",
                        "companyFullName":"思特沃克软件技术（成都）有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3880710,
                        "positionName":"web前端开发工程师",
                        "city":"北京",
                        "createTime":"今天 17:11",
                        "salary":"8k-16k",
                        "companyId":221399,
                        "companyLogo":"i/image/M00/41/81/CgpEMllUx0WAJaWkAAeD8J8BPKQ554.png",
                        "companyName":"智慧摩羯",
                        "companyFullName":"北京智慧摩羯数据科技有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3907142,
                        "positionName":"销售总监",
                        "city":"武汉",
                        "createTime":"今天 17:30",
                        "salary":"15k-20k",
                        "companyId":16213,
                        "companyLogo":"i/image2/M00/0E/04/CgotOVnkdU6AKZY1AAAO6nSt8-0026.png",
                        "companyName":"小鹿情感",
                        "companyFullName":"北京魅动力教育咨询有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3907403,
                        "positionName":"SEM推广",
                        "city":"武汉",
                        "createTime":"今天 17:30",
                        "salary":"4k-8k",
                        "companyId":16213,
                        "companyLogo":"i/image2/M00/0E/04/CgotOVnkdU6AKZY1AAAO6nSt8-0026.png",
                        "companyName":"小鹿情感",
                        "companyFullName":"北京魅动力教育咨询有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3877171,
                        "positionName":"SEO优化师",
                        "city":"杭州",
                        "createTime":"今天 17:20",
                        "salary":"10k-20k",
                        "companyId":18655,
                        "companyLogo":"i/image/M00/48/18/Cgp3O1eRtMCASyPWAAArSkfFNEQ507.jpg",
                        "companyName":"大搜车",
                        "companyFullName":"杭州大搜车汽车服务有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3885577,
                        "positionName":"资深产品运营（内容型）",
                        "city":"杭州",
                        "createTime":"今天 17:20",
                        "salary":"12k-20k",
                        "companyId":18655,
                        "companyLogo":"i/image/M00/48/18/Cgp3O1eRtMCASyPWAAArSkfFNEQ507.jpg",
                        "companyName":"大搜车",
                        "companyFullName":"杭州大搜车汽车服务有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3908116,
                        "positionName":"BI工程师",
                        "city":"西安",
                        "createTime":"今天 17:12",
                        "salary":"15k-25k",
                        "companyId":67300,
                        "companyLogo":"i/image/M00/99/BB/Cgp3O1ihGAGAKUgUAAG55-tWef418.jpeg",
                        "companyName":"ThoughtWorks",
                        "companyFullName":"思特沃克软件技术（成都）有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3908125,
                        "positionName":"ETL工程师",
                        "city":"西安",
                        "createTime":"今天 17:12",
                        "salary":"15k-25k",
                        "companyId":67300,
                        "companyLogo":"i/image/M00/99/BB/Cgp3O1ihGAGAKUgUAAG55-tWef418.jpeg",
                        "companyName":"ThoughtWorks",
                        "companyFullName":"思特沃克软件技术（成都）有限公司"
                    }
                    ]
	})
})

app.post('/api/city',function(req,res){
	res.json({
		code:0,
		city:
             [{"cityList":["北京","上海","广州","深圳","成都","杭州"],"name":"热门城市","nameStr":"热门城市"},
             {"cityList":["保定","北海","北京","包头","长春","成都","常德","承德","重庆","长沙","常州","沧州","滁州","郴州","东莞","大连","东营","德阳","德州","达州","佛山","阜阳","福州"],
             "name":"","nameStr":"ABCDEF"},
             {"cityList":["桂林","贵阳","广州","赣州","淮安","邯郸","哈尔滨","合肥","黄冈","呼和浩特","海口","衡阳","河源","杭州","惠州","湖州","菏泽","金华","江门","荆门","济南","济宁","嘉兴","荆州"],
             "name":"","nameStr":"GHIJ"},
             {"cityList":["昆明","廊坊","丽水","洛阳","临沂","连云港","兰州","柳州","泸州","马鞍山","绵阳","梅州","宁波","南昌","南充","南京","南宁","南通","南阳"],"name":"","nameStr":"KLMN"},
             {"cityList":["莆田","青岛","黔东南","秦皇岛","清远","泉州","日照"],
             "name":"","nameStr":"OPQR"},
             {"cityList":["韶关","上海","石家庄","遂宁","汕头","绍兴","沈阳","三亚","深圳","苏州","泰安","天津","唐山","太原","台州","泰州"],
             "name":"","nameStr":"STUV"},
             {"cityList":["潍坊","武汉","芜湖","威海","乌鲁木齐","无锡","温州","西安","香港","厦门","西宁","邢台","新乡","信阳","襄阳","咸阳","徐州","银川","盐城","宜昌","营口","烟台","岳阳","扬州","淄博","珠海","镇江","湛江","肇庆","中山","遵义","郑州","漳州","株洲"],
             "name":"","nameStr":"WXYZ"}]

	})
})
app.post('/api/login',function(req,res){
	res.json({
		code:0,
		msg:"ok"
	})
})
app.listen(8021,function(){
	console.log("启动成功！")
})