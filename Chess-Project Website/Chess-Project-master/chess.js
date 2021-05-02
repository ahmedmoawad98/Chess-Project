<script>
    $(document).ready(function() {

        //-------------------------------------------------------------------
        // Some code to be executed...d
        //alert("Hello World!");
        //
        // hide all queens
        //
        for (r = 1; r <= 8; r++) {
                for (c = 1; c <= 8; c++) {
                    queenId = "#Q";
                    queenId = queenId.concat(r.toString().trim(), c.toString().trim());
                    //alert(queenId);
                    //$(queenId).hide();
                    $(queenId).css("visibility","hidden");
                    //console.log(queenId);
                }
            }
        ///////////////////////////////////////////////////////////////
        $("#EightQueens").click(EightQueens)
        function hide_queens(){
            for (r = 1; r <= 8; r++) {
                // clear result table
                $("#QR" + r).text("");
                $("#QC" + r).text("");
                for (c = 1; c <= 8; c++) {
                    queenId = "#Q";
                    queenId = queenId.concat(r.toString().trim(), c.toString().trim());
                    //alert(queenId);
                    //$(queenId).hide();
                    $(queenId).css("visibility","hidden");
                    cell = "#C";
                    cell = cell.concat (r.toString(),c.toString());
                    // $(cell).removeClass("WhiteCellMarked");
                    // $(cell).addClass("WhiteCell");
                    CurrCellClass=$(cell).attr("class");
                    if ( CurrCellClass == "WhiteCellMarked"){
                        $(cell).removeClass("WhiteCellMarked");
                        $(cell).addClass("WhiteCell");
                    }
                    if ( CurrCellClass== "BlackCellMarked"){
                        $(cell).removeClass("BlackCellMarked");
                        $(cell).addClass("BlackCell");
               }

                    //console.log(queenId);
                }
            }

        }
        /////////////////////////////////////////////////////////////////
        $("#hide_button").click(hide_queens)
        //////////////////////////////////////////////////////////////////
        $("#show_button").click(function() {
            for (r = 1; r <= 8; r++) {
                for (c = 1; c <= 8; c++) {
                    queenId = "#Q";
                    queenId = queenId.concat(r.toString().trim(), c.toString().trim());
                    //alert(queenId);
                    //$(queenId).show();
                    $(queenId).css("visibility","visible");
                    //console.log(queenId);
                }
            }
        })
        //////////////////////////////////////////////////////////////////
        function MarkCell(c){
            CurrCellClass=$(c).attr("class");
               if ( CurrCellClass== "WhiteCell"){
                  $(c).removeClass("WhiteCell");
                  $(c).addClass("WhiteCellMarked");
               }
               if ( CurrCellClass== "BlackCell"){
                  $(c).removeClass("BlackCell");
                  $(c).addClass("BlackCellMarked");
               }

        }
        ////////////////////////////////////////////////////////////////
        function UnMarkCell(c){
            CurrCellClass=$(c).attr("class");
               if ( CurrCellClass== "BalckCell"){
                  $(c).removeClass("BlackCell");
                  $(c).addClass("BlackCelllMarked");
               }
               if ( CurrCellClass== "WhiteCell"){
                  $(c).removeClass("WhiteCell");
                  $(c).addClass("WhiteCellMarked");
               }

        }
        //////////////////////////////////////////////////////////////////
        function place_queen(UseCell, QOB /*Queens on board*/) {
           //console.log(typeof UseCell);
             if (arguments.length = 1){
                QR = UseCell.row;
                QC = UseCell.col;
              }
            else {
                QR = $("#QR").val();
                QC = $("#QC").val();
            }

            $("#QR"+QOB).text(QR);
            $("#QC"+QOB).text(QC);

           //alert("placing queen in ");
           //
            queenId = "#Q";
            queenId = queenId.concat(QR.toString().trim(), QC.toString().trim());
            //alert(queenId);
            //$(queenId).show();
            $(queenId).css("visibility","visible");
           //
           // hightlight row
           //
           for (i=1; i<=8 ; i++){
               cell = "#C";
               cell = cell.concat (QR, i.toString());
               MarkCell(cell);

           }
           //
           // highlight column
           //
            for (i=1; i<=8 ; i++){
               cell = "#C";
               cell = cell.concat (i.toString(),QC);
               MarkCell(cell);
           }
           //
           // highlight daignole
           //
           /*
           for (i=1; i<=8 ; i++){
               cell = "#C";
               cell = cell.concat (i.toString(),i.toString());
               $(cell).removeClass("WhiteCell");
               $(cell).addClass("WhiteCellMarked");
           }
           */
           C= parseInt(QC);
           R=parseInt(QR);
           //Top Left to Bottom Right Diagnole
           for(R ;R<=8;R++){
                  cell= "#C";
                  cell=cell.concat(R.toString(),C.toString());
                  MarkCell(cell);
                  if (C <= 8) C++;
           }
           C= parseInt(QC);
           R=parseInt(QR);
           for(R ;R>=1;R--){
                  cell= "#C";
                  cell=cell.concat(R.toString(),C.toString());
                  MarkCell(cell);
                  if (C >= 1) C--;
           }
           C= parseInt(QC);
           R=parseInt(QR);

           //TOP RIGHT TO BOTTOM LEFT DIagnole
            for(R ;R >=1;R--){
                  cell= "#C";
                  cell=cell.concat(R.toString(),C.toString());
                  MarkCell(cell);
                  if (C <= 8) C++;
           }
           R=parseInt(QR);
           C= parseInt(QC);
           for(R ;R<=8;R++){
                  cell= "#C";
                  cell=cell.concat(R.toString(),C.toString());
                  MarkCell(cell);
                  if (C >= 1) C--;
           }


        //

        }
        //////////////////////////////////////////////////////////////////
        $("#place_button").click(place_queen)
        //
        var CurrCell = {row:"0", col:"0"};
        //-------------------------------------------------------------------
        function isCellAval(r,c) {
           cell = "#C" + r + c;
           if (
                 ($(cell).attr("class") == "WhiteCellMarked")  ||
                 ($(cell).attr("class") == "BlackCellMarked")
               )
              return 0 //"Cell " + cell + " is not avaliable"
           else
              return 1 //"Cell " + cell + " is avaliable";
        }
        //console.log(isCellAval(2,5));
        //-------------------------------------------------------------------
        function getAvalCell(cell){
            for (r=1; r<=8; r++){
                for(c=1; c<=8; c++)
                    if(isCellAval(r,c)){
                        //return ("#C"+ r + c);
                        cell.row = r;
                        cell.col = c;
                        return cell;
                    }
                else{
                   cell.row = 0;
                   cell.col = 0;
                }
            }
            return cell;
        }
        ////////////////////////////////////////////////////////
        function EightQueens(){
        //debugger;
        trials = 0;
        Solutions=0;
        QueensOnBoard = 0;
        for (q1r=1; q1r<= 8; q1r++){
            for (q1c=1; q1c <=8; q1c++){

                if (QueensOnBoard == 8){
                    Solutions++;
                    //confirm("Solution Found!");
                    $("#SC").text(Solutions+ " Solution");
                    $("#TC").text(trials +" Trial");
                }

                CurrCell.row = q1r;
                CurrCell.col = q1c;
                QueensOnBoard = 0;
                trials ++;
                $("#Trials").text("Total Trials = " + trials);
                hide_queens();
                while (QueensOnBoard < 8){
                    if (CurrCell.row != 0) {
                            QueensOnBoard ++;
                            //setTimeout(place_queen, 1000, CurrCell, QueensOnBoard);
                            place_queen(CurrCell, QueensOnBoard);
                            CurrCell = getAvalCell(CurrCell);
                        }
                    else{
                        console.log("Queens on board = " + QueensOnBoard);
                        if(QueensOnBoard<8){
                            $("#result").text( "Current queens on board is " + QueensOnBoard);


                           //setTimeout(function(){ alert("Hello"); }, 30000);
                        //alert("I was able to place only " + QueensOnBoard + " Queens! starting from R=" + q1r + " and C = " + q1c + " I will try next");
                        }
                        break;
                    }
                }
                //setTimeout(function(){ x=0; }, 3000);
            }
        }
        }

        //
        //
        /*
        CurrCell = getAvalCell(CurrCell);
        //console.log(getAvalCell(CurrCell));
        console.log( "CurrCell.row " + CurrCell.row);
        console.log( "CurrCell.col " + CurrCell.col);
        place_queen(CurrCell);
        */
    });
</script>
