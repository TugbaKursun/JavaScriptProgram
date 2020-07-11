var classification = {
    Lion:{
    kingdom:"Animalia",
    cell_type:"Eukaryotic",
    nutrition:"Heterotrophic",
    },
    Protista:{
    domain:"Eukaryotic",
    cell_type:"Prokaryotic",
    nutrition:"Autophotrophic"
    
    },
    Ecoli:{
    domain:"Bacteria",
    cell_type:"Prokaryotic",
    nutrition:"Heterotrophic"
    
    }
    }
    
    console.log("Ecoli cell type is "+ classification.Ecoli.cell_type);
    console.log(classification["Ecoli"]["domain"]);
    console.log(classification.Lion.kingdom);
    console.log(classification.Protista.nutrition);
    console.log(classification["Lion"]["kingdom"]);
    
    console.log(classification.Ecoli.domain + " can cause dissease.");