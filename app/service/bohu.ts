import {Service} from "egg";

/**
 * 测试sql的服务
 */
export default class bohu extends Service {
    /**
     * 一个测试sql的接口
     */
    public async testSql(msg: string) {
        return '恭喜你接口通了，参数：' + msg
    }
}