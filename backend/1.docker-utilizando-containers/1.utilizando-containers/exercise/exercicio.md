Vamos juntar tudo o que aprendemos até aqui e exercitar mais ainda nosso aprendizado!

* No Docker Hub, utilizando a caixa de busca ("Search for great content"), busque pela imagem da Distribuição Linux Debian.

* Uma vez que encontrar a imagem oficial, acesse-a (clicando em seu card) e verifique na página de detalhes. Confira se existe algum comando para baixar a imagem localmente sem ter que criar um contêiner para isso.

* Baixe a imagem utilizando a tag: stable-slim, que é uma versão reduzida da distribuição.

* Após baixar a imagem para seu computador local, crie e execute um contêiner no modo interativo utilizando essa imagem como referência — não esqueça referenciar a tag.

* No terminal, você deve conseguir rodar o comando cat /etc/*-release, que vai retornar os dados da distribuição Debian que está sendo rodada dentro do contêiner.

* Encerre o terminal.

* Verifique na sua lista de contêiners qual contêiner se refere ao exercício que acabou de praticar.

* Inicie o mesmo contêiner novamente, sem criar outro. Valide se ele está ativo na lista de contêiners.

* Retome o contêiner que foi criado anteriormente neste exercício.

* Rode o comando cat /etc/debian_version que deve retornar a versão atual do sistema do contêiner.

* Encerre o terminal.

* Remova somente o contêiner criado para esse exercício.

[BÔNUS] Crie e rode de modo interativo em modo ‘Cleanup’, a imagem andrius/ascii-patrol.

[BÔNUS] **Encerre o contêiner utilizando os botões [ctrl] + [c].