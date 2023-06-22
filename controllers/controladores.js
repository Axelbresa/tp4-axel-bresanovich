function GET(req, res){
        res.send("Solicitud Get");
    }
function POST(req, res){
        res.send("Solicitud post");
 }
    function PUT(req, res){
        res.send("Solicitud put");
};
    function DELETE(req, res){
        res.send("Solicitud delete");
}

module.exports={GET, POST, PUT, DELETE}