window.onload = function () {
  document.getElementById("addTableBtn").addEventListener("click", addTable);
};

function createTRNode(colNodes) {
  let trNode = document.createElement("tr");
  colNodes.forEach(function (colNode) {
    trNode.appendChild(colNode);
  });
  return trNode;
}

function createTDNode(childNode, index) {
  let tdNode = document.createElement("td");
  tdNode.id = index;
  tdNode.classList.add("tdNode");
  tdNode.appendChild(childNode);
  return tdNode;
}

function createTxtNode(txt) {
  let txtNode = document.createTextNode(txt);
  return txtNode;
}

function createBtnNode(txt, e, l) {
  let btnNode = document.createElement("button");
  let btnNodeText = createTxtNode(txt);
  btnNode.appendChild(btnNodeText);
  btnNode.addEventListener(e, l);
  return btnNode;
}

function editTextNode(node) {
  let newNode = document.createElement("input");
  newNode.type = "text";
  newNode.placeholder = "Edit Cell";
  node.replaceChild(newNode, node.childNodes[0]);
}

function addTable() {
  const tableNode = document.createElement("table");
  for (let i = 0; i < 3; i++) {
    let col1 = createTDNode(createTxtNode("Cell (" + i + ", 0)", `col - ${i}`));
    let col2 = createTDNode(
      createBtnNode("Edit Text", "click", function () {
        editTextNode(col1);
      })
    );
    tableNode.appendChild(createTRNode([col1, col2]));
  }
  document.getElementById("root").appendChild(tableNode);
}
