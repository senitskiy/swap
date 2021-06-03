const TONTokenWalletContract = {
    abi: {
        "ABI version": 2,
        "header": [
            "pubkey",
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "constructor",
                "inputs": [
                    {
                        "name": "name",
                        "type": "bytes"
                    },
                    {
                        "name": "symbol",
                        "type": "bytes"
                    },
                    {
                        "name": "decimals",
                        "type": "uint8"
                    },
                    {
                        "name": "root_public_key",
                        "type": "uint256"
                    },
                    {
                        "name": "wallet_public_key",
                        "type": "uint256"
                    },
                    {
                        "name": "root_address",
                        "type": "address"
                    },
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ],
                "outputs": [],
                "id": "0xb"
            },
            {
                "name": "transfer",
                "inputs": [
                    {
                        "name": "dest",
                        "type": "address"
                    },
                    {
                        "name": "tokens",
                        "type": "uint128"
                    },
                    {
                        "name": "grams",
                        "type": "uint128"
                    }
                ],
                "outputs": [],
                "id": "0xc"
            },
            {
                "name": "getBalance_InternalOwner",
                "inputs": [
                    {
                        "name": "_answer_id",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint128"
                    }
                ],
                "id": "0xd"
            },
            {
                "name": "accept",
                "inputs": [
                    {
                        "name": "tokens",
                        "type": "uint128"
                    }
                ],
                "outputs": [],
                "id": "0xe"
            },
            {
                "name": "internalTransfer",
                "inputs": [
                    {
                        "name": "tokens",
                        "type": "uint128"
                    },
                    {
                        "name": "pubkey",
                        "type": "uint256"
                    },
                    {
                        "name": "my_owner_addr",
                        "type": "uint256"
                    }
                ],
                "outputs": [],
                "id": "0xf"
            },
            {
                "name": "destroy",
                "inputs": [
                    {
                        "name": "dest",
                        "type": "address"
                    }
                ],
                "outputs": [],
                "id": "0x10"
            },
            {
                "name": "getName",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "bytes"
                    }
                ],
                "id": "0x11"
            },
            {
                "name": "getSymbol",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "bytes"
                    }
                ],
                "id": "0x12"
            },
            {
                "name": "getDecimals",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint8"
                    }
                ],
                "id": "0x13"
            },
            {
                "name": "getBalance",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint128"
                    }
                ],
                "id": "0x14"
            },
            {
                "name": "getWalletKey",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint256"
                    }
                ],
                "id": "0x15"
            },
            {
                "name": "getRootAddress",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "address"
                    }
                ],
                "id": "0x16"
            },
            {
                "name": "getOwnerAddress",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "address"
                    }
                ],
                "id": "0x17"
            },
            {
                "name": "allowance",
                "inputs": [],
                "outputs": [
                    {
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "name": "remainingTokens",
                        "type": "uint128"
                    }
                ],
                "id": "0x18"
            },
            {
                "name": "approve",
                "inputs": [
                    {
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "name": "remainingTokens",
                        "type": "uint128"
                    },
                    {
                        "name": "tokens",
                        "type": "uint128"
                    }
                ],
                "outputs": [],
                "id": "0x19"
            },
            {
                "name": "transferFrom",
                "inputs": [
                    {
                        "name": "dest",
                        "type": "address"
                    },
                    {
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "name": "tokens",
                        "type": "uint128"
                    },
                    {
                        "name": "grams",
                        "type": "uint128"
                    }
                ],
                "outputs": [],
                "id": "0x1a"
            },
            {
                "name": "internalTransferFrom",
                "inputs": [
                    {
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "name": "tokens",
                        "type": "uint128"
                    }
                ],
                "outputs": [],
                "id": "0x1b"
            },
            {
                "name": "disapprove",
                "inputs": [],
                "outputs": [],
                "id": "0x1c"
            }
        ],
        "events": []
    },
    tvc: "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",
};
module.exports = { TONTokenWalletContract };