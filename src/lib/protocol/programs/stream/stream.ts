/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/stream.json`.
 */
export type Stream = {
  address: "KsM9g4ZdkSsnLS8eHuvXp5Ua9NsYU6nNWSLg6w83LRw";
  metadata: {
    name: "stream";
    version: "0.1.0";
    spec: "0.1.0";
    description: "Created with Arcium & Anchor";
  };
  instructions: [
    {
      name: "acceptOwnership";
      discriminator: [172, 23, 43, 13, 238, 213, 85, 150];
      accounts: [
        {
          name: "authority";
          writable: true;
          signer: true;
        },
        {
          name: "stream";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [115, 116, 114, 101, 97, 109];
              },
              {
                kind: "account";
                path: "stream.id";
                account: "stream";
              },
            ];
          };
        },
        {
          name: "prevStreamData";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [115, 116, 114, 101, 97, 109, 45, 100, 97, 116, 97];
              },
              {
                kind: "account";
                path: "stream";
              },
              {
                kind: "account";
                path: "stream.authority";
                account: "stream";
              },
            ];
          };
        },
        {
          name: "newStreamData";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [115, 116, 114, 101, 97, 109, 45, 100, 97, 116, 97];
              },
              {
                kind: "account";
                path: "stream";
              },
              {
                kind: "account";
                path: "authority";
              },
            ];
          };
        },
        {
          name: "signPdaAccount";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  83,
                  105,
                  103,
                  110,
                  101,
                  114,
                  65,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                ];
              },
            ];
          };
        },
        {
          name: "mxeAccount";
        },
        {
          name: "mempoolAccount";
          writable: true;
        },
        {
          name: "executingPool";
          writable: true;
        },
        {
          name: "computationAccount";
          writable: true;
        },
        {
          name: "compDefAccount";
        },
        {
          name: "clusterAccount";
          writable: true;
        },
        {
          name: "poolAccount";
          writable: true;
          address: "7MGSS4iKNM4sVib7bDZDJhVqB6EcchPwVnTKenCY1jt3";
        },
        {
          name: "clockAccount";
          address: "FHriyvoZotYiFnbUzKFjzRSb2NiaC8RPWY7jtKuKhg65";
        },
        {
          name: "arciumProgram";
          address: "BKck65TgoKRokMjQM3datB9oRwJ8rAj2jxPXvHXUvcL6";
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111";
        },
      ];
      args: [
        {
          name: "params";
          type: {
            defined: {
              name: "acceptOwnershipParams";
            };
          };
        },
      ];
    },
    {
      name: "acceptOwnershipCallback";
      discriminator: [132, 6, 90, 187, 174, 7, 158, 106];
      accounts: [
        {
          name: "arciumProgram";
          address: "BKck65TgoKRokMjQM3datB9oRwJ8rAj2jxPXvHXUvcL6";
        },
        {
          name: "compDefAccount";
        },
        {
          name: "instructionsSysvar";
          address: "Sysvar1nstructions1111111111111111111111111";
        },
        {
          name: "prevAuthority";
          writable: true;
        },
        {
          name: "newAuthority";
          writable: true;
        },
        {
          name: "stream";
          writable: true;
        },
        {
          name: "stream1";
          writable: true;
        },
        {
          name: "prevStreamData";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [115, 116, 114, 101, 97, 109, 45, 100, 97, 116, 97];
              },
              {
                kind: "account";
                path: "stream";
              },
              {
                kind: "account";
                path: "stream.authority";
                account: "stream";
              },
            ];
          };
        },
        {
          name: "newStreamData";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [115, 116, 114, 101, 97, 109, 45, 100, 97, 116, 97];
              },
              {
                kind: "account";
                path: "stream";
              },
              {
                kind: "account";
                path: "newAuthority";
              },
            ];
          };
        },
      ];
      args: [
        {
          name: "output";
          type: {
            defined: {
              name: "computationOutputs";
              generics: [
                {
                  kind: "type";
                  type: {
                    defined: {
                      name: "acceptOwnershipOutput";
                    };
                  };
                },
              ];
            };
          };
        },
      ];
    },
    {
      name: "cancelTransferOwnership";
      discriminator: [35, 141, 53, 128, 38, 249, 26, 24];
      accounts: [
        {
          name: "authority";
          writable: true;
          signer: true;
        },
        {
          name: "stream";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [115, 116, 114, 101, 97, 109];
              },
              {
                kind: "account";
                path: "stream.id";
                account: "stream";
              },
            ];
          };
        },
      ];
      args: [];
    },
    {
      name: "create";
      discriminator: [24, 30, 200, 40, 5, 28, 7, 119];
      accounts: [
        {
          name: "authority";
          writable: true;
          signer: true;
        },
        {
          name: "protocol";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [112, 114, 111, 116, 111, 99, 111, 108];
              },
            ];
          };
        },
        {
          name: "protocolAuthority";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  45,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                ];
              },
            ];
          };
        },
        {
          name: "developer";
          writable: true;
          optional: true;
        },
        {
          name: "stream";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [115, 116, 114, 101, 97, 109];
              },
              {
                kind: "account";
                path: "protocol";
              },
            ];
          };
        },
        {
          name: "streamData";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [115, 116, 114, 101, 97, 109, 45, 100, 97, 116, 97];
              },
              {
                kind: "account";
                path: "stream";
              },
              {
                kind: "account";
                path: "authority";
              },
            ];
          };
        },
        {
          name: "tokenMint";
        },
        {
          name: "userAcc";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "account";
                path: "userAccAuthority";
              },
              {
                kind: "account";
                path: "tokenMintProgram";
              },
              {
                kind: "account";
                path: "tokenMint";
              },
            ];
            program: {
              kind: "const";
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89,
              ];
            };
          };
        },
        {
          name: "userAccAuthority";
          signer: true;
          optional: true;
        },
        {
          name: "vaultAcc";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [118, 97, 117, 108, 116];
              },
              {
                kind: "account";
                path: "stream";
              },
            ];
          };
        },
        {
          name: "protocolMint";
          optional: true;
        },
        {
          name: "pmintUserAcc";
          writable: true;
          optional: true;
          pda: {
            seeds: [
              {
                kind: "account";
                path: "pmintUserAccAuthority";
              },
              {
                kind: "account";
                path: "pmintTokenProgram";
              },
              {
                kind: "account";
                path: "protocolMint";
              },
            ];
            program: {
              kind: "const";
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89,
              ];
            };
          };
        },
        {
          name: "pmintUserAccAuthority";
          signer: true;
          optional: true;
        },
        {
          name: "pmintDeveloperAcc";
          writable: true;
          optional: true;
          pda: {
            seeds: [
              {
                kind: "account";
                path: "developer";
              },
              {
                kind: "account";
                path: "pmintTokenProgram";
              },
              {
                kind: "account";
                path: "protocolMint";
              },
            ];
            program: {
              kind: "const";
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89,
              ];
            };
          };
        },
        {
          name: "signPdaAccount";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  83,
                  105,
                  103,
                  110,
                  101,
                  114,
                  65,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                ];
              },
            ];
          };
        },
        {
          name: "mxeAccount";
        },
        {
          name: "mempoolAccount";
          writable: true;
        },
        {
          name: "executingPool";
          writable: true;
        },
        {
          name: "computationAccount";
          writable: true;
        },
        {
          name: "compDefAccount";
        },
        {
          name: "clusterAccount";
          writable: true;
        },
        {
          name: "poolAccount";
          writable: true;
          address: "7MGSS4iKNM4sVib7bDZDJhVqB6EcchPwVnTKenCY1jt3";
        },
        {
          name: "clockAccount";
          address: "FHriyvoZotYiFnbUzKFjzRSb2NiaC8RPWY7jtKuKhg65";
        },
        {
          name: "arciumProgram";
          address: "BKck65TgoKRokMjQM3datB9oRwJ8rAj2jxPXvHXUvcL6";
        },
        {
          name: "tokenMintProgram";
        },
        {
          name: "pmintTokenProgram";
          optional: true;
        },
        {
          name: "associatedTokenProgram";
          address: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL";
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111";
        },
      ];
      args: [
        {
          name: "params";
          type: {
            defined: {
              name: "createParams";
            };
          };
        },
      ];
    },
    {
      name: "createCallback";
      discriminator: [37, 60, 243, 207, 107, 52, 224, 169];
      accounts: [
        {
          name: "arciumProgram";
          address: "BKck65TgoKRokMjQM3datB9oRwJ8rAj2jxPXvHXUvcL6";
        },
        {
          name: "compDefAccount";
        },
        {
          name: "instructionsSysvar";
          address: "Sysvar1nstructions1111111111111111111111111";
        },
        {
          name: "stream";
          writable: true;
        },
        {
          name: "streamData";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [115, 116, 114, 101, 97, 109, 45, 100, 97, 116, 97];
              },
              {
                kind: "account";
                path: "stream";
              },
              {
                kind: "account";
                path: "stream.authority";
                account: "stream";
              },
            ];
          };
        },
      ];
      args: [
        {
          name: "output";
          type: {
            defined: {
              name: "computationOutputs";
              generics: [
                {
                  kind: "type";
                  type: {
                    defined: {
                      name: "createOutput";
                    };
                  };
                },
              ];
            };
          };
        },
      ];
    },
    {
      name: "extend";
      discriminator: [228, 127, 0, 1, 227, 154, 54, 168];
      accounts: [
        {
          name: "authority";
          writable: true;
          signer: true;
        },
        {
          name: "protocol";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [112, 114, 111, 116, 111, 99, 111, 108];
              },
            ];
          };
        },
        {
          name: "protocolAuthority";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  45,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                ];
              },
            ];
          };
        },
        {
          name: "stream";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [115, 116, 114, 101, 97, 109];
              },
              {
                kind: "account";
                path: "stream.id";
                account: "stream";
              },
            ];
          };
        },
        {
          name: "streamData";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [115, 116, 114, 101, 97, 109, 45, 100, 97, 116, 97];
              },
              {
                kind: "account";
                path: "stream";
              },
              {
                kind: "account";
                path: "authority";
              },
            ];
          };
        },
        {
          name: "tokenMint";
        },
        {
          name: "userAcc";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "account";
                path: "userAccAuthority";
              },
              {
                kind: "account";
                path: "tokenProgram";
              },
              {
                kind: "account";
                path: "tokenMint";
              },
            ];
            program: {
              kind: "const";
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89,
              ];
            };
          };
        },
        {
          name: "userAccAuthority";
          signer: true;
          optional: true;
        },
        {
          name: "vaultAcc";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [118, 97, 117, 108, 116];
              },
              {
                kind: "account";
                path: "stream";
              },
            ];
          };
        },
        {
          name: "signPdaAccount";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  83,
                  105,
                  103,
                  110,
                  101,
                  114,
                  65,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                ];
              },
            ];
          };
        },
        {
          name: "mxeAccount";
        },
        {
          name: "mempoolAccount";
          writable: true;
        },
        {
          name: "executingPool";
          writable: true;
        },
        {
          name: "computationAccount";
          writable: true;
        },
        {
          name: "compDefAccount";
        },
        {
          name: "clusterAccount";
          writable: true;
        },
        {
          name: "poolAccount";
          writable: true;
          address: "7MGSS4iKNM4sVib7bDZDJhVqB6EcchPwVnTKenCY1jt3";
        },
        {
          name: "clockAccount";
          address: "FHriyvoZotYiFnbUzKFjzRSb2NiaC8RPWY7jtKuKhg65";
        },
        {
          name: "arciumProgram";
          address: "BKck65TgoKRokMjQM3datB9oRwJ8rAj2jxPXvHXUvcL6";
        },
        {
          name: "tokenProgram";
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111";
        },
      ];
      args: [
        {
          name: "params";
          type: {
            defined: {
              name: "extendParams";
            };
          };
        },
      ];
    },
    {
      name: "extendCallback";
      discriminator: [48, 42, 80, 47, 112, 41, 210, 104];
      accounts: [
        {
          name: "arciumProgram";
          address: "BKck65TgoKRokMjQM3datB9oRwJ8rAj2jxPXvHXUvcL6";
        },
        {
          name: "compDefAccount";
        },
        {
          name: "instructionsSysvar";
          address: "Sysvar1nstructions1111111111111111111111111";
        },
        {
          name: "stream";
          writable: true;
        },
        {
          name: "streamData";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [115, 116, 114, 101, 97, 109, 45, 100, 97, 116, 97];
              },
              {
                kind: "account";
                path: "stream";
              },
              {
                kind: "account";
                path: "stream.authority";
                account: "stream";
              },
            ];
          };
        },
      ];
      args: [
        {
          name: "output";
          type: {
            defined: {
              name: "computationOutputs";
              generics: [
                {
                  kind: "type";
                  type: {
                    defined: {
                      name: "extendOutput";
                    };
                  };
                },
              ];
            };
          };
        },
      ];
    },
    {
      name: "initAcceptOwnershipCompDef";
      discriminator: [78, 79, 138, 17, 160, 93, 95, 152];
      accounts: [
        {
          name: "payer";
          writable: true;
          signer: true;
        },
        {
          name: "mxeAccount";
          writable: true;
        },
        {
          name: "compDefAccount";
          docs: ["Can't check it here as it's not initialized yet."];
          writable: true;
        },
        {
          name: "arciumProgram";
          address: "BKck65TgoKRokMjQM3datB9oRwJ8rAj2jxPXvHXUvcL6";
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111";
        },
      ];
      args: [];
    },
    {
      name: "initCreateCompDef";
      discriminator: [64, 196, 244, 94, 207, 75, 218, 229];
      accounts: [
        {
          name: "payer";
          writable: true;
          signer: true;
        },
        {
          name: "mxeAccount";
          writable: true;
        },
        {
          name: "compDefAccount";
          docs: ["Can't check it here as it's not initialized yet."];
          writable: true;
        },
        {
          name: "arciumProgram";
          address: "BKck65TgoKRokMjQM3datB9oRwJ8rAj2jxPXvHXUvcL6";
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111";
        },
      ];
      args: [];
    },
    {
      name: "initExtendCompDef";
      discriminator: [3, 244, 75, 123, 172, 181, 135, 104];
      accounts: [
        {
          name: "payer";
          writable: true;
          signer: true;
        },
        {
          name: "mxeAccount";
          writable: true;
        },
        {
          name: "compDefAccount";
          docs: ["Can't check it here as it's not initialized yet."];
          writable: true;
        },
        {
          name: "arciumProgram";
          address: "BKck65TgoKRokMjQM3datB9oRwJ8rAj2jxPXvHXUvcL6";
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111";
        },
      ];
      args: [];
    },
    {
      name: "initWithdrawCompDef";
      discriminator: [123, 165, 129, 195, 92, 182, 226, 232];
      accounts: [
        {
          name: "payer";
          writable: true;
          signer: true;
        },
        {
          name: "mxeAccount";
          writable: true;
        },
        {
          name: "compDefAccount";
          docs: ["Can't check it here as it's not initialized yet."];
          writable: true;
        },
        {
          name: "arciumProgram";
          address: "BKck65TgoKRokMjQM3datB9oRwJ8rAj2jxPXvHXUvcL6";
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111";
        },
      ];
      args: [];
    },
    {
      name: "initialize";
      discriminator: [175, 175, 109, 31, 13, 152, 155, 237];
      accounts: [
        {
          name: "payer";
          writable: true;
          signer: true;
        },
        {
          name: "protocol";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [112, 114, 111, 116, 111, 99, 111, 108];
              },
            ];
          };
        },
        {
          name: "authority";
          signer: true;
        },
        {
          name: "protocolAuthority";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  45,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                ];
              },
            ];
          };
        },
        {
          name: "signPdaAccount";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  83,
                  105,
                  103,
                  110,
                  101,
                  114,
                  65,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                ];
              },
            ];
          };
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111";
        },
      ];
      args: [
        {
          name: "params";
          type: {
            defined: {
              name: "initializeParams";
            };
          };
        },
      ];
    },
    {
      name: "setAuthority";
      discriminator: [133, 250, 37, 21, 110, 163, 26, 121];
      accounts: [
        {
          name: "authority";
          signer: true;
        },
        {
          name: "protocol";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [112, 114, 111, 116, 111, 99, 111, 108];
              },
            ];
          };
        },
      ];
      args: [];
    },
    {
      name: "setDeveloper";
      discriminator: [1, 69, 75, 227, 176, 176, 31, 130];
      accounts: [
        {
          name: "authority";
          signer: true;
        },
        {
          name: "protocol";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [112, 114, 111, 116, 111, 99, 111, 108];
              },
            ];
          };
        },
      ];
      args: [];
    },
    {
      name: "setFees";
      discriminator: [137, 178, 49, 58, 0, 245, 242, 190];
      accounts: [
        {
          name: "authority";
          signer: true;
        },
        {
          name: "protocol";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [112, 114, 111, 116, 111, 99, 111, 108];
              },
            ];
          };
        },
      ];
      args: [
        {
          name: "params";
          type: {
            defined: {
              name: "fees";
            };
          };
        },
      ];
    },
    {
      name: "setToken";
      discriminator: [22, 161, 71, 245, 113, 41, 215, 234];
      accounts: [
        {
          name: "authority";
          signer: true;
        },
        {
          name: "protocol";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [112, 114, 111, 116, 111, 99, 111, 108];
              },
            ];
          };
        },
      ];
      args: [];
    },
    {
      name: "transferOwnership";
      discriminator: [65, 177, 215, 73, 53, 45, 99, 47];
      accounts: [
        {
          name: "authority";
          writable: true;
          signer: true;
        },
        {
          name: "stream";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [115, 116, 114, 101, 97, 109];
              },
              {
                kind: "account";
                path: "stream.id";
                account: "stream";
              },
            ];
          };
        },
        {
          name: "streamData";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [115, 116, 114, 101, 97, 109, 45, 100, 97, 116, 97];
              },
              {
                kind: "account";
                path: "stream";
              },
              {
                kind: "account";
                path: "stream.authority";
                account: "stream";
              },
            ];
          };
        },
        {
          name: "newAuthority";
          docs: ["The new authority to transfer ownership to"];
        },
      ];
      args: [];
    },
    {
      name: "withdraw";
      discriminator: [183, 18, 70, 156, 148, 109, 161, 34];
      accounts: [
        {
          name: "authority";
          writable: true;
          signer: true;
        },
        {
          name: "protocol";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [112, 114, 111, 116, 111, 99, 111, 108];
              },
            ];
          };
        },
        {
          name: "protocolAuthority";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  45,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                ];
              },
            ];
          };
        },
        {
          name: "stream";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [115, 116, 114, 101, 97, 109];
              },
              {
                kind: "account";
                path: "stream.id";
                account: "stream";
              },
            ];
          };
        },
        {
          name: "streamData";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [115, 116, 114, 101, 97, 109, 45, 100, 97, 116, 97];
              },
              {
                kind: "account";
                path: "stream";
              },
              {
                kind: "account";
                path: "stream.authority";
                account: "stream";
              },
            ];
          };
        },
        {
          name: "tokenMint";
        },
        {
          name: "vaultAcc";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [118, 97, 117, 108, 116];
              },
              {
                kind: "account";
                path: "stream";
              },
            ];
          };
        },
        {
          name: "userAcc";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "account";
                path: "stream.authority";
                account: "stream";
              },
              {
                kind: "account";
                path: "tokenProgram";
              },
              {
                kind: "account";
                path: "tokenMint";
              },
            ];
            program: {
              kind: "const";
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89,
              ];
            };
          };
        },
        {
          name: "signPdaAccount";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  83,
                  105,
                  103,
                  110,
                  101,
                  114,
                  65,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                ];
              },
            ];
          };
        },
        {
          name: "mxeAccount";
        },
        {
          name: "mempoolAccount";
          writable: true;
        },
        {
          name: "executingPool";
          writable: true;
        },
        {
          name: "computationAccount";
          writable: true;
        },
        {
          name: "compDefAccount";
        },
        {
          name: "clusterAccount";
          writable: true;
        },
        {
          name: "poolAccount";
          writable: true;
          address: "7MGSS4iKNM4sVib7bDZDJhVqB6EcchPwVnTKenCY1jt3";
        },
        {
          name: "clockAccount";
          address: "FHriyvoZotYiFnbUzKFjzRSb2NiaC8RPWY7jtKuKhg65";
        },
        {
          name: "arciumProgram";
          address: "BKck65TgoKRokMjQM3datB9oRwJ8rAj2jxPXvHXUvcL6";
        },
        {
          name: "tokenProgram";
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111";
        },
      ];
      args: [
        {
          name: "params";
          type: {
            defined: {
              name: "withdrawParams";
            };
          };
        },
      ];
    },
    {
      name: "withdrawCallback";
      discriminator: [75, 124, 115, 155, 173, 179, 40, 16];
      accounts: [
        {
          name: "arciumProgram";
          address: "BKck65TgoKRokMjQM3datB9oRwJ8rAj2jxPXvHXUvcL6";
        },
        {
          name: "compDefAccount";
        },
        {
          name: "instructionsSysvar";
          address: "Sysvar1nstructions1111111111111111111111111";
        },
        {
          name: "streamAuthority";
          writable: true;
        },
        {
          name: "protocol";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [112, 114, 111, 116, 111, 99, 111, 108];
              },
            ];
          };
        },
        {
          name: "protocolAuthority";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  45,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                ];
              },
            ];
          };
        },
        {
          name: "stream";
          writable: true;
        },
        {
          name: "streamData";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [115, 116, 114, 101, 97, 109, 45, 100, 97, 116, 97];
              },
              {
                kind: "account";
                path: "stream";
              },
              {
                kind: "account";
                path: "stream.authority";
                account: "stream";
              },
            ];
          };
        },
        {
          name: "vaultAcc";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [118, 97, 117, 108, 116];
              },
              {
                kind: "account";
                path: "stream";
              },
            ];
          };
        },
        {
          name: "userAcc";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "account";
                path: "stream.authority";
                account: "stream";
              },
              {
                kind: "account";
                path: "tokenProgram";
              },
              {
                kind: "account";
                path: "tokenMint";
              },
            ];
            program: {
              kind: "const";
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89,
              ];
            };
          };
        },
        {
          name: "tokenMint";
        },
        {
          name: "tokenProgram";
        },
      ];
      args: [
        {
          name: "output";
          type: {
            defined: {
              name: "computationOutputs";
              generics: [
                {
                  kind: "type";
                  type: {
                    defined: {
                      name: "withdrawOutput";
                    };
                  };
                },
              ];
            };
          };
        },
      ];
    },
  ];
  accounts: [
    {
      name: "clockAccount";
      discriminator: [152, 171, 158, 195, 75, 61, 51, 8];
    },
    {
      name: "cluster";
      discriminator: [236, 225, 118, 228, 173, 106, 18, 60];
    },
    {
      name: "computationDefinitionAccount";
      discriminator: [245, 176, 217, 221, 253, 104, 172, 200];
    },
    {
      name: "feePool";
      discriminator: [172, 38, 77, 146, 148, 5, 51, 242];
    },
    {
      name: "mxeAccount";
      discriminator: [103, 26, 85, 250, 179, 159, 17, 117];
    },
    {
      name: "protocol";
      discriminator: [45, 39, 101, 43, 115, 72, 131, 40];
    },
    {
      name: "signerAccount";
      discriminator: [127, 212, 7, 180, 17, 50, 249, 193];
    },
    {
      name: "stream";
      discriminator: [166, 224, 59, 4, 202, 10, 186, 83];
    },
    {
      name: "streamData";
      discriminator: [61, 89, 148, 141, 154, 81, 86, 113];
    },
  ];
  events: [
    {
      name: "authoritySet";
      discriminator: [122, 178, 145, 44, 172, 30, 25, 16];
    },
    {
      name: "computationCompleted";
      discriminator: [228, 246, 37, 38, 110, 137, 81, 93];
    },
    {
      name: "computationQueued";
      discriminator: [243, 182, 17, 111, 92, 29, 135, 44];
    },
    {
      name: "developerSet";
      discriminator: [32, 230, 233, 13, 37, 169, 130, 194];
    },
    {
      name: "feesSet";
      discriminator: [121, 74, 126, 26, 13, 22, 27, 166];
    },
    {
      name: "ownershipAccepted";
      discriminator: [60, 223, 46, 198, 226, 73, 39, 18];
    },
    {
      name: "ownershipTransferCancelled";
      discriminator: [120, 203, 162, 145, 180, 57, 253, 23];
    },
    {
      name: "ownershipTransferInitiated";
      discriminator: [181, 32, 40, 60, 60, 64, 235, 29];
    },
    {
      name: "programInitialized";
      discriminator: [43, 70, 110, 241, 199, 218, 221, 245];
    },
    {
      name: "streamCreated";
      discriminator: [93, 150, 91, 15, 166, 8, 251, 166];
    },
    {
      name: "streamExtended";
      discriminator: [53, 200, 82, 146, 159, 176, 148, 237];
    },
    {
      name: "tokenSet";
      discriminator: [93, 175, 41, 43, 139, 171, 5, 143];
    },
    {
      name: "withdrawal";
      discriminator: [6, 187, 215, 71, 92, 85, 90, 83];
    },
  ];
  errors: [
    {
      code: 6000;
      name: "invalidAuthorityAddress";
      msg: "The authority address does not match the provided configuration authority";
    },
    {
      code: 6001;
      name: "missingNewAuthority";
      msg: "No new authority provided in remaining accounts";
    },
    {
      code: 6002;
      name: "sameAuthority";
      msg: "New authority cannot be the same as the current authority";
    },
    {
      code: 6003;
      name: "missingNewDeveloper";
      msg: "No new developer provided in remaining accounts";
    },
    {
      code: 6004;
      name: "sameDeveloper";
      msg: "New developer cannot be the same as the current developer";
    },
    {
      code: 6005;
      name: "missingNewToken";
      msg: "No new token account provided in remaining accounts";
    },
    {
      code: 6006;
      name: "defaultTokenKey";
      msg: "Token account cannot have the default public key";
    },
    {
      code: 6007;
      name: "sameToken";
      msg: "New token account cannot be the same as the current token account";
    },
    {
      code: 6008;
      name: "invalidTokenProgram";
      msg: "Token account must be owned by the SPL Token or Token-2022 program";
    },
    {
      code: 6009;
      name: "sameFees";
      msg: "New fee structure cannot be the same as the current fee structure";
    },
    {
      code: 6010;
      name: "invalidFeeRecipient";
      msg: "Invalid fee recipient: must be the developer";
    },
    {
      code: 6011;
      name: "invalidProtocolToken";
      msg: "Protocol token mint does not match the configured mint";
    },
    {
      code: 6012;
      name: "feeRequired";
      msg: "Fee is required but not paid";
    },
    {
      code: 6013;
      name: "invalidFeeChoice";
      msg: "Cannot pay a fee that is not configured in the system";
    },
    {
      code: 6014;
      name: "invalidTimestamps";
      msg: "Invalid timestamps provided";
    },
    {
      code: 6015;
      name: "invalidCliffAmount";
      msg: "Invalid cliff amount provided";
    },
    {
      code: 6016;
      name: "invalidPeriod";
      msg: "Invalid period provided";
    },
    {
      code: 6017;
      name: "zeroAmount";
      msg: "Stream amount must be greater than zero";
    },
    {
      code: 6018;
      name: "invalidPubkey";
      msg: "Invalid public key provided";
    },
    {
      code: 6019;
      name: "invalidTokenMint";
      msg: "Invalid token mint provided";
    },
    {
      code: 6020;
      name: "invalidLockTimestamp";
      msg: "Invalid lock timestamp provided";
    },
    {
      code: 6021;
      name: "invalidUnlockTimestamp";
      msg: "Invalid unlock timestamp provided";
    },
    {
      code: 6022;
      name: "invalidVestingStart";
      msg: "Invalid vesting start timestamp";
    },
    {
      code: 6023;
      name: "invalidVestingEnd";
      msg: "Invalid vesting end timestamp";
    },
    {
      code: 6024;
      name: "invalidExtensionValues";
      msg: "New extension values must be greater than existing ones";
    },
    {
      code: 6025;
      name: "invalidExtensionStrategy";
      msg: "Invalid extension strategy provided";
    },
    {
      code: 6026;
      name: "invalidWithdrawAmount";
      msg: "Withdraw amount must be positive";
    },
    {
      code: 6027;
      name: "invalidWithdrawnAmount";
      msg: "Invalid withdrawn amount";
    },
    {
      code: 6028;
      name: "invalidStreamAuthority";
      msg: "The provided stream authority does not match the expected authority";
    },
    {
      code: 6029;
      name: "noExtensionProvided";
      msg: "No extension parameters provided";
    },
    {
      code: 6030;
      name: "insufficientWithdrawableAmount";
      msg: "Insufficient withdrawable amount";
    },
    {
      code: 6031;
      name: "streamIsImmutable";
      msg: "The stream is immutable and cannot be modified";
    },
    {
      code: 6032;
      name: "streamPendingComputation";
      msg: "There is already a pending computation for this stream";
    },
    {
      code: 6033;
      name: "abortedComputation";
      msg: "Computation was aborted or failed";
    },
    {
      code: 6034;
      name: "clusterNotSet";
      msg: "The cluster is not set";
    },
    {
      code: 6035;
      name: "streamDataNotEncrypted";
      msg: "Stream data is not encrypted";
    },
    {
      code: 6036;
      name: "noPendingAuthority";
      msg: "No pending authority";
    },
    {
      code: 6037;
      name: "incompleteEncryptionParameters";
      msg: "Encryption parameters are incomplete";
    },
    {
      code: 6038;
      name: "missingRequiredAccount";
      msg: "Required account not passed in";
    },
  ];
  types: [
    {
      name: "acceptOwnershipOutput";
      docs: [
        "The output of the callback instruction. Provided as a struct with ordered fields",
        "as anchor does not support tuples and tuple structs yet.",
      ];
      type: {
        kind: "struct";
        fields: [
          {
            name: "field0";
            type: {
              defined: {
                name: "sharedEncryptedStruct";
                generics: [
                  {
                    kind: "const";
                    value: "8";
                  },
                ];
              };
            };
          },
        ];
      };
    },
    {
      name: "acceptOwnershipParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "computationOffset";
            type: "u64";
          },
          {
            name: "enckey";
            type: {
              option: {
                array: ["u8", 32];
              };
            };
          },
          {
            name: "nonce";
            type: {
              option: "u128";
            };
          },
        ];
      };
    },
    {
      name: "activation";
      type: {
        kind: "struct";
        fields: [
          {
            name: "activationEpoch";
            type: {
              defined: {
                name: "epoch";
              };
            };
          },
          {
            name: "deactivationEpoch";
            type: {
              defined: {
                name: "epoch";
              };
            };
          },
        ];
      };
    },
    {
      name: "authoritySet";
      type: {
        kind: "struct";
        fields: [
          {
            name: "oldAuthority";
            type: "pubkey";
          },
          {
            name: "newAuthority";
            type: "pubkey";
          },
        ];
      };
    },
    {
      name: "circuitSource";
      type: {
        kind: "enum";
        variants: [
          {
            name: "local";
            fields: [
              {
                defined: {
                  name: "localCircuitSource";
                };
              },
            ];
          },
          {
            name: "onChain";
            fields: [
              {
                defined: {
                  name: "onChainCircuitSource";
                };
              },
            ];
          },
          {
            name: "offChain";
            fields: [
              {
                defined: {
                  name: "offChainCircuitSource";
                };
              },
            ];
          },
        ];
      };
    },
    {
      name: "clockAccount";
      docs: ["An account storing the current network epoch"];
      type: {
        kind: "struct";
        fields: [
          {
            name: "startEpoch";
            type: {
              defined: {
                name: "epoch";
              };
            };
          },
          {
            name: "currentEpoch";
            type: {
              defined: {
                name: "epoch";
              };
            };
          },
          {
            name: "startEpochTimestamp";
            type: {
              defined: {
                name: "timestamp";
              };
            };
          },
          {
            name: "bump";
            type: "u8";
          },
        ];
      };
    },
    {
      name: "cluster";
      type: {
        kind: "struct";
        fields: [
          {
            name: "authority";
            type: {
              option: "pubkey";
            };
          },
          {
            name: "maxSize";
            type: "u32";
          },
          {
            name: "activation";
            type: {
              defined: {
                name: "activation";
              };
            };
          },
          {
            name: "maxCapacity";
            type: "u64";
          },
          {
            name: "cuPrice";
            type: "u64";
          },
          {
            name: "cuPriceProposals";
            type: {
              array: ["u64", 32];
            };
          },
          {
            name: "lastUpdatedEpoch";
            type: {
              defined: {
                name: "epoch";
              };
            };
          },
          {
            name: "mxes";
            type: {
              vec: "pubkey";
            };
          },
          {
            name: "nodes";
            type: {
              vec: {
                defined: {
                  name: "nodeRef";
                };
              };
            };
          },
          {
            name: "pendingNodes";
            type: {
              vec: {
                defined: {
                  name: "nodeRef";
                };
              };
            };
          },
          {
            name: "bump";
            type: "u8";
          },
        ];
      };
    },
    {
      name: "computationCompleted";
      type: {
        kind: "struct";
        fields: [
          {
            name: "streamId";
            type: "u64";
          },
          {
            name: "computationType";
            type: "string";
          },
          {
            name: "success";
            type: "bool";
          },
          {
            name: "errorCode";
            type: {
              option: "u8";
            };
          },
        ];
      };
    },
    {
      name: "computationDefinitionAccount";
      docs: ["An account representing a [ComputationDefinition] in a MXE."];
      type: {
        kind: "struct";
        fields: [
          {
            name: "finalizationAuthority";
            type: {
              option: "pubkey";
            };
          },
          {
            name: "finalizeDuringCallback";
            type: "bool";
          },
          {
            name: "cuAmount";
            type: "u64";
          },
          {
            name: "definition";
            type: {
              defined: {
                name: "computationDefinitionMeta";
              };
            };
          },
          {
            name: "circuitSource";
            type: {
              defined: {
                name: "circuitSource";
              };
            };
          },
          {
            name: "bump";
            type: "u8";
          },
        ];
      };
    },
    {
      name: "computationDefinitionMeta";
      docs: ["A computation definition for execution in a MXE."];
      type: {
        kind: "struct";
        fields: [
          {
            name: "circuitLen";
            type: "u32";
          },
          {
            name: "signature";
            type: {
              defined: {
                name: "computationSignature";
              };
            };
          },
        ];
      };
    },
    {
      name: "computationOutputs";
      generics: [
        {
          kind: "type";
          name: "o";
        },
      ];
      type: {
        kind: "enum";
        variants: [
          {
            name: "success";
            fields: [
              {
                generic: "o";
              },
            ];
          },
          {
            name: "failure";
          },
        ];
      };
    },
    {
      name: "computationQueued";
      type: {
        kind: "struct";
        fields: [
          {
            name: "streamId";
            type: "u64";
          },
          {
            name: "computationType";
            type: "string";
          },
          {
            name: "offset";
            type: "u64";
          },
        ];
      };
    },
    {
      name: "computationSignature";
      docs: [
        "The signature of a computation defined in a [ComputationDefinition].",
      ];
      type: {
        kind: "struct";
        fields: [
          {
            name: "parameters";
            type: {
              vec: {
                defined: {
                  name: "parameter";
                };
              };
            };
          },
          {
            name: "outputs";
            type: {
              vec: {
                defined: {
                  name: "output";
                };
              };
            };
          },
        ];
      };
    },
    {
      name: "config";
      type: {
        kind: "struct";
        fields: [
          {
            name: "fees";
            type: {
              defined: {
                name: "fees";
              };
            };
          },
          {
            name: "streamcnt";
            type: "u64";
          },
          {
            name: "authority";
            type: "pubkey";
          },
          {
            name: "developer";
            type: "pubkey";
          },
          {
            name: "token";
            type: "pubkey";
          },
        ];
      };
    },
    {
      name: "createOutput";
      docs: [
        "The output of the callback instruction. Provided as a struct with ordered fields",
        "as anchor does not support tuples and tuple structs yet.",
      ];
      type: {
        kind: "struct";
        fields: [
          {
            name: "field0";
            type: {
              defined: {
                name: "createOutputStruct0";
              };
            };
          },
        ];
      };
    },
    {
      name: "createOutputStruct0";
      type: {
        kind: "struct";
        fields: [
          {
            name: "field0";
            type: "u8";
          },
          {
            name: "field1";
            type: {
              defined: {
                name: "sharedEncryptedStruct";
                generics: [
                  {
                    kind: "const";
                    value: "8";
                  },
                ];
              };
            };
          },
        ];
      };
    },
    {
      name: "createParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "name";
            type: {
              array: ["u8", 32];
            };
          },
          {
            name: "amount";
            type: "u64";
          },
          {
            name: "strategy";
            type: {
              defined: {
                name: "createParamsStrategy";
              };
            };
          },
          {
            name: "immutable";
            type: "bool";
          },
          {
            name: "payWithNative";
            type: {
              option: "bool";
            };
          },
          {
            name: "computationOffset";
            type: "u64";
          },
          {
            name: "enckey";
            type: {
              option: {
                array: ["u8", 32];
              };
            };
          },
          {
            name: "nonce";
            type: {
              option: "u128";
            };
          },
        ];
      };
    },
    {
      name: "createParamsStrategy";
      type: {
        kind: "enum";
        variants: [
          {
            name: "timeLock";
            fields: [
              {
                name: "unlockTimestamp";
                type: {
                  array: ["u8", 32];
                };
              },
            ];
          },
          {
            name: "vesting";
            fields: [
              {
                name: "vestingStart";
                type: {
                  array: ["u8", 32];
                };
              },
              {
                name: "vestingEnd";
                type: {
                  array: ["u8", 32];
                };
              },
              {
                name: "cliffAmount";
                type: {
                  array: ["u8", 32];
                };
              },
              {
                name: "period";
                type: {
                  array: ["u8", 32];
                };
              },
            ];
          },
        ];
      };
    },
    {
      name: "developerSet";
      type: {
        kind: "struct";
        fields: [
          {
            name: "oldDeveloper";
            type: "pubkey";
          },
          {
            name: "newDeveloper";
            type: "pubkey";
          },
        ];
      };
    },
    {
      name: "epoch";
      docs: ["The network epoch"];
      type: {
        kind: "struct";
        fields: ["u64"];
      };
    },
    {
      name: "extendOutput";
      docs: [
        "The output of the callback instruction. Provided as a struct with ordered fields",
        "as anchor does not support tuples and tuple structs yet.",
      ];
      type: {
        kind: "struct";
        fields: [
          {
            name: "field0";
            type: {
              defined: {
                name: "extendOutputStruct0";
              };
            };
          },
        ];
      };
    },
    {
      name: "extendOutputStruct0";
      type: {
        kind: "struct";
        fields: [
          {
            name: "field0";
            type: "u8";
          },
          {
            name: "field1";
            type: {
              defined: {
                name: "sharedEncryptedStruct";
                generics: [
                  {
                    kind: "const";
                    value: "8";
                  },
                ];
              };
            };
          },
        ];
      };
    },
    {
      name: "extendParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "amount";
            type: {
              option: "u64";
            };
          },
          {
            name: "strategy";
            type: {
              option: {
                defined: {
                  name: "extendParamsStrategy";
                };
              };
            };
          },
          {
            name: "computationOffset";
            type: "u64";
          },
          {
            name: "enckey";
            type: {
              option: {
                array: ["u8", 32];
              };
            };
          },
          {
            name: "nonce";
            type: {
              option: "u128";
            };
          },
        ];
      };
    },
    {
      name: "extendParamsStrategy";
      type: {
        kind: "enum";
        variants: [
          {
            name: "timeLock";
            fields: [
              {
                name: "unlockTimestamp";
                type: {
                  option: {
                    array: ["u8", 32];
                  };
                };
              },
            ];
          },
          {
            name: "vesting";
            fields: [
              {
                name: "vestingEnd";
                type: {
                  option: {
                    array: ["u8", 32];
                  };
                };
              },
              {
                name: "period";
                type: {
                  option: {
                    array: ["u8", 32];
                  };
                };
              },
            ];
          },
        ];
      };
    },
    {
      name: "feePool";
      type: {
        kind: "struct";
        fields: [
          {
            name: "bump";
            type: "u8";
          },
        ];
      };
    },
    {
      name: "fees";
      type: {
        kind: "struct";
        fields: [
          {
            name: "native";
            type: {
              option: "u64";
            };
          },
          {
            name: "token";
            type: {
              option: "u64";
            };
          },
        ];
      };
    },
    {
      name: "feesSet";
      type: {
        kind: "struct";
        fields: [
          {
            name: "oldFeesNative";
            type: {
              option: "u64";
            };
          },
          {
            name: "oldFeesToken";
            type: {
              option: "u64";
            };
          },
          {
            name: "newFeesNative";
            type: {
              option: "u64";
            };
          },
          {
            name: "newFeesToken";
            type: {
              option: "u64";
            };
          },
        ];
      };
    },
    {
      name: "initializeParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "fees";
            type: {
              defined: {
                name: "fees";
              };
            };
          },
          {
            name: "authority";
            type: "pubkey";
          },
          {
            name: "developer";
            type: "pubkey";
          },
        ];
      };
    },
    {
      name: "localCircuitSource";
      type: {
        kind: "enum";
        variants: [
          {
            name: "mxeKeygen";
          },
        ];
      };
    },
    {
      name: "mxeAccount";
      docs: ["A MPC Execution Environment."];
      type: {
        kind: "struct";
        fields: [
          {
            name: "authority";
            type: {
              option: "pubkey";
            };
          },
          {
            name: "cluster";
            type: {
              option: "u32";
            };
          },
          {
            name: "x25519Pubkey";
            type: {
              defined: {
                name: "x25519Pubkey";
              };
            };
          },
          {
            name: "fallbackClusters";
            type: {
              vec: "u32";
            };
          },
          {
            name: "rejectedClusters";
            type: {
              vec: "u32";
            };
          },
          {
            name: "computationDefinitions";
            type: {
              vec: "u32";
            };
          },
          {
            name: "bump";
            type: "u8";
          },
        ];
      };
    },
    {
      name: "nodeRef";
      docs: [
        "A reference to a node in the cluster.",
        "The offset is to derive the Node Account.",
        "The current_total_rewards is the total rewards the node has received so far in the current",
        "epoch.",
      ];
      type: {
        kind: "struct";
        fields: [
          {
            name: "offset";
            type: "u32";
          },
          {
            name: "currentTotalRewards";
            type: "u64";
          },
          {
            name: "vote";
            type: "u8";
          },
        ];
      };
    },
    {
      name: "offChainCircuitSource";
      type: {
        kind: "struct";
        fields: [
          {
            name: "source";
            type: "string";
          },
          {
            name: "hash";
            type: {
              array: ["u8", 32];
            };
          },
        ];
      };
    },
    {
      name: "onChainCircuitSource";
      type: {
        kind: "struct";
        fields: [
          {
            name: "isCompleted";
            type: "bool";
          },
          {
            name: "uploadAuth";
            type: "pubkey";
          },
        ];
      };
    },
    {
      name: "output";
      docs: [
        "An output of a computation.",
        "We currently don't support encrypted outputs yet since encrypted values are passed via",
        "data objects.",
      ];
      type: {
        kind: "enum";
        variants: [
          {
            name: "plaintextBool";
          },
          {
            name: "plaintextU8";
          },
          {
            name: "plaintextU16";
          },
          {
            name: "plaintextU32";
          },
          {
            name: "plaintextU64";
          },
          {
            name: "plaintextU128";
          },
          {
            name: "ciphertext";
          },
          {
            name: "arcisPubkey";
          },
          {
            name: "plaintextFloat";
          },
        ];
      };
    },
    {
      name: "ownershipAccepted";
      type: {
        kind: "struct";
        fields: [
          {
            name: "streamId";
            type: "u64";
          },
          {
            name: "newAuthority";
            type: "pubkey";
          },
        ];
      };
    },
    {
      name: "ownershipTransferCancelled";
      type: {
        kind: "struct";
        fields: [
          {
            name: "streamId";
            type: "u64";
          },
        ];
      };
    },
    {
      name: "ownershipTransferInitiated";
      type: {
        kind: "struct";
        fields: [
          {
            name: "streamId";
            type: "u64";
          },
          {
            name: "newAuthority";
            type: "pubkey";
          },
        ];
      };
    },
    {
      name: "parameter";
      docs: [
        "A parameter of a computation.",
        "We differentiate between plaintext and encrypted parameters and data objects.",
        "Plaintext parameters are directly provided as their value.",
        "Encrypted parameters are provided as an offchain reference to the data.",
        "Data objects are provided as a reference to the data object account.",
      ];
      type: {
        kind: "enum";
        variants: [
          {
            name: "plaintextBool";
          },
          {
            name: "plaintextU8";
          },
          {
            name: "plaintextU16";
          },
          {
            name: "plaintextU32";
          },
          {
            name: "plaintextU64";
          },
          {
            name: "plaintextU128";
          },
          {
            name: "ciphertext";
          },
          {
            name: "arcisPubkey";
          },
          {
            name: "arcisSignature";
          },
          {
            name: "plaintextFloat";
          },
          {
            name: "manticoreAlgo";
          },
          {
            name: "inputDataset";
          },
        ];
      };
    },
    {
      name: "programInitialized";
      type: {
        kind: "struct";
        fields: [
          {
            name: "authority";
            type: "pubkey";
          },
          {
            name: "developer";
            type: "pubkey";
          },
          {
            name: "feesNative";
            type: {
              option: "u64";
            };
          },
          {
            name: "feesToken";
            type: {
              option: "u64";
            };
          },
        ];
      };
    },
    {
      name: "protocol";
      type: {
        kind: "struct";
        fields: [
          {
            name: "bump";
            type: "u8";
          },
          {
            name: "config";
            type: {
              defined: {
                name: "config";
              };
            };
          },
          {
            name: "authority";
            type: {
              defined: {
                name: "protocolAuthority";
              };
            };
          },
        ];
      };
    },
    {
      name: "protocolAuthority";
      type: {
        kind: "struct";
        fields: [
          {
            name: "pubkey";
            type: "pubkey";
          },
          {
            name: "bump";
            type: "u8";
          },
        ];
      };
    },
    {
      name: "sharedEncryptedStruct";
      generics: [
        {
          kind: "const";
          name: "len";
          type: "usize";
        },
      ];
      type: {
        kind: "struct";
        fields: [
          {
            name: "encryptionKey";
            type: {
              array: ["u8", 32];
            };
          },
          {
            name: "nonce";
            type: "u128";
          },
          {
            name: "ciphertexts";
            type: {
              array: [
                {
                  array: ["u8", 32];
                },
                {
                  generic: "len";
                },
              ];
            };
          },
        ];
      };
    },
    {
      name: "signerAccount";
      type: {
        kind: "struct";
        fields: [
          {
            name: "bump";
            type: "u8";
          },
        ];
      };
    },
    {
      name: "strategy";
      type: {
        kind: "enum";
        variants: [
          {
            name: "timeLock";
            fields: [
              {
                name: "lockTimestamp";
                type: {
                  array: ["u8", 32];
                };
              },
              {
                name: "unlockTimestamp";
                type: {
                  array: ["u8", 32];
                };
              },
            ];
          },
          {
            name: "vesting";
            fields: [
              {
                name: "vestingStart";
                type: {
                  array: ["u8", 32];
                };
              },
              {
                name: "vestingEnd";
                type: {
                  array: ["u8", 32];
                };
              },
              {
                name: "cliffAmount";
                type: {
                  array: ["u8", 32];
                };
              },
              {
                name: "period";
                type: {
                  array: ["u8", 32];
                };
              },
            ];
          },
        ];
      };
    },
    {
      name: "stream";
      type: {
        kind: "struct";
        fields: [
          {
            name: "bump";
            type: "u8";
          },
          {
            name: "version";
            type: "u8";
          },
          {
            name: "id";
            type: "u64";
          },
          {
            name: "mint";
            type: "pubkey";
          },
          {
            name: "authority";
            type: "pubkey";
          },
          {
            name: "status";
            type: {
              defined: {
                name: "streamStatus";
              };
            };
          },
          {
            name: "immutable";
            type: "bool";
          },
          {
            name: "pending";
            type: {
              defined: {
                name: "streamPending";
              };
            };
          },
        ];
      };
    },
    {
      name: "streamCreated";
      type: {
        kind: "struct";
        fields: [
          {
            name: "streamId";
            type: "u64";
          },
          {
            name: "authority";
            type: "pubkey";
          },
          {
            name: "mint";
            type: "pubkey";
          },
          {
            name: "strategyType";
            type: "string";
          },
        ];
      };
    },
    {
      name: "streamData";
      type: {
        kind: "struct";
        fields: [
          {
            name: "bump";
            type: "u8";
          },
          {
            name: "stream";
            type: "pubkey";
          },
          {
            name: "name";
            type: {
              array: ["u8", 32];
            };
          },
          {
            name: "amount";
            type: {
              array: ["u8", 32];
            };
          },
          {
            name: "withdrawn";
            type: {
              array: ["u8", 32];
            };
          },
          {
            name: "strategy";
            type: {
              defined: {
                name: "strategy";
              };
            };
          },
          {
            name: "enckey";
            type: {
              option: {
                array: ["u8", 32];
              };
            };
          },
          {
            name: "nonce";
            type: {
              option: "u128";
            };
          },
        ];
      };
    },
    {
      name: "streamExtended";
      type: {
        kind: "struct";
        fields: [
          {
            name: "streamId";
            type: "u64";
          },
        ];
      };
    },
    {
      name: "streamPending";
      type: {
        kind: "enum";
        variants: [
          {
            name: "none";
          },
          {
            name: "create";
          },
          {
            name: "extend";
            fields: [
              {
                name: "amount";
                type: {
                  array: ["u8", 32];
                };
              },
            ];
          },
          {
            name: "transferOwnership";
            fields: [
              {
                name: "authority";
                type: "pubkey";
              },
            ];
          },
          {
            name: "withdraw";
          },
        ];
      };
    },
    {
      name: "streamStatus";
      type: {
        kind: "enum";
        variants: [
          {
            name: "unintialized";
          },
          {
            name: "initialized";
          },
          {
            name: "computing";
          },
          {
            name: "invalid";
          },
          {
            name: "active";
          },
          {
            name: "completed";
          },
          {
            name: "cancelled";
          },
        ];
      };
    },
    {
      name: "timestamp";
      type: {
        kind: "struct";
        fields: [
          {
            name: "timestamp";
            type: "u64";
          },
        ];
      };
    },
    {
      name: "tokenSet";
      type: {
        kind: "struct";
        fields: [
          {
            name: "oldToken";
            type: "pubkey";
          },
          {
            name: "newToken";
            type: "pubkey";
          },
        ];
      };
    },
    {
      name: "withdrawOutput";
      docs: [
        "The output of the callback instruction. Provided as a struct with ordered fields",
        "as anchor does not support tuples and tuple structs yet.",
      ];
      type: {
        kind: "struct";
        fields: [
          {
            name: "field0";
            type: {
              defined: {
                name: "withdrawOutputStruct0";
              };
            };
          },
        ];
      };
    },
    {
      name: "withdrawOutputStruct0";
      type: {
        kind: "struct";
        fields: [
          {
            name: "field0";
            type: "u8";
          },
          {
            name: "field1";
            type: "u64";
          },
          {
            name: "field2";
            type: "bool";
          },
          {
            name: "field3";
            type: {
              defined: {
                name: "sharedEncryptedStruct";
                generics: [
                  {
                    kind: "const";
                    value: "8";
                  },
                ];
              };
            };
          },
        ];
      };
    },
    {
      name: "withdrawParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "amount";
            type: "u64";
          },
          {
            name: "computationOffset";
            type: "u64";
          },
        ];
      };
    },
    {
      name: "withdrawal";
      type: {
        kind: "struct";
        fields: [
          {
            name: "streamId";
            type: "u64";
          },
        ];
      };
    },
    {
      name: "x25519Pubkey";
      type: {
        kind: "enum";
        variants: [
          {
            name: "set";
            fields: [
              {
                array: ["u8", 32];
              },
            ];
          },
          {
            name: "unset";
            fields: [
              {
                array: ["u8", 32];
              },
              {
                vec: "bool";
              },
            ];
          },
        ];
      };
    },
  ];
  constants: [
    {
      name: "protocolAuthoritySeed";
      type: "bytes";
      value: "[112, 114, 111, 116, 111, 99, 111, 108, 45, 97, 117, 116, 104, 111, 114, 105, 116, 121]";
    },
    {
      name: "protocolSeed";
      type: "bytes";
      value: "[112, 114, 111, 116, 111, 99, 111, 108]";
    },
    {
      name: "streamDataSeed";
      type: "bytes";
      value: "[115, 116, 114, 101, 97, 109, 45, 100, 97, 116, 97]";
    },
    {
      name: "streamSeed";
      type: "bytes";
      value: "[115, 116, 114, 101, 97, 109]";
    },
    {
      name: "vaultSeed";
      type: "bytes";
      value: "[118, 97, 117, 108, 116]";
    },
  ];
};
