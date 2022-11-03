import React, { useState } from 'react';
import { useAntchain, WasmContract } from '@antchain/jssdk/react';
import { Spin, Button, Descriptions, Input } from 'antd';
import { createMerkleProof } from '@alipay/merkle-proof-as/lib';
import abi from '@/abis/merkle-proof.json';
import confetti from 'canvas-confetti';
import styles from './styles.less';

const accounts = ['test1', 'test2', 'test3', 'test4', 'test5', 'test6'];

const run = () => {
  const end = Date.now() + 1 * 1000;

  // go Buckeyes!
  const colors = ['#bb0000', '#ffffff'];

  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};

export default () => {
  const chainData = useAntchain();
  const [callContractLoading, setCallContractLoading] = useState(false);
  const [callContractResult, setCallContractResult] = useState('');
  const [testAccount, setTestAccount] = useState('');

  if (!chainData) return <div>error</div>;
  const {
    loading,
    isInstalled,
    antchain,
    data: {
      chainId,
      accounts: [account],
    },
  } = chainData;

  if (loading) {
    return (
      <div className={styles.wrap}>
        <Spin />
      </div>
    );
  }

  if (!isInstalled) {
    return (
      <div className={styles.wrap}>
        <a href="https://docs.antchain.antgroup.com/" target="_blank">
          <Button type="primary">去下载蚂蚁链连接器</Button>
        </a>
      </div>
    );
  }

  return (
    <div className={styles.wrap}>
      {chainId ? (
        <Descriptions
          title="Merkle Proof Demo"
          column={1}
          style={{ marginBottom: 30 }}
        >
          <Descriptions.Item label="当前链">{chainId}</Descriptions.Item>
          {account ? (
            <>
              <Descriptions.Item label="账户名称">
                {account.accountName}
              </Descriptions.Item>
              <Descriptions.Item label="账户地址">
                {account.accountAddress}
              </Descriptions.Item>
            </>
          ) : null}
          <Descriptions.Item label="白名单">
            {accounts.join(', ')}
          </Descriptions.Item>
        </Descriptions>
      ) : null}
      {account ? (
        <>
          <Input
            value={testAccount}
            onChange={({ target }) => setTestAccount(target.value)}
          />
          <Button
            type="primary"
            onClick={async () => {
              setCallContractLoading(true);
              const contractName = abi.contract_git_id;
              // abi 要替换为你想要调用的合约的 abi
              const contract = new WasmContract(
                { contractName, abi: JSON.stringify(abi) },
                antchain
              );
              try {
                const proof = createMerkleProof(accounts, testAccount);
                const res = await contract.call<boolean>({
                  local: true,
                  methodName: 'Validate',
                  args: [proof, testAccount],
                });
                const result = res.returnValue.toString();
                if (result.includes('Congratulations')) run();
                setCallContractResult(result);
              } catch (e) {
                console.error('合约调用失败 error:', e);
              }
              setCallContractLoading(false);
            }}
          >
            调用合约
          </Button>
          <div style={{ marginTop: 20 }}>
            {callContractLoading ? <Spin /> : null}
            {callContractResult ? `调用结果：${callContractResult}` : null}
          </div>
        </>
      ) : (
        <Button
          type="primary"
          onClick={() => {
            antchain.requestAccounts().catch((err: any) => {
              console.error('requestAccounts error:', err);
            });
          }}
        >
          连接区块链
        </Button>
      )}
    </div>
  );
};
