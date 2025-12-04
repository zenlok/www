export interface StreamData {
  address: string;
  owner: string;
  bump: number;
  stream: string;
  name: number[];
  amount: number[];
  withdrawn: number[];
  strategyType: string;
  lockTimestamp: number[];
  unlockTimestamp: number[];
  vestingStart: number[] | null;
  vestingEnd: number[] | null;
  cliffAmount: number[] | null;
  period: number[] | null;
  enckey: number[] | null;
  nonce: number[] | null;
}

export interface StreamItem {
  address: string;
  bump: number;
  version: number;
  id: string;
  mint: string;
  authority: string;
  status: string;
  immutable: boolean;
  pendingType: string;
  pendingAmount: number[] | null;
  pendingAuthority: string | null;
  data: StreamData[];
}

export interface StreamPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface StreamResponse {
  status: string;
  data: {
    items: StreamItem[];
    pagination: StreamPagination;
  };
}

export interface FormattedStream {
  id: string;
  recipient: string;
  token: string;
  amount: number;
  withdrawn: number;
  unlocked: number;
  status: string;
  start: string;
  end: string;
  type: "public" | "encrypted";
  name: string;
  isEncrypted: boolean;
}
