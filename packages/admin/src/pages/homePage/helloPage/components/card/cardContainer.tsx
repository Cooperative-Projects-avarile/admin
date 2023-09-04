import { Space } from "antd";
import { CardTemplate } from "./cardTemplate";
import { useFlatInject } from "@/common/hooks";
import { useMemo } from "react";

export const CardContainer = () => { 
  const { platformStatisticsData } = useFlatInject("helloPageStore")[0];
  
  const data = useMemo(() => {
    return platformStatisticsData.length > 0 ? platformStatisticsData : [];
   }, [platformStatisticsData]);
  
  return <Space direction="horizontal" size={"large"} style={{ display: 'flex' }}>
    <CardTemplate data={data} title="Users" description="description" />
    <CardTemplate data={data} title="Partners" description="description" />
    <CardTemplate data={data} title="Enquiries" description="description" />
    <CardTemplate data={data} title="Visits" description="description" />
    <CardTemplate data={data} title="Opportunities" description="description" />
  </Space>
}