// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file vultisig/keysign/v1/blockchain_specific.proto (package vultisig.keysign.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type {
  BinaryReadOptions,
  FieldList,
  JsonReadOptions,
  JsonValue,
  PartialMessage,
  PlainMessage,
} from '@bufbuild/protobuf';
import { Message, proto3, protoInt64 } from '@bufbuild/protobuf';

/**
 * @generated from enum vultisig.keysign.v1.TransactionType
 */
export enum TransactionType {
  /**
   * @generated from enum value: TRANSACTION_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: TRANSACTION_TYPE_VOTE = 1;
   */
  VOTE = 1,

  /**
   * @generated from enum value: TRANSACTION_TYPE_PROPOSAL = 2;
   */
  PROPOSAL = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(TransactionType)
proto3.util.setEnumType(
  TransactionType,
  'vultisig.keysign.v1.TransactionType',
  [
    { no: 0, name: 'TRANSACTION_TYPE_UNSPECIFIED' },
    { no: 1, name: 'TRANSACTION_TYPE_VOTE' },
    { no: 2, name: 'TRANSACTION_TYPE_PROPOSAL' },
  ]
);

/**
 * @generated from message vultisig.keysign.v1.UTXOSpecific
 */
export class UTXOSpecific extends Message<UTXOSpecific> {
  /**
   * @generated from field: string byte_fee = 1;
   */
  byteFee = '';

  /**
   * @generated from field: bool send_max_amount = 2;
   */
  sendMaxAmount = false;

  constructor(data?: PartialMessage<UTXOSpecific>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'vultisig.keysign.v1.UTXOSpecific';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'byte_fee', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    {
      no: 2,
      name: 'send_max_amount',
      kind: 'scalar',
      T: 8 /* ScalarType.BOOL */,
    },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): UTXOSpecific {
    return new UTXOSpecific().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): UTXOSpecific {
    return new UTXOSpecific().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): UTXOSpecific {
    return new UTXOSpecific().fromJsonString(jsonString, options);
  }

  static equals(
    a: UTXOSpecific | PlainMessage<UTXOSpecific> | undefined,
    b: UTXOSpecific | PlainMessage<UTXOSpecific> | undefined
  ): boolean {
    return proto3.util.equals(UTXOSpecific, a, b);
  }
}

/**
 * @generated from message vultisig.keysign.v1.EthereumSpecific
 */
export class EthereumSpecific extends Message<EthereumSpecific> {
  /**
   * @generated from field: string max_fee_per_gas_wei = 1;
   */
  maxFeePerGasWei = '';

  /**
   * @generated from field: string priority_fee = 2;
   */
  priorityFee = '';

  /**
   * @generated from field: int64 nonce = 3;
   */
  nonce = protoInt64.zero;

  /**
   * @generated from field: string gas_limit = 4;
   */
  gasLimit = '';

  constructor(data?: PartialMessage<EthereumSpecific>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'vultisig.keysign.v1.EthereumSpecific';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    {
      no: 1,
      name: 'max_fee_per_gas_wei',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
    },
    {
      no: 2,
      name: 'priority_fee',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
    },
    { no: 3, name: 'nonce', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: 'gas_limit', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): EthereumSpecific {
    return new EthereumSpecific().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): EthereumSpecific {
    return new EthereumSpecific().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): EthereumSpecific {
    return new EthereumSpecific().fromJsonString(jsonString, options);
  }

  static equals(
    a: EthereumSpecific | PlainMessage<EthereumSpecific> | undefined,
    b: EthereumSpecific | PlainMessage<EthereumSpecific> | undefined
  ): boolean {
    return proto3.util.equals(EthereumSpecific, a, b);
  }
}

/**
 * @generated from message vultisig.keysign.v1.THORChainSpecific
 */
export class THORChainSpecific extends Message<THORChainSpecific> {
  /**
   * @generated from field: uint64 account_number = 1;
   */
  accountNumber = protoInt64.zero;

  /**
   * @generated from field: uint64 sequence = 2;
   */
  sequence = protoInt64.zero;

  /**
   * @generated from field: uint64 fee = 3;
   */
  fee = protoInt64.zero;

  /**
   * @generated from field: bool is_deposit = 4;
   */
  isDeposit = false;

  constructor(data?: PartialMessage<THORChainSpecific>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'vultisig.keysign.v1.THORChainSpecific';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    {
      no: 1,
      name: 'account_number',
      kind: 'scalar',
      T: 4 /* ScalarType.UINT64 */,
    },
    { no: 2, name: 'sequence', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: 'fee', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: 'is_deposit', kind: 'scalar', T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): THORChainSpecific {
    return new THORChainSpecific().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): THORChainSpecific {
    return new THORChainSpecific().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): THORChainSpecific {
    return new THORChainSpecific().fromJsonString(jsonString, options);
  }

  static equals(
    a: THORChainSpecific | PlainMessage<THORChainSpecific> | undefined,
    b: THORChainSpecific | PlainMessage<THORChainSpecific> | undefined
  ): boolean {
    return proto3.util.equals(THORChainSpecific, a, b);
  }
}

/**
 * @generated from message vultisig.keysign.v1.MAYAChainSpecific
 */
export class MAYAChainSpecific extends Message<MAYAChainSpecific> {
  /**
   * @generated from field: uint64 account_number = 1;
   */
  accountNumber = protoInt64.zero;

  /**
   * @generated from field: uint64 sequence = 2;
   */
  sequence = protoInt64.zero;

  /**
   * @generated from field: bool is_deposit = 3;
   */
  isDeposit = false;

  constructor(data?: PartialMessage<MAYAChainSpecific>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'vultisig.keysign.v1.MAYAChainSpecific';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    {
      no: 1,
      name: 'account_number',
      kind: 'scalar',
      T: 4 /* ScalarType.UINT64 */,
    },
    { no: 2, name: 'sequence', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: 'is_deposit', kind: 'scalar', T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): MAYAChainSpecific {
    return new MAYAChainSpecific().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): MAYAChainSpecific {
    return new MAYAChainSpecific().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): MAYAChainSpecific {
    return new MAYAChainSpecific().fromJsonString(jsonString, options);
  }

  static equals(
    a: MAYAChainSpecific | PlainMessage<MAYAChainSpecific> | undefined,
    b: MAYAChainSpecific | PlainMessage<MAYAChainSpecific> | undefined
  ): boolean {
    return proto3.util.equals(MAYAChainSpecific, a, b);
  }
}

/**
 * @generated from message vultisig.keysign.v1.CosmosSpecific
 */
export class CosmosSpecific extends Message<CosmosSpecific> {
  /**
   * @generated from field: uint64 account_number = 1;
   */
  accountNumber = protoInt64.zero;

  /**
   * @generated from field: uint64 sequence = 2;
   */
  sequence = protoInt64.zero;

  /**
   * @generated from field: uint64 gas = 3;
   */
  gas = protoInt64.zero;

  /**
   * @generated from field: vultisig.keysign.v1.TransactionType transaction_type = 4;
   */
  transactionType = TransactionType.UNSPECIFIED;

  constructor(data?: PartialMessage<CosmosSpecific>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'vultisig.keysign.v1.CosmosSpecific';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    {
      no: 1,
      name: 'account_number',
      kind: 'scalar',
      T: 4 /* ScalarType.UINT64 */,
    },
    { no: 2, name: 'sequence', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: 'gas', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    {
      no: 4,
      name: 'transaction_type',
      kind: 'enum',
      T: proto3.getEnumType(TransactionType),
    },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): CosmosSpecific {
    return new CosmosSpecific().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): CosmosSpecific {
    return new CosmosSpecific().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): CosmosSpecific {
    return new CosmosSpecific().fromJsonString(jsonString, options);
  }

  static equals(
    a: CosmosSpecific | PlainMessage<CosmosSpecific> | undefined,
    b: CosmosSpecific | PlainMessage<CosmosSpecific> | undefined
  ): boolean {
    return proto3.util.equals(CosmosSpecific, a, b);
  }
}

/**
 * @generated from message vultisig.keysign.v1.SolanaSpecific
 */
export class SolanaSpecific extends Message<SolanaSpecific> {
  /**
   * @generated from field: string recent_block_hash = 1;
   */
  recentBlockHash = '';

  /**
   * @generated from field: string priority_fee = 2;
   */
  priorityFee = '';

  /**
   * @generated from field: optional string from_token_associated_address = 3;
   */
  fromTokenAssociatedAddress?: string;

  /**
   * @generated from field: optional string to_token_associated_address = 4;
   */
  toTokenAssociatedAddress?: string;

  constructor(data?: PartialMessage<SolanaSpecific>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'vultisig.keysign.v1.SolanaSpecific';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    {
      no: 1,
      name: 'recent_block_hash',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
    },
    {
      no: 2,
      name: 'priority_fee',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
    },
    {
      no: 3,
      name: 'from_token_associated_address',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
      opt: true,
    },
    {
      no: 4,
      name: 'to_token_associated_address',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
      opt: true,
    },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): SolanaSpecific {
    return new SolanaSpecific().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): SolanaSpecific {
    return new SolanaSpecific().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): SolanaSpecific {
    return new SolanaSpecific().fromJsonString(jsonString, options);
  }

  static equals(
    a: SolanaSpecific | PlainMessage<SolanaSpecific> | undefined,
    b: SolanaSpecific | PlainMessage<SolanaSpecific> | undefined
  ): boolean {
    return proto3.util.equals(SolanaSpecific, a, b);
  }
}

/**
 * @generated from message vultisig.keysign.v1.PolkadotSpecific
 */
export class PolkadotSpecific extends Message<PolkadotSpecific> {
  /**
   * @generated from field: string recent_block_hash = 1;
   */
  recentBlockHash = '';

  /**
   * @generated from field: uint64 nonce = 2;
   */
  nonce = protoInt64.zero;

  /**
   * @generated from field: string current_block_number = 3;
   */
  currentBlockNumber = '';

  /**
   * @generated from field: uint32 spec_version = 4;
   */
  specVersion = 0;

  /**
   * @generated from field: uint32 transaction_version = 5;
   */
  transactionVersion = 0;

  /**
   * @generated from field: string genesis_hash = 6;
   */
  genesisHash = '';

  constructor(data?: PartialMessage<PolkadotSpecific>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'vultisig.keysign.v1.PolkadotSpecific';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    {
      no: 1,
      name: 'recent_block_hash',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
    },
    { no: 2, name: 'nonce', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    {
      no: 3,
      name: 'current_block_number',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
    },
    {
      no: 4,
      name: 'spec_version',
      kind: 'scalar',
      T: 13 /* ScalarType.UINT32 */,
    },
    {
      no: 5,
      name: 'transaction_version',
      kind: 'scalar',
      T: 13 /* ScalarType.UINT32 */,
    },
    {
      no: 6,
      name: 'genesis_hash',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
    },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): PolkadotSpecific {
    return new PolkadotSpecific().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): PolkadotSpecific {
    return new PolkadotSpecific().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): PolkadotSpecific {
    return new PolkadotSpecific().fromJsonString(jsonString, options);
  }

  static equals(
    a: PolkadotSpecific | PlainMessage<PolkadotSpecific> | undefined,
    b: PolkadotSpecific | PlainMessage<PolkadotSpecific> | undefined
  ): boolean {
    return proto3.util.equals(PolkadotSpecific, a, b);
  }
}

/**
 * @generated from message vultisig.keysign.v1.CoinKeyValuePair
 */
export class CoinKeyValuePair extends Message<CoinKeyValuePair> {
  /**
   * @generated from field: string key = 1;
   */
  key = '';

  /**
   * @generated from field: string value = 2;
   */
  value = '';

  constructor(data?: PartialMessage<CoinKeyValuePair>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'vultisig.keysign.v1.CoinKeyValuePair';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'key', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'value', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): CoinKeyValuePair {
    return new CoinKeyValuePair().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): CoinKeyValuePair {
    return new CoinKeyValuePair().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): CoinKeyValuePair {
    return new CoinKeyValuePair().fromJsonString(jsonString, options);
  }

  static equals(
    a: CoinKeyValuePair | PlainMessage<CoinKeyValuePair> | undefined,
    b: CoinKeyValuePair | PlainMessage<CoinKeyValuePair> | undefined
  ): boolean {
    return proto3.util.equals(CoinKeyValuePair, a, b);
  }
}

/**
 * @generated from message vultisig.keysign.v1.SuiSpecific
 */
export class SuiSpecific extends Message<SuiSpecific> {
  /**
   * @generated from field: string reference_gas_price = 1;
   */
  referenceGasPrice = '';

  /**
   * @generated from field: repeated vultisig.keysign.v1.CoinKeyValuePair coin_key_value_pairs = 2;
   */
  coinKeyValuePairs: CoinKeyValuePair[] = [];

  constructor(data?: PartialMessage<SuiSpecific>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'vultisig.keysign.v1.SuiSpecific';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    {
      no: 1,
      name: 'reference_gas_price',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
    },
    {
      no: 2,
      name: 'coin_key_value_pairs',
      kind: 'message',
      T: CoinKeyValuePair,
      repeated: true,
    },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): SuiSpecific {
    return new SuiSpecific().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): SuiSpecific {
    return new SuiSpecific().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): SuiSpecific {
    return new SuiSpecific().fromJsonString(jsonString, options);
  }

  static equals(
    a: SuiSpecific | PlainMessage<SuiSpecific> | undefined,
    b: SuiSpecific | PlainMessage<SuiSpecific> | undefined
  ): boolean {
    return proto3.util.equals(SuiSpecific, a, b);
  }
}
