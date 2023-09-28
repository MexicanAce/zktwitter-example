export type ABIInput = {
  indexed?: boolean;
  internalType: string;
  name: string;
  type: string;
};

export type ABIOutput = {
  internalType: string;
  name: string;
  type: string;
};

export type ABIItem = {
  anonymous?: boolean;
  inputs: ABIInput[];
  name: string;
  outputs?: ABIOutput[];
  stateMutability: "view" | "nonpayable" | "payable";
  type: "function" | "event" | "constructor";
  constant?: boolean;
  signature?: string;
};

export type Contract = {
  abi: ABIItem[];
  address: {
    [key: number]: string;
  };
  name: string;
};
