import { FC, useEffect, useState } from "react";
import { Button, Card, Empty, message, Spin, Tooltip } from "antd";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Truncate } from "@re-dev/react-truncate";

import { useVaultContext } from "context";
import { chooseToken, exploreToken } from "utils/constants";
import { Coin } from "utils/interfaces";
import constantModals from "modals/constant-modals";
import constantPaths from "routes/constant-paths";

import AssetItem from "components/asset-item";
import ChooseToken from "modals/choose-token";
import QRCode from "modals/qr-code";
import { useTranslation } from "react-i18next";
import translation from "i18n/constant-keys";

import {
  CaretRightOutlined,
  CopyOutlined,
  CubeOutlined,
  PlusCircleFilled,
  QRCodeOutlined,
} from "icons";

interface InitialState {
  coin?: Coin.Props;
}

const Component: FC = () => {
  const { t } = useTranslation();
  const initialState: InitialState = {};
  const [state, setState] = useState(initialState);
  const { coin } = state;
  const { chainKey } = useParams();
  const { vault } = useVaultContext();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const handleCopy = () => {
    navigator.clipboard
      .writeText(coin?.address || "")
      .then(() => {
        messageApi.open({
          type: "success",
          content: "Address copied to clipboard",
        });
      })
      .catch(() => {
        messageApi.open({
          type: "error",
          content: "Failed to copy address",
        });
      });
  };

  const componentDidUpdate = () => {
    if (chainKey && vault) {
      const coin = vault.coins.find(
        (coin) =>
          coin.isNativeToken && coin.chain.toLocaleLowerCase() === chainKey
      );

      if (coin) {
        setState((prevState) => ({ ...prevState, coin }));
      } else {
        navigate(constantPaths.balance);
      }
    } else {
      navigate(constantPaths.balance);
    }
  };

  useEffect(componentDidUpdate, [chainKey]);

  return (
    <>
      <div className="asset-page">
        {coin ? (
          <>
            <div className="breadcrumb">
              <Button type="link" className="back" onClick={() => navigate(-1)}>
                <CaretRightOutlined />
              </Button>
              <h1>{coin.chain}</h1>
            </div>
            <div className="content">
              <div className="chain">
                <div className="type">
                  <img
                    src={`/coins/${coin.chain.toLocaleLowerCase()}.svg`}
                    alt={coin.chain}
                  />
                  {coin.chain}
                </div>
                <div className="key">
                  {coin.address ? (
                    <Truncate end={10} middle>
                      {coin.address}
                    </Truncate>
                  ) : (
                    <Spin />
                  )}
                </div>
                <span className="amount">
                  {vault
                    ? `$${vault.coins
                        .filter(
                          ({ chain }) => chain.toLocaleLowerCase() === chainKey
                        )
                        .reduce(
                          (acc, coin) => acc + coin.balance * coin.value,
                          0
                        )
                        .toFixed(2)}`
                    : "$0.00"}
                </span>
                <div className="actions">
                  <Tooltip title="Copy Address">
                    <Button type="link" onClick={handleCopy}>
                      <CopyOutlined />
                    </Button>
                  </Tooltip>
                  <Tooltip title="View QRCode">
                    <Link to={`#${constantModals.QR_CODE}`}>
                      <QRCodeOutlined />
                    </Link>
                  </Tooltip>
                  <Tooltip title="Link to Address">
                    <a
                      href={`${exploreToken[coin.chain]}${coin.address}`}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <CubeOutlined />
                    </a>
                  </Tooltip>
                </div>
              </div>
              {vault ? (
                vault?.coins.length ? (
                  vault?.coins
                    .filter(
                      (coin) => coin.chain.toLocaleLowerCase() === chainKey
                    )
                    .map(({ ticker, ...res }) => (
                      <AssetItem key={ticker} {...{ ...res, ticker }} />
                    ))
                ) : (
                  <Card className="empty">
                    <Empty description="Choose a asset..." />
                  </Card>
                )
              ) : (
                <Spin />
              )}
            </div>
            {chooseToken[coin.chain] && (
              <Link to={`#${constantModals.CHOOSE_TOKEN}`} className="add">
                <PlusCircleFilled /> {t(translation.CHOOSE_TOKEN)}
              </Link>
            )}
          </>
        ) : (
          <Spin className="center-spin" />
        )}
      </div>

      <ChooseToken />
      {coin && <QRCode address={coin.address} />}

      {contextHolder}
    </>
  );
};

export default Component;
