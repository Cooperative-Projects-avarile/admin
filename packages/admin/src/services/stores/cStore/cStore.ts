import type { CStoreState } from "./cStore.model";
import actions from "./cStore.action";
import watch from "./cStore.watch";

// 状态初始化函数
// 写成函数，方便初始化
const initState = (): CStoreState => {
  return {
    pageNum: 1,
    pageSize: 10,
    pageList: [],
    total: 0,
  };
};

const cStore = {
  // 状态
  state: initState(),
  // 计算属性
  actions: {
    ...actions,
    init: initState,
  },
  watch,
};

export default cStore;
