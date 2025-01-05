<?php
// Caminho do repositorio na Hostgator
$repo_path = '/home2/gtpare02/public_html/CasaAmigosdaFe/update_site.php';

// comando para atualizar as mudanças no site
shell_exec("cd $repo_path && git pull");
?>