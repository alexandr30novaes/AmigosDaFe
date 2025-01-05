<?php
// Caminho do repositorio na Hostgator
$repo_path = '/home2/gtpare02/public_html/CasaAmigosdaFe';

// comando para atualizar as mudanças no site
shell_exex("cd $repo_path && git pull");
?>