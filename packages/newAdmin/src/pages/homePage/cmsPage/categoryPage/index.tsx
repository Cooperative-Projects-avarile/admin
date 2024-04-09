import { Button, Table } from "antd";
import { useEffect } from "react";
import ModalForm from "./components/modalForm/modalForm";
import SearchForm from "./components/searchForm/searchForm";
import styles from "./style.module.scss";
import useConfig from "./useConfig";

const CategoryPage = () => {
	const { columns } = useConfig();

	useEffect(() => {}, []);

	return (
		<div className={styles.content}>
			{/* 搜索栏目 */}
			<SearchForm></SearchForm>
			{/* 按钮  */}
			<Button
				type="primary"
				style={{
					marginBottom: 12,
				}}
			>
				+ add
			</Button>
			{/* modal */}
			<ModalForm />
			{/* 表格 */}
			<Table
				rowKey={(record) => {
					return record.id;
				}}
				// loading={loading}
				// pagination={{
				// 	pageSize,
				// 	current: pageNum,
				// 	total,
				// 	onChange(page, pageSize) {
				// 		console.log(page, pageSize);
				// 		handlePageChange(page, pageSize);
				// 	},
				// }}
				columns={columns}
				// dataSource={dataList}
			/>
		</div>
	);
};

export default CategoryPage;
