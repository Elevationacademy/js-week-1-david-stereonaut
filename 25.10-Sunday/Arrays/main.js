const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
const newGenes = [genes[0], genes[1], genes[4], genes[3], genes[2]];
newGenes.splice(3, 1);
newGenes.push(genes[3], genes[3]);
newGenes.unshift("FXT");
console.log(newGenes);