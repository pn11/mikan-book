Object.assign(window.search, {"doc_urls":["index.html#ゼロからのos自作入門-みかん本-のやっていき記録","devenv.html#環境構築","devenv.html#uchan-さんの-script-など","devenv.html#vcxsrv","chap0.html#第0章","chap1.html#第1章","chap1.html#efi-ファイル作成","chap1.html#qemu-で起動","chap1.html#c-言語で-hello-world","chap2.html#第2章"],"index":{"documentStore":{"docInfo":{"0":{"body":7,"breadcrumbs":1,"title":1},"1":{"body":0,"breadcrumbs":0,"title":0},"2":{"body":12,"breadcrumbs":2,"title":2},"3":{"body":36,"breadcrumbs":1,"title":1},"4":{"body":25,"breadcrumbs":2,"title":1},"5":{"body":6,"breadcrumbs":2,"title":1},"6":{"body":16,"breadcrumbs":2,"title":1},"7":{"body":6,"breadcrumbs":2,"title":1},"8":{"body":39,"breadcrumbs":4,"title":3},"9":{"body":0,"breadcrumbs":2,"title":1}},"docs":{"0":{"body":"『ゼロからのOS自作入門』 やっていくぞ pic.twitter.com/HQXCaWztCs— oka ఒక (@nowohyeah) March 22, 2021","breadcrumbs":"表紙 » 『ゼロからのOS自作入門』 (みかん本) のやっていき記録","id":"0","title":"『ゼロからのOS自作入門』 (みかん本) のやっていき記録"},"1":{"body":"","breadcrumbs":"環境構築 » 環境構築","id":"1","title":"環境構築"},"2":{"body":"以下のリポジトリの説明に従って行う。 uchan-nos/mikanos-build: Build and run scripts for MikanOS home directory に edk2 と osbook という directory がある状態になる。","breadcrumbs":"環境構築 » uchan さんの script など","id":"2","title":"uchan さんの script など"},"3":{"body":"VcXsrv の設定は、みかん本の付録Aに書いてある内容では不充分だと思う。 WSL2のX-ServerでGUI表示する際に「export DISPLAY=:0.0」が効かない - レガシー環境から脱却したい 元の GitHub issue -> Can't use X-Server in WSL 2 · Issue #4106 · microsoft/WSL などに書いてあるが、 /etc/resolve.conf に書いてある IP アドレスを DISPLAY=xx.xx.xx.xx:0.0 に入れないと動かない。 cat /etc/resolv.conf | grep nameserver | awk '{print $2}' のように IP address を取得できるので、以下を ~/.bash_profile などに書いておく。 export DISPLAY=$(cat /etc/resolv.conf | grep nameserver | awk '{print $2}'):0.0","breadcrumbs":"環境構築 » VcXsrv","id":"3","title":"VcXsrv"},"4":{"body":"MikanOS (みかのすと読むらしい) を WSL2 でビルドして QEMU で動かした～WSL2 のメモリ消費バグがつらい#ゼロからのOS自作入門 pic.twitter.com/OMFjuo9BcI— oka ఒక (@nowohyeah) March 27, 2021 WSL2 のメモリ枯渇問題については以下の記事のように対処すれば良いことが分かった。 WSL2によるホストのメモリ枯渇を防ぐための暫定対処 - Qiita RAM 4 GB の人権無視マシンを使っているので、 WSL への割り当ては 2 GB とした。 WSL2 再起動後に htop すると 2 GB になっていることが分かる。 fig","breadcrumbs":"第0章 » 第0章","id":"4","title":"第0章"},"5":{"body":"binary editor で EFI file を作って QEMU で動かすのを目標にする。 USB メモリとかは面倒なのでやらない。けっこう進んだらやってみてもよいけど。","breadcrumbs":"第1章 » 第1章","id":"5","title":"第1章"},"6":{"body":"binary editor は本では okteta や Binary Editor Bz が紹介されているが、 CLI で使える hexedit でやってみる。 sudo apt install hexedit\ntouch BOOTX64.EFI\nhexedit BOOTX64.EFI 打ち込んでいるところ","breadcrumbs":"第1章 » EFI ファイル作成","id":"6","title":"EFI ファイル作成"},"7":{"body":"本当は qemu の command を打たないといけないが、用意されている script を使う。 $HOME/osbook/devenv/run_qemu.sh BOOTX64.EFI まごころこめて手打ちした binary が起動すると感慨もひとしお。","breadcrumbs":"第1章 » QEMU で起動","id":"7","title":"QEMU で起動"},"8":{"body":"cd $HOME/osbook/day01/c\nclang -target x86_64-pc-win32-coff -mno-red-zone -fno-stack-protector -fshort-wchar -Wall -c hello.c\nlld-link /subsystem:efi_application /entry:EfiMain /out:hello.efi hello.o\n$HOME/osbook/devenv/run_qemu.sh hello.efi でさっきと同様に Hello world が表示される。 cmp BOOTX64.EFI ~/osbook/day01/c/hello.efi で binary を比較すると differ: byte 3, line 1 と出た。 hexedit で開くとその他の場所もけっこう違っていた。","breadcrumbs":"第1章 » C 言語で hello world","id":"8","title":"C 言語で hello world"},"9":{"body":"","breadcrumbs":"第2章 » 第2章","id":"9","title":"第2章"}},"length":10,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"0":{"df":1,"docs":{"4":{"tf":1.0}}},"1":{"df":2,"docs":{"5":{"tf":1.0},"8":{"tf":1.0}}},"2":{"0":{"2":{"1":{"df":2,"docs":{"0":{"tf":1.0},"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"2":{"df":1,"docs":{"0":{"tf":1.0}}},"7":{"df":1,"docs":{"4":{"tf":1.0}}},"df":3,"docs":{"3":{"tf":1.4142135623730951},"4":{"tf":1.4142135623730951},"9":{"tf":1.0}},"}":{"'":{")":{":":{"0":{".":{"0":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"3":{"df":1,"docs":{"8":{"tf":1.0}}},"4":{"1":{"0":{"6":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"4":{"tf":1.0}}},"a":{"d":{"d":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}},"w":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}},"b":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"_":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":4,"docs":{"5":{"tf":1.0},"6":{"tf":1.4142135623730951},"7":{"tf":1.0},"8":{"tf":1.0}}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"x":{"6":{"4":{".":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":3,"docs":{"6":{"tf":1.4142135623730951},"7":{"tf":1.0},"8":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"8":{"tf":1.0}}}}},"z":{"df":1,"docs":{"6":{"tf":1.0}}}},"c":{"a":{"df":0,"docs":{},"n":{"'":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"d":{"df":1,"docs":{"8":{"tf":1.0}}},"df":1,"docs":{"8":{"tf":1.4142135623730951}},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"8":{"tf":1.0}}}}},"df":0,"docs":{},"i":{"df":1,"docs":{"6":{"tf":1.0}}}},"m":{"df":0,"docs":{},"p":{"df":1,"docs":{"8":{"tf":1.0}}}},"o":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":1,"docs":{"8":{"tf":1.0}}}},"m":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"y":{"=":{"$":{"(":{"c":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},":":{"0":{".":{"0":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"x":{"df":0,"docs":{},"x":{".":{"df":0,"docs":{},"x":{"df":0,"docs":{},"x":{".":{"df":0,"docs":{},"x":{"df":0,"docs":{},"x":{".":{"df":0,"docs":{},"x":{"df":0,"docs":{},"x":{":":{"0":{".":{"0":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.4142135623730951}}}}}},"k":{"2":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"y":{":":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"8":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}},"t":{"c":{"/":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"v":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"x":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":1,"docs":{"4":{"tf":1.0}}},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.0}}}}},"n":{"df":0,"docs":{},"o":{"df":1,"docs":{"8":{"tf":1.0}}}},"s":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.0}}}}}}}},"g":{"b":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{".":{"c":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":1,"docs":{"8":{"tf":1.0}}}}},"o":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":1,"docs":{"8":{"tf":1.4142135623730951}}}}},"x":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":2,"docs":{"6":{"tf":1.7320508075688772},"8":{"tf":1.0}}}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"/":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"/":{"d":{"a":{"df":0,"docs":{},"y":{"0":{"1":{"/":{"c":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"v":{"/":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"_":{"df":0,"docs":{},"q":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{".":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":2,"docs":{"7":{"tf":1.0},"8":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"df":1,"docs":{"2":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}}},"p":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":1,"docs":{"8":{"tf":1.0}}},"k":{"df":1,"docs":{"8":{"tf":1.0}}}}},"l":{"d":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}}},"m":{"a":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"h":{"df":2,"docs":{"0":{"tf":1.0},"4":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"/":{"df":0,"docs":{},"w":{"df":0,"docs":{},"s":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{},"k":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":2,"docs":{"2":{"tf":1.0},"4":{"tf":1.0}}}}},"df":0,"docs":{}}},"n":{"df":0,"docs":{},"o":{"df":1,"docs":{"8":{"tf":1.0}}}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"/":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"k":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"h":{"df":0,"docs":{},"y":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"h":{"df":2,"docs":{"0":{"tf":1.0},"4":{"tf":1.0}}}},"df":0,"docs":{}}}}}}}},"o":{"df":0,"docs":{},"k":{"a":{"df":2,"docs":{"0":{"tf":1.0},"4":{"tf":1.0}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"a":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}}}},"s":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"/":{"d":{"a":{"df":0,"docs":{},"y":{"0":{"1":{"/":{"c":{"/":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{".":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":2,"docs":{"0":{"tf":1.4142135623730951},"4":{"tf":1.0}}},"u":{"df":0,"docs":{},"t":{":":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{".":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}},"p":{"c":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{},"i":{"c":{".":{"df":0,"docs":{},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"/":{"df":0,"docs":{},"h":{"df":0,"docs":{},"q":{"df":0,"docs":{},"x":{"c":{"a":{"df":0,"docs":{},"w":{"df":0,"docs":{},"z":{"df":0,"docs":{},"t":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"f":{"df":0,"docs":{},"j":{"df":0,"docs":{},"u":{"df":0,"docs":{},"o":{"9":{"b":{"c":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}},"q":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{"df":3,"docs":{"4":{"tf":1.0},"5":{"tf":1.0},"7":{"tf":1.4142135623730951}}}}},"i":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"a":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}}},"r":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{},"e":{"d":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":2,"docs":{"2":{"tf":1.4142135623730951},"7":{"tf":1.0}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}},"で":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"表":{"df":0,"docs":{},"示":{"df":0,"docs":{},"す":{"df":0,"docs":{},"る":{"df":0,"docs":{},"際":{"df":0,"docs":{},"に":{"df":0,"docs":{},"「":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}}}}}}}}}}}}}}}}},"t":{"a":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"u":{"b":{"df":0,"docs":{},"s":{"df":0,"docs":{},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{":":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"_":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}}}},"d":{"df":0,"docs":{},"o":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.0}}}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}}},"u":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"df":0,"docs":{},"s":{"b":{"df":1,"docs":{"5":{"tf":1.0}}},"df":1,"docs":{"3":{"tf":1.0}}}},"v":{"c":{"df":0,"docs":{},"x":{"df":0,"docs":{},"s":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}},"w":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"8":{"tf":1.0}}}}},"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"3":{"2":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"l":{"2":{"df":1,"docs":{"4":{"tf":2.23606797749979}},"の":{"df":0,"docs":{},"x":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":2,"docs":{"3":{"tf":1.0},"4":{"tf":1.0}}}}},"x":{"8":{"6":{"_":{"6":{"4":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"3":{"tf":1.0}}},"z":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":1,"docs":{"8":{"tf":1.0}}}}}}}},"breadcrumbs":{"root":{"0":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}},"1":{"df":4,"docs":{"5":{"tf":1.7320508075688772},"6":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.4142135623730951}}},"2":{"0":{"2":{"1":{"df":2,"docs":{"0":{"tf":1.0},"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"2":{"df":1,"docs":{"0":{"tf":1.0}}},"7":{"df":1,"docs":{"4":{"tf":1.0}}},"df":3,"docs":{"3":{"tf":1.4142135623730951},"4":{"tf":1.4142135623730951},"9":{"tf":1.7320508075688772}},"}":{"'":{")":{":":{"0":{".":{"0":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"3":{"df":1,"docs":{"8":{"tf":1.0}}},"4":{"1":{"0":{"6":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"4":{"tf":1.0}}},"a":{"d":{"d":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}},"w":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}},"b":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"_":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":4,"docs":{"5":{"tf":1.0},"6":{"tf":1.4142135623730951},"7":{"tf":1.0},"8":{"tf":1.0}}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"x":{"6":{"4":{".":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":3,"docs":{"6":{"tf":1.4142135623730951},"7":{"tf":1.0},"8":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"8":{"tf":1.0}}}}},"z":{"df":1,"docs":{"6":{"tf":1.0}}}},"c":{"a":{"df":0,"docs":{},"n":{"'":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"d":{"df":1,"docs":{"8":{"tf":1.0}}},"df":1,"docs":{"8":{"tf":1.7320508075688772}},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"8":{"tf":1.0}}}}},"df":0,"docs":{},"i":{"df":1,"docs":{"6":{"tf":1.0}}}},"m":{"df":0,"docs":{},"p":{"df":1,"docs":{"8":{"tf":1.0}}}},"o":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":1,"docs":{"8":{"tf":1.0}}}},"m":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"y":{"=":{"$":{"(":{"c":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},":":{"0":{".":{"0":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"x":{"df":0,"docs":{},"x":{".":{"df":0,"docs":{},"x":{"df":0,"docs":{},"x":{".":{"df":0,"docs":{},"x":{"df":0,"docs":{},"x":{".":{"df":0,"docs":{},"x":{"df":0,"docs":{},"x":{":":{"0":{".":{"0":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.4142135623730951}}}}}},"k":{"2":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.4142135623730951}}}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"y":{":":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"8":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}},"t":{"c":{"/":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"v":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"x":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":1,"docs":{"4":{"tf":1.0}}},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.0}}}}},"n":{"df":0,"docs":{},"o":{"df":1,"docs":{"8":{"tf":1.0}}}},"s":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.0}}}}}}}},"g":{"b":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{".":{"c":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":1,"docs":{"8":{"tf":1.0}}}}},"o":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":1,"docs":{"8":{"tf":1.7320508075688772}}}}},"x":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":2,"docs":{"6":{"tf":1.7320508075688772},"8":{"tf":1.0}}}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"/":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"/":{"d":{"a":{"df":0,"docs":{},"y":{"0":{"1":{"/":{"c":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"v":{"/":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"_":{"df":0,"docs":{},"q":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{".":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":2,"docs":{"7":{"tf":1.0},"8":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"df":1,"docs":{"2":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}}},"p":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":1,"docs":{"8":{"tf":1.0}}},"k":{"df":1,"docs":{"8":{"tf":1.0}}}}},"l":{"d":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}}},"m":{"a":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"h":{"df":2,"docs":{"0":{"tf":1.0},"4":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"/":{"df":0,"docs":{},"w":{"df":0,"docs":{},"s":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{},"k":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":2,"docs":{"2":{"tf":1.0},"4":{"tf":1.0}}}}},"df":0,"docs":{}}},"n":{"df":0,"docs":{},"o":{"df":1,"docs":{"8":{"tf":1.0}}}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"/":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"k":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"h":{"df":0,"docs":{},"y":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"h":{"df":2,"docs":{"0":{"tf":1.0},"4":{"tf":1.0}}}},"df":0,"docs":{}}}}}}}},"o":{"df":0,"docs":{},"k":{"a":{"df":2,"docs":{"0":{"tf":1.0},"4":{"tf":1.0}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"a":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}}}},"s":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"/":{"d":{"a":{"df":0,"docs":{},"y":{"0":{"1":{"/":{"c":{"/":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{".":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":2,"docs":{"0":{"tf":1.7320508075688772},"4":{"tf":1.0}}},"u":{"df":0,"docs":{},"t":{":":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{".":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}},"p":{"c":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{},"i":{"c":{".":{"df":0,"docs":{},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"/":{"df":0,"docs":{},"h":{"df":0,"docs":{},"q":{"df":0,"docs":{},"x":{"c":{"a":{"df":0,"docs":{},"w":{"df":0,"docs":{},"z":{"df":0,"docs":{},"t":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"f":{"df":0,"docs":{},"j":{"df":0,"docs":{},"u":{"df":0,"docs":{},"o":{"9":{"b":{"c":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}},"q":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{"df":3,"docs":{"4":{"tf":1.0},"5":{"tf":1.0},"7":{"tf":1.7320508075688772}}}}},"i":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"a":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}}},"r":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{},"e":{"d":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":2,"docs":{"2":{"tf":1.7320508075688772},"7":{"tf":1.0}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}},"で":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"表":{"df":0,"docs":{},"示":{"df":0,"docs":{},"す":{"df":0,"docs":{},"る":{"df":0,"docs":{},"際":{"df":0,"docs":{},"に":{"df":0,"docs":{},"「":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}}}}}}}}}}}}}}}}},"t":{"a":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"u":{"b":{"df":0,"docs":{},"s":{"df":0,"docs":{},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{":":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"_":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}}}},"d":{"df":0,"docs":{},"o":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.0}}}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}}},"u":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}},"df":0,"docs":{},"s":{"b":{"df":1,"docs":{"5":{"tf":1.0}}},"df":1,"docs":{"3":{"tf":1.0}}}},"v":{"c":{"df":0,"docs":{},"x":{"df":0,"docs":{},"s":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}}}}},"df":0,"docs":{}},"w":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"8":{"tf":1.0}}}}},"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"3":{"2":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"8":{"tf":1.7320508075688772}}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"l":{"2":{"df":1,"docs":{"4":{"tf":2.23606797749979}},"の":{"df":0,"docs":{},"x":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":2,"docs":{"3":{"tf":1.0},"4":{"tf":1.0}}}}},"x":{"8":{"6":{"_":{"6":{"4":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"3":{"tf":1.0}}},"z":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":1,"docs":{"8":{"tf":1.0}}}}}}}},"title":{"root":{"0":{"df":1,"docs":{"4":{"tf":1.0}}},"1":{"df":1,"docs":{"5":{"tf":1.0}}},"2":{"df":1,"docs":{"9":{"tf":1.0}}},"c":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":1,"docs":{"6":{"tf":1.0}}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":1,"docs":{"8":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}},"q":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"df":0,"docs":{}},"u":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"v":{"c":{"df":0,"docs":{},"x":{"df":0,"docs":{},"s":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":0,"docs":{}},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});