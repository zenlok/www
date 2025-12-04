import type { FormattedStream, StreamItem } from "@/types/stream";

export function parseByteArrayToString(bytes: number[]): string {
  const trimmed = bytes.filter((b) => b !== 0);
  return new TextDecoder().decode(new Uint8Array(trimmed));
}

export function parseByteArrayToNumber(bytes: number[]): number {
  const hex = bytes
    .map((b) => b.toString(16).padStart(2, "0"))
    .reverse()
    .join("");
  return Number(BigInt(`0x${hex}`));
}

export function formatStreamData(item: StreamItem): FormattedStream {
  const data = item.data[0];
  if (!data) {
    throw new Error("No data found for stream");
  }

  const isEncrypted = data.enckey !== null;

  if (isEncrypted) {
    return {
      id: item.id,
      recipient: item.authority,
      token: `${item.mint.slice(0, 4)}...${item.mint.slice(-4)}`,
      amount: 0,
      withdrawn: 0,
      unlocked: 0,
      status: item.status.toLowerCase(),
      start: "",
      end: "",
      type: "encrypted",
      name: "Encrypted Stream",
      isEncrypted: true,
    };
  }

  const name = parseByteArrayToString(data.name);
  const amount = parseByteArrayToNumber(data.amount);
  const withdrawn = parseByteArrayToNumber(data.withdrawn);

  // Timestamps
  const lockTimestamp = parseByteArrayToNumber(data.lockTimestamp);
  const unlockTimestamp = parseByteArrayToNumber(data.unlockTimestamp);

  const startDate = new Date(lockTimestamp * 1000).toISOString().split("T")[0];
  const endDate = new Date(unlockTimestamp * 1000).toISOString().split("T")[0];

  return {
    id: item.id,
    recipient: item.authority,
    token: `${item.mint.slice(0, 4)}...${item.mint.slice(-4)}`,
    amount: amount,
    withdrawn: withdrawn,
    unlocked: amount - withdrawn,
    status: item.status.toLowerCase(),
    start: startDate,
    end: endDate,
    type: "public",
    name: name,
    isEncrypted: false,
  };
}

export const MOCK_API_RESPONSE = {
  status: "success",
  data: {
    items: [
      {
        address: "2evrGMQBA4fwkmUExkA4nBiS9RSYfvtGPKVTm8CuGx9d",
        bump: 255,
        version: 1,
        id: "2",
        mint: "4s4nVn34E62hfLDaQbCCBZWwPFo1ZCqeCLgy9CyU1Aac",
        authority: "AVZiQWoKZN72mpkx7En8CrQtETjJTjiaZEA5yLXvDL8N",
        status: "Completed",
        immutable: false,
        pendingType: "None",
        pendingAmount: [
          0, 232, 118, 72, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        pendingAuthority: null,
        data: [
          {
            address: "Du8WCMPJDCfnqeUbm9JccktchkoFTWczZXJ63kMH1iN7",
            owner: "AVZiQWoKZN72mpkx7En8CrQtETjJTjiaZEA5yLXvDL8N",
            bump: 255,
            stream: "2evrGMQBA4fwkmUExkA4nBiS9RSYfvtGPKVTm8CuGx9d",
            name: [
              224, 224, 126, 125, 208, 1, 174, 60, 228, 127, 201, 5, 54, 215,
              50, 140, 13, 117, 221, 71, 25, 135, 193, 124, 52, 252, 70, 145,
              206, 77, 199, 72,
            ],
            amount: [
              80, 249, 8, 244, 115, 219, 18, 171, 1, 155, 153, 167, 204, 20,
              201, 203, 194, 151, 132, 223, 116, 95, 60, 101, 124, 253, 183, 98,
              145, 29, 160, 29,
            ],
            withdrawn: [
              220, 50, 122, 40, 18, 88, 64, 130, 62, 142, 47, 227, 205, 197,
              249, 236, 131, 59, 21, 119, 191, 131, 22, 246, 72, 141, 46, 84,
              152, 137, 200, 100,
            ],
            strategyType: "TimeLock",
            lockTimestamp: [
              191, 251, 94, 210, 246, 44, 218, 100, 41, 235, 35, 30, 27, 180,
              227, 152, 8, 175, 48, 119, 127, 243, 180, 234, 175, 113, 70, 188,
              32, 157, 153, 26,
            ],
            unlockTimestamp: [
              227, 62, 200, 144, 233, 52, 203, 255, 195, 91, 251, 9, 201, 47,
              82, 236, 76, 115, 33, 90, 202, 173, 188, 22, 69, 27, 201, 240,
              236, 107, 58, 72,
            ],
            vestingStart: null,
            vestingEnd: null,
            cliffAmount: null,
            period: null,
            enckey: [
              114, 32, 206, 141, 73, 223, 86, 229, 156, 114, 102, 49, 247, 22,
              223, 153, 177, 93, 92, 212, 2, 150, 6, 132, 130, 208, 210, 51,
              229, 26, 39, 108,
            ],
            nonce: [
              151, 168, 101, 79, 153, 4, 140, 111, 143, 141, 50, 169, 11, 105,
              152, 96,
            ],
          },
        ],
      },
      {
        address: "H67Bd35FuEo9qofCVFAvo5yhegdFmJTco8VFdFf99iV4",
        bump: 255,
        version: 1,
        id: "1",
        mint: "58pMpTxLhzheF4GfPm6yhnZpn1YH7HLQ9yvsV11Wcjoq",
        authority: "AVZiQWoKZN72mpkx7En8CrQtETjJTjiaZEA5yLXvDL8N",
        status: "Completed",
        immutable: false,
        pendingType: "None",
        pendingAmount: null,
        pendingAuthority: null,
        data: [
          {
            address: "9srFSLpjZx3LYBQEYcmKYJnRiefKtxZhXdBL2rqy8aLW",
            owner: "AVZiQWoKZN72mpkx7En8CrQtETjJTjiaZEA5yLXvDL8N",
            bump: 255,
            stream: "H67Bd35FuEo9qofCVFAvo5yhegdFmJTco8VFdFf99iV4",
            name: [
              80, 117, 98, 108, 105, 99, 32, 67, 79, 72, 32, 83, 116, 114, 101,
              97, 109, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ],
            amount: [
              0, 208, 237, 144, 46, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ],
            withdrawn: [
              0, 208, 237, 144, 46, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ],
            strategyType: "TimeLock",
            lockTimestamp: [
              242, 27, 49, 105, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ],
            unlockTimestamp: [
              246, 27, 49, 105, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ],
            vestingStart: null,
            vestingEnd: null,
            cliffAmount: null,
            period: null,
            enckey: null,
            nonce: null,
          },
        ],
      },
    ],
    pagination: {
      page: 1,
      limit: 10,
      total: 2,
      totalPages: 1,
    },
  },
};
