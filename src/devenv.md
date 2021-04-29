# 環境構築

## uchan さんの script など

以下のリポジトリの説明に従って行う。

- [uchan-nos/mikanos-build: Build and run scripts for MikanOS](https://github.com/uchan-nos/mikanos-build)

home directory に `edk2` と `osbook` という directory がある状態になる。

## VcXsrv

VcXsrv の設定は、みかん本の付録Aに書いてある内容では不充分だと思う。

- [WSL2のX-ServerでGUI表示する際に「export DISPLAY=:0.0」が効かない - レガシー環境から脱却したい](https://odaryo.hatenablog.com/entry/2020/01/08/114846)
    - 元の GitHub issue -> [Can't use X-Server in WSL 2 · Issue #4106 · microsoft/WSL](https://github.com/microsoft/WSL/issues/4106)

などに書いてあるが、 `/etc/resolve.conf` に書いてある IP アドレスを `DISPLAY=xx.xx.xx.xx:0.0` に入れないと動かない。

```sh
cat /etc/resolv.conf | grep nameserver | awk '{print $2}'
```

のように IP address を取得できるので、以下を `~/.bash_profile` などに書いておく。

```sh
export DISPLAY=$(cat /etc/resolv.conf | grep nameserver | awk '{print $2}'):0.0
```
