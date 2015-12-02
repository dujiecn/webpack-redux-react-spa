import {Router} from 'director'
import Container from '../container'

//路由管理
const routes = {
    '/home': Container.App()
}

//路由初始化
export default Router(routes).configure({
	notfound:function() {

	},
	before:function() {

	}
}).init();