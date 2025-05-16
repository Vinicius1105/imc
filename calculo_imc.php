<?php
    $peso = $_POST['peso'];
    $altura = $_POST['altura'];
    $IMC = $peso / ($altura * $altura);
    $IMC = round($IMC , 2);


    if ($IMC < 18.5) {
        echo "Abaixo do Peso Normal ".$IMC;
    }

    elseif ($IMC > 25) {
        echo "Peso Normal ".$IMC;
    }

    elseif ($IMC < 30) {
        echo "Excesso de Peso ".$IMC;
    }

    elseif ($IMC < 35) {
        echo "Obesidade Classe I ".$IMC;
    }

    elseif ($IMC < 40) {
        echo "Obesidade Classe II ".$IMC;
    }

    else {
        echo "Obesidade Classe III ".$IMC;
    }

?>

