var gVideos = [];
$(document).ready(function() {

    $("input[type=submit]").click(function(ev) {
        ev.preventDefault();
        var txtNome = $("#txtNome").val().trim();
        var txtUrl = $("#txtURL").val().trim().replace("watch?v=","embed/");
        var newVideo = "";

        if(txtNome != "" && txtUrl != "") {

            if(!txtUrl.startsWith("https://www.youtube.com")) {
                alert("Esta não é uma url válida do youtube");
                return false;
            }

            gVideos.push({
                nome: txtNome,
                url: txtUrl,
            });

            console.log(gVideos);

            newVideo = "<div class='item'>";
                newVideo += "<h2>" + txtNome + "</h2><div>";
                newVideo += '<iframe width="560" height="315" src="'+txtUrl+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
                newVideo += "</div>";
            newVideo += "</div>";

            if(gVideos.length == 1) 
                $(".videos-list .content").html("");

            $(".videos-list .content").append(newVideo);

        } else {
            alert("Preencha tanto o campo nome quanto o campo url e tente novamente");
        }

    });
});