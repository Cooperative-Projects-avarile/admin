export interface StoreState {
	dataList: PageType[];
	total: number;
	pageSize: number;
	pageNum: number;
	isShowAddModal: boolean;
	isUpdate: boolean;
	recordData: unknown;
	loading: boolean;
	isDetail: boolean;
	formVersion:string
}

export interface PageType {
    id: number;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    is_draft: boolean;
    priority: number;
    is_submitted: boolean;
    is_approved: boolean;
    type: string;
    title: string;
    sub_title: string | null;
    logo: string | null;
    vendor_financing: boolean;
    amount: number | null;
    ask_desc: string;
    expire_at: string | null;
    rating: number;
    status: string;
    reject_reason: string | null;
    media: string | null;
    tags: string[] | null;
    components: any[] | null;
    attachments: any[] | null;
    reasons: any[] | null;
    last_business_for_sale_reminder_sent_at: string | null;
    user_id: number;
    category_id: number | null;
    official_deal_id: number | null;
    prime_category_name: string;
    parent_category_name: string;
    sub_category_name: string;
    liked: boolean;
}

export interface QueryActParams {
    created_at?: string[];
    deleted_at?: string[];
    expire_at?: string[];
    ids?: number[];
    is_approved?: boolean;
    is_draft?: boolean;
    is_submitted?: boolean;
    official_deal_id?: number;
    page?: number;
    page_size?: number;
    status?: Status;
    title?: string;
    type?: TypeEnum;
    updated_at?: string[];
    user_id?: number;
    with_deleted?: boolean;
}

export enum Status {
    Active = "active",
    Deactivated = "deactivated",
    Fullfilled = "fullfilled",
    FullyFunded = "fully_funded",
    Pending = "pending",
    Rejected = "rejected",
    Sold = "sold",
    SoldOut = "sold_out",
    Suspended = "suspended",
}

export enum TypeEnum {
    CapitalRaising = "capital_raising",
    Equity = "equity",
    Partnerships = "partnerships",
    SellABusiness = "sell_a_business",
    StartupPitch = "startup_pitch",
}
