import {Controller} from "egg";

export default class bohuController extends Controller {
    public async testSql() {
        const {ctx} = this;
        ctx.body = await ctx.service.bohu.testSql('我是参数');
    }
}