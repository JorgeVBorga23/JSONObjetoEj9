//objeto json

//Ejercicio 9
/*
[{
    "_id": {
      "$oid": "5968dd23fc13ae04d9000001"
    },
    "product_name": "sildenafil citrate",
    "supplier": "Wisozk Inc",
    "quantity": 261,
    "unit_cost": "$10.47"
  }, {
    "_id": {
      "$oid": "5968dd23fc13ae04d9000002"
    },
    "product_name": "Mountain Juniperus ashei",
    "supplier": "Keebler-Hilpert",
    "quantity": 292,
    "unit_cost": "$8.74"
  }, {
    "_id": {
      "$oid": "5968dd23fc13ae04d9000003"
    },
    "product_name": "Dextromathorphan HBr",
    "supplier": "Schmitt-Weissnat",
    "quantity": 211,
    "unit_cost": "$20.53"
  }]


*/


let obj = new Array()
obj[0] = {

    "_id": { "$oid": "5968dd23fc13ae04d9000001" },
    "product_name": "sildenafil citrate",
    "supplier": "Wisozk Inc",
    "quantity": 261,
    "unit_cost": "$10.47"

}

obj[1] = {

    "_id": {
        "$oid": "5968dd23fc13ae04d9000002"
    },
    "product_name": "Mountain Juniperus ashei",
    "supplier": "Keebler-Hilpert",
    "quantity": 292,
    "unit_cost": "$8.74"

}

obj[2] = {
    "_id": {
        "$oid": "5968dd23fc13ae04d9000003"
    },
    "product_name": "Dextromathorphan HBr",
    "supplier": "Schmitt-Weissnat",
    "quantity": 211,
    "unit_cost": "$20.53"

}





//imprimimos el objeto
console.log(obj)
//verificamos el tipo de dato
console.log(typeof (obj))

//imprimimos el primer indice del JSON con el objeto
console.log(obj[0]["_id"])
console.log(obj[0]["product_name"])
console.log(obj[0].supplier)
console.log(obj[0]["quantity"])
console.log(obj[0].unit_cost)

//objet to json
console.log(JSON.stringify(obj))