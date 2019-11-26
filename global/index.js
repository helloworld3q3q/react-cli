/*
 * @Author: lingzhengliang
 * @Date: 2019-11-26 15:31:40
 * @Last Modified by:   lingzhengliang
 * @Last Modified time: 2019-11-26 15:31:40
 * @desc: 域名配置
 */

module.exports = {
    domain: function() {
        let environment = process.env.env_config;
        if (environment == 'test') {
            return 'https://www.test.com'
        } else if (environment == 'pre') {
            return 'https://www.pre.com'
        } else if (environment == 'pro') {
            return 'https://www.pro.com'
        } else if (environment== 'dev') {
            return 'https://www.dev.com'
        }
    }
}