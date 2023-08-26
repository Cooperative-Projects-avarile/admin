// 用户信息仓库，信息包括：
// token：登录凭证
// isAdmin：是否是管理员，最高权限，直接跳过权限校验
import { userInfoApi } from "@/services";
import { ITP } from "natur-immer";
import type { PermissionItem, UseInfoStoreState } from "./userInfoStore.model";

const Actions = {
	login:
		({ userName, password }: { userName: string; password: string }) =>
		async ({ setState }: ITP<UseInfoStoreState>) => {
			// 第一步：登录获取token，并存储
			const {
				data: { token = "", permissions="[]", qiNiuToken='' },
			} = await userInfoApi.login({
				username: userName,
				password,
			});
			// 第二步：根据token获取权限，并存储
			const isAdmin = true;
			console.log("set store token" + token);
			let permissionsArr = JSON.parse(permissions);
			setState({
				permissions: permissionsArr,
				qiniuToken: qiNiuToken,
				userName,
				password,
				token: token,
				isAdmin: isAdmin,
			});
			sessionStorage.setItem("ACCESS_TOKEN", token);
			sessionStorage.setItem("PERMISSIONS", permissions);
			sessionStorage.setItem("QINIU_TOKEN", qiNiuToken);
			sessionStorage.setItem("IS_ADMIN", isAdmin ? "1" : "0");
		},
	updatePermissions: async (value: PermissionItem[]) => {
		await userInfoApi.updatePermissions(value);
		sessionStorage.clear();
	},
};

export default Actions;
