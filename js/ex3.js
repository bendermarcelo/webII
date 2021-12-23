var gCasas = Array();
var gApartamentos = Array();

// Classes
class Imovel {

    constructor(rua, numero, bairro, cidade, estado, cep, titulo, qtQuartos, qtBanheiros, qtGaragens){
        this.rua = rua;
        this.numero = numero;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.cep = cep;
        this.titulo = titulo;
        this.qtQuartos = qtQuartos;
        this.qtBanheiros = qtBanheiros;
        this.qtGaragens = qtGaragens;
    }
}

class Casa extends Imovel {

    
    constructor(rua, numero, bairro, cidade, estado, cep, titulo, qtQuartos, qtBanheiros, qtGaragens, areaTerreno, areaConstruida, preco){
        
        super(rua, numero, bairro, cidade, estado, cep, titulo, qtQuartos, qtBanheiros, qtGaragens);

        this.areaTerreno = areaTerreno;
        this.areaConstruida = areaConstruida;
        this.preco = preco;
    }
}

class Apartamento extends Imovel {
    constructor(rua, numero, bairro, cidade, estado, cep, titulo, qtQuartos, qtBanheiros, qtGaragens, tamanho, preco, condominio){

        super(rua, numero, bairro, cidade, estado, cep, titulo, qtQuartos, qtBanheiros, qtGaragens);

        this.tamanho = tamanho;
        this.preco = preco;
        this.condominio = condominio;
    }
    
}

// functions 

function atualizar_imoveis() {

    var lBodyContent = "";
    
    for(i=0;i<gCasas.length;i++) {
        lBodyContent += "<div class='imovel-item'>";

            lBodyContent += "<br/><b>Tipo:</b> Casa";
            lBodyContent += "<br/><b>Título:</b> " + gCasas[i].titulo;
            lBodyContent += "<br/><b>Quartos:</b> " + gCasas[i].qtQuartos;
            lBodyContent += "<br/><b>Banheiros:</b> " + gCasas[i].qtBanheiros;
            lBodyContent += "<br/><b>Garagens:</b> " + gCasas[i].qtGaragens;
            lBodyContent += "<br/><b>Área do Terreno:</b> " + gCasas[i].areaTerreno;
            lBodyContent += "<br/><b>Área Construída:</b> " + gCasas[i].areaConstruida;
            lBodyContent += "<br/><b>Preço:</b> " + gCasas[i].preco;
            
            lBodyContent += "<br/><br/><b>Endereço:</b><br/><br/>";

            lBodyContent += "<br/><b>Rua:</b> " + gCasas[i].rua;
            lBodyContent += "<br/><b>Número:</b> " + gCasas[i].numero;
            lBodyContent += "<br/><b>Bairro:</b> " + gCasas[i].bairro;
            lBodyContent += "<br/><b>Cidade:</b> " + gCasas[i].cidade;
            lBodyContent += "<br/><b>Estado:</b> " + gCasas[i].estado;
            lBodyContent += "<br/><b>CEP:</b> " + gCasas[i].cep;
            
        lBodyContent += "</div>";
    }
    
    for(i=0;i<gApartamentos.length;i++) {
        lBodyContent += "<div class='imovel-item'>";

            lBodyContent += "<br/><b>Tipo:</b> Apartamento";
            lBodyContent += "<br/><b>Título:</b> " + gApartamentos[i].titulo;
            lBodyContent += "<br/><b>Quartos:</b> " + gApartamentos[i].qtQuartos;
            lBodyContent += "<br/><b>Banheiros:</b> " + gApartamentos[i].qtBanheiros;
            lBodyContent += "<br/><b>Garagens:</b> " + gApartamentos[i].qtGaragens;
            lBodyContent += "<br/><b>Tamanho:</b> " + gApartamentos[i].tamanho;
            lBodyContent += "<br/><b>Condomínio:</b> " + gApartamentos[i].condominio;
            lBodyContent += "<br/><b>Preço:</b> " + gApartamentos[i].preco;
            
            lBodyContent += "<br/><br/><b>Endereço:</b><br/><br/>";

            lBodyContent += "<br/><b>Rua:</b> " + gApartamentos[i].rua;
            lBodyContent += "<br/><b>Número:</b> " + gApartamentos[i].numero;
            lBodyContent += "<br/><b>Bairro:</b> " + gApartamentos[i].bairro;
            lBodyContent += "<br/><b>Cidade:</b> " + gApartamentos[i].cidade;
            lBodyContent += "<br/><b>Estado:</b> " + gApartamentos[i].estado;
            lBodyContent += "<br/><b>CEP:</b> " + gApartamentos[i].cep;
            
        lBodyContent += "</div>";
    }

    $(".imoveis-list .content").html(lBodyContent);

}

function atualizar_casas() {

    var lBodyContent = "<table>";

        lBodyContent += "<thead>";
            lBodyContent += "<tr>";
                lBodyContent += "<th>Código</th>";
                lBodyContent += "<th>Título</th>";
                lBodyContent += "<th>Comandos</th>";
            lBodyContent += "</tr>";
        lBodyContent += "</thead>";

        lBodyContent += "<tbody>";
            

        if(gCasas.length == 0) {

            lBodyContent +=  "Ainda não há casas cadastradas";

        } else {

            for(i=0;i<gCasas.length;i++) {
                lBodyContent += "<tr>";
                    lBodyContent += "<td>"+(i+1)+"</td>";
                    lBodyContent += "<td>"+gCasas[i].titulo+"</td>";
                    lBodyContent += "<td><a href='#' class='btn-delete' data-value='"+i+"'><i class='fas fa-trash'></i></a><a href='#' class='btn-edit' data-value='"+i+"'><i class='fas fa-pen'></i></a></td>";
                lBodyContent += "</tr>";
            }
    
        }

            
        lBodyContent += "</tbody>";

    lBodyContent += "</table>";

    $(".casas-list .card-body.content table").remove();
    $(".casas-list .card-body.content").html(lBodyContent);

    $(".casas-list .content table td a.btn-delete").click(function() {

        if(confirm("Confirma a exclusão?")) {
            var lIndex = $(this).data("value");
            gCasas.splice(lIndex, 1);
    
            atualizar_casas();
        }

    });

    $(".casas-list .content table td a.btn-edit").click(function() {
        var lIndex = $(this).data("value");
        atualizar_form_casas_com_indice(lIndex);

        var myModalEl = document.getElementById('addCasaModal');
        var modal = bootstrap.Modal.getInstance(myModalEl);
        modal.show();

    });

    atualizar_imoveis();
}

function atualizar_form_casas_com_indice(indice) {
    
    var lCasa = gCasas[indice];

    $("#addCasaModal [name=id]").val(indice);
    $("#addCasaModal #txtTitulo").val(lCasa.titulo);
    $("#addCasaModal #txtQuartos").val(lCasa.qtQuartos);
    $("#addCasaModal #txtBanheiros").val(lCasa.qtBanheiros);
    $("#addCasaModal #txtGaragens").val(lCasa.qtGaragens);
    $("#addCasaModal #txtAreaTerreno").val(lCasa.areaTerreno);
    $("#addCasaModal #txtAreaConstruida").val(lCasa.areaConstruida);
    $("#addCasaModal #txtPreco").val(lCasa.preco);

    $("#addCasaModal #txtRua").val(lCasa.rua);
    $("#addCasaModal #txtNumero").val(lCasa.numero);
    $("#addCasaModal #txtBairro").val(lCasa.bairro);
    $("#addCasaModal #txtCidade").val(lCasa.cidade);
    $("#addCasaModal #txtEstado").val(lCasa.estado);
    $("#addCasaModal #txtCEP").val(lCasa.cep);

}

function atualizar_form_apartamentos_com_indice(indice) {
    
    var lApartamento = gApartamentos[indice];

    $("#addApartamentoModal [name=id]").val(indice);
    $("#addApartamentoModal #txtTitulo").val(lApartamento.titulo);
    $("#addApartamentoModal #txtQuartos").val(lApartamento.qtQuartos);
    $("#addApartamentoModal #txtBanheiros").val(lApartamento.qtBanheiros);
    $("#addApartamentoModal #txtGaragens").val(lApartamento.qtGaragens);
    $("#addApartamentoModal #txtCondominio").val(lApartamento.condominio);
    $("#addApartamentoModal #txtTamanho").val(lApartamento.tamanho);
    $("#addApartamentoModal #txtPreco").val(lApartamento.preco);

    $("#addApartamentoModal #txtRua").val(lApartamento.rua);
    $("#addApartamentoModal #txtNumero").val(lApartamento.numero);
    $("#addApartamentoModal #txtBairro").val(lApartamento.bairro);
    $("#addApartamentoModal #txtCidade").val(lApartamento.cidade);
    $("#addApartamentoModal #txtEstado").val(lApartamento.estado);
    $("#addApartamentoModal #txtCEP").val(lApartamento.cep);
}

function atualizar_apartamentos() {

    var lBodyContent = "<table>";

        lBodyContent += "<thead>";
            lBodyContent += "<tr>";
                lBodyContent += "<th>Código</th>";
                lBodyContent += "<th>Título</th>";
                lBodyContent += "<th>Comandos</th>";
            lBodyContent += "</tr>";
        lBodyContent += "</thead>";

        lBodyContent += "<tbody>";
            

        if(gApartamentos.length == 0) {

            lBodyContent +=  "Ainda não há apartamentos cadastradas";

        } else {

            for(i=0;i<gApartamentos.length;i++) {
                lBodyContent += "<tr>";
                    lBodyContent += "<td>"+(i+1)+"</td>";
                    lBodyContent += "<td>"+gApartamentos[i].titulo+"</td>";
                    lBodyContent += "<td><a href='#' class='btn-delete' data-value='"+i+"'><i class='fas fa-trash'></i></a><a href='#' class='btn-edit' data-value='"+i+"'><i class='fas fa-pen'></i></a></td>";
                lBodyContent += "</tr>";
            }
    
        }

            
        lBodyContent += "</tbody>";

    lBodyContent += "</table>";

    $(".apartamentos-list .card-body.content table").remove();
    $(".apartamentos-list .card-body.content").html(lBodyContent);
   

    $(".apartamentos-list .content table td a.btn-delete").click(function() {

        if(confirm("Confirma a exclusão?")) {
            var lIndex = $(this).data("value");
            gApartamentos.splice(lIndex, 1);
    
            atualizar_apartamentos();
        }

    });

    $(".apartamentos-list .content table td a.btn-edit").click(function() {
        var lIndex = $(this).data("value");
        atualizar_form_apartamentos_com_indice(lIndex);

        var myModalEl = document.getElementById('addApartamentoModal');
        var modal = bootstrap.Modal.getInstance(myModalEl);
        modal.show();

    });

    atualizar_imoveis();
}

function resetar_modal_casa() {
    
    $("#addCasaModal [name=id]").val("");
    $("#addCasaModal #txtTitulo").val("");
    $("#addCasaModal #txtQuartos").val("");
    $("#addCasaModal #txtBanheiros").val("");
    $("#addCasaModal #txtGaragens").val("");
    $("#addCasaModal #txtAreaTerreno").val("");
    $("#addCasaModal #txtAreaConstruida").val("");
    $("#addCasaModal #txtPreco").val("");

    $("#addCasaModal #txtRua").val("");
    $("#addCasaModal #txtNumero").val("");
    $("#addCasaModal #txtBairro").val("");
    $("#addCasaModal #txtCidade").val("");
    $("#addCasaModal #txtEstado").val("");
    $("#addCasaModal #txtCEP").val("");

}

function resetar_modal_apartamentos() {
    $("#addApartamentoModal [name=id]").val("");
    $("#addApartamentoModal #txtTitulo").val("");
    $("#addApartamentoModal #txtQuartos").val("");
    $("#addApartamentoModal #txtBanheiros").val("");
    $("#addApartamentoModal #txtGaragens").val("");
    $("#addApartamentoModal #txtCondominio").val("");
    $("#addApartamentoModal #txtTamanho").val("");
    $("#addApartamentoModal #txtPreco").val("");

    $("#addApartamentoModal #txtRua").val("");
    $("#addApartamentoModal #txtNumero").val("");
    $("#addApartamentoModal #txtBairro").val("");
    $("#addApartamentoModal #txtCidade").val("");
    $("#addApartamentoModal #txtEstado").val("");
    $("#addApartamentoModal #txtCEP").val("");
}
// Events

$(document).ready(function() {
    
    $("#btn-add-casa").click(function() {
        var lCasaTitulo = $("#addCasaModal #txtTitulo").val();
        var lQtQuartos = $("#addCasaModal #txtQuartos").val();
        var lQtBanheiros = $("#addCasaModal #txtBanheiros").val();
        var lQtGaragens = $("#addCasaModal #txtGaragens").val();
        var lAreaTerrena = $("#addCasaModal #txtAreaTerreno").val();
        var lAreaConstruida = $("#addCasaModal #txtAreaConstruida").val();
        var lPreco = $("#addCasaModal #txtPreco").val();

        var lRua = $("#addCasaModal #txtRua").val();
        var lNumero = $("#addCasaModal #txtNumero").val();
        var lBairro = $("#addCasaModal #txtBairro").val();
        var lCidade = $("#addCasaModal #txtCidade").val();
        var lEstado = $("#addCasaModal #txtEstado").val();
        var lCEP = $("#addCasaModal #txtCEP").val();

        var casa = new Casa(lRua, lNumero, lBairro, lCidade, lEstado, lCEP, lCasaTitulo, lQtQuartos, lQtBanheiros, lQtGaragens, lAreaTerrena, lAreaConstruida, lPreco);
        var lIndex = $("#addCasaModal [name=id]").val();

        console.log(lIndex);
        
        if(lIndex == "")
            gCasas.push(casa);
        else
            gCasas.splice(lIndex, 1, casa);

        atualizar_casas();
        
        var myModalEl = document.getElementById('addCasaModal');
        var modal = bootstrap.Modal.getInstance(myModalEl);
        modal.hide();

        resetar_modal_casa();

    });

    $("#btn-add-apartamento").click(function() {
        var lCasaTitulo = $("#addApartamentoModal #txtTitulo").val();
        var lQtQuartos = $("#addApartamentoModal #txtQuartos").val();
        var lQtBanheiros = $("#addApartamentoModal #txtBanheiros").val();
        var lQtGaragens = $("#addApartamentoModal #txtGaragens").val();
        var lCondominio = $("#addApartamentoModal #txtCondominio").val();
        var lTamanho = $("#addApartamentoModal #txtTamanho").val();
        var lPreco = $("#addApartamentoModal #txtPreco").val();

        var lRua = $("#addApartamentoModal #txtRua").val();
        var lNumero = $("#addApartamentoModal #txtNumero").val();
        var lBairro = $("#addApartamentoModal #txtBairro").val();
        var lCidade = $("#addApartamentoModal #txtCidade").val();
        var lEstado = $("#addApartamentoModal #txtEstado").val();
        var lCEP = $("#addApartamentoModal #txtCEP").val();

        var apartamento = new Apartamento(lRua, lNumero, lBairro, lCidade, lEstado, lCEP, lCasaTitulo, lQtQuartos, lQtBanheiros, lQtGaragens, lCondominio, lTamanho, lPreco);
        var lIndex = $("#addApartamentoModal [name=id]").val();
        
        if(lIndex == "")
            gApartamentos.push(apartamento);
        else
            gApartamentos.splice(lIndex, 1, apartamento);            

        atualizar_apartamentos();

        var myModalEl = document.getElementById('addApartamentoModal');
        var modal = bootstrap.Modal.getInstance(myModalEl);
        modal.hide();

        resetar_modal_apartamentos();
    });

})